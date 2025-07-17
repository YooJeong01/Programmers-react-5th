import supabase from "@/supabase/supabase";
import React, { createContext, useContext, useEffect, useState } from "react"


interface User {
  id:string;
  email:string;
}

interface AuthContextType {
  user: User | null;
  isAuth: boolean;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | null>(null)


export function AuthProvider({children}:{children:React.ReactNode}) {
  // 스토리지에 있는 유저 정보를 담아서
  // 어느 화면에서도 유저 정보를 얻을 수 있게 전해줄 hook 만들기
  const [user, setUser] = useState<User | null>(null);

  // 슈파베이스가 서버에 요청을 보내 auth의 정보를 가져옴
  // 구조 분해할당한 data 안에 user를 구조분해할당 받아서 쓰겠다
  // 공식문서에 어떤식으로 값이 떨어지는지 나와있다
  useEffect(()=>{
    supabase.auth.getUser().then(({data:{user}})=>{
      if(user){
        setUser({id:user.id, email:user.email!})
      }
    })

    // 슈파베이스에는 상태를 구독하고있는 함수가 있음
    // 얘로 실시간으로 로그인 정보 바뀌는걸 관리한다
    const {data:listener} = supabase.auth.onAuthStateChange((event, session)=>{
      if(event ==='SIGNED_IN' && session?.user){
        setUser({id:session.user.id, email:session.user.email!})
      } else if(event === 'SIGNED_OUT'){
        setUser(null);
      }
    })

    // cleanup이 됐을때 이 구독을 취소할 수 있도록
    return () => listener.subscription.unsubscribe();


  },[])

  const logout = async() => {
    await supabase.auth.signOut();
    setUser(null);
  }

  return (
    <AuthContext value={{user, isAuth:!!user, logout}}>
      {children}
    </AuthContext>
  )
}

export function useAuth(){
  const ctx = useContext(AuthContext);
  if(!ctx) throw new Error('<AuthProvider> 안에서만 사용할 수 있습니다.');
  return ctx;
}
import useAuth from "@/hook/useAuth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function RequireAuth({children}:{children:React.ReactNode}) {
  const {isAuth} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isAuth){
      // state : 로그인 성공 후에 location.state.from을 입력하면 있던 자리로 돌아간다
      // replace : 뒤로가기 방지
      // preventScrollReset : 스크롤 위치 초기화 방지
      navigate('/auth/login', {state:{from:location}, replace:true, preventScrollReset:true})
    }
  })

  if(!isAuth) return null;
  
  return (
    <>{children}</>
  )
}
export default RequireAuth
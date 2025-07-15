import { useEffect, useState } from "react";

export function useUsers(){

  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error|null>(null);
  // 타입을 제네릭이 아니라 명시형으로도 할 수 있나?
  
  useEffect(()=>{
    // then으로 받으면 await, async 안 써도 된다
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then( data => {
      // [5]
      setUsers(data);
      setLoading(false);
    })
    .catch( err => {
      console.log('데이터 가져오기 실패!', err)
      setLoading(false);
      setError(err)
    })
  },[]) // 종속성 배열을 설정하지 않으면 무한 반복시킬 수 있다


  // 유틸함수처럼 갖다 써야하니 값을 리턴해줘야겠죠?
  return {users, loading, error}
}
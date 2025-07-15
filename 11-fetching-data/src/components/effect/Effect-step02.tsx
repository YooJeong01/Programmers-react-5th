import { useEffect, useState } from "react"



function Effect() {
  // 실행순서

  // [1] [6]
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  

  // 비동기
  // [4] return 문 렌더링까지 다 된 후에 실행된다
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
    })

    // // async await으로 fetch 해보기
    // const fetchData = async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //   const data = await response.json();
    //   if(response.ok){
    //     setUsers(data);
    //     setLoading(false)
    //   } else {
    //     console.error('error')
    //     setLoading(false);
    //   }
    // }
    // fetchData();


  },[])


  // [2]
  if(loading) return <p>Loading...</p>

  
  // [3] [7]
  return (
    <ul>
      {
        users && users.map(user=> (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))
      }
    </ul>
    
  )
}
export default Effect
import { useUsers } from "@/hook/useUsers"



function Effect() {
  
  // Custom Hook (= 재사용을 위해 만든 유틸함수)
  const {users, loading, error} = useUsers();
  console.log(useUsers())


  if(loading) return <p>Loading...</p>
  if(error) return <p>error 발생!!</p>


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
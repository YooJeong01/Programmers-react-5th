import { createContext, useState } from "react"
import Parent from "./Parent"



interface UserContextType {
  username : string;
}

export const UserContext = createContext<UserContextType | null>(null);


function App() {
  const [username, setUsername] = useState('심선범');

  console.log(UserContext)



  return (
    <UserContext value={{username}}>
      <div style={{
        border:'1px solid gray',
        padding:'10px'
      }}>
        <h1>버튼을 클릭하면 사용자가 변경됩니다!</h1>
        <Parent/>
        <button type="button">사용자 변경</button>

      </div>
    </UserContext>
  )
}
export default App
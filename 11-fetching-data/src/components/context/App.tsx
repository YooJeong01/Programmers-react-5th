import { useState } from "react"
import Parent from "./Parent"
import { UserContext } from "./UserContext";



function App() {
  const [username, setUsername] = useState('심선범');


  return (
    <UserContext value={{username, setUsername}}>
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
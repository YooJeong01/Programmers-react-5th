import { useContext } from "react";
import { UserContext } from "./App";

function GrandChild() {

  const {username} = useContext(UserContext);

  return (
    <div style={{
      border:'1px solid gray',
      padding:'10px'
    }}>
      <h4>바뀐다333333333</h4>
      <p>안녕하세요 {username} 님!</p>
    </div>
  )
}
export default GrandChild
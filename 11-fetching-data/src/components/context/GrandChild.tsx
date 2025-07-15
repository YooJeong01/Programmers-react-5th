import { useUserContext } from "@/hook/useUserContext";

function GrandChild() {

  const {username,setUsername} = useUserContext()

  return (
    <div style={{
      border:'1px solid gray',
      padding:'10px'
    }}>
      <h4>바뀐다333333333</h4>
      <p>안녕하세요 {username} 님!</p> 
      <button 
        type="button" 
        onClick={()=>{
          setUsername('황유정')
        }
      }> 사용자 변경 </button>
    </div>
  )
}
export default GrandChild
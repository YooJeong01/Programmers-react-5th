import GrandChild from "./GrandChild"

function Child() {
  return (
    <div style={{
      border:'1px solid gray',
      padding: '10px'
    }}>
      <h3>바뀐다222222</h3>
      <GrandChild/>
    </div>
  )
}
export default Child
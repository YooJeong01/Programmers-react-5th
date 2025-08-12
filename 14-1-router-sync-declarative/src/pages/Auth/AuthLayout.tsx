import { Outlet } from "react-router"

function AuthLayout() {

  const S = {
    border: '1px solid black',
    padding: '2rem'
  }

  return (
    <div style={S}>
      {/* AuthLayout을 유지한채로 Login과 Register을 렌더링하고싶을때 */}
      <h1>AuthLayout</h1>
      <hr />
      <Outlet></Outlet>
    </div>
  )
}
export default AuthLayout
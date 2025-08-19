import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
import GlobalNav from "./components/GlobalNav"

function Root() {
  return (
    <div className="h-screen bg-indigo-50/30 flex flex-col">
      <Header />
      <GlobalNav />
      <main className="flex-1 m-4">
        {/* Outlet을 넣어줘야 navigation으로 연결한 컴포넌트가 자식으로 들어간다 */}
        <Outlet></Outlet>
      </main>

      <Footer />
    </div>
  )
}
export default Root
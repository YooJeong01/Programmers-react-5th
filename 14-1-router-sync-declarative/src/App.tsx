import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import NotFound from "./pages/NotFound"
import ConcertsHome from "./pages/Concerts/ConcertsHome"
import Trending from "./pages/Concerts/Trending"
import AuthLayout from "./pages/Auth/AuthLayout"
import Root from "./pages"
import City from "./pages/Concerts/City"

function App() {
  return (
    <div style={{display:'flex'}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root/>}>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            
            {/* auth route */}
            <Route path="auth" element={<AuthLayout/>}>
              <Route path="login" element={<Login/>} />
              <Route path="register" element={<Register/>} />
            </Route>
            

            {/* concerts route */}
            <Route path="concerts">
              <Route index element={<ConcertsHome/>} />
              <Route path=":city" element={<City/>}/>
              <Route path="trending" element={<Trending/>} />
            </Route>      

          </Route>

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
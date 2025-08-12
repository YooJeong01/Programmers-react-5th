import { NavLink } from "react-router"


const navList = [
  {to:'/', label:'Home'},
  {to:'about', label:'About'},
  {to:'auth/login', label:'Login'},
  {to:'auth/register', label:'Register'},
  {to:'concerts', label:'Concerts'},
  {to:'concerts/trending', label:'Trending'},
]



function GlobalNav() {

  const S = {
    display:'flex',
    gap:'1rem',
    listStyle:'none'
  }

  return (
    <nav>
      <ul style={S}>
        {
          navList.map(({to, label})=>(
            <li key={label}>
              <NavLink 
                style={({ isActive }) => ({ color: isActive ? "red" : "black"})} 
                to={to}>{label}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
export default GlobalNav
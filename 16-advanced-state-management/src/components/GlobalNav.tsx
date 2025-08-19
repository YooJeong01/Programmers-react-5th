import { navigationItems } from "@/router/router"
import tw from "@/utils/tw"
import { useState } from "react"
import { NavLink } from "react-router"

function GlobalNav() {
  const [items] = useState(navigationItems)

  const baseNavClasses =
    'text-sm py-2 px-4 text-indigo-800/70 rounded-full hover:text-indigo-800'

  return (
    <nav className="bg-white">
      {/* tailwind에서도 hidden 속성 제공함 => className="sr-only" */}
      <h2 className="a11y">페이지 탐색</h2>
      {
        items.length > 0 && (
          <ul className="py-4 w-4/5 max-w-6xl flex justify-center gap-4 mx-auto">
            {
              items.map(({ path, text }, index) => (
                <li key={path ?? index}>
                  {/* end : 자식까지 네비링크가 활성화되는걸 방지할지 여부 (리액트라우터 제공) */}
                  <NavLink
                    to={path}
                    end={path?.endsWith('/') ?? false}
                    className={({ isActive }) => {
                      return isActive ? tw(
                        baseNavClasses,
                        'text-indigo-900 bg-indigo-100/40 border border-indigo-100/70 font-semibold'
                      ) : baseNavClasses
                    }}
                  >{text}</NavLink>
                </li>
              ))
            }
          </ul>
        )
      }
    </nav>
  )
}
export default GlobalNav
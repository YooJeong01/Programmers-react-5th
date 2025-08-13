

/**

index : 해당 페이지에서 사용될 메인 페이지를 지정
route : 이동할 경로 / 렌더링 될 컴포넌트 경로
layout : 하위 컴포넌트에서 동일하게 사용될 레이아웃 지정
prefix : 경로 앞에 공통적으로 사용될 루트 ex. auth/login auth/register


*/

import { route, index, layout, prefix, type RouteConfig } from '@react-router/dev/routes'


export default [
  // 완전 메인페이지로 주고싶은 경우
  index("./pages/Home/index.tsx"),
  // path, component
  route("about","./pages/About/index.tsx"),
  // 종속되는 페이지 라우팅을 하려는 경우
  // children 처럼 하위에 넣어주면 된다
  layout("./pages/Auth/AuthLayout.tsx",[
    // auth/login 이렇게 라우팅 하고싶을때 prefix 붙이는 방법
    ...prefix('auth',[
      route('login', './pages/auth/Login.tsx'),
      route('register', './pages/auth/Register.tsx')
    ]),
  ]),

  route('concerts','./pages/Concerts/ConcertsLayout.tsx',[
    index('./pages/Concerts/ConcertsHome.tsx'),
    route(':city', './pages/Concerts/City.tsx'),
    route('trending', './pages/Concerts/Trending.tsx'),
  ]),

  ...prefix('users',[
    route(':userId', './pages/User/UserDetail.tsx'),
    route('new','./pages/User/NewUser.tsx'),
  ])
] satisfies RouteConfig

/**
satisfies RouteConfig :
기본 내보내기 값이 RouteConfig 타입(규격)을 충족하는지 컴파일 타입에서 체크
*/
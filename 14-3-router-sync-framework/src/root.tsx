import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import GlobalNav from "./components/GlobalNav";

// 하이드레이트 폴 백은 여기서만 쓸 수 있다 
// 이 파일을 한 번 불러오는것이기 때문에
// 그래서 다른 페이지에서는 Suspense로 처리해야한다
export function HydrateFallback(){
  return <div style={{padding:16}}>앱 로딩 중...</div>
}


// 이름 꼭 Layout으로 해야함
export function Layout({children}:{children:React.ReactNode}){
  return(
    <html lang="ko-KR">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Dark.svg" type="image/x-icon" />
        <title>Router-framework</title>
        <Meta/>
        <Links/>
      </head>
      <body>
        {children}
        {/* 스크롤 복원(뒤로가기시) */}
        <ScrollRestoration/>
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return(
    <>
      <h1>Single Page Application</h1>
      <GlobalNav></GlobalNav>
      <main>
        <Outlet/>
      </main>
    </>
  )
}
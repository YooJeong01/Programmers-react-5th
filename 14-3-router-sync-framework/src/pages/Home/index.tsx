
// @ts-ignore
import type { Route } from './+types/Home'
import cssURL from '@/styles/main.css?url'


/* 페이지에 필요한 meta 태그 설정 */
// 페이지 title이 바뀌지 않아서 SEO와 접근성에 안좋기때문에
// meta 태그를 만들고 export해서 root에서 사용해주기
export const meta: Route.MetaFunction = () => ([
  {title:'Main | CRA'},
  {name: 'description', content: 'CRA를 다루는 메인 페이지입니다'},
  {property: 'og:type', content: 'website'},
  {property: 'og:title', content: 'Framework'},
])


/* 페이지별 필요한 link 태그 설정 */
export const links = () => ([
  { rel : 'stylesheet', href: cssURL},
  // 사이트가 로드되기 전에 로드가 벌써 돼야하는 이미지인 경우 preload 사용가능
  { rel : 'preload', as: 'image', href: '/vite.svg'},
  // 지금 안쓰고 다음 화면에서 쓸 확률이 있는경우
  // { rel : 'prefetch', as: 'image', href: '/vite.svg'},

])


// 이름이 상관없어짐
function Component() {
// function Home() {
  return (
    <>
      <h1>Main Page</h1>   
      <div>
        <img src="/vite.svg" alt="" />
      </div>
    </>
  )
}
// export default Home
export default Component
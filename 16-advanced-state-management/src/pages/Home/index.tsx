import AppLink from "@/components/AppLink"
import Divider from "@/components/Divider"
import Counter from "@/miniApp/Counter"
import Counter_ from "@/miniApp/Counter/index_"
import { Helmet } from "@dr.pogodin/react-helmet"

const htmlTag = (
  <>
    {/* 리액트19 버전에서는 아래 태그를 쓰면 head로 호이스팅 된다 */}
    <title> 앱 글로벌 상태 관리 with Zustand</title>
    <meta name="description" content="Zustand를 사용하면 Context, useReducer, useState 없이 보다 효과적으로, 더 빠르고 가볍게 상태를 관리할 수 있습니다" />
    <meta property="og:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="twitter:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="og:type" content="site" />
    <meta property="og:url" content="https://github.com/YooJeong01" />
    <meta property="og:description" content="혈당 스파이크 올 시간" />

    <meta property="og:image" content="https://avatars.githubusercontent.com/u/91684442?v=4" />
  </>
)

const helmetTag = (
  <Helmet>
    <title> 앱 글로벌 상태 관리 with Zustand</title>
    <meta name="description" content="Zustand를 사용하면 Context, useReducer, useState 없이 보다 효과적으로, 더 빠르고 가볍게 상태를 관리할 수 있습니다" />
    <meta property="og:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="twitter:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="og:type" content="site" />
    <meta property="og:url" content="https://github.com/YooJeong01" />
    <meta property="og:description" content="혈당 스파이크 올 시간" />

    <meta property="og:image" content="https://avatars.githubusercontent.com/u/91684442?v=4" />
  </Helmet>
)



function Home() {
  return (
    <>
      {helmetTag}
      {/* {htmlTag} */}
      <section id="page">
        <div className="learn">
          <h1>앱 글로벌 상태 관리 with Zustand</h1>
          <p>
            <AppLink
              href="https://zustand.docs.pmnd.rs/getting-started/introduction"
              isExternal
              className='text-red-500'
            >Zustand</AppLink>{' '}
            라이브러리를 사용해 앱 또는 컴포넌트의 상태를 효과적으로 관리하는 방법을 학습합니다.
          </p>
          <Divider />

          <h2 lang="en" className="uppercase">Counter</h2>
          <p>간단한 카운터 앱의 상태를 CustomHook을 사용해 관리합니다.</p>
          <Counter_ />
          <Divider />

          <h2 lang="en" className="uppercase">Counter</h2>
          <p>간단한 카운터 앱의 상태를 Zustand를 사용해 관리합니다.</p>
          <Counter />


        </div>
      </section>
    </>
  )
}
export default Home
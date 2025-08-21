import AppLink from "@/components/AppLink"
import CounterReducer from "@/components/CounterReducer"
import Divider from "@/components/Divider"
import Counter from "@/miniApp/Counter"
import { useCountStore } from "@/miniApp/Counter/@store"
import Counter_ from "@/miniApp/Counter/index_"
import Switch from "@/miniApp/Switcher/Switch"
import TaskManager_ from "@/miniApp/TaskManager/TaskManager_"
import { Helmet } from "@dr.pogodin/react-helmet"
import { useState } from "react"
import { useShallow } from "zustand/shallow"

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
  const [reset, setStep] = useCountStore(
    useShallow((s) => [s.reset, s.setStep])
  );

  const [dark, setDark] = useState(false);

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
          <p>간단한 카운터 앱의 상태를 <b>CustomHook</b>을 사용해 관리합니다.</p>
          <Counter_ />
          <Divider />




          <h2 lang="en" className="uppercase">Counter</h2>
          <p>간단한 카운터 앱의 상태를 <b>Zustand</b>를 사용해 관리합니다.</p>
          <Counter className="mb-3" />
          <button onClick={reset} type='button' className="mb-3 px-3 py-1 border border-accent rounded">reset</button>
          {/* setStep이 파라미터를 받기 때문에 실행시켜서 넘겨주기 */}
          <input onChange={(e) => setStep(+e.target.value)} type="number" className="border border-accent px-2 py-1" placeholder="step값을 입력해주세요" />
          <Divider />



          <h2 lang="en" className="uppercase">Counter</h2>
          <p>간단한 카운터 앱의 상태를 <b>Reducer</b>를 사용해 관리합니다.</p>
          <CounterReducer />
          <Divider />



          <h2 lang="en" className="uppercase">Switcher</h2>
          <p>Switch의 상태를 <b>CustomHook</b> or <b>Reducer</b>를 사용해 관리합니다.</p>

          <Switch size='lg' disabled />
          <p className="uppercase">disabled</p>

          <Switch size='md' defaultChecked />
          <p className="uppercase">uncontrolled component</p>

          <Switch size='sm' checked={dark} onChange={setDark} />
          <p className="uppercase">Debugging :  {dark ? 'dark' : 'light'}</p>
          <Divider />




          <h2 lang="en" className="uppercase">Task Manager</h2>
          <p>테스크 매니저 앱의 상태를 컨텍스트 + 리듀서를 사용해 관리합니다.</p>

          <TaskManager_ className="" />

          <Divider />





        </div>
      </section>
    </>
  )
}
export default Home
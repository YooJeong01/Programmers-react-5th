/* 

<Root/>

element : JSX 엘리먼트를 직접 전달하는 방식 v6+
이미 렌더링된 React Element를 라우터에게 전달하는 방식
매 렌더링 시 JSX가 즉시 생성되므로, 코드 스플리팅 (lazy 로딩) 매우 불편함
const a = Root()


Component: 컴포넌트 함수 본문 자체를 전달하는 방식 v7+
라우터가 내부적으로 React.createElement를 호출해서 인스턴스를 생성함
라우터가 필요할 때만 컴포넌트를 생성하므로, lazy 로딩과 Suspense 처리를 더 자연스럽게 할 수 있음
const b = Root

*/

import { loader as trendingLoader } from "@/pages/Concerts/Trending";
import { Component, lazy } from "react";
import { createBrowserRouter, Outlet, redirect } from "react-router";


const Root = lazy(()=>import('@/pages'));
const Home = lazy(()=>import('@/pages/Home'));
const About = lazy(()=>import('@/pages/About'));


const AuthLayout = lazy(()=>import('@/pages/Auth/AuthLayout'))
const Login = lazy(()=>import('@/pages/Auth/Login'))
const Register = lazy(()=>import('@/pages/Auth/Register'))
const RequireAuth = lazy(()=>import('@/pages/Auth/RequireAuth'))


const ConcertsHome = lazy(()=>import('@/pages/Concerts/ConcertsHome'))
const Trending = lazy(()=>import('@/pages/Concerts/Trending'))
const City = lazy(()=>import('@/pages/Concerts/City'))

const NotFound = lazy(()=>import('@/pages/NotFound'))

const UserDetail = lazy(()=>import('@/pages/User/UserDetail'))
const NewUser = lazy(()=>import('@/pages/User/NewUser'))


export const routes = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      { index: true, Component: Home, handle:{label : 'Home', showInNav:true}},
      { path:'about', Component: About, handle:{label : 'About', showInNav:true} },

      {
        path:'auth',
        Component:AuthLayout,
        children: [
          {path:'login', Component: Login, handle:{label : 'Login', showInNav:true}},
          {path:'register', Component: Register, handle:{label : 'Register', showInNav:true}},
        ]
      },
      
      {
        path:'concerts',
        Component:()=>(
          <RequireAuth>
            <Outlet></Outlet>
          </RequireAuth>
        ),
        children:[
          {index:true, Component:ConcertsHome, handle:{label : 'Concerts', showInNav:true}},
          {path:':city', Component:City},
          {
            path:'trending', 
            Component:Trending, 
            // loader가 데이터를 전달하지 못했을때 실행될 거
            HydrateFallback: () => <div>데이터 로딩 중...</div>,
            handle:{label : 'Trending', showInNav:true},
            // trending 컴포넌트가 렌더링 되기 전에 데이터를 싣어서 Trending으로 보내준다
            loader: trendingLoader,
            // 아래처럼 lazy 묶어서 한 번에 다 전달할 수도 있다
            // lazy: async() => {
            //   const mod = await import('@/pages/Concerts/Trending');
            //   return {
            //     Component: mod.default,
            //     loader:mod.loader
            //   }
            // }
          },
        ]
      },
      {
        path:'users/:userId',
        Component:UserDetail,
        handle:{label : 'users', showInNav:false},
        // HydrateFallback: () => <div>데이터 로딩 중...</div>,
        // loader: 
        //   // 리액트 라우터가 알아서 실행. 해당 컴포넌트 페이지에 들어가기 전
        //   // 파라미터 콘솔 찍어보면 params를 객체로 제공함  
        //   async({params}) => {
        //     // url을 입력하는 순간 params 객체가 떨어지니까 아래 fetch 할 유저 데이터를 맞게 가져올수있고
        //     // 이걸 UserDetail에서 useLoaderData가 받는다 -> 이걸 리스트 렌더링!
        //     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
        //     return res.json();
        //   }
        loader: 
        // 데이터 패치됐던 말던 일단 UI를 먼저 렌더링시키고싶다? 아래 방법
        async({params}) => {
          return{
            user:fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            .then((res)=>{
              if(!res.ok) throw new Error('유저 어딨습니까?')
                return res.json();
            })
          }
        }
      },
      {
        path:'users/new',
        Component:NewUser,
        // lazy 처리도 가능하다
        // lazy: async()=>{
        //     return{
        //       Component:'',
        //       loader:,
        //       action
        //     }
        // },
        action: async({request}) => {
          const formData = await request.formData();
          // console.log(data)
          // console.log(request)
          // console.log(request.formData())
          const name = formData.get('name') as string;
          const email = formData.get('email') as string;

          console.log(name, email);
          // const {data. error} = await supabase.from('users').insert({name,email})
          return redirect('/users');
        }
      }    

    ]
  },
  { path:'*', Component: NotFound }
])
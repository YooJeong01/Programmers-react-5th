import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useFetcher, useLoaderData } from "react-router"



// loader() :  SSR 전용

// clientLoader() : SPA(CSR) 전용
export async function clientLoader() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if(!res.ok) throw new Response('유저 데이터 로딩 실패', {status : 500})
    return res.json();
}


function Component({loaderData}:{loaderData:User[]}) {
  // console.log(data)
  // const users = useLoaderData() as User[];
  const users = loaderData;
  const fetcher = useFetcher();

  // loader 재사용
  const handleClick = (userId:number) => {
    fetcher.load(`/users/${userId}`)
    // console.log(fetcher.data)
  }

  return (
    <div>
      <h1>트렌드 콘서트 유저 리스트</h1>
      {
        users.map((user)=>(
          <li key={user.id}>
            <button type='button'
            onClick={()=>handleClick(user.id)}
            >{user.name}</button>
          </li>
        ))
      }
      <hr />
      {
        fetcher.data?.user && (
          <Suspense fallback={<p>로딩 중...</p>}>
            <Await resolve={fetcher.data.user}>
              {
                (user:User) => (
                  <ul>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                  </ul>
                )
              }
            </Await>
          </Suspense>
        )
      }

      {/* <ul>
        <li>{users.name}</li>
        <li>{users.email}</li>
        <li>{users.phone}</li>
      </ul> */}

    </div>
  )
}
export default Component

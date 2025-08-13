import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useFetcher, useLoaderData, type LoaderFunctionArgs } from "react-router"

function Trending() {
  const users = useLoaderData() as User[];

  const fetcher = useFetcher();

  const handleClick = (userId:number) => {
    fetcher.load(`/users/${userId}`)
    console.log(fetcher.data)
  }

  return (
    <div>
      <h1>Trending</h1>
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
export default Trending

// 아래처럼 쓰는곳에서 함수를 분리해서 작성하고 내보내줘도 됨
export async function loader(args:LoaderFunctionArgs){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}
import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router"

function UserDetail() {
  const {user} = useLoaderData<{user:Promise<User>}>();

  return (
    <div>
      <h2>유저 프로필</h2>
      {/* 리액트에서 기본으로 제공하는 Suspense 태그 */}
      {/* 데이터가 로딩되지 않았을때 Suspense 보여주고 완료되면 childern 렌더링 */}
      <Suspense fallback={<p>유저 정보 가져오는중...</p>}>
      {/* 리액트 라우터에서 제공하는 promise 데이터를 resolve 해주는 태그 */}
        <Await resolve={user} errorElement={<div>Ooops!</div>}>
          {
            (user:User) => (
              <ul>
                <li>이름 : {user.name}</li>
                <li>이메일 : {user.email}</li>
                <li>전화번호 : {user.phone}</li>
              </ul>
            )
          }
        </Await>
      </Suspense>
    </div>
  )
}
export default UserDetail
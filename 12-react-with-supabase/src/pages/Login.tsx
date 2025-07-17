import React, { useContext, useId, useState } from 'react'
import S from './Login.module.css'
import supabase from '@/supabase/supabase';
import Swal from 'sweetalert2';
import { RouterContext } from '@/router/RouterProvider';

function Login() {

  const userId = useId();
  const pwId = useId();


/*
  1. email 상태 만들기
  2. pw 상태 만들기
  3. change 이벤트 바인딩
  4. submit handler 사용하기
  5. supabase 통신하기
  6. console.log(로그인 성공) 출력하기
  7. 로컬 스토리지 확인하기(토큰 정보가 떨어졌는지)
  8. 로그인 페이지로 리다이렉트
*/


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string|null>(null);
  const {setHistoryRoute} = useContext(RouterContext)!;

  // const handleLogin2 = (e:React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   supabase.auth.signInWithPassword({
  //       email:email,
  //       password:password,
  //     }).then(data => console.log(data, '로그인 성공'))
  
  // }


  const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if(error) {
      console.log(error.message);
      setError(error.message)
    } else {
      console.log('로그인 성공!');
      Swal.fire({
        title:'로그인에 성공했습니다!',
        text : '메인 페이지로 이동합니다.',
        icon:'success'
      }).then(()=>{
        history.pushState(null,'','/')
        setHistoryRoute('/');
      })
    }
  }


  return (
    <div className={S.container}>
      <div>
        <form  onSubmit={handleLogin}>
          <h2>로그인</h2>
          <hr />
          <div>
            <label htmlFor={userId}>이메일:</label>
            <input 
              type="text" 
              name="email"
              required
              aria-required
              id={userId}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor={pwId}>비밀번호:</label>
            <input 
              type="password" 
              name="password"
              required
              aria-required
              id={pwId}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button type="submit">로그인</button>
          {
            error && <p style={{paddingTop:'1rem', color:'red'}} >{error}</p>
          }
          <hr />
          <a 
            href=""
            onClick={(e)=>{
              e.preventDefault();
              // 이걸 해줘야 url이 바뀐다
              history.pushState(null, '', '/Register')
              // 라우트 상태 업데이트
              setHistoryRoute('/Register');
            }}
          >아직 2.9cm 회원이 아니신가요?</a>
        </form>
      </div>
    </div>
  )
}
export default Login
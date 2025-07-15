import { useEffect, useState } from "react"

function Effect() {
  
  const [count, setCount] = useState(0);
  
  console.log('렌더링 됨!');

  /*
  useEffect()는 사이드 이펙트를 발생시키는 함수다
  [] : 최초로 한 번만 실행하겠다 -> 이거 안해주면 무한루프된다
  [target] : target이 변경되는 경우만 useEffect가 실행된다

  React Life Cycle
  (1) : 렌더링 시작
  (2) : DOM 생성 및 그리기 (commit 단계)
  (3) : useEffect 실행
  (4) : 사용자 인터렉션 발생 -> 상태, 돔 등 변경 -> 다시 렌더링
  (5) : 기존 useEffect의 cleanup 실행 -> 새로운 useEffect 실행
  */
  useEffect(()=>{
    console.log('useEffect 실행!')



    const id = setInterval(()=>{
      console.log('hello');
    },1000);

    return () => {// 여기에 클린업 할 걸 넣어준다
      console.log('useEffect clean up!')  
      // 기존 타이머를 지우고 타이머가 새로 등록되기 때문에
      // 카운트를 눌렀을때 중복으로 생성되지 않는다
      clearInterval(id);
    }
  },[count])

  return (
    <div>
      <p>카운트 : {count}</p>
      <button type="button" onClick={()=>setCount(count + 1)}> + 1 </button>
    </div>
    
  )
}
export default Effect
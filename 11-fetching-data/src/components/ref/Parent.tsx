

/*

1. 전역 탐색은 React의 구조(체계)를 무시하는 방식이다
querySelector는 브라우저 전체의 DOM 트리를 탐색한다
Ract의 가상 DOM 흐름을 무시한다. 외부에서 DOM을 추적하는 방식이라서 안정성, 성능이 저하 될 수 있다

2. useRef는 컴포넌트랑 직접 연결된다 (안전)
정확한 DOM 선택이 가능하다
컴포넌트가 unmount되면 자동으로 null 처리가 된다 => React의 생명주기 안에서 돌아간다

3. 동일한 render tree 안에서만 접근한다는 보장이 생긴다 (안전)
querySelector는 예상하지 못한 외부 요소까지 다 탐색 => 예측하지 못한 결과 나올 수 있음
useRef는 해당 요소 1:1 mapping => 예측 가능한 결과

4. 성능상 이점
querySelector는 문서 전체를 탐색한다 
ref는 이미 컴포넌트 안에서 '직접적인 참조'가 돼 있다 => 탐색X


*/








import { useRef } from "react";
import Child from "./Child"

function Parent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    
    // 명령형 프로그래밍
    // const input = document.querySelector('input') as HTMLInputElement;
    // console.log('focus');
    // input.focus();
    
    // 선언형 프로그래밍에서 DOM에서 찾아서 수행해야하는 경우
    if(inputRef.current){
      inputRef.current.focus();
    }
    console.log(inputRef)

  }


  return (
    <>
      {/* 대상 타겟 연결해주기 */}
      <Child ref={inputRef} placeholder={'아이디를 입력하세요'}/>
      <button onClick={handleFocus} type="button">인풋에 포커싱</button>
    </>
  )
}
export default Parent
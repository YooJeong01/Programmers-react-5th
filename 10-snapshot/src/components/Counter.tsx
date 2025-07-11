import { useCallback, useState } from "react";


function slow(){
  console.log('작업 중...')
  let sum = 0;
  for (let i=0; i<1000000; i++){
    sum += i;
  }
  return sum;
}


function Counter() {

  // 오래걸리는 작업인 경우 콜백 or 실행 안하고 전달해서 딱 한 번만 수행하기
  // const [number, setNumber] = useState(() => slow());
  const [number, setNumber] = useState(slow);

  
  // 함수를 딱 한 번만 동작하고싶을때 useCallback() 사용
  // useCallback을 사용하면 함수를 딱 한번만 만들고
  // jsx에 이벤트 바인딩해놓고 재 렌더링하더라도
  // 다시 함수를 만드는게 아니기 때문에
  // 함수가 더 실행이 안된다
  //
  // * 종속성 배열 *
  // 근데 두번째 인자에 [item] 을 넣고
  // item이 변경됐다면 함수를 실행해준다
  // item이 바뀌지 않는다면 함수는 재실행 되지 않는다
  const handleClick = useCallback(()=>{
    setNumber(number+1)
  }, [number])



  return (
    <>
      <div> { number } </div>
      <button type="button" onClick={handleClick}> + </button>
    </>
  )
}

export default Counter


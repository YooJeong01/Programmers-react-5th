import { useState } from "react";


function Counter() {

  const [number, setNumber] = useState(0)

  const handleClick = () => {
    // 콜백으로 쓰면 3씩 증가한다
    // n+1로 n을 갱신시키고 
    // 그 다음 set함수가 갱신값을 받아서 다시 +1 하는 흐름이다

    // 그럼 이건 렌더링이 몇번 되는건가? -> 1번
    // 그럼 콜백을 넣어줬을때 코드는 순차적으로 실행되고 맨 마지막에 렌더링이 딱 한번만 되는건가요? - yes

    setNumber( n => n+1 )
    setNumber( n => n+1 )
    setNumber( n => n+1 )
    setNumber(40);
  }
  return (
    <>
      <div> { number } </div>
      <button type="button" onClick={handleClick}> + </button>
    </>
  )
}

export default Counter


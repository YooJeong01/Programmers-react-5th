import { useState } from "react";


function Counter() {

  const [number, setNumber] = useState(0)

  const handleClick = () => {
    // 증감 해주려면 식으로 넣기!
    // ++number 이런거 안 된다
    setNumber(number+1);

    // 렌더링이 될 때 비교를 하는데 아래도 동시에 실행되니까
    // 모두 0 -> @ 로 바꾸려는 움직임이기 때문에
    // 제일 마지막 렌더링이 수행된다 
    setNumber(number+2);
    setNumber(number+3);

    alert(number); // 얘는 렌더링이 되기전에 실행되기 때문에 처음값을 alert창에 보여준 후 렌더링 되고나서 숫자가 바뀐다
  }

  return (
    <>
      <div> { number } </div>
      <button type="button" onClick={handleClick}> + </button>
    </>
  )
}

export default Counter


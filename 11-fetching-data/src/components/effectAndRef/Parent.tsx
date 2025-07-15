import { useEffect, useLayoutEffect } from "react"

/*
실행순서
[1] 렌더링 시작
[2] DOM 업데이트
[3] useLayoutEffect 실행 (동기)
[4] 화면 그림 (commit)
[5] useEffect 실행 (비동기)


useLayoutEffect는 동기적으로 실행되기 때문에
** 렌더링이 끝나기 전까지 브라우저를 일시 정지함

그래서 복잡한 로직, API 요청을 넣으면 렌더링 지연이 발생한다

레이아웃을 측정, 수정등 레이아웃 관련 작업을 할 때 용도로 사용한다
ex. 스크롤

대부분은 useEffect를 쓴다 그런데?
의도치않게 UI가 버벅거리나 끊길때 useLayoutEffect를 사용한다

*/ 


function Parent() {

  // [2]
  useLayoutEffect(()=>{
    console.log('useLayoutEffect')
    // 얘도 클린업이 존재한다
    return () => console.log('layout cleanup');
  })

  // [3]
  useEffect(()=>{
    console.log('useEffect')

  })

  // [1]
  console.log('render')

  return (
    <div>
      
    </div>
  )
}
export default Parent
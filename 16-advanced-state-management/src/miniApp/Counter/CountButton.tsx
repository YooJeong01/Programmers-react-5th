import { memo } from 'react';
import S from './style.module.css';
import { useCountStore } from './@store';


function CountButton({ children, type = '+', ...restProps }: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: '+' | '-'
}) {

  // store의 전체 값을 구독하게 됨
  // => 필요없는 항목이 업데이트가 되면 리-렌더링을 유발한다
  // const { increment, decrement } = useCountStore();
  // // 함수를 실행하는 순간 컴포넌트가 다시 렌더링 된다

  // let handler = increment;
  // if (type === '-') handler = decrement;



  // store의 필요한 값만 구독하기때문에 불필요한 리-렌더링이 일어나지 않음
  const handler = useCountStore((s) =>
    type === '+' ? s.increment : s.decrement
  )



  return (
    <button
      type="button"
      className={S.button}
      {...restProps}
      onClick={handler}
    >
      {children}
    </button>
  )
}
export default memo(CountButton)
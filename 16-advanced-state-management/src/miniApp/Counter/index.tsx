import tw from '@/utils/tw'
import S from './style.module.css'
import { memo, useMemo } from 'react'
import { GrFormDown, GrFormUp } from 'react-icons/gr'
import CountDisplay from './CountDisplay'
import CountButton from './CountButton'
import { useCountStore } from './@store'
import { useShallow } from 'zustand/shallow'



function Counter({ className }: { className?: string }) {

  // Zustand가 권장하지 않는 방식
  // const { step } = useCountStore();
  // console.log(store.step);

  // Zustand에서는 필요한 것만 뽑아서 구독하는 방식을 권장함
  // 셀렉터를 사용해서 원하는 대상의 변수'값'(객체x)만 뽑아서 쓰겠다 
  // const step = useCountStore((selector) => selector.step);

  // v4+ 까지는 이렇게 썼다
  // v5+ 에서 이렇게 쓰면 무한루프에 빠진다
  // const step = useCountStore((s)=>[s.count, s.step]);
  // console.log(step)

  // v5+ 반응성을 잃지 않기 위한 방법
  // 객체로 꺼내서 리턴해도 된다 (s) => {count: s.count, step: s.step ,,,}
  const [count, step, min, max] = useCountStore(
    useShallow((s) => [s.count, s.step, s.min, s.max])
  );

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;


  return (
    <div className={tw(S.component, className)}>
      <CountDisplay />
      <div role='group' className={S.group}>
        <CountButton
          type="+"
          title={incrementLabel}
          aria-label={incrementLabel}
          disabled={isMaxDisabled}
        >
          {useMemo(() => <GrFormUp />, [])}
        </CountButton>

        <CountButton
          type="-"
          title={decrementLabel}
          aria-label={decrementLabel}
          disabled={isMinDisabled}
        >
          {useMemo(() => <GrFormDown />, [])}
        </CountButton>
      </div>
    </div>
  )
}
export default memo(Counter)
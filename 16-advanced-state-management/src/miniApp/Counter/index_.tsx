import tw from '@/utils/tw'
import S from './style.module.css'
import { memo, useMemo } from 'react'
import { GrFormDown, GrFormUp } from 'react-icons/gr'
import CountDisplay_ from './CountDisplay_'
import CountButton_ from './CountButton_'
import useCounter from '@/hook/useCounter'



function Counter_({ className }: { className?: string }) {

  const C = useCounter();

  const { count, step, isMaxDisabled, isMinDisabled, increment, decrement, reset } = C;

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  return (
    <div className={tw(S.component, className)}>
      <CountDisplay_ count={count} />
      <div role='group' className={S.group}>
        <CountButton_
          title={incrementLabel}
          aria-label={incrementLabel}
          disabled={isMaxDisabled}
          onUpdate={increment}
        >
          {
            useMemo(() => <GrFormUp />, [])
          }

        </CountButton_>

        <CountButton_
          title={decrementLabel}
          aria-label={decrementLabel}
          disabled={isMinDisabled}
          onUpdate={decrement}
        >
          {
            useMemo(() => <GrFormDown />, [])
          }

        </CountButton_>
      </div>
    </div>
  )
}
export default memo(Counter_)
import { useCallback, useState } from "react";



function useCounter({
  count: initialCount = 0,
  step = 1,
  min = 0,
  max = 10,
} = {}) {
  const [count, setCount] = useState(initialCount); // 상태
  const isMinDisabled = count <= min; // count 파생상태
  const isMaxDisabled = count >= max; // count 파생상태

  // 함수가 계속 생성될 필요없고 초기값이 바뀔때만 함수가 생성되도록
  // useCallback : 함수를 기억하는 용도로 사용
  const reset = useCallback(() => setCount(initialCount), [initialCount]);

  const increment = useCallback(
    () =>
      setCount((c) => {
        let nextCount = c + step;
        if (nextCount >= max) nextCount = max;
        return nextCount
      }),
    [max, step]
  );

  const decrement = useCallback(
    () =>
      setCount((c) => {
        let nextCount = c - step;
        if (nextCount <= min) nextCount = min;
        return nextCount
      }),
    [min, step]
  );

  return {
    count,
    step,
    isMinDisabled,
    isMaxDisabled,
    increment,
    decrement,
    reset
  }


}

export default useCounter;
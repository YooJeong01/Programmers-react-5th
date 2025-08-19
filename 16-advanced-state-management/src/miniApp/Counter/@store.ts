import { create } from 'zustand';


/*

store : 내가 가진 전부를 열거할 수 있는 기능 
set : setter
get : getter

*/


type Store = {
  count: number,
  step: number,
  max: number,
  min: number,
  increment: () => void,
  decrement: () => void,
  reset: () => void,
  setStep: (newStep: number) => void, // step값 갱신 함수
}


/*

 바로 객체를 리턴하는 형태 => ({})
 타입을 제네릭으로 지정해주면 됨
 제네릭 뒤에서 한 번 () 실행 해줘야함
 create()() :: currying function
 실행을 안해주면 미들웨어 끼어넣을때 타입 추론을 제대로 못해줌
 한 번 실행함으로써 Zustand에게 타입을 추론하도록 맡긴다고 보면 됨

*/

// export const useCountStore = create<Store>()((set) => ({
//   count: 1,
//   step: 1,
//   increment:   // set 함수도 객체를 리턴함, state를 조회해보면 count, step이 나옴
//     () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));


export const useCountStore = create<Store>()((set, _get, store) => {
  const increment = () => {
    set(({ count, step, max }) => {
      let nextCount = count + step;
      if (nextCount >= max) nextCount = max;
      return { count: nextCount } // 객체 리턴
    })
  }

  const decrement = () => {
    set(({ count, step, min }) => {
      let nextCount = count - step;
      if (nextCount <= min) nextCount = min;
      return { count: nextCount } // 객체 리턴
    })
  }

  const setStep = (newStep: number) => {
    set({ step: newStep })
  }

  // 리셋할게 많은 경우 store에서 전체를 뽑아서 한 번에 초기화 할 수 있음
  const reset = () => set(store.getInitialState())

  // 객체를 리턴하지 않는다면 강제로 객체를 리턴하게끔 만들어야함
  return {
    count: 0,
    step: 1,
    min: 0,
    max: 10,
    increment,
    decrement,
    setStep,
    reset
  }
})
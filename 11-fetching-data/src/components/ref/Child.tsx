import { forwardRef, type RefObject } from "react";

interface Props {
  placeholder:string;
  // ref: RefObject<HTMLInputElement | null>
}

// forwardRef 방식 사용
const Child = forwardRef<HTMLInputElement,Props>(({placeholder},ref) => {

  console.log(ref)

  return (
    <input ref={ref} type="text" placeholder={placeholder} />
  )
})

export default Child



// React 19 버전부터 forwardRef 없이 prop으로 전달 가능
// const Child = ({placeholder, ref}:Props) => {

//   console.log(ref)

//   return (
//     <input ref={ref} type="text" placeholder={placeholder} />
//   )
// }
// export default Child





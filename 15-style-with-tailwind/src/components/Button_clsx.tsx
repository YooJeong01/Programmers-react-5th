import clsx from "clsx";

interface Props {
  size?:'sm'|'md'|'lg';
  className?: string;
  children: React.ReactNode;

}
// clsx는 병합은 안해준다
// clsx는 조건 처리, twMerge는 병합 처리
function Button_clsx({size, className, children}:Props) {
  return (
    <button 
      type='button'
      className={

        clsx(
          "bg-sky-500 px-4 py-2 rounded-xl",
          size === 'sm' && 'px-2 py-1 text-sm',
          size === 'md' && 'px-4 py-2 text-base',
          size === 'lg' && 'px-6 py-3 text-lg',
          className
        )
        
      }  
    >
      {children}
    </button>
  )
}
export default Button_clsx
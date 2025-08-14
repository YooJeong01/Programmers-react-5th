import tw from "@/utils/tw";
import { cva, type VariantProps } from "class-variance-authority";

// interface Props {
//   children : React.ReactNode;
//   disabled ?: boolean;
//   className ?: string;
// }



const buttonVariants = cva(
  'inline-flex items-center rounded-md px-3 py-2',
  {
    variants:{
      intent: {
        primary: 'bg-sky-600 text-white hover:bg-sky-800',
        secondary: 'bg-orange-600 text-white hover:bg-orange-800',
        ghost: 'bg-gray-400 text-white hover:bg-slate-100',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 ',
        lg: 'px-6 py-3 text-lg',
      },
      block: {
        true: 'w-full justify-center',
        false: ''
      },
    },
    // props로 아무것도 전달해주지 않았을때 기본값이 됨
    // ex. <Button_cva></Button_cva>
    defaultVariants:{
      intent: 'primary',
      size: 'md',
      block: false
    },
    compoundVariants:[
      // 특정 조건에만 '추가'되는 클래스
      // secondary, lg일 때 클래스 내용 추가
      { intent: 'secondary', size:'lg', class:'border border-slate-300' },
      // secondary or ghost이면서 lg일 때 해당 클래스 추가
      { intent: ['secondary', 'ghost'], size:'lg', class:'border border-slate-300' },
    ]
  }
);


// ButtonHTMLAttributes : 버튼이 가지는 속성에 대한 타입을 다 가지고있음
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?:boolean;
  }



function Button_cva({children, intent, size, className, loading, block, ...rest}:ButtonProps) {
  // console.log(buttonVariants) 함수 
  // console.log(buttonVariants()) 기본 속성

  return (
    <button
      type='button'
      disabled={loading || rest.disabled}
      className={
        tw( 
          // merge, 조건처리는 안해주기때문에 유틸함수로 처리
          // 함수에서 뽑아낼 값 넣어주기
          buttonVariants({intent, size, block}),
          className,
          loading ? 'bg-amber-500' : 'bg-pink-500'
        )
      }
      {...rest}
    >
      {children}
    </button>
  )
}
export default Button_cva
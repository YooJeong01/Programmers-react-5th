import tw from "@/utils/tw"
import { cva, type VariantProps } from "class-variance-authority"
import Button from "./Button";


type CardProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardHero> & {
  title: string;
  rate: string;
  company: string;
  logoSrc: string;
  logoAlt?: string;
}

const cardHero = cva(
  'relative min-h-[180px] rounded-xl p-6 flex flex-col justify-between',
  {
    variants: {
      type: {
        primary: 'bg-[#FDF4E5]',
        secondary: 'bg-[#F9F7FE]',
        tertiary: 'bg-[#F8FCEE]',
      }
    },
    defaultVariants: { type: 'primary' }
  }
)

// ...rest : 이벤트 같은게 들어올 수 도 있으니까
function Card({
  type,
  title,
  company,
  logoSrc,
  logoAlt = company,
  rate,
  className,
  ...rest
}: CardProps) {

  // logoSrc === 'Facebook' ? logoSrc = '/Facebook.svg' :
  //   logoSrc === 'Google' ? logoSrc = '/Google.svg' : logoSrc = '/Airbnb.svg'

  let iconSrc = ''
  switch (logoSrc) {
    case 'Facebook': iconSrc = '/Facebook.svg'; break;
    case 'Google': iconSrc = '/Google.svg'; break;
    case 'Airbnb': iconSrc = '/Airbnb.svg'; break;
    default: iconSrc = '/vite.svg'
  }

  return (
    <div className={tw('rounded-2xl border border-slate-200 bg-white shadow-sm p-4 m-4', className)} {...rest}>
      <div className={cardHero({ type })}>
        {/* header */}
        <div className="flex justify-between">
          <span>$120/hr</span>

          {/* 포커스가 될 수 있게 버튼으로 감싸기 */}
          <button type="button">
            <img src="/Bookmark.svg" className="size-6" alt="북마크" />
          </button>
        </div>

        {/* title */}
        <h3 className="mt-6 text-3xl font-semibold leading-tight text-slate-900">{title}</h3>

        {/* dot */}
        <div className="mt-6 flex items-center gap-1 self-center">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
        </div>

        <button type="button" className="absolute right-4 top-2/4">
          <img src="/Arrow.svg" className="size-6" alt="" />
        </button>
      </div>

      <footer className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="size-10 rounded-full" src={iconSrc} alt={logoAlt} />
          <p className="text-lg font-semibold text-slate-900">{company}</p>
        </div>

        <Button className='bg-neutral-800'>View</Button>
      </footer>

    </div>
  )
}
export default Card











// const cardVariants = cva(
//   'flex flex-col p-3 gap-6 items-center rounded-2xl',
//   {
//     variants:{
//       type:{
//         primary : 'bg-[#FDF4E5]',
//         secondary : 'bg-[#F9F7FE]',
//         tertiary : 'bg-[#F8FCEE]'
//       }
//     }
//   }
// )

// type CardProps = React.HTMLAttributes<HTMLDivElement> &
//   VariantProps<typeof cardVariants> & {
//     logoSrc ?: string,
//     rate ?: string,
//     title ?: string,
//   }

// function Card({type, logoSrc, rate, title}:CardProps) {
//   return (
//     <div className="flex flex-col w-72 p-3 bg-white gap-2 rounded-2xl mb-1">
//       <div
//       className={
//         tw(
//           cardVariants({type})
//         )
//       }
//       >
//         <div className="flex flex-row justify-between gap-43">
//           <p className="text-[12px] font-semibold">{rate}</p>
//           <img src="/Bookmark.svg" alt="스크랩" />
//         </div>

//         <div className="flex flex-row justify-between gap-25">
//           <p className="text-2xl font-medium">{title}</p>
//           <img src="/Arrow.svg" alt="arrow" />
//         </div>
//         <div className="flex flex-row gap-1 m-3">
//           <div className="w-1.5 h-1.5 bg-gray-950 rounded-full"></div>
//           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
//           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
//         </div>
//       </div>

//       <div className="flex flex-row justify-between">
//         <div className="flex flex-row justify-between gap-4">
//           <img src={logoSrc} alt="로고" />
//           <p className="font-bold">{title}</p>
//         </div>
//         <button className="bg-gray-950 text-white w-16 text-[20px] px-2 py-0.5 rounded-3xl items-center">View</button>
//       </div>

//     </div>
//   )
// }
// export default Card
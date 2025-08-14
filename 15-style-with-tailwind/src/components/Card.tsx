import tw from "@/utils/tw"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva(
  'flex flex-col p-3 gap-6 items-center rounded-2xl',
  {
    variants:{
      type:{
        primary : 'bg-[#FDF4E5]',
        secondary : 'bg-[#F9F7FE]',
        tertiary : 'bg-[#F8FCEE]'
      }
    }
  }
)

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    logoSrc ?: string,
    rate ?: string,
    title ?: string,
  }

function Card({type, logoSrc, rate, title}:CardProps) {
  return (
    <div className="flex flex-col w-72 p-3 bg-white gap-2 rounded-2xl mb-1">
      <div 
      className={
        tw(
          cardVariants({type})
        )
      }
      >
        <div className="flex flex-row justify-between gap-43">
          <p className="text-[12px] font-semibold">{rate}</p>
          <img src="/Bookmark.svg" alt="스크랩" />
        </div>

        <div className="flex flex-row justify-between gap-25">
          <p className="text-2xl font-medium">{title}</p>
          <img src="/Arrow.svg" alt="arrow" />
        </div>
        <div className="flex flex-row gap-1 m-3">
          <div className="w-1.5 h-1.5 bg-gray-950 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-between gap-4">
          <img src={logoSrc} alt="로고" />
          <p className="font-bold">{title}</p>
        </div>
        <button className="bg-gray-950 text-white w-16 text-[20px] px-2 py-0.5 rounded-3xl items-center">View</button>
      </div>

    </div>
  )
}
export default Card
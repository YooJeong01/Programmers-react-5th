import tw from "@/utils/tw";


interface Props {
  children: React.ReactNode;
  className?: string;
}

function Button({ children, className }: Props) {


  return (
    <button type="button" className={tw('cursor-pointer rounded-full bg-slate-900 text-white px-4 py-2', className)}>
      {children}
    </button>
  )
}
export default Button
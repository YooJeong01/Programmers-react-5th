
interface Props{
    onClick : (e:React.MouseEvent<HTMLDivElement>) => void;
    // style의 기본적인 타입이 있기때문에 같이 적어준다
    // style : React.CSSProperties & {'--color'?:string}
    style : React.CSSProperties & {[key:string]:string|number}
    children ?: React.ReactNode;
    title ?: string;
}

function LayoutBox({onClick, children, ...restProps}:Props) {
  return (
    // 이런식으로 rest parameter처럼 전개해서 쓰게해도 다 알잘딱으로 들어가짐
    <div className="box" onClick={onClick} {...restProps}>
        {children}
    </div>
  )
}

export default LayoutBox
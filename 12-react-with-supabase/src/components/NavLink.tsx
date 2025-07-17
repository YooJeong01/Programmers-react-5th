import { RouterContext } from "@/router/RouterProvider";
import React, { useContext } from "react";
import S from './layout/Header.module.css';


interface Props {
  to : string;
  children : React.ReactNode;
  className?: string;
  activeClassName?: string;
}



function NavLink({to, children, className='', activeClassName = S.active}:Props) {

  const {currentPath, setHistoryRoute} = useContext(RouterContext)!;
  
  const handleLink = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // to로 받아온 지점으로 라우트 갱신시키기 -> 해당 페이지로 렌더링 된다
    setHistoryRoute(to);

    // preventDefault 걸어놔서 안 바뀌니까 강제로 pushState해서 링크 바꾸기
    history.pushState(null,'',to);
  }

  
  // 현재 보고있는 url(currentPath)와 전달받은 to(path)가 일치한다면 활성화
  const isActive = currentPath === to;
  // const isActive = location.pathname === to;
  const classNames = `${isActive ? activeClassName : ''} ${className}`.trim();


  return (
    <a className={classNames} href={to} onClick={handleLink} >{children}</a>
  )
}
export default NavLink
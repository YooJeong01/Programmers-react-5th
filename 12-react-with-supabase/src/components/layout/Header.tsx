import { routes } from '@/router/router';
import S from './Header.module.css';
import NavLink from '../NavLink';
import { useAuth } from '@/auth/AuthProvider';
import Swal from 'sweetalert2';
import { getAvatarUrl } from '@/api/getAvatarUrl';
import { useEffect, useState } from 'react';


function Header() {

  // contextProvider가 내보내주는 Auth 정보 받아옴
  const {user, isAuth, logout} = useAuth();
  const [profileImg, setProfileImg] = useState<string|null>(null);
  // 네비 전환시마다 기본이미지 -> 설정이미지로 꿈뻑 거리는 버그 해결
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);

  // 회원가입은 로그인 창에서 보여주려고 빼는거임
  const visibleRoutes = routes.filter(({title})=>{
    if(isAuth) return title !== '로그인' && title !== '회원가입' && title !== '상품상세' ;
    else return title !== '회원가입'
  })

    /* 
  
    getAvatarUrl(user.id)을 사용해서 화면에 이미지를 렌더링
    
    1. useEffect를 사용해주세요.
    2. getAvatarUrl 실행 (비동기 함수 ? )
    3. getAvatarUrl -> return 값 확인
    4. 값 상태 관리 (useState)
    5. 상태 조건에 따라 렌더링 
    

    [추가]
    -> 사용자가 프로필 이미지를 올리지 않았을 때 보이는 기본 이미지 

  */


  // 이미지 렌더링은 사이드 이펙트니까 useEffect 사용
  useEffect(()=>{
    // user null인 경우 처리
    if(user){
      // useEffect에는 async 못붙이니까 함수 표현식에 붙여주기
      // (async()=>{})() 클로저로 만들어서 함수 표현식 안쓰고 바로 선언 및 실행해도 됨
      const fetchProfileImg = async() => {
        // url을 return하니 받아서 setter에 넣어주기
        // 근데 promise 반환이니까 await으로 데이터 받기
        const publicUrl = await getAvatarUrl(user.id)
        setProfileImg(publicUrl);
        setIsAvatarLoaded(true);
      }
      // 함수 실행해야 작동하겠죠?
      fetchProfileImg();
    }
    // 리로드 될 때마다 프로필 보이려면 종속성 배열에 user 넣어주기
  },[user])
  

  return (
    <header className={S.header}>
      <h1>2.9cm</h1>
      <nav>
        <h2 className='a11y-hidden' >메인 메뉴</h2>
        <ul>
          {
            visibleRoutes.map(({title, path})=>
              <li key={path}>
                <NavLink to={path}>{title}</NavLink>
              </li>
            )
          }
          { // isAuth가 있다면 (=로그인 됐다면) 로그아웃 헤더 보여주기
            isAuth && (
              <li>
                <a onClick={(e)=>{
                  e.preventDefault();
                  Swal.fire({
                      title: "정말 로그아웃 하시겠습니까?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#d33",
                      cancelButtonColor: "#3085d6",
                      confirmButtonText: "로그아웃",
                      cancelButtonText:'돌아가기'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire({
                          title: "Logout",
                          text: "logout is success",
                          icon: "success"
                        });
                        logout();
                      }
                    });
                }} href="">로그아웃</a>
              </li>
            )
          }
          {
            isAvatarLoaded && 
              <li>
                <img style={{width:'20px'}} src={profileImg ?? '/vite.svg'} alt="프로필" />
              </li>
          }
        </ul>
      </nav>
    </header>
  )
}
export default Header
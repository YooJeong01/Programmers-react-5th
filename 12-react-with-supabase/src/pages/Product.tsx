import { useAuth } from '@/auth/AuthProvider';
import S from './Product.module.css'
import useProducts from '@/hook/useProducts';
import type React from 'react';
import { useRouter } from '@/router/RouterProvider';

function Product() {

  const { isAuth } = useAuth();
  const { products, loading } = useProducts()
  const {setHistoryRoute} = useRouter();


  if(!isAuth){
    return (
      <div className={S.invalid}>
        <span style={{fontSize:'10rem', marginBottom:'3rem'}}>😲</span>
        <h3>상품 목록은 로그인 후 이용 가능합니다.</h3>
        <a href="#">설마, 아직도 2.9cm 회원이 아니세요?</a>
      </div>
    )
  }

  const handleRouter = (e:React.MouseEvent<HTMLAnchorElement>,id:string) => {
    e.preventDefault();
    history.pushState(null, '', `/Product/${id}`);
    setHistoryRoute(`/Product/${id}`)
  }





  if(loading) return <p>로딩 중 .... </p>

  return (
    <div className={S.container}>
      <ul>
        {
          products && 
          products.map(({id,image_url, name, description, price, sale})=>
            <li key={id}>
              <a href="#" onClick={(e)=>handleRouter(e,id)}>
                <figure>
                  <img src={image_url} alt="" />
                </figure>
                <span className={S.brand}>{name}</span>
                <span className={S.description}>{description}</span>
                <span className={S.price}>{price.toLocaleString()}</span>
                <div>
                  <span className={S.discount}>{sale}%</span>
                  <span className={S.realPrice}>{(price- (sale*0.01*price)).toLocaleString()}원</span>
                </div>
              </a>
            </li>
          )
        }
      </ul>
    </div>
  )
}
export default Product
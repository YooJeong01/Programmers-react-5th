import { useParams, useRouter } from '@/router/RouterProvider'
import S from './ProductDetail.module.css'
import { useEffect, useState } from 'react';
import supabase from '@/supabase/supabase';
import type { Tables } from '@/supabase/database.types';

type Product = Tables<'products'>

function ProductDetail() {

  const {id} = useParams()
  const [product, setProduct] = useState<Product|null>(null);
  const [error, setError] = useState<string|null>(null);
  const {setHistoryRoute} = useRouter();

  console.log(id);
  
  useEffect(()=>{
    const fetchProduct = async() => {
      const {data, error} = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

      if(error){
        console.log(error);
        setError('해당 상품 데이터가 존재하지 않습니다.')
      } else {
        setProduct(data)
      }
    }

    fetchProduct();
  },[id])

  console.log(product)

  if(!product) return <p>{error ?? '해당 상품이 없습니다.'}</p>

  const realPrice = product.price - product.price * (product.sale * 0.01);
  return (
    <div className={S.container}>
      <img className={S.image} src={product.image_url} alt={product.name} />
      <h2 className={S.name}>{product.name}</h2>
      {/* 글 수정하고싶다면? 아래 코드 사용 */}
      {/* <h2 contentEditable suppressContentEditableWarning className={S.name}>{product.name}</h2> */}
      <p className={S.description}>{product.description}</p>
      <div>
        <span className={S.price}>{product.price.toLocaleString()}원</span>
        <span className={S.sale}>할인율 : {product.sale}%</span>
        <span className={S.finalPrice}>{realPrice.toLocaleString()}원</span>
      </div>

      <div className="buttonGroup">
        <button type="button">수정</button>
        <button type="button" onClick={()=>{
          history.pushState(null,'',`/Product`);
          setHistoryRoute(`/Product`)
        }}>뒤로가기</button>
      </div>
    </div>
  )
}
export default ProductDetail
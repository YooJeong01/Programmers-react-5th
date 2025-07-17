import type { Database, Tables } from "@/supabase/database.types";
import supabase from "@/supabase/supabase";
import { useEffect, useState } from "react";

// created_at 속성을 Insert 객체에서 가져오기 위해
// Database 타입에 public -> Tables -> products -> Insert 객체 가져오기
// type Product = Database['public']['Tables']['products']['Insert']
type Product = Omit<Tables<'products'>,'created_at'>

function useProducts(){

  const [products, setProducts] = useState<Product[]|null>(null)
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchProducts = async() => {
      // prodcuts 테이블의 해당 컬럼 데이터들 가져오기
      const {data, error} = await supabase
      .from('products')
      .select('id, name, price, image_url, description, sale');

      if(data) {
        setProducts(data);
        setLoading(false);
      }

      if(error){
        console.error('상품 가져오기 실패');
        return null;
      }
    }
    fetchProducts();
      

  },[])


  return {products, loading};
}

export default useProducts;
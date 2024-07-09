
import Card from './Card'
import Nav from './Nav'
import {ProductContext, ProductType} from '../Utils/Context'
import { useContext, useEffect, useState } from 'react'
import Loading from './Loading';
import { useLocation} from 'react-router-dom';
import axios from 'axios';

function Home() {

  const {products} = useContext(ProductContext)!;

  const [filteredProducts, setfilteredProducts] = useState<ProductType[] | null>(null);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split('=')[1]);
  console.log(category);

  const getProductCategory = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    
    setfilteredProducts(data); 
     
  };

  useEffect(() => {
    if(!filteredProducts || category=="undefined") setfilteredProducts(products);
    if (category != "undefined") {
      
      getProductCategory(); 
    }
  }, [category, products]);
  

  
 

  return products? (
    <>
      <Nav />
      <div className='h-screen overflow-y-auto hide-scrollbar w-[85%] p-5 pt-[4%] pb-9'>
        <div className='flex flex-wrap items-center  '>
          {filteredProducts && Array.isArray(filteredProducts) && filteredProducts.map((p: ProductType, i) => (
            <Card key={i} product={p} />
          ))};
        </div>
      </div>
    </>
  ) : (
    <Loading/>
  );
}

export default Home

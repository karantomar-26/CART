import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';

function Details() {

  const[product, setProduct]=useState({
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  });

  const {id} = useParams();

  const getSingleProduct= async()=>{
    try {
      const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
    
  };

  useEffect(()=>{
    getSingleProduct();
  },[]);

  return product? (
    <div className='h-full w-[80%]  flex  m-auto justify-center items-center p-[10%]'>
        <div className='w-[50%]'>
            <img 
            className='object-contain'   
            src={`${product.image}`}
            alt="" 
            />
        </div>
        

        <div className='ml-[15%] pt-5'>
            <h1 className=' text-3xl font-semibold'>{product.title}</h1>
            <h2 className='text-sky-300 mt-2'>{product.category}</h2>
            <h2 className='text-pink-300 mt-2'>${product.price}</h2>
            <p className='mt-6'>{product.description}</p>
            <button className='mt-6 border rounded-md px-4 py-2 text-blue-300 border-blue-200'>Add to Cart</button>
            <button className='mt-6 ml-5 border rounded-md px-4 py-2 text-red-300 border-red-200'>Delete</button>

        </div>
    </div>
  ):(
    <Loading/>
  )
}

export default Details

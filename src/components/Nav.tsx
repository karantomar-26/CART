import React, { useContext } from 'react'
import { ProductContext } from '../Utils/Context'
import { Link } from 'react-router-dom';

function Nav() {
  const {products}= useContext(ProductContext);

  const distinct_category =[...new Set(products && products.map(cv => cv.category))];

  const color =()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`;
  };
  
  

  return (
    <nav className='bg-slate-300 w-[15%] h-full flex flex-col items-center '>
        <a className='hover:scale- p-3 mt-2 border rounded-full border-slate-900 ' href="/create">Add New Product</a>
        <hr className='my-3 w-[80%] '/>
        <h1 className='font-bold w-[70%] text-2xl'>Category</h1>
        <div className='w-[70%] mt-2'>
          {distinct_category.map((category, index) => (
            <Link key={index} to={`/?category=${category}`} className='flex items-center '><span style={{backgroundColor: color()}}  className='rounded-full mr-1 w-3 h-3 bg-blue-400'></span>{category}</Link>
          ))}
        </div>

      </nav> 
  )
}

export default Nav
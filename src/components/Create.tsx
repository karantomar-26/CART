import React, { useContext, useState } from "react";
import {ProductContext, Product} from "../Utils/Context";
import { nanoid } from "nanoid";
import { toast } from 'react-toastify';

function Create() {

    const {products, setProducts} = useContext(ProductContext);

    const [title, settitle] = useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");

    const AddProductHandler = async (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        
        if(
            title.trim().length< 5 ||
            image.trim().length< 5 ||
            category.trim().length< 5 ||
            price.trim().length< 1 ||
            description.trim().length< 5 
        ){
            toast.error("Please fill in all fields correctly!")
            return;
        }
        const product =
        {id:nanoid(),title, image, category, price, description};
        console.log(product);

        await setProducts([...products, products]);
        toast.success("Product Added!");
    }

    return (
        <form onSubmit={AddProductHandler} className="h-screen items-center w-screen p-[5%] mt-[5%] flex flex-col" action="">
            <h1 className="w-1/2 text-3xl mb-3 font-bold ">Add a Product</h1>
            <input 
            type="url"
            placeholder="Item Link"
            className="bg-zinc-100 rounded p-3 mb-2 w-1/2"
            value={image}
            onChange={(e)=> setimage(e.target.value)} 
            />
            <input 
            type="text"
            placeholder="Title"
            className="bg-zinc-100  rounded p-3 mb-2 w-1/2"
            value={title}
            onChange={(e)=> settitle(e.target.value)} 
            />
            <div className="flex w-1/2 justify-between ">
                <input 
                type="text"
                placeholder="Category"
                className="bg-zinc-100  rounded p-3 mb-2 w-[49%]"
                value={category}
                onChange={(e)=> setcategory(e.target.value)} 
                />
                <input 
                type="number"
                placeholder="Price"
                className="bg-zinc-100  rounded p-3 mb-2 w-[49%]"
                value={price}
                onChange={(e)=> setprice(e.target.value)} 
                />
            </div>
            <textarea 
                placeholder="Description"
                className="bg-zinc-100  rounded p-3 h-[9%] w-1/2"
                value={description}
                onChange={(e)=> setdescription(e.target.value)} >
            </textarea> 
            <button className='mt-3 border rounded-md px-12 py-2 text-blue-300 border-blue-200'>Add to Cart</button>
        
        </form>
    )
}

export default Create
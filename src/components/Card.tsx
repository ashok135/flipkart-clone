import React from "react";
import type { Product , Products } from "../types";

interface CardProps {
  products: Products
}
 

function Card({ products }: CardProps) {

    if(products.loading){
        return <h1 className="text-center">loading...</h1>
    }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto ">
      {products.products.map((product) => {
        return (
          <div key={product.id} className="text-center border border-gray-200  rounded flex flex-col justify-center items-center shadow-[0_1px_3px_rgba(0,0,0,0.1)] 
         hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]
         transition-shadow duration-300 p-2 md:p-4 relative ">
             <h3 className="absolute top-2 right-2 bg-blue-50 text-blue-600 px-2 rounded-md">{product.category}</h3>
            <img src={product.thumbnail} alt={product.title} className="w-1/2" />
         
              <h1 className="text-[px]  line-clamp-2 ">{product.title}</h1>
              <h2 className="font-bold">₹{product.price}</h2>
         
          </div>
        );
      })}
    </div>
  );
}

export default Card;

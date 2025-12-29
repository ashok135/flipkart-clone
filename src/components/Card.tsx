import React, { useState } from "react";
import type {} from "../types";

import { Heart } from "lucide-react";
import type { Product } from "../types";
import { Link, useNavigate, } from "react-router-dom";
import { Star } from "lucide-react";

interface CardProps {
  products: Product[];
  loading: boolean;
  category: string[];
  error: string | null | undefined;
}

function Card({ products, loading, error, category }: CardProps) {
  const [like, setLike] = useState(false);
  const [isId, setIsId] = useState<number[]>([]);
  const navigate=useNavigate()

  if (loading) {
    return <h1 className="text-center">loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  function handleLike(id: number) {
    if (id === undefined) {
      return;
    }
    setIsId((prev) =>
      prev.includes(id) ? isId.filter((isId) => isId !== id) : [...prev, id]
    );
    console.log(id);
    setLike(!like);
  }
  

  if (!products) {
    return <h1>no product found</h1>;
  }

  return (
    <>
      {products.map((product) => {
        return (
          <Link to={`/search/${product?.id}`}>
            {" "}
            <div
              key={product?.id}
              className="  border border-gray-200  rounded flex flex-col   items-left shadow-[0_1px_3px_rgba(0,0,0,0.1)] 
         hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]
         transition-shadow duration-300 p-2 md:p-4 relative  "
            >
              <button
                onClick={(e) => {
                         e.preventDefault()
                  e.stopPropagation()
           
                  if (product?.id !== undefined) handleLike(product.id);
                }}
                className="absolute top-2 right-2 bg-blue-50 text-blue-600 px-2 rounded-md cursor-pointer"
              >
                <Heart
                  className={
                    isId?.find((id) => id === product.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-500"
                  }
                />
              </button>
              <div className="flex justify-center items-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-3/4"
                />
              </div>

              <h3 className="text-gray-500 font-bold">
                {product.brand ? product.brand : product.category}
              </h3>
              <h1 className="text-[px]  line-clamp-2 ">{product.title}</h1>
              <button className="bg-green-700 text-white text-left  pl-1 rounded font-semibold max-w-[50px]  flex gap-0  ">
                {product.rating}
                <Star fill="currentColor"/>
              </button>
              <h2 className="font-bold">
                ₹
                {Number(
                  (
                    product.price -
                    (product.price * product.discountPercentage) / 100
                  ).toFixed(0)
                )}
                <span className="line-through text-gray-500 font-semibold ml-2">
                  ₹{product.price.toFixed()}
                </span>
                <span className="text-green-600 font-semibold ml-2">
                  {Math.round(product.discountPercentage)}% off
                </span>
              </h2>
              <p className="mt-2 text-red-500">
                {product.stock < 10 ? "few stock left" : ""}{" "}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default Card;

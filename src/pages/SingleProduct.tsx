import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "../store/store";
import Header from "../components/Header";

function SingleProduct() {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.products);
  const SingleProduct = products.find((product) => product.id === Number(id));
  const [current, setCurrent] = useState(0);
  const [isActive, setIsActive] = useState(true);

  if (!SingleProduct) {
    return <h1>No post found</h1>;
  }
  function showCurrntImg(index: number) {
    setCurrent(index);
    setIsActive(!isActive);
  }

  return  (
  <>
  <div className="fixed  w-full top-0 z-2 bg-blue-500 py-1">
        <Header textColor="text-white" iconColor="brightness-0 invert" />
      </div>
    <div className="container max-w-7xl mx-auto flex  ">
      <div className="w-full lg:w-2/5 flex">
        <div className="w-1/5  shadow-md">
          {SingleProduct.images.map((image, index) => {
            return (
              <img
                src={image}
                alt={image}
                key={index}
                className={`cursor-pointer hover:border border-blue-400 active:border-blue-400 ${
                  current ===index ?  "border border-blue-500" :"border border-white "
                }`}
                onClick={() => showCurrntImg(index)}
              />
            );
          })}
        </div>
        <div className="w-4/5">
          <div className="shadow overflow-auto flex">
            {SingleProduct.images.map((images, index) => {
              return (
                <img
                  src={images}
                  alt=""
                  className={`${index === current ? "" : "hidden"}`}
                />
              );
            })}
          </div>
          <div>
            <button>Add to Cart</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/5 ">{SingleProduct.title}</div>
      <div></div>
    </div>
    </>

  );     
}

export default SingleProduct;

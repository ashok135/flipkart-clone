import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "../store/store";
import Header from "../components/Header";
import { ShoppingCart, Bolt, Zap, Star, Tag } from "lucide-react";
import AddToCart from "../components/AddToCart";
import BuyNowButton from "../components/BuyNowButton";

function SingleProduct() {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.products);
  const SingleProduct = products.find((product) => product.id === Number(id));
  const [current, setCurrent] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [open, setOpen] = useState(false);

  const availableOffers = [
    "5% cashback on Axis Bank Flipkart Debit Card up to ₹750",
    "5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter",
    "10% off up to ₹1,250 on BOBCARD Transactions, on orders of ₹5,000 and above",
  ];

  if (!SingleProduct) {
    return <h1>No post found</h1>;
  }
  function showCurrntImg(index: number) {
    setCurrent(index);
    setIsActive(!isActive);
  }

  return (
    <>
      <div className="fixed  w-full top-0 z-2 bg-blue-500 py-1">
        <Header textColor="text-white" iconColor="brightness-0 invert" />
      </div>
      <div className="container max-w-6xl mx-auto md:flex-row flex flex-col justify-center mt-[100px]  pb-[50px] ">
        <div className="w-full lg:w-2/5 flex">
          <div className="md:w-1/5  shadow-md hidden md:block ">
            {SingleProduct.images.map((image, index) => {
              return (
                <img
                  src={image}
                  alt={image}
                  key={index}
                  className={`cursor-pointer hover:border border-blue-400 active:border-blue-400 ${
                    current === index
                      ? "border border-blue-500"
                      : "border border-white "
                  }`}
                  onClick={() => showCurrntImg(index)}
                />
              );
            })}
          </div>
          <div className="w-5/5 md:w-4/5">
            <div className="shadow overflow-auto flex md:p-2 sm:hidden md:block snap-x snap-mandatory">
              {SingleProduct.images.map((images, index) => {
                return (
                  <img
                    src={images}
                    alt=""
                    className={`${
                      index === current ? "" : "md:hidden"
                    } min-w-full snap-center  `}
                  />
                );
              })}
            </div>
            <div className="md:p-4 p-2 flex justify-between lg:gap-2 gap-1 fixed md:relative  bottom-0 w-full">
               <AddToCart product={SingleProduct}/>
               <BuyNowButton/>
            
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 md:px-8 px-4 ">
          <p className=" text-[22px] font-semibold ">
            {SingleProduct.title} <br />
            <span
              style={{ lineHeight: 1 }}
              className={`${
                open ? "" : "line-clamp-3"
              }  font-normal text-[20px] pt-2 `}
            >
              {SingleProduct.description}
            </span>
          </p>
          <button
            onClick={() => setOpen(!open)}
            className="text-blue-600 text-sm font-medium cursor-pointer"
          >
            {open ? "less" : "More"}
          </button>
          <h3 className="text-gray-400 font-semibold pt-3">
            <span className="bg-[#388e3c] px-2 rounded text-white inline-flex items-center ">
              {SingleProduct.rating} <Star size={18} fill="currentColor" />
            </span>{" "}
            Ratings {Math.round(SingleProduct.rating + 78)} &{" "}
            {SingleProduct.reviews.length} Reviews
          </h3>
          <h2 className="text-[25px] font-semibold py-2">
            ₹{Math.round(
                SingleProduct.price -
                  (SingleProduct.price * SingleProduct.discountPercentage) / 100
              )} 
            <span className="text-[20px] font-light line-through">
              ₹{Math.round(SingleProduct.price)} 
              {" "}
            </span>{" "}
            <span className="text-[#388e3c] text-[16px] pl-3 ">
              {Math.round(SingleProduct.discountPercentage)}% off
            </span>
          </h2>
          <h1 className="font-bold pb-3">Available offers</h1>
          <ul>
            {availableOffers.map((text) => (
              <div className="flex gap-1">
                <Tag className="text-white" fill="#388e3c" />
                {text}
                <a className="text-blue-700 font-semibold"> T&C</a>
              </div>
            ))}
          </ul>
          <h1 className="text-[20px] font-semibold py-3">Specifications</h1>
          <h2 className="font-semibold text-20px">
            Dimensions: <span className="font-normal"> height-&nbsp;{SingleProduct.dimensions.height}cm, width:&nbsp;
            {SingleProduct.dimensions.width}cm, depth:&nbsp; 
             {SingleProduct.dimensions.depth}cm</span>
             <h2>WarrantyInformation : <span className="font-normal">{SingleProduct.warrantyInformation}</span></h2>
          </h2>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default SingleProduct;

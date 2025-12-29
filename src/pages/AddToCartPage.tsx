import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Header from "../components/Header";
import { removeFromCart } from "../slice/cartSlice";
import BuyNowButton from "../components/BuyNowButton";

function AddToCartPage() {
  const product = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  console.log(product);

  const totalPrice = product.reduce((sum, item) => {
    return (
      sum +
      Math.round(item.price - (item.price * item.discountPercentage) / 100) *
        item.qty
    );
  }, 0);

  const totalDiscount = product.reduce((sum, item) => {
    return sum + ((item.price * item.discountPercentage) / 100) * item.qty;
  }, 0);
  const totalProducts = product.reduce((sum, item) => {
    return sum + item.qty;
  }, 0);

  return (
    <div>
      <div className="fixed  w-full top-0 z-2 bg-blue-500 py-1">
        <Header textColor="text-white" iconColor="brightness-0 invert" />
      </div>
      <div className="mt-[100px] container mx-auto max-w-6xl flex flex-col lg:flex-row ">
        <div className="w-full lg:w-2/3   ">
          <h1 className="text-center lg:text-left capitalize font-semibold shadow pb-2 p-2">
            {" "}
            product details{" "}
          </h1>
          {product.map((product) => {
            return (
              <div className="flex  shadow gap-1">
                <div key={product.id} className="flex w-2/3 ">
                  <div className="w-2/4 lg:w-1/4 shadow">
                    <img
                      src={product.thumbnail}
                      alt={product.thumbnail}
                      className="h-[150px]"
                    />
                  </div>
                  <div className="w-3/4 p-3">
                    <h2 className="font-semibold">
                      {product.title}({product.qty})
                    </h2>
                    <div
                      className="stars"
                      style={
                        { "--rating": product.rating } as React.CSSProperties
                      }
                      aria-label={`Rating: ${product.rating} out of 5`}
                    />

                    <br></br>
                    <div className="flex gap-2">
                      <h1 className=" font-semibold">₹{Math.round(product.price-(product.price*product.discountPercentage/100))}</h1>
                      <h1 className="line-through">
                        ₹{Math.round(product.price)}
                      </h1>
                    </div>

                    <button
                      className="text-red-500 pt-10 cursor-pointer"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className=" w-1/3">
                  <h1 className="pt-2"> {product.warrantyInformation}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-1/3  ">
          <h1 className="text-center lg:text-left uppercase shadow font-semibold p-2 text-gray-500">
            {" "}
            price details{" "}
          </h1>
          <div className="p-4">
            <>
              {" "}
              <div className="flex justify-between">
                <h1 className="font-bold">Price ( item {totalProducts}) </h1>{" "}
                <h1>₹{totalPrice}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold">Discount </h1>{" "}
                <h1 className="text-green-600">
                  ₹ -{Math.round(totalDiscount)}
                </h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold">Total Price </h1>{" "}
                <h1 className="font-semibold text-[20px]">
                  ₹ {Math.round(totalPrice)}
                </h1>
              </div>
             
            </>
          </div>
          <div className="flex justify-center pb-10"><BuyNowButton/></div>
           
        </div>
      </div>
    </div>
  );
}

export default AddToCartPage;

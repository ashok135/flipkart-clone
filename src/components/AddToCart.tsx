import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from '../store/store';
import { addToCart } from '../slice/cartSlice';

function AddToCart({product}:any) {
     const dispatch = useDispatch();
  const total = useSelector((state:RootState) => state.cart.items);

  function updateAddToCart(){
    dispatch(addToCart(product))
  }
  console.log(total)

  return (
   <>
       <button onClick={ updateAddToCart}
                className="w-1/2 bg-[#FF9F00] hover:bg-[#FB8C00] text-white font-semibold
               px-2 md:py-4 py-2 rounded shadow-md transition uppercase flex justify-center items-center gap-2 "
              >
                {" "}
                <ShoppingCart size={18} fill="currentColor" /> Add to Cart
              </button></>
  )
}

export default AddToCart
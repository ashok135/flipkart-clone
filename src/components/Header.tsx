import React from "react";
import { CircleUser, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
 interface StyleProps {
  textColor:string
  iconColor:string
 }

function Header({textColor,iconColor}:StyleProps) {
  return (
    <div className="">
      <div className="flex container mx-auto py-2 md:px-4  gap-4 items-center justify-between">
        {" "}
        <div className="lg:w-[20%] w-[30%]">
        <Link to={'/'}>  <img src="/Logo.png" alt="Logo" className={`inline ${iconColor} ` } /></Link>
        </div>
        <div className="md:w-[50%] w-0% hidden md:block">
          <SearchBar />
        </div>
        <div className="md:w-[30%] w-[50%] text-right p-2 flex md:justify-around justify-around">
          <button className={`flex gap-2 ${textColor}`}>
            <ShoppingCart size={30} /> Cart
          </button>
          <button className={`flex ${textColor}`}>
            <CircleUser size={30} type="button" className={`text-[30px] ${textColor}` } />
            Login
          </button>
        </div>
      </div>
      <div className="block md:hidden px-4">
         <SearchBar />
      </div>
    </div>
  );
}

export default Header;

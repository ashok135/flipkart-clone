import React from "react";
import { CircleUser, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div>
      <div className="flex container mx-auto py-2 md:px-4  gap-4 items-center justify-between">
        {" "}
        <div className="lg:w-[20%] w-[30%]">
          <img src="/Logo.png" alt="Logo" className="inline  " />
        </div>
        <div className="md:w-[50%] w-0% hidden md:block">
          <SearchBar />
        </div>
        <div className="md:w-[30%] w-[50%] text-right p-2 flex md:justify-around justify-around">
          <button className="flex gap-2">
            <ShoppingCart size={30} /> Cart
          </button>
          <button className="flex">
            <CircleUser size={30} type="button" className=" text-[30px]   " />
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

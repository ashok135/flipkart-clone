import React, { useLayoutEffect } from "react";
import { CircleUser, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
interface StyleProps {
  textColor: string;
  iconColor: string;
}

function Header({ textColor, iconColor }: StyleProps) {
  const cartTotal = useSelector((state: RootState) => state.cart.totalQuantity);
  const userData=useSelector((state:RootState)=>state.auth)

  return (
    <div className="">
      <div className="flex container mx-auto py-2 md:px-4  gap-4 items-center justify-between">
        {" "}
        <div className="lg:w-[20%] w-[30%]">
          <Link to={"/"}>
            {" "}
            <img
              src="/Logo.png"
              alt="Logo"
              className={`inline ${iconColor} `}
            />
          </Link>
        </div>
        <div className="md:w-[50%] w-0% hidden md:block">
          <SearchBar />
        </div>
        <div className="md:w-[30%] w-[50%] text-right p-2 flex md:justify-around justify-around">
          <Link to={"/cart"}>
            <button className={`flex gap-2 ${textColor} relative`}>
              <ShoppingCart size={30} /> Cart{" "}
              <span className=" text-[12px] bg-red-400 inline py-0 px-1 rounded-[50%] absolute left-0 top-0 mt-[-10px]">
                {" "}
                {cartTotal}
              </span>
            </button>
          </Link>
          <Link to={'/login'}>
          <button className={`flex ${textColor}`}>
            { userData.isLoggedIn ?<img className="w-[30px]" src={userData.userData?.image} alt="" />:  <CircleUser
              size={30}
              type="button"
              className={`text-[30px] ${textColor}`}
            />}
           
           {userData.user?userData.user:'login'}
          </button>
          </Link>
        </div>
      </div>
      <div className="block md:hidden px-4">
        <SearchBar />
      </div>
      
    </div>
  );
}

export default Header;

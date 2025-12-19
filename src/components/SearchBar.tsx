import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    <div className="flex jsutify-center items-center border border-gray-300 px-2 py-0 rounded
             outline-none
             focus:outline-none focus:ring-0
             hover:border-gray-300">
                 <Search/>
      <input
        type="text"
        className="  w-full rounded p-2 md:p-4 outline-none focus:outline-none focus:ring-0 ring-0
             hover:ring-0 hover:outline-none"
        placeholder="search here"
        
      />
   
    </div>
  );
}

export default SearchBar;

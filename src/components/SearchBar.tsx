import {  Search } from "lucide-react";
import { useState } from "react";
 import { Link, useNavigate } from "react-router-dom"
import SearchResults from "../pages/SearchResults";
import { useDispatch } from "react-redux";
import { setSearch } from "../slice/searchSlice";
import { setBrand, setCategory } from "../slice/porductsSlice";
 

 

function SearchBar() {
    const [isSearch,setIsSearch]= useState('')
   const dispatch=useDispatch()
   const navigate =useNavigate()
   console.log(isSearch)

   function handleSumbit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    dispatch(setSearch(isSearch))
    dispatch(setCategory(""))
    dispatch(setBrand([]))
    navigate('/search')
    


   }
    
  
  return (
    <form action="" onSubmit={handleSumbit}>
    <div className="flex jsutify-center items-center border border-gray-300 px-2 py-0 rounded
             outline-none
             focus:outline-none focus:ring-0
             hover:border-gray-300 bg-blue-50">

               <button type="submit" className="cursor-pointer"><Search/></button> 
       
      <input
        type="text"
        className="  w-full rounded p-1 md:p-2 outline-none focus:outline-none focus:ring-0 ring-0
             hover:ring-0 hover:outline-none"
        placeholder="Search For Products and More"
        value={isSearch}
        onChange={(e)=>setIsSearch(e.target.value)}
        
      />
   
    </div>
    </form>
  );
}

export default SearchBar;

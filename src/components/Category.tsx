import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch,  RootState } from '../store/store'
import { fetchCategoryList } from '../slice/porductsSlice'
 


  

function Category() {
    const dispatch=useDispatch<AppDispatch>()
    useEffect(()=>{
        dispatch(fetchCategoryList())
    },[])


    const categoryList = useSelector((state:RootState)=>state.products)
    console.log(categoryList)
    if(categoryList?.error){
       return <h1 className='text-center'>{categoryList.error}</h1>
    }
  return (
    <div className='max-w-7xl mx-auto flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide py-4 hadow-md shadow-lg'> 
    {categoryList.category.map((list)=>(<><button className='bg-[#2874f0] text-white font-medium
         px-6 py-2 rounded-full
         hover:bg-[#1f5fd4]
         transition duration-200
         shadow-sm '>{list}</button></>))}</div>
  )
}

export default Category
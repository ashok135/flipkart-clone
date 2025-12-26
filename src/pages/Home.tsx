import   { useEffect,  } from 'react'
import {   useSelector } from 'react-redux'
 
import { type RootState  } from '../store/store'
import useFetchProducts from '../api/useFetchProducts'
import Card from '../components/Card'
import Header from '../components/Header'
import Category from '../components/Category'
import Slider from '../components/Slider'



function Home() {
 
  const products = useSelector((state:RootState)=>state.products)
  console.log(products)
 
  
  return (
    <div>
      <div className='fixed  w-full top-0 z-2 bg-white py-4'><Header textColor={''} iconColor=''/> </div>
    
   <>
   <div className='mt-[120px] md:mt-[100px] container max-w-7xl mx-auto'>
     <Slider />
   </div>
  
   <div >
    <Category />
   </div>
   <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto'>
      <Card products ={products.products} loading={products.loading}   error={products.error} category={['']} />
   </div>
   
   </>
   </div>
  )
}

export default Home
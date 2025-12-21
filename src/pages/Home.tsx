import   { useEffect,  } from 'react'
import {  useSelector } from 'react-redux'
 
import { type RootState } from '../store/store'
import useFetchProducts from '../api/useFetchProducts'
import Card from '../components/Card'
import Header from '../components/Header'
import Category from '../components/Category'



function Home() {
  const fetchdata = useFetchProducts()
  useEffect(()=>{
    fetchdata()
  },[])
  const products = useSelector((state:RootState)=>state.products)
  console.log(products)
 
  
  return (
    <div>
    <Header/> 
   <>
   <div>
    <Category />
   </div>
   <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto'>
      <Card products ={products}/>
   </div>
   
   </>
   </div>
  )
}

export default Home
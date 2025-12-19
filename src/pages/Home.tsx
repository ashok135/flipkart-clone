import   { useEffect,  } from 'react'
import {  useSelector } from 'react-redux'
 
import { type RootState } from '../store/store'
import useFetchProducts from '../api/useFetchProducts'
import Card from '../components/Card'
import Header from '../components/Header'



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
   <Card products ={products}/>
   </>
   </div>
  )
}

export default Home
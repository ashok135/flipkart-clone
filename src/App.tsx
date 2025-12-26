 
import { useEffect } from 'react'
import Home from './pages/Home'
import { QueryClient } from "@tanstack/react-query"
import { Route, Routes } from 'react-router-dom'
import SearchResults from './pages/SearchResults'
import { useDispatch } from 'react-redux'
import { fetchApiData, fetchProducts } from './slice/porductsSlice'
import useFetchProducts from './api/useFetchProducts'
import SingleProduct from './pages/SingleProduct'

export const queryClient = new QueryClient()

 
 

function App() {
  const dispatch= useFetchProducts()

  useEffect(()=>{
    dispatch()
  },[dispatch])
 
   
 
 
  return (
    <>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='search' element ={<SearchResults />} />
       <Route path='search/:id' element ={<SingleProduct />} />
            
      </Routes>
   </>
  )
}

export default App

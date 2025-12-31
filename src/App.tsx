 
import { useEffect } from 'react'
import Home from './pages/Home'
import { QueryClient } from "@tanstack/react-query"
import { Route, Routes } from 'react-router-dom'
import SearchResults from './pages/SearchResults'
 
import useFetchProducts from './api/useFetchProducts'
import SingleProduct from './pages/SingleProduct'
import AddToCartPage from './pages/AddToCartPage'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
import type { RootState } from './store/store'
import ProductedRoutes from './components/ProductedRoutes'

export const queryClient = new QueryClient()

 
 

function App() {
  const dispatch= useFetchProducts()

  useEffect(()=>{
    dispatch()
  },[dispatch])

  const userData=useSelector((state:RootState)=>state.auth)
 
 
   
 
 
  return (
    <>
    <Routes>

     
    
         <Route path='/login'  element={<Login />} /> 

      <Route path='/' element={<Home/>} />
      <Route path='/search' element ={<SearchResults />} />
       <Route path='/search/:id' element ={<SingleProduct />} />
       <Route path='/login'  element={<Login />} /> 

       <Route path='/cart' element={
        <ProductedRoutes isAuth={userData?.token}>
          <AddToCartPage/>
        </ProductedRoutes>
       } />
       </Routes>
   </>
  )
}

export default App

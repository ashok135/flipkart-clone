 
import { useEffect } from 'react'
import Home from './pages/Home'
import { QueryClient } from "@tanstack/react-query"
import { Route, Routes } from 'react-router-dom'
import SearchResults from './pages/SearchResults'

export const queryClient = new QueryClient()

 
 

function App() {

  useEffect
 
   
 
 
  return (
    <>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='search' element ={<SearchResults />} />
            
      </Routes>
   </>
  )
}

export default App

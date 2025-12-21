import { useQuery } from '@tanstack/react-query'
import React from 'react'
import api from '../api/api'
import type { Product } from '../types'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'


interface SearchProps {
    serchData:string | undefined | null
}

function SearchResults() {
    const searchData = useSelector((state:RootState)=>state.search.search)
    console.log(searchData)
    const getUrl= async()=>{
        const responce= await api.get('/products?limit=0')
        return responce.data
    }
    const {data,isLoading,error}=useQuery({
        queryKey:['allProducts'],
        queryFn:getUrl

    })

  const filteredData=  data?.products.filter((product:Product)=>product.title.toLowerCase().includes(searchData.toLowerCase()))
    console.log(filteredData)
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if (error){
        <h2>{error.message}</h2>
    }
  return (  
    <div>

        {
           filteredData.map((product:Product)=>{
            return  <h1>{product.title}</h1>  
            }
        )
        }
        
    </div>
  )
}

export default SearchResults
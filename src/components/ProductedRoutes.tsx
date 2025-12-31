import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
interface RouteProps{
    isAuth: string |null
    children:any
}

function ProductedRoutes({isAuth,children}:RouteProps) {
    
    const location = useLocation()
    if(!isAuth){
        return  <Navigate to={'/login'} replace  state={{from:location,message:"Plese login to acces the cart"}}/>
    }
  return (
    <>
    {children}
    </>
  )
}

export default ProductedRoutes
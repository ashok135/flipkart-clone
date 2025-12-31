import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../slice/authSlice'
import type { RootState } from '../store/store'
import Header from '../components/Header'

function Logout() {
    const userData=useSelector((state:RootState)=>state.auth)
    const dispatch=useDispatch()
    function logoutFn(){
        dispatch(logout())
    }
    

  return (
    <div >
           <div className="fixed  w-full top-0 z-2 bg-blue-500 py-1">
        <Header textColor="text-white" iconColor="brightness-0 invert" />
      </div>
      <div className='shadow flex-col flex jsutify-center items-center container mx-auto max-w-3xl ' >
        <img src={userData.userData?.image} alt="" />
        <h1 className='text-[30px] '>{userData.user}</h1>
        <h2>{userData.userData?.gender}</h2>
        <button onClick={logoutFn} className='bg-red-500 px-4 py-2 rounded cursor-pointer'>Logout</button>
        </div>
  
    </div>
    )
    
}

export default Logout
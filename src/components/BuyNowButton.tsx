import { Zap } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function BuyNowButton() {
  const navigate=useNavigate()
  function sampleData(){
    alert('Thank you for your order')
    navigate('/')

  }
  return (
     <button onClick={sampleData}
                className=" w-1/2 bg-[#FB641B] hover:bg-[#F4511E] text-white font-semibold
               px-2 md:py-4 py-2 rounded shadow-md transition uppercase flex justify-center items-center"
              >
                {" "}
                <Zap size={18} fill="currentColor" /> Buy Now
              </button>
  )
}

export default BuyNowButton
import { ChevronLeftCircle,ChevronRightCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Slider() {
    const [index,setIndex]=useState(0)
    const banners = [{id:1,img:"https://rukminim2.flixcart.com/fk-p-flap/3200/540/image/1f9c9ad24c2bc37b.jpg?q=60"},
        {id:2,img:"https://rukminim2.flixcart.com/fk-p-flap/3200/540/image/66faf3950cda0b7a.png?q=60"},
        {id:3,img:"https://rukminim2.flixcart.com/fk-p-flap/3200/540/image/8d6ea073e4f5d4c8.png?q=60"}
    ]
    const slides = [...banners,...banners]
  const nextSlide = () => {
    if (index < banners.length - 1) {
      setIndex(index + 1);
    }
  };
   const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  useEffect(()=>{
 const timer=   setInterval(() => {
        setIndex((prev)=>prev+1)
        
    },2000);
    return () => clearInterval(timer);

  },[])
  useEffect(()=>{
    if (index===banners.length){
        setTimeout(() => {
            setIndex(0)
            
        },500);
    }

  },[index])


  return (
    <div className='relative w-full overflow-hidden scroll' >
        <div   className='flex   transition-transform duration-500'
        style={{ transform: `translateX(-${index * 100}%)` }}>
        {
          slides.map((img)=>{
            return(
         <img     className="w-full flex-shrink-1 md:h-[300px] h-[150px] cover" src={`${img.img}`} alt="" key={img.id} /> 
                 )
          })
           
        }
        </div>
           <button
      
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white md:py-6 md:px-2 shadow  p-2 "
          onClick={prevSlide}
      >
       <ChevronLeftCircle/>
      </button>

      {/* RIGHT BUTTON */}
      <button
     
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow md:py-6 md:px-2 "
          onClick={nextSlide}
      >
        <ChevronRightCircle/>
 
      </button>
    </div>
  )
}

export default Slider
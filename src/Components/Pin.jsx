import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);





function Pin() {

  useEffect(()=>{
    gsap.to('.pin-content',{
      pin:true
    })
  })

  return (
    <div className='bg-white  z-30 relative px-20 hidden  lg:block'>
      <div data-scroll  className="pin-content bg-yellow-100 h-screen ">

<div data-scroll  className="w-full bg-red-300  ">


</div>
        <div data-scroll  className="heading1 bg-red-400  overflow-hidden h-[33vh] flex items-center">
            <h1 data-scroll-speed="1" data-scroll-direction="horizontal" className='uppercase font-[Bebas_Neue] inline-block text-[15vw] mt-[-3rem] font-bold'>Growth</h1>
        </div>
        <div className="heading2 overflow-hidden h-[33vh] flex items-center justify-center">
            <h1 className='uppercase font-[Bebas_Neue] text-[15vw] text-[#CCCCCC]  font-bold'>impact</h1>
        </div>
         <div className="heading3 overflow-hidden h-[33vh] flex items-baseline justify-end">
            <h1 className='uppercase font-[Bebas_Neue] text-[15vw] text-[#CCCCCC]  font-bold'>speeed</h1>
        </div>
      </div>
    </div>
  )
}

export default Pin

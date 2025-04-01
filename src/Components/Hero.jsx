import { GoArrowRight } from "react-icons/go";

import React, { useEffect } from 'react'
import gsap from "gsap";

function Hero() {
  useEffect(()=>{

    const tl = gsap.timeline();
    
    tl.fromTo(`.heading1, .heading2`,{
      rotateX:`-100deg`,
      opacity:0
    },{
      rotateX:0,
      opacity:1,
      duration:1.3,
      stagger:.30,
      delay:.1
    })

    tl.fromTo(`.vid`,{
      opacity:0
    },{
      opacity:1,
      delay:-.3
    },)

 

       // space widening
       tl.fromTo(`#space1`,{
        width:0,
      },{
        ease:"expo.in",
        // stagger:.35,
        duration:1.39,
        delay:-1.2,
        width:`100%`
      },"a")
  
  
      tl.fromTo(`#space2`,{
        width:0,
      },{
        ease:"expo.in",
        // stagger:.35,
        duration:1.5,
        delay:-1.3,
  
        width:`100%`
      },"a")

   

    tl.fromTo('.sub-com',{
      width:"50%",
    },{
      width:'100%'
    },"a")

    tl.fromTo('.hero-btn, .sub-info, .span ',{
      opacity:0,
      y:10,
    },{
      opacity:1,
      // delay:-0.2,
      y:0,
    })

    


  },[])
  return (
    <div>



      <div className="hero bg-[white] min-h-[106vh] w-full   text-center  overflow-hidden  lg:pt-0 lg:px-32 md: lg:mt-8">
        <div className="main-bg  min-h-[40vh] mt-42  w-full relative  ">
      

        <div className='video-container   bg-white justify-center  px-2 relative  mt-6 w-[100%] hidden  lg:block  h-[500px] '>
                <video  className='vid h-full opacity-0 object-cover rounded-md object-center w-[60%]' autoPlay muted loop src="src\assets\hero-vdo.mp4"></video>   
            </div>
           
            <div className="titles  font-[Agdasima] flex flex-col justify-center items-center   w-full   leading-none  sm:pl-[100px] md:pl-[180px]  lg:absolute lg:items-start lg:top-0 lg:h-[500px] lg:pl-0">
                
                <div className="heading1 opacity-0 lg:border-[white] lg:border-b-[15px]  w-full  pl-[15px] flex leading-none text-black items-center text-center  justify-center  lg:h-[250px] lg:pl-0">
                    <div className='    flex items-center text-center'>

                      <h1 className='text-[110px] font-medium tracking-tighter leading-none lg:bg-white relative lg:text-[250px] lg:pr-4 '>RE
                      <span className="span opacity-0 absolute bg-yellow-300 text-[10px] lg:text-[15px] -tracking-normal px-1 py-1  font-bold -left-3 top-[12px] -rotate-12 lg:top-[28px]">BRANDING</span>


                      </h1>

                    </div>
                    <div id="space1" className='bg-[#00000] h-[235px]   hidden  lg:block'></div>
                    <div className='bg-white leading-none  h-[0] w-full flex items-center text-center pl-2'>
                      <h1 className='text-[110px]  relative font-medium leading-none bg-white xl:w-full lg:text-start text-center  tracking-tight lg:text-[250px] lg:pl-2 '>THINK
                    <span className="span  absolute bg-violet-300 text-[10px] lg:text-[15px] -tracking-normal px-1 py-1  font-bold top-[198px] left-[54%] hidden lg:block  rotate-0">DIGITAL</span>
                    </h1>
                    </div>
                </div>

                <div className="heading2 opacity-0 flex w-full  lg:border-[white]      justify-center items-center  lg:border-t-[10px]  lg:h-[250px] ">
                    <div id="space2" className='bg-[#00000]  h-[250px] hidden  lg:block'></div>
                    <div className='   w-full flex items-center justify-start'>
                      <h1 className='text-[100px] font-medium tracking-tight relative left-0  lg:bg-white  lg:w-full lg:text-start lg:text-[250px] lg:h-[250px]'>EVERYTHING
                      <span className="span  absolute bg-orange-200 text-[10px] lg:text-[15px] -tracking-normal px-1 py-1  font-bold top-[78px] -right-4 -rotate-12">STRATEGY</span>
                      </h1>
                      </div>

                </div>
            </div>

            <div className='video-container  h-[25vh] sm:h-[30vh]  flex justify-center  px-2 relative sm:px-[100px]  mt-6 w-[100%]  lg:hidden md:h-[35vh] lg:h-[45vh] '>
                <video  className='h-full w-full object-cover rounded-md object-center  vid lg:w-[60%]' autoPlay muted loop src="src\assets\hero-vdo.mp4"></video>   
            </div> 

        </div>

         <div className="sub-com  px-4  flex flex-col  relative items-center  w-full my-6  overflow-hidden lg:flex-row sm:mt-8 lg:justify-between lg:mt-28">
            <div className="sub-info opacity-0 text-zinc-700  font-[Quicksand] px-12 leading-none  font-medium text-[3.8vw] sm:text-[3vw] md:txt-[1.8vw] lg:text-[1.2vw] lg:w-[40%]">
                <p>Daring companies come to us to craft ideas,
products and experiences that redefine industries
and defy possibilities.</p>
            </div>
            <div className="hero-btn opacity-0 bg-black border-[1px] mt-8 border-black px-2 py-2 rounded-lg flex items-center overflow-hidden font-[Quicksand] transition-all ease-out  duration-300  group hover:bg-blue-600 hover:scale-95 lg:mt-0 lg:">
                <div className="flex flex-col  group">
                <input type="button" className="pr-3 font-bold text-[3.3vw] transition-all ease-in duration-200 relative text-white tracking-tighter bottom-0 group-hover:bottom-20 md:text-[2.5vw] lg:text-[1.3vw]" value="START A CONVERSATION" />
                <input type="button" className="pr-3 font-bold text-[3.3vw] absolute transition-all ease-in duration-200 text-white tracking-tighter top-[100%] opacity-0 group-hover:opacity-100 group-hover:top-4 md:text-[2.5vw] lg:text-[1.3vw]" value="START A CONVERSATION" />

                </div>
                <GoArrowRight style={{fontSize:"29px", fontWeight:"bolder", color:"white"}}/>

                
            </div>
            
        </div> 
      </div>
    </div>
  )
}

export default Hero

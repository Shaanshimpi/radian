import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import Loader from './Loader'
import Navbar from './Navbar'
import Hero from './Hero'
import Vision from './Vision'
import Slide from './Slide'      
import Pin from './Pin'
import Card from './Card'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTriggerDirectionalMovement from './ScrollTriggerDirectionalMovement'
import Demo from './Demo'

function Wrapper() {


const locomotiveScroll = new LocomotiveScroll();
const [isLoaded, setIsLoaded] = useState(false);
const { brand = "FireFist" } = useParams();
useEffect(()=>{
  // document.style.overflow=`hidden`;

  const mainContent = document.getElementsByClassName("main-content")[0];
  setTimeout(()=>{
    // document.style.overflow=`auto`;
    // mainContent.style.display = `block`;
    // gsap.fromTo(`.main-content`,{
    //   display:`hidden`
    // },{
    //   display: `block`
    // })

    setIsLoaded(true);

  },6100)

},[])
  return (
    <div>
        <div className='bg-[#f8f9fa] relative'>
      {
        !isLoaded ?
          <Loader brand={brand}/>
        :
        <>
          <Navbar brand={brand}/> 
          
          <Hero/>
          <Vision brand={brand}/>
          <Slide/>
          
        
          {/* <ScrollTriggerDirectionalMovement/> */}
          <Card brand={brand}/>
          <Footer brand={brand}/>  
          {/* <Demo/> */}
        </>
      }
       {/* <div className="main-content">
          

      </div> */}
    </div>
    </div>
  )
}

export default Wrapper
import React, { useEffect, useState } from 'react'
import Loader from './Components/Loader'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Vision from './Components/Vision'
import Slide from './Components/Slide'      
import Pin from './Components/Pin'
import Card from './Components/Card'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTriggerDirectionalMovement from './Components/ScrollTriggerDirectionalMovement'
import Demo from './Components/Demo'

function App() {

const locomotiveScroll = new LocomotiveScroll();
const [isLoaded, setIsLoaded] = useState(false);
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
    <div className='bg-[#f8f9fa] -z-10 relative'>
      {
        !isLoaded ?
        <Loader/>
       :
      <>
        <Navbar/> 
          
          <Hero/>
          <Vision/>
          <Slide/>
          
          <ScrollTriggerDirectionalMovement/>
       
          <Card/>
          <Footer/>  
          {/* <Demo/> */}
      </>
    }
       <div className="main-content">
          

      </div>
     </div>
  )
}

export default App

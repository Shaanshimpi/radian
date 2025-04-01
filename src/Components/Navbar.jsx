import gsap from "gsap";
import React, { useEffect } from "react";
import { FiAlignRight } from "react-icons/fi";



const Toggle = () => {
  const togglebtn = document.querySelector('.toggle-btn')
  const drpMenu = document.querySelector('.dropdown-menu')
  togglebtn.name = togglebtn.name == "menu" ? "close" : "menu";
  console.log('working')
  drpMenu.style.translateY = togglebtn.name == "menu" ? "-100%" : "0";
  drpMenu.style.top = togglebtn.name == "menu" ? "-100vh" : "100px";


}

function Navbar() {



  useEffect(() => {
    gsap.fromTo('.navbar', {
      opacity: 0,
    }, {
      opacity: 1,
      delay: 2.5
    })
  })

  return (
    <div className="navbar opacity-0  w-full  bg-white text-black fixed top-0 shadow z-[1] shadow-zinc-200 ">
      <nav className=" w-full px-3 h-[100px]   bg-zinc-50">
        <div className="navbar-content flex justify-between items-center  py-6">
          <div className="logo  rounded-full   leading-none inline-block  ">
            
              <img className="object-cover h-[60px] w-[60px] object-center rounded-full" src="src\assets\logo.jpeg" alt="" />

          </div>
          <div className="dropdown-menu  w-full text-center justify-center md:justify-end flex  absolute right-0 top-[-100vh]     h-screen py-12 px-8 gap-20  text-md font-[Prosto_One] transition-all ease-[cubic-bezier(.16,1,.59,.96)] duration-700 md:top-0 md:h-0 ">
            <ul className="flex flex-col items-center justify-center  text-center gap-16 md:flex-row">
              <li className="hover:bg-amber-300 px-2 py-1 rounded-[5px] transition-all ease-in duration-200 cursor-pointer">Services</li>
              <li className="hover:bg-amber-300 px-2 py-1 rounded-[5px] transition-all ease-in duration-200 cursor-pointer">About</li>
              <li className="hover:bg-amber-300 px-2 py-1 rounded-[5px] transition-all ease-in duration-200 cursor-pointer">Work</li>
              <li className="hover:bg-amber-300 px-2 py-1 rounded-[5px] transition-all ease-in duration-200 cursor-pointer">Insight</li>
              {/* <li className="hover:bg-amber-300 px-2 py-1 rounded-[5px] transition-all ease-in duration-200 cursor-pointer">Career</li> */}

              <li className=" text-black hover:bg-blue-400/30 hover:text-black hover:scale-95 px-2 py-1 rounded-[5px] transition-all ease-in duration-200 cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div>

            <ion-icon className='toggle-btn md:hidden' onClick={Toggle} name="menu"></ion-icon >


          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

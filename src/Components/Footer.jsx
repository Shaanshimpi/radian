import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-content",
        start: "top 20%", // when the top of the trigger hits the top of the viewport
        end: "bottom 10%",
        // markers:true,
      },
    });

    tl.fromTo(
      ".logo, .com-name h1",
      {
        y: -600,
        // opacity:0
      },
      {
        y: 0,
        // opacity:1,
        // ease:",
        stagger: 0.1,
        duration: 0.9,
        delay: 0.1,
      }
    );
  }, []);

  return (
    <div>
      <div className="bg-[#dddddd] min-h-[100vh] z-40 w-full relative mt-8 pt-4 overflow-hidden lg:px-8 ">
        <div className="footer-content px-2">
          <div className="footer-top   w-full flex flex-col  justify-between items-start lg:flex-row">
            <div className="title  w-full  ">
              <h1 className="uppercase font-[Bebas_Neue] leading-none text-[15vw] tracking-wide  w-full text-[#000] whitespace-nowrap font-bold sm:text-[10vw] lg:text-[6vw] xl:text-[5vw]">
                let's make it <br />
                Happen together
              </h1>
            </div>

            <div className="sub-heading  my-4  flex flex-col items-start lg:w-1/3 lg:justify-center lg:items-center ">
              <div className="text-start">
                <p className="font-[Quicksand] w-[60%]  font-bold lg:text-center lg:w-full ">
                  We uncover insights to achieve timelessness and relevance in
                  this rapidly changing world.
                </p>
              </div>
             
           
            <div className="text-white my-2 mt-4 lg:mt-6">
                <div className="button bg-black border-[1px] border-black px-4 py-4 rounded-lg flex items-center overflow-hidden font-[Quicksand] transition-all ease-out  duration-300  group hover:bg-blue-600 ">
                  <div className="flex flex-col  group">
                    <input
                      type="button"
                      className="pr-3 font-bold text-[4vw] transition-all ease-in duration-200 relative text-white tracking-tighter bottom-0 group-hover:bottom-20 sm:text-[2vw] md:text-[20px]"
                      value="START A CONVERSATION"
                    />
                    <input
                      type="button"
                      className="pr-3 font-bold text-[4vw] absolute transition-all ease-in duration-200 text-white tracking-tighter opacity-0 group-hover:opacity-100 top-[93%] group-hover:top-4 sm:text-[2vw]  md:text-[2.5vw] lg:text-[1.3vw]"
                      value="START A CONVERSATION"
                    />
                  </div>
                  <GoArrowRight
                    style={{
                      fontSize: "30px",
                      fontWeight: "bolder",
                      color: "white",
                    }}
                  />
                </div>
              </div>
          </div>
          </div>

          <div className="footer-center   w-full flex font-[Bebas_Neue] flex-wrap  my-4    gap-2">
            <div className="flex items-center text-lg  font-medium cursor-pointer transition-all ease-in duration-100 border-zinc-300 border-0 px-2 py-1 rounded-xl hover:border-[1px] hover:scale-105 hover:shadow-zinc-300  sm:text-[1rem] lg:text-[1.5rem] lg:mt-6">
              <a href="" className="cursor-pointer"> Email </a>
              <GoArrowUpRight
                style={{ fontSize: "25px", fontWeight: "bold" }}
              />
            </div>

            <div className="flex items-center text-lg  font-medium cursor-pointer transition-all ease-in duration-100 border-zinc-300 border-0 px-2 py-1 rounded-xl hover:border-[1px] hover:scale-105 hover:shadow-zinc-300  sm:text-[1rem] lg:text-[1.5rem] lg:mt-6">
              <a href="" className="cursor-pointer"> Instagram </a>
              <GoArrowUpRight
                style={{ fontSize: "25px", fontWeight: "bold" }}
              />
            </div>

            <div className="flex items-center text-lg  font-medium cursor-pointer transition-all ease-in duration-100 border-zinc-300 border-0 px-2 py-1 rounded-xl hover:border-[1px] hover:scale-105 hover:shadow-zinc-300  sm:text-[1rem] lg:text-[1.5rem] lg:mt-6">
              <a href="" className="cursor-pointer"> Twitter (X) </a>
              <GoArrowUpRight
                style={{ fontSize: "25px", fontWeight: "bold" }}
              />
            </div>

            <div className="flex items-center text-lg  font-medium cursor-pointer transition-all ease-in duration-100 border-zinc-300 border-0 px-2 py-1 rounded-xl hover:border-[1px] hover:scale-105 hover:shadow-zinc-300  sm:text-[1rem] lg:text-[1.5rem] lg:mt-6">
              <a href="" className="cursor-pointer"> LinkedIn </a>
              <GoArrowUpRight
                style={{ fontSize: "25px", fontWeight: "bold" }}
              />
            </div>

            <div className="flex items-center text-lg  font-medium cursor-pointer transition-all ease-in duration-100 border-zinc-300 border-0 px-2 py-1 rounded-xl hover:border-[1px] hover:scale-105 hover:shadow-zinc-300  sm:text-[1rem] lg:text-[1.5rem] lg:mt-6">
              <a href="" className="cursor-pointer"> Facebook </a>
              <GoArrowUpRight
                style={{ fontSize: "25px", fontWeight: "bold" }}
              />
            </div>

            <div className="flex items-center text-lg  font-medium cursor-pointer transition-all ease-in duration-100 border-zinc-300 border-0 px-2 py-1 rounded-xl hover:border-[1px] hover:scale-105 hover:shadow-zinc-300  sm:text-[1rem] lg:text-[1.5rem] lg:mt-6">
              <a href="" className="cursor-pointer"> Medium </a>
              <GoArrowUpRight
                style={{ fontSize: "25px", fontWeight: "bold" }}
              />
            </div>

            <div className="flex items-center text-lg  font-medium cursor-pointer transition-all ease-in duration-100 border-zinc-300 border-0 px-2 py-1 rounded-xl hover:border-[1px] hover:scale-105 hover:shadow-zinc-300  sm:text-[1rem] lg:text-[1.5rem] lg:mt-6">
              <a href="" className="cursor-pointer"> Spotify </a>
              <GoArrowUpRight
                style={{ fontSize: "25px", fontWeight: "bold" }}
              />
            </div>
          </div>

          <div className="footer-bottom  overflow-hidden my-8 pb-6  flex justify-between items-center border-t-[0.1px] border-b-[1px] border-zinc-400">
            <div className="logo w-[25vw]  flex  items-center sm:w-[25vw] ">
              <img
                className="object-cover object-center h-full w-full border-[#EEEEEE] border-2 rounded-full"
                src="src\assets\logo.jpeg"
                alt=""
              />
            </div>

            <div className="com-name flex justify-evenly  text-[27vw] pt-4 leading-none tracking-wider font-[Bebas_neue] font-bold sm:text-[25vw]">
              <h1>R</h1>
              <h1>A</h1>
              <h1>D</h1>
              <h1>I</h1>
              <h1>A</h1>
              <h1>N</h1>
            </div>
          </div>

          <div className="policy bg-[#dddddd]  h-[10vh] w-full flex flex-col justify-between items-start pt-4 lg:flex-row lg:items-center lg:h-[5vh] ">
            <div>
              <h1>© 2025 Check Design Company. All Rights Reserved.</h1>
            </div>
            <div className="cursor-pointer font-[Quicksand] font-semibold flex flex-col pt-6  gap-1 lg:flex-row lg:gap-8 lg:justify-center lg:pt-0">
              <a href="" className="cursor-pointer"> Privacy Policy</a>
              <a href="" className="cursor-pointer"> Terms and conditions</a>
              <a href="" className="cursor-pointer"> Cookie Notice</a>
              <a href="" className="cursor-pointer"> Bla Bla </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import gsap from "gsap";
// import _ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
// gsap.registerPlugin(ScrollTrigger)

function Card() {
  useEffect(() => {
    let t5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".title ",
        start: "top 80%", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        //  markers:"true",
      },
    });

    t5.fromTo(
      ".title h1, .sub-head, .button ",
      {
        y: 600,
        scale: 0.6,
        opacity: 0,
        rotateX: `-30deg`,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "easeOutCirc",
        duration: 1,
        rotateX: `0deg`,
        stagger: 0.1,
      }
    );

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card1",
        start: "top 100%", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        //  markers:"true",
      },
    });

    tl.fromTo(
      ".card1",
      {
        y: 200,
        scale: 0.6,
        opacity: 0,
        rotateX: `-30deg`,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "easeOutCirc",
        duration: 0.5,
        rotateX: `0deg`,
      }
    );

    let t2 = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".card2",
        // pin: true, // pin the trigger element while active
        start: "top 100%", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        //  markers:"true",
      },
    });

    t2.fromTo(
      ".card2",
      {
        y: 200,
        scale: 0.3,
        opacity: 0,
        rotateX: `-30deg`,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "easeOutCirc",
        duration: 0.5,
        rotateX: `0deg`,
      }
    );

    let t3 = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".card3",
        // pin: true, // pin the trigger element while active
        start: "top 100%", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        //  markers:"true",
      },
    });

    t3.fromTo(
      ".card3",
      {
        y: 200,
        scale: 0.6,
        opacity: 0,
        rotateX: `-30deg`,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "easeOutCirc",
        duration: 0.5,
        rotateX: `0deg`,
      }
    );
  });

  return (
    <div>
      <div className="cards-content w-full px-2 pt-14 overflow-hidden ">
        <div className="cards-headings px-8  w-full flex flex-col justify-between items-center xl:flex-row xl:justify-between xl:px-28">
          <div className="title overflow-hidden text-center   ">
            <div className="overflow-hidden  ">
              <h1 className="  flex items-center justify-center p-0 uppercase font-[Bebas_Neue] leading-none text-[10vw] w-full text-[#000] whitespace-nowrap font-bold md:text-[100px]">
                We do
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="   uppercase font-[Bebas_Neue]  leading-none text-[10vw] w-full text-[#000] whitespace-nowrap font-bold md:text-[100px]">
                great work
              </h1>
            </div>
          </div>

          <div className="sub-heading  overflow-hidden mt-4 flex flex-col  xl:w-[40%] items-center">
            <div className="text-center overflow-hidden">
              <p className="sub-head  font-[Quicksand] leading-none  font-bold md:text-[25px] ">
                We uncover insights to achieve timelessness and relevance in
                this rapidly changing world.
              </p>
            </div>
            <div className=" mt-8">
              <div className="button bg-black border-[1px] border-black px-4 py-4 rounded-lg flex items-center overflow-hidden font-[Quicksand] transition-all ease-out  duration-300  group hover:bg-blue-600 hover:scale-95">
                <div className="flex flex-col  group">
                  <input
                    type="button"
                    className="pr-3 font-bold text-[20px] transition-all ease-in duration-200 relative text-white tracking-tighter bottom-0 group-hover:bottom-20"
                    value="START A CONVERSATION"
                  />
                  <input
                    type="button"
                    className="pr-3 font-bold text-[20px] absolute transition-all ease-in duration-200 text-white tracking-tighter top-[120%] group-hover:top-4"
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

        <div className="cards mt-8 lg:px-8 xl:px-28">
          <div className="card1 w-full min-h-[30vh]   mt-14">
            <div className="card-img w-full h-[25vh] hover:opacity-0  bg-yellow-200 rounded-lg relative overflow-hidden  sm:h-[35vh] md:h-[40vh] lg:h-[70vh] xl:h-[80vh]">
              <img
                className="object-cover transition-all ease-in duration-300  object-center w-full h-full hover:opacity-0"
                src="https://cdn.prod.website-files.com/65c0c17643da67dca6ad732c/670fddc84610217f70b0b1bb_autograph-cover.png"
                alt=""
              />
              <div className="overlay transition-all ease-in duration-300 flex justify-center items-center  bg-gradient-to-b from-transparent  via-black/70  to-black h-full w-full absolute top-[100%] group-hover:top-0">
                <h1 className="uppercase transition-all ease-in duration-300  font-[Bebas_Neue] text-[7vw] text-[#CCCCCC] opacity-0  font-bold absolute bottom-[100%]   group-hover:opacity-100 group-hover:bottom-[35%]">
                  EXPLORE
                </h1>
              </div>
            </div>

            <div className="card1-info   overflow-hidden py-3 flex flex-col justify-between items-start px-2 lg:flex-row lg:items-center lg:gap-7">
              <div className="left my-2">
                <div className="head ">
                  <h1 className="uppercase font-[Bebas_Neue] leading-none pt-2 text-[6vw] text-[#000]  font-bold lg:text-[50px]">
                    KELE
                  </h1>
                </div>
                <div className="sub-head">
                  <p className="font-[Quicksand] text-[3.5vw] pt-2 font-medium md:text-[17px] lg:text-[23px]">
                    A Simple Approach To Financial Accessibility
                  </p>
                </div>
              </div>
              <div className="right flex flex-wrap my-2 gap-2">
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD]   border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="VISUAL IDENTITY"
                  />
                </div>
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD]  border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="APP DESIGN"
                  />
                </div>
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD]  border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="APP DEVELOPMENT"
                  />
                </div>
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD] border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="DIGITAL TRANSFORMATION"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card2 w-full min-h-[30vh]  mt-14">
            <div className="card-img w-full h-[25vh] bg-yellow-200 rounded-lg relative overflow-hidden group sm:h-[35vh] md:h-[40vh] lg:h-[70vh] xl:h-[80vh]">
              <img
                className="object-cover transition-all ease-in duration-300  object-center w-full h-full group-hover:scale-105"
                src="https://cdn.prod.website-files.com/65c0c17643da67dca6ad732c/673216ce8e2a141a3895f7c1_kele-cover.webp"
                alt=""
              />
              <div className="overlay transition-all ease-in duration-300 flex justify-center items-center  bg-gradient-to-b from-transparent  via-black/70 relative to-black h-full w-full  top-[100%] group-hover:top-0">
                <h1 className="uppercase transition-all ease-in duration-300  font-[Bebas_Neue] text-[7vw] text-[#CCCCCC] opacity-0  font-bold  bottom-[100%]   group-hover:opacity-100 group-hover:bottom-[35%]">
                  EXPLORE
                </h1>
              </div>
            </div>

            <div className="card1-info   overflow-hidden py-3 flex flex-col justify-between items-start px-2 lg:flex-row lg:items-center lg:gap-7">
              <div className="left my-2">
                <div className="head ">
                  <h1 className="uppercase font-[Bebas_Neue] leading-none pt-2 text-[6vw] text-[#000]  font-bold lg:text-[50px]">
                    KELE
                  </h1>
                </div>
                <div className="sub-head">
                  <p className="font-[Quicksand] text-[3.5vw] pt-2 font-medium md:text-[17px] lg:text-[23px]">
                    A Simple Approach To Financial Accessibility
                  </p>
                </div>
              </div>
              <div className="right flex flex-wrap my-2 gap-2">
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD]   border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="VISUAL IDENTITY"
                  />
                </div>
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD]  border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="APP DESIGN"
                  />
                </div>
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD]  border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="APP DEVELOPMENT"
                  />
                </div>
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD] border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="DIGITAL TRANSFORMATION"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card3 w-full min-h-[30vh]  mt-14">
            <div className="card-img w-full h-[25vh] bg-yellow-200 rounded-lg relative overflow-hidden group sm:h-[35vh] md:h-[40vh] lg:h-[70vh] xl:h-[80vh]">
              <img
                className="object-cover transition-all ease-in duration-300  object-center w-full h-full group-hover:scale-105"
                src="https://cdn.prod.website-files.com/65c0c17643da67dca6ad732c/66aa235dc0d81f08040cda27_propel-cover.webp"
                alt=""
              />
              <div className="overlay transition-all ease-in duration-300 flex justify-center items-center  bg-gradient-to-b from-transparent  via-black/70  to-black h-full w-full absolute top-[100%] group-hover:top-0">
                <h1 className="uppercase transition-all ease-in duration-300  font-[Bebas_Neue] text-[7vw] text-[#CCCCCC] opacity-0  font-bold absolute bottom-[100%]   group-hover:opacity-100 group-hover:bottom-[35%]">
                  EXPLORE
                </h1>
              </div>
            </div>

            <div className="card1-info   overflow-hidden py-3 flex flex-col justify-between items-start px-2 lg:flex-row lg:items-center lg:gap-7">
              <div className="left my-2">
                <div className="head ">
                  <h1 className="uppercase font-[Bebas_Neue] leading-none pt-2 text-[6vw] text-[#000]  font-bold lg:text-[50px]">
                    KELE
                  </h1>
                </div>
                <div className="sub-head">
                  <p className="font-[Quicksand] text-[3.5vw] pt-2 font-medium md:text-[17px] lg:text-[23px]">
                    A Simple Approach To Financial Accessibility
                  </p>
                </div>
              </div>
              <div className="right flex flex-wrap my-2 gap-2">
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD]   border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="VISUAL IDENTITY"
                  />
                </div>
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD]  border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="APP DESIGN"
                  />
                </div>
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD]  border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="APP DEVELOPMENT"
                  />
                </div>
                <div>
                  <input
                    className="font-[Quicksand] text-[10px] py-1 px-2 rounded-[5px] font-medium bg-[#ACD6DD] border-[#63c9db] border-[1px] lg:text-[15px] "
                    type="button"
                    value="DIGITAL TRANSFORMATION"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

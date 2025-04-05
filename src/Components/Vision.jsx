import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";

function Vision() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".vision",
        start: "top 70%",
        end: "bottom center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  
    t2.fromTo(
      ".vision-text, .vision-text2, .vision-text3",
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "circ",
      }
    )
      .fromTo(
        "#visionimg1,#visionimg3",
        {
          y: -200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "circ",
        },
        "<"
      )
      .fromTo(
        "#visionimg2,#visionimg4",
        {
          y: 200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "circ",
        },
        "<"
      )
      .fromTo(
        "#slant1,#slant2,#slant3",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
        },
        "<"
      );
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <>
      <div className="vision  min-h-[40vh]  lg:mt-16 z-[999]">
        <div className="vision-content flex flex-col  items-center justify-center w-full py-16 ">
          <div className="py-2 ">
            <span
              id=""
              className="vision-text font-[Quicksand] font-medium text-[4vw]   text-black sm:text-[3vw] md:text-[3vw] lg:text-[2vw] xl:text-[25px] "
            >
              Together, we transform
            </span>
          </div>
          <div className="vision-title flex flex-col leading-none items-center text-[13vw] overflow-hidden md:text-[11vw] lg:text-[8vw] xl:text-[95px] ">
            <div className=" overflow-hidden">
              <h1 className="vision-text2  uppercase  font-[Agdasima] font-bold">
                Audacious visions
              </h1>
            </div>
            <div className=" overflow-hidden">
              <h1 className="vision-text3  uppercase  font-[Agdasima] font-bold ">
                into reality
              </h1>
            </div>
          </div>
          <div className="vision-images  flex items-center justify-center gap-0 h-[10vh] w-[98vw]   mt-6  overflow-hidden sm:h-[15vh] md:h-[20vh] lg:h-[25vh] xl:w-[65vw] ">
            <img
              id="visionimg1"
              className="h-[70%] w-[70%]"
              src="src\assets\vision-img1.svg"
              alt=""
            />
            <img
              id="slant1"
              className="h-[35%] w-[20%]"
              src="src\assets\slant.svg"
              alt=""
            />
            <img
              id="visionimg2"
              className="h-[70%] w-[70%]"
              src="src\assets\vision-img2.svg"
              alt=""
            />
            <img
              id="slant2"
              className="h-[35%] w-[20%] rotate-90"
              src="src\assets\slant.svg"
              alt=""
            />
            <img
              id="visionimg3"
              className="h-[70%] w-[70%]"
              src="src\assets\vision-img3.svg"
              alt=""
            />
            <img
              id="slant3"
              className="h-[35%] w-[20%]"
              src="src\assets\slant.svg"
              alt=""
            />
            <img
              id="visionimg4"
              className="h-[70%] w-[70%]"
              src="src\assets\vision-img4.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Vision;

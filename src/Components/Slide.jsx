import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Slide() {
  const leftSecRef = useRef(null);
  const rePinRef = useRef(null);
  const slideContentRef = useRef(null);

  useEffect(() => {
    if (leftSecRef.current && rePinRef.current && slideContentRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: slideContentRef.current,
        start: "0% top",
        end: "100% center",
        pin: leftSecRef.current,
        // pinSpacing: true,
        // anticipatePin: 1,
        // markers: true,
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }
  }, []);

  return (
    <div className="overflow-y-hidden z-[99]">
      <div
        className="slide-content z-[100] flex bg-white  mt-16"
        ref={slideContentRef}
      >
        {/* left-section */}
        <div
          ref={leftSecRef}
          className="left-sec z-[100] bg-[#0000000] w-[30vw]  top-0 left-0 hidden lg:block"
        >
          <div
            ref={rePinRef}
            className="re-pin green bg-green-900 h-[50vh] w-full pr-3 flex items-center justify-center"
          >
            <h1 className="text-white font-semibold leading-none font-[Bebas_Neue] text-[25vw]">
              RE
            </h1>
          </div>
        </div>
        {/* right-section */}
        <div className="right-sec  w-full  lg:w-[69vw] z-[100]">
          <div className="first-box  bg-white py-8  min-h-[10vh] w-full text-black flex flex-col gap-0 items-center px-2 lg:flex-row lg:h-[50vh]">
            <div className="firstbox-info    flex flex-col items-center justify-center  gap-0 w-full">
              <div className="  w-full overflow-hidden  flex justify-center leading-none  tracking-tight lg:w-fit">
                <h1 className="right-sec-h1 uppercase text-[75px] pt-8 mt-[-2rem]  tracking-tight text-green-800   font-normal font-[Bebas_Neue] lg:hidden">
                  re
                </h1>
                <h1 className="right-sec-h1  uppercase text-[75px] bg-white w-fit px-2 pt-8 mt-[-2rem] relative tracking-tight font-normal font-[Bebas_Neue] lg:text-[180px]">
                  imagining
                  <span className="span  absolute text-[15px] bg-yellow-300 tracking-wider px-2 text-center py-1  font-bold top-[160px] -right-2  -rotate-12">
                    brand
                  </span>
                </h1>
              </div>
              <div className="w-[100%] flex justify-center ">
                <p className="right-sec-para  font-[Quicksand]   text-[20px] leading-none text-center font-medium sm:px-[150px]">
                  <span className="overflow-hidden">
                    We build scalable technology landscapes{" "}
                  </span>
                  <span>that enable transformation.</span>
                </p>
              </div>
            </div>
            {/* image-section */}
            <div className="  h-[120px] w-[120px] mt-8  lg:mt-[-30px] lg:h-[210px] lg:w-[250px] lg:mr-8">
              <div className="overflow-hidden ">
                <img
                  className="firstbox-img"
                  src="src\assets\re-img1.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="second-box  bg-zinc-50  py-8  min-h-[10vh] w-full  text-black flex flex-col gap-0 items-center px-2 lg:flex-row lg:h-[50vh]">
            <div className="firstbox-info    flex flex-col items-center justify-center  gap-0 w-full">
              <div className="  w-full overflow-hidden  flex justify-center leading-none  tracking-tight lg:w-fit">
                <h1 className="right-sec-h1 uppercase text-[75px] pt-8 mt-[-2rem]  tracking-tight text-green-800   font-normal font-[Bebas_Neue] lg:hidden">
                  re
                </h1>
                <h1 className="right-sec-h1  uppercase text-[75px] bg-zinc-50 pt-8 mt-[-2rem] relative tracking-tight font-normal font-[Bebas_Neue] lg:text-[180px] ">
                  thinking
                  <span className="span  absolute text-[15px] bg-pink-300 tracking-wider px-1 text-center py-1  font-bold top-[160px] left-[40%]  ">
                    strategy
                  </span>
                </h1>
              </div>
              <div className="w-[100%] flex justify-center ">
                <p className="right-sec-para  font-[Quicksand]   text-[20px] leading-none text-center font-medium sm:px-[150px]">
                  <span className="overflow-hidden">
                    We build scalable technology landscapes{" "}
                  </span>
                  <span>that enable transformation.</span>
                </p>
              </div>
            </div>
            {/* image-section */}
            <div className="  h-[120px] w-[120px] mt-8  lg:mt-[-30px] lg:h-[210px] lg:w-[250px] lg:mr-8">
              <div className="overflow-hidden ">
                <img
                  className="firstbox-img"
                  src="src\assets\re-img2.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="third-box  bg-white  py-8  min-h-[10vh] w-full text-black flex flex-col gap-0 items-center px-2 lg:flex-row lg:h-[50vh]">
            <div className="firstbox-info    flex flex-col items-center justify-center  gap-0 w-full">
              <div className="  w-full overflow-hidden  flex justify-center leading-none  tracking-tight lg:w-fit">
                <h1 className="right-sec-h1 uppercase text-[75px] pt-8 mt-[-2rem]  tracking-tight text-green-800   font-normal font-[Bebas_Neue] lg:hidden">
                  re
                </h1>
                <h1 className="right-sec-h1  uppercase text-[75px] pt-8 mt-[-2rem] px-2 bg-white relative tracking-tight font-normal font-[Bebas_Neue] lg:text-[180px]">
                  defining
                  <span className="span  absolute text-[15px] bg-orange-300 tracking-wider px-1 text-center py-1  font-bold top-[160px] -left-2  rotate-12">
                    digital
                  </span>
                </h1>
              </div>
              <div className="w-[100%] flex justify-center ">
                <p className="right-sec-para  font-[Quicksand]   text-[20px] leading-none text-center font-medium sm:px-[150px]">
                  <span className="overflow-hidden">
                    We build scalable technology landscapes{" "}
                  </span>
                  <span>that enable transformation.</span>
                </p>
              </div>
            </div>
            {/* image-section */}
            <div className="  h-[120px] w-[120px] mt-8  lg:mt-[-30px] lg:h-[210px] lg:w-[250px] lg:mr-8">
              <div className="overflow-hidden ">
                <img
                  className="firstbox-img"
                  src="src\assets\re-img3.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;

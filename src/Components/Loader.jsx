import gsap from "gsap";
import React, { useEffect } from "react";

function Loader() {
  useEffect(() => {

    const tl = gsap.timeline();
    tl.fromTo('.moving-text-f', {
      x: 0,
    }, {
      repeat: -1, // Infinite loop
      x: '-200%',
      duration: 6, // Adjust speed
      ease: 'none',
    });

    const t2 = gsap.timeline();
    t2.fromTo('.moving-text-s', {
      x: 0,
    }, {
      repeat: -1, // Infinite loop
      x: '-200%',
      duration: 10.5, // Adjust speed
      ease: 'none',
    });

    const t3 = gsap.timeline();
  

    t3.fromTo('.loader-text2', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.9,
    });

    t3.fromTo('.loader-text3', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.9,
    });

    t3.fromTo('.loader-text4', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.9,
    });

    t3.fromTo('.loader-text5', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.9,
    });

    t3.fromTo('.move', {
      width: 0,
    }, {
      width: '100%',
      duration: 3.7,
      delay: -2.5,
      ease: 'circ.in',
    }, "a");

    t3.fromTo('.time',{
      height:"1vh",
    },{
      height:"100vh",

      duration:.9,
      ease:"circ.in"
    })

    t3.fromTo('.loader-text', {
      opacity: 1,
    }, {
      opacity: 0,
      duration: 0.5,
      delay:-.3
    });

    // Enable scroll after loader completes (for example, after 5 seconds)
    
  }, []);

  return (
    <div className="loader">
      {/* {textArray.map((ele, i)=>{
        return <h3 key={i}>Hello there</h3>
      })}  */}

      <div>
        <div className="loader-content relative h-[100vh] overflow-hidden flex-col bg-black pt-2 ">
          <div className="loader-moving-headings-f  overflow-hidden font-[Agdasima]">
           
            <div className="bg-headings-f  flex justify-evenly whitespace-nowrap leading-none  mt-[-0rem]">

                {/* og text size : 152px */}
              <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
                loading digital
              </div>

              <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
                loading digital
              </div>
              <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
                loading digital
              </div>
              <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
                loading digital
              </div>
              <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
                loading digital
              </div>
              
            </div>
          

          <div className="moving-headings-s  overflow-hidden font-[Agdasima]">
           
           <div className="bg-headings-s  flex justify-evenly whitespace-nowrap mt-[-.5rem] leading-none">
        {/* og text size :180px */}
             <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
               loading digital
             </div>

             <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
               loading digital
             </div>
             <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
               loading digital
             </div>
             <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
               loading digital
             </div>
             <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
               loading digital
             </div>
             
           </div>
         </div>

         <div className="moving-headings-f  overflow-hidden font-[Agdasima]">
           
           <div className="bg-headings-f  flex justify-evenly whitespace-nowrap leading-none  mt-[-0rem]">

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             
           </div>
         </div>

         <div className="moving-headings-s  overflow-hidden font-[Agdasima]">
          
          <div className="bg-headings-s  flex justify-evenly whitespace-nowrap mt-[-.5rem] leading-none">

            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>

            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            
          </div>
        </div>

        <div className="moving-headings-f  overflow-hidden font-[Agdasima]">
           
           <div className="bg-headings-f  flex justify-evenly whitespace-nowrap leading-none  mt-[-0rem]">

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             
           </div>
         </div>

         <div className="moving-headings-s  overflow-hidden font-[Agdasima]">
          
          <div className="bg-headings-s  flex justify-evenly whitespace-nowrap mt-[-.5rem] leading-none">

            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>

            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            
          </div>
        </div>

        
        <div className="moving-headings-f  overflow-hidden font-[Agdasima]">
           
           <div className="bg-headings-f  flex justify-evenly whitespace-nowrap leading-none  mt-[-0rem]">

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             
           </div>
         </div>

         <div className="moving-headings-s  overflow-hidden font-[Agdasima]">
          
          <div className="bg-headings-s  flex justify-evenly whitespace-nowrap mt-[-.5rem] leading-none">

            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>

            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            
          </div>
        </div>

        <div className="moving-headings-f  overflow-hidden font-[Agdasima]">
           
           <div className="bg-headings-f  flex justify-evenly whitespace-nowrap leading-none  mt-[-0rem]">

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             
           </div>
         </div>

         <div className="moving-headings-s  overflow-hidden font-[Agdasima]">
          
          <div className="bg-headings-s  flex justify-evenly whitespace-nowrap mt-[-.5rem] leading-none">

            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>

            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            
          </div>
        </div>

        <div className="moving-headings-f  overflow-hidden font-[Agdasima]">
           
           <div className="bg-headings-f  flex justify-evenly whitespace-nowrap leading-none  mt-[-0rem]">

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             
           </div>
         </div>   <div className="moving-headings-s  overflow-hidden font-[Agdasima]">
          
          <div className="bg-headings-s  flex justify-evenly whitespace-nowrap mt-[-.5rem] leading-none">

            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>

            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            <div className="moving-text-s  uppercase text-[120px] pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d] ">
              loading digital
            </div>
            
          </div>
        </div>

        <div className="moving-headings-f  overflow-hidden font-[Agdasima]">
           
           <div className="bg-headings-f  flex justify-evenly whitespace-nowrap leading-none  mt-[-0rem]">

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>

             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             <div className="moving-text-f  uppercase text-[102px]  pl-12  font-bold whitespace-nowrap   text-[#2a2a2a5d]  ">
               loading digital
             </div>
             
           </div>
         </div>
        </div>

           <div className="loading  absolute left-1/2 top-1/2 translate-x-[-50%]  translate-y-[-50%] flex justify-center items-center overflow-hidden z-[2]">
               <div className="loader-text text-white  font-[Homenaje] leading-none flex items-center justify-center text-center  h-[20vw] w-[50vw] lg:h-[10vw] lg:w-[25vw]  overflow-hidden font-bold  ">
               <div className="loader-text2  absolute text-[11.5vw] lg:text-[6vw]  text-center tracking-tighter bg-black  h-[100%] w-[100%] py-4 flex items-center justify-center">REIMAGINE</div>

                   <div  className="loader-text3  absolute text-[11.5vw] lg:text-[5.7vw]   text-center tracking-tighter bg-black  h-[100%] w-[100%]  flex items-center justify-center ">REINVENTING</div>
                   <div  className="loader-text4  absolute text-[11.5vw] lg:text-[6vw]   text-center tracking-tighter bg-black h-[100%] w-[100%] flex items-center justify-center ">REDEFINING</div>
                   <div  className="loader-text5  absolute text-[11.5vw] lg:text-[6vw]   text-center tracking-tighter bg-black h-[100%] w-[100%] flex items-center justify-center ">RADIAN</div>




               </div> 
               
               
        </div>
        <div className="time  w-[100%] h-[1vh]  absolute top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%] z-[1]  overflow-hidden ">
             <div className="time-bgn bg-[#0000000]  h-[100%] w-[100%] relative overflow-hidden flex items-center justify-center">
                 <div className="move bg-white h-full  w-[30%] absolute"></div>

             </div>
         </div> 
      </div>

      
    </div>
    </div>
  );
}
export default Loader;
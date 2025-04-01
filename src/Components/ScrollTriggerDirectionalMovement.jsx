import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerDirectionalMovement = () => {
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });

    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      const wrapper = section.querySelector(".wrapper");
      if (!wrapper) return;

      const sectionWidth = section.offsetWidth;
      const wrapperWidth = wrapper.scrollWidth;
      const [xStart, xEnd] =
        index % 2
          ? [sectionWidth, -wrapperWidth] // Move left for odd sections
          : [-wrapperWidth, 0]; // Move right for even sections

      gsap.fromTo(
        wrapper,
        { x: xStart },
        {
          x: xEnd,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: .5,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div  className="scroller h-screen overflow-hidden text-[12vw] overflow-x-hidden bg-black hidden md:block">
      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
        <img className="h-80 opacity-75 w-full rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95 " src="https://images.unsplash.com/photo-1606105821505-0b33dc2b5233?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/file-1715652217532-464736461acbimage?w=416&dpr=2&auto=format&fit=crop&q=60" alt="City 1" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677094311161-b704e5e99c31?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 3" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1516905041604-7935af78f572?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHRlY2h8ZW58MHwwfDB8fHww" alt="City 3" />
          <img className="h-80 opacity-75 w-full rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95 " src="https://images.unsplash.com/photo-1606105821505-0b33dc2b5233?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHRlY2h8ZW58MHwwfDB8fHww" alt="City 1" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 w-full rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95 " src="https://images.unsplash.com/photo-1606105821505-0b33dc2b5233?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/file-1715652217532-464736461acbimage?w=416&dpr=2&auto=format&fit=crop&q=60" alt="City 1" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlY2h8ZW58MHx8MHx8fDA%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1508780709619-79562169bc64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlY2h8ZW58MHx8MHx8fDA%3D" alt="City 3" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2h8ZW58MHx8MHx8fDA%3D" alt="City 1" />
                  </div>
      </section>

      {/* second section  */}
      <section className="h-[33.3vh] flex my-2   items-center  relative  overflow-hidden ">
        <div className="wrapper flex items-center text-[6vh] font-medium w-max">
          <h1 className="text-zinc-500/50 text-[18vw] pr-20 uppercase font-[Oswald]">radian</h1>
          <img className="h-80 opacity-75 w-full rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95 " src="https://images.unsplash.com/photo-1717501218661-0322e4bc4c81?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677443052580-90a2fe65cec8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677094311161-b704e5e99c31?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 3" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1682464833647-bb4880449484?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 1" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1681586126003-2a6d4ba943a2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 2" />
        <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1682756538899-56162afda294?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 3" />
        <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677443052580-90a2fe65cec8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677094311161-b704e5e99c31?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 3" />
          <img className="h-80 opacity-75 w-full rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95 " src="https://images.unsplash.com/photo-1717501218661-0322e4bc4c81?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677443052580-90a2fe65cec8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677094311161-b704e5e99c31?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 3" />
          <img className="h-80 opacity-75 w-full rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95 " src="https://images.unsplash.com/photo-1717501218661-0322e4bc4c81?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677443052580-90a2fe65cec8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677094311161-b704e5e99c31?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 3" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1682464833647-bb4880449484?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 1" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1681586126003-2a6d4ba943a2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 2" />
        <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1682756538899-56162afda294?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 3" />
        <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677443052580-90a2fe65cec8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677094311161-b704e5e99c31?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 3" />
         
        </div>
      </section>

      {/* third  section */}
      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
        <img className="h-80 opacity-75 w-full rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95 " src="https://images.unsplash.com/photo-1606105821505-0b33dc2b5233?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/file-1715652217532-464736461acbimage?w=416&dpr=2&auto=format&fit=crop&q=60" alt="City 1" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://plus.unsplash.com/premium_photo-1677094311161-b704e5e99c31?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City 3" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1516905041604-7935af78f572?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHRlY2h8ZW58MHwwfDB8fHww" alt="City 3" />
          <img className="h-80 opacity-75 w-full rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95 " src="https://images.unsplash.com/photo-1606105821505-0b33dc2b5233?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHRlY2h8ZW58MHwwfDB8fHww" alt="City 1" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 w-full rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95 " src="https://images.unsplash.com/photo-1606105821505-0b33dc2b5233?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/file-1715652217532-464736461acbimage?w=416&dpr=2&auto=format&fit=crop&q=60" alt="City 1" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlY2h8ZW58MHx8MHx8fDA%3D" alt="City 2" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1508780709619-79562169bc64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlY2h8ZW58MHx8MHx8fDA%3D" alt="City 3" />
          <img className="h-80 opacity-75 rounded-xl m-1 border-zinc-800 border-[1px] hover:scale-95" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2h8ZW58MHx8MHx8fDA%3D" alt="City 1" />
                  </div>
      </section>
    </div>
  );
};

export default ScrollTriggerDirectionalMovement;

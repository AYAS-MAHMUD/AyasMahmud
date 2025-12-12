import React from "react";
import { FaDownload } from "react-icons/fa";
import { MdOutlineStreetview } from "react-icons/md";
import { Link } from "react-router";
import Resume_of_Mohammad_Ayas from '../assets/Resume_of_Mohammad_Ayas.pdf'
// This component uses Tailwind CSS for styling. Make sure Tailwind is configured in your project.
// Copy this file into your project (e.g. src/components/HeroWithBgShape.jsx) and import it where needed.
import { motion } from 'framer-motion';
import Button from "./Button";
import ViewButton from "./ViewButton";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gray-900 text-white md:mb-15 z-12">
      {/* decorative blurred gradient shapes */}
      <motion.div animate={{y:[0,-75,0]}} transition={{repeat : Infinity,duration : 2,ease: 'easeInOut'}}
        aria-hidden
        className="pointer-events-none absolute -left-40 top-8 w-[760px] h-[380px] rounded-full blur-3xl transform -rotate-12"
        style={{
          background:
            "radial-gradient(closest-side, rgba(131,195,58,0.35), rgba(131,195,58,0.18) 30%, transparent 60%)",
        }}
      />
      <motion.div animate={{y:[0,-95,0]}} transition={{repeat : Infinity,duration : 4,ease: 'easeInOut'}}
        aria-hidden
        className="pointer-events-none absolute -left-40 top-8 w-[760px] h-[380px] rounded-full blur-3xl transform -rotate-12"
        style={{
          background:
            "radial-gradient(closest-side, rgba(131,195,58,0.35), rgba(131,195,58,0.18) 30%, transparent 60%)",
        }}
      />

      <motion.div animate={{y:[0,-75,0]}} transition={{repeat : Infinity,duration : 4,ease: 'easeInOut'}}
        aria-hidden
        className="pointer-events-none absolute right-[-220px] bottom-[-0px] w-[820px] h-[420px] rounded-full blur-3xl transform rotate-12"
        style={{
          background:
            "radial-gradient(closest-side, rgba(131,195,58,0.35), rgba(131,195,58,0.18) 30%, transparent 60%)",
        }}
      />
      <motion.div animate={{y:[0,-95,0]}} transition={{repeat : Infinity,duration : 4,ease: 'easeInOut'}}
        aria-hidden
        className="pointer-events-none absolute right-[-220px] bottom-[-0px] w-[820px] h-[420px] rounded-full blur-3xl transform rotate-12"
        style={{
          background:
            "radial-gradient(closest-side, rgba(131,195,58,0.35), rgba(131,195,58,0.18) 30%, transparent 60%)",
        }}
      />

      {/* hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-10 md:py-40 text-center">
        <motion.div  className="inline-flex items-center gap-3 bg-white/6 border border-white/8 px-4 py-2 rounded-2xl backdrop-blur-sm text-sm mx-auto mb-6">
          <div className="status status-success animate-ping"></div>
          <span>Build Better Software, Seamlessly Together</span>
        </motion.div>

        <h1 className="text-[56px] sm:text-[72px] md:text-[88px] leading-[0.95] font-extrabold tracking-tight drop-shadow-[0_6px_24px_rgba(0,0,0,0.7)]">
          
          <motion.h1  initial={{opacity : 0,x:50}} animate={{opacity:1,x:0}} transition={{duration : 1}} >Clean code. Scalable</motion.h1>
          <motion.h1  initial={{opacity : 0,x:-50}} animate={{opacity:1,x:0}} transition={{duration : 1}} > apps.</motion.h1>

          <motion.h1  initial={{opacity : 0,x:50}} animate={{opacity:1,x:0}} transition={{duration : 1}} >Reliable delivery.</motion.h1>
        </h1>

        <motion.p  initial={{opacity : 0,y:50}} animate={{opacity:1,y:0}} transition={{duration : 1}}  className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
          I'm a Fronted Developer who turns complex ideas into performant,
          user-friendly web applications.
        </motion.p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <a href={Resume_of_Mohammad_Ayas} download='Resume_of_Mohammad_Ayas' ><Button/></a>
         <Link to='/portfolio'>
              <ViewButton/>
          </Link>
          
        </div>
      </div>

      {/* subtle bottom gradient to darken edges */}
    </header>
  );
}

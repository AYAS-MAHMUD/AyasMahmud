import React from "react";
import image from "../assets/ayas.jpeg";
import { motion } from 'framer-motion';
const Aboutme = () => {
  return (
    <div className="w-full">
      <div className=" max-w-7xl mx-auto">
        <div class="relative  text-center py-15 ">
          <h1 class="text-5xl md:text-8xl font-bold text-gray-200 uppercase tracking-widest mb-4">
            About Me
          </h1>
          <h2 class="text-xl md:text-3xl font-semibold text-primary inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            Know Me More
          </h2>
          <span class="block h-1 w-20 bg-primary mx-auto -mt-4 rounded"></span>
        </div>

        {/* About content */}
        <div className="p-5 text-white flex flex-col md:flex-row  gap-9">
          {/* image */}
          <motion.div  initial={{opacity : 0,y:70}} viewport={{ once: true }} whileInView={{opacity:1,y:0}} transition={{duration : 1}} >
            <img src={image} className="flex-1" alt="" />
          </motion.div>
          {/* content */}
          <div className="flex-1 flex gap-5 flex-col justify-center">
            <h1>
              <span className="text-2xl">I'm </span>
              <br />
              <motion.h1  initial={{opacity : 0,x:50}} viewport={{ once: true }} whileInView={{opacity:1,x:0}} transition={{duration : 1}}  className="text-primary text-4xl md:text-6xl font-bold">
                MOHAMMAD AYAS
              </motion.h1>
               <span className="text-2xl">a Frontend developer</span>
            </h1>
            <motion.p  initial={{opacity : 0,x:-50}} viewport={{ once: true }} whileInView={{opacity:1,x:0}} transition={{duration : 1}}  className=" text-2xl md:text-4xl">
              I'm a Frontend developer with a passion for building efficient,
              scalable, and user-friendly web applications. My journey started
              with a fascination for how things work behind the screen, and
              quickly evolved into a career focused on creating impactful
              digital solutions. Over the past few years,I've worked on diverse
              projects <br />
              —ranging from productivity
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

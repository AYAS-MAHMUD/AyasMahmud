import React from "react";
import { motion } from "framer-motion";
const Summary = () => {
  const languages = [

  { name: "Tailwind", level: 85, color: "bg-sky-400" },      // Tailwind is usually sky/blue
  { name: "React", level: 90, color: "bg-cyan-400" },       // React cyan/blue
  { name: "Next.js", level: 72, color: "bg-gray-600" },     // Next.js is usually dark gray/black
  { name: "Node.js", level: 85, color: "bg-green-600" },    // Node.js green
  { name: "Express.js", level: 85, color: "bg-gray-400" },  // Express is gray
  { name: "Mongo DB", level: 90, color: "bg-green-500" },   // MongoDB green
  { name: "JavaScript", level: 85, color: "bg-yellow-400" },// JS yellow
  { name: "Python", level: 80, color: "bg-blue-600" },      // Python blue
  { name: "Java", level: 70, color: "bg-red-600" },         // Java red/orange



  ];
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto md:mt-30">
        <div class="relative  text-center py-15 ">
          <h1 class="text-5xl md:text-8xl font-bold text-gray-200 uppercase tracking-widest mb-4">
            Summary
          </h1>
          <h2 class="text-xl md:text-3xl font-semibold text-primary inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            Resume
          </h2>
          <span class="block h-1 w-20 bg-primary mx-auto -mt-4 rounded"></span>
        </div>
        {/* technology start */}
        <div>
          
          <section className=" bg-gray-900 text-white">
            <div className="container mx-auto px-6">
              <div className=" mb-16">
                <h2 className="text-2xl text-primary  md:text-4xl font-bold mb-4">
                  Technologies
                </h2>
                <p className="text-gray-400 max-w-2xl  ">
                  My technical proficiency across various programming languages
                  and frameworks.
                </p>
              </div>

              <div className="max-w-7xl mx-auto grid gap-8">
                {languages.map((lang, index) => (
                  <div key={lang.name} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-lg">{lang.name}</span>
                      <span className="text-gray-400">{lang.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full ${lang.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* technology end */}

        {/* Education */}
        <div className="text-white px-6">
          <motion.div initial={{opacity : 0,y:50}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{duration : 1}}  className="my-16">
            <h2 className="text-2xl  md:text-4xl text-primary font-bold mb-4">
              Education
            </h2>
            <p className="text-gray-400  ">
              My education continues to shape my problem-solving skills and
              technical mindset as I grow into a professional web developer.
            </p>
          </motion.div>
          <div class="grid grid-cols-1 text-black md:grid-cols-2 gap-5">
            <motion.div whileHover={{scale:0.96}} initial={{opacity : 0,x:-60}} viewport={{ once: true }} whileInView={{opacity:1,x:0}} transition={{duration : 1}} class=" bg-primary  rounded p-5">
              <h1 class="font-bold text-xl md:text-2xl mb-3">
                Secondary School Certificate
              </h1>
              <h2>Department : Computer</h2>
              <h2>Institute: Palong Model High School & Collage</h2>
              <h2>GPA: 5</h2>
            </motion.div>
            <motion.div whileHover={{scale:0.96}} initial={{opacity : 0,x:60}} viewport={{ once: true }} whileInView={{opacity:1,x:0}} transition={{duration : 1}} class=" bg-primary rounded  p-5 ">
              <h1 class="font-bold text-xl md:text-2xl mb-3">Diploma in Computer Science</h1>
              <h2>Department : CST</h2>
              <h2>Institute: Chattogram Polytechnic Institute</h2>
              <h2>CGPA: 3.73</h2>
            </motion.div>
          </div>
        </div>
        <div className="px-6 my-16">
          <div className="my-16">
            <h1 class="text-3xl mb-4 font-bold md:text-4xl  text-[#83C33a]">
              Language.
            </h1>
            <p className="text-gray-400">
              Fluent in Bangla and English, with basic to intermediate
              proficiency in German and Hindi. Continuously improving language
              skills for global communication.
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.button whileHover={{scale:0.96}} initial={{opacity : 0,x:-60}} viewport={{ once: true }} whileInView={{opacity:1,x:0}} transition={{duration : 1}} class="bg-primary px-5 py-3 text-xl md:text-2xl font-bold rounded">
              Bangla
            </motion.button>
            <motion.button whileHover={{scale:0.96}} initial={{opacity : 0,y:-60}} viewport={{ once: true }} whileInView={{opacity:1,y:0}} transition={{duration : 1}} class="bg-[#272C27] text-white px-5 rounded py-3 text-xl md:text-2xl font-bold">
              English
            </motion.button>
            <motion.button whileHover={{scale:0.96}} initial={{opacity : 0,y:60}} viewport={{ once: true }} whileInView={{opacity:1,y:0}} transition={{duration : 1}} class="bg-primary px-5 py-3  text-xl rounded md:text-2xl font-bold">
              German
            </motion.button>
            <motion.button whileHover={{scale:0.96}} initial={{opacity : 0,x:60}} viewport={{ once: true }} whileInView={{opacity:1,x:0}} transition={{duration : 1}} class="bg-[#272C27] rounded text-white px-5 py-3  text-xl md:text-2xl font-bold">
              Hindi
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

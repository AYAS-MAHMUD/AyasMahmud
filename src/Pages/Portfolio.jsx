import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa6";
import Button from "../component/Button";
import Demobtn from "../component/Demobtn";
import Githubbtn from "../component/Githubbtn";

const Portfolio = () => {
  const experiences = [
    {
      id: 1,
      img: "https://i.ibb.co.com/XrV4kr8k/pexels-shkrabaanthony-5816283.jpg",
      livelink : 'https://loanlink01.netlify.app',
      githublink : "https://github.com/AYAS-MAHMUD/LoanLink-UI"
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/bjFvgshQ/pexels-wayne-fotografias-1812121-9879938.jpg",
      livelink : 'https://herohome.netlify.app',
      githublink : "https://github.com/AYAS-MAHMUD/Ass-10-ui"
    },
    {
      id: 3,

      img: "https://i.ibb.co.com/wZBQf9bL/pexels-lisa-kohnen-1084413-2204147.jpg",
      livelink : 'https://my-first-next-app-azure.vercel.app',
      githublink : "https://github.com/AYAS-MAHMUD/my-first-next-app"
    },
  ];

  const [color, setColor] = React.useState("rgb(239, 68, 68)");

  useEffect(() => {
    const interval = setInterval(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setColor(`rgb(${r}, ${g}, ${b})`);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div class="relative  text-center py-15 ">
          <h1 class="text-5xl md:text-8xl font-bold text-gray-800 uppercase tracking-widest mb-4">
            Portfolio
          </h1>
          <h2 class="text-xl md:text-3xl font-semibold text-primary inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            My Work
          </h2>
          <span class="block h-1 w-20 bg-primary mx-auto -mt-4 rounded"></span>
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full transition-colors duration-1000 ease-in-out"
            style={{ backgroundColor: color }}
          />

          {/* Experience cards */}
          {experiences.map((experience, index) => (
            <TimelineCard
              key={experience.id}
              experience={experience}
              index={index}
              timelineColor={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// for card

const TimelineCard = ({ experience, index, timelineColor }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center mb-12 relative"
    >
      {/* LEFT / TOP CARD */}
      <div
        className={`w-full md:w-1/2 px-4 ${
          index % 2 !== 0 ? "md:order-3" : ""
        }`}
      >
        
        <div className="bg-white rounded-lg group  shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <img
            src={experience.img}
            alt={experience.company}
            className="w-full h-80  object-cover group-hover:scale-105 transition ease-in"
            loading="lazy"
          />
          

          <div className="flex items-center absolute gap-7 md:px-10
      md:opacity-0 translate-y-10 
      md:group-hover:opacity-100 md:group-hover:translate-y-0 
      transition-all duration-500">
            <Link to={experience.livelink}>
              <Demobtn/>
            </Link>
            <Link to={experience.githublink}>
              <Githubbtn/>
            </Link>
          </div>
        </div>
      </div>

      {/* TIMELINE DOT */}
      <div className="w-10 flex justify-center my-6 md:my-0">
        <div
          className="w-5 h-5 rounded-full border-4 border-white shadow transition-colors duration-1000"
          style={{ backgroundColor: timelineColor }}
        />
      </div>

      {/* RIGHT EMPTY SPACE */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
};

export default Portfolio;

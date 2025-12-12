import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    role: "Product Manager, Acme Co.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&q=80",
    quote:
      "Ayas built our landing page with great attention to detail. Fast delivery and clear communication. Highly recommended!",
  },
  {
    id: 2,
    name: "Liam Johnson",
    role: "CTO, Beta Labs",
    avatar: "https://i.ibb.co.com/N2Dqxrq9/boy1.jpg",
    quote:
      "The UI improvements boosted our conversion rate. Clean, modern, and maintainable code — exactly what we needed.",
  },
  {
    id: 3,
    name: "Sara Kim",
    role: "Founder, Startup X",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=256&q=80",
    quote:
      "Great collaboration and creative solutions. The app looks and feels premium now. I am very greatful to work with you.",
  },
];

const Testimonal = () => {
  return (
    <div className="w-full mb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div class="relative text-center p-20">
          <h1 class="text-4xl md:text-8xl font-bold text-white uppercase tracking-widest mb-4">
            Testimonial
          </h1>
          <h2 class="text-xl md:text-3xl font-semibold text-primary inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            Client Speak
          </h2>
          <span class="block h-1 w-20 bg-primary mx-auto -mt-4 rounded"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((i,idx) => (
            <motion.div initial={{opacity : 0,y:60}} viewport={{ once: true }} whileInView={{opacity:1,y:0}} transition={{duration : 1,delay :idx*0.5}} class="bg-black p-8 text-white">
              <p>
                <FaQuoteLeft className="text-4xl mb-5" />
              </p>
              <h1>{i.quote}</h1>
              <div class="flex gap-5 mt-5">
                <img
                  src={i.avatar}
                  className="rounded-full object-cover h-13 w-13"
                  alt=""
                />
                <div>
                  <h1 class="text-xl font-bold">{i.name}</h1>
                  <h2 class="font-bold">{i.role}</h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonal;

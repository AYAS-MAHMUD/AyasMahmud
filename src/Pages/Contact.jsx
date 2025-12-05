import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router";

export default function Contact() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto ">
      {/* Left Section */}

      <div class="relative  text-center py-15 ">
        <h1 class="text-5xl md:text-8xl font-bold text-gray-200 uppercase tracking-widest mb-4">
          Contact
        </h1>
        <h2 class="text-xl md:text-3xl font-semibold text-primary inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          Get in touch
        </h2>
        <span class="block h-1 w-20 bg-primary mx-auto -mt-4 rounded"></span>
      </div>

      <div className="text-white p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p></p>
          <h1 className="text-4xl font-bold leading-tight">
            Let’s Talk For your <br />{" "}
            <span className="text-lime-400">Next Projects</span>
          </h1>

          <p className="text-gray-500 max-w-md">
            Sed ut perspiciatis unde omnis natus totam rem aperiam eaque
            inventore veritatis
          </p>

       
          {/* Socials */}
          <div className="pt-6">
            <h3 className="text-lg font-medium mb-3">Follow Me</h3>
            <div className="flex gap-4 text-black">
                <Link to='https://www.linkedin.com/in/mohammad-ayas/' className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-lime-400 transition cursor-pointer" ><FaLinkedinIn/></Link>
                <Link to='https://github.com/AYAS-MAHMUD' className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-lime-400 transition cursor-pointer" ><FaGithub/></Link>
                <Link to='https://www.facebook.com/md.ayas.998691' className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-lime-400 transition cursor-pointer" ><FaFacebookF/></Link>
                <Link to='https://www.instagram.com/the_ayas_mahmud/' className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-lime-400 transition cursor-pointer" ><FaInstagram/></Link>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:p-8 rounded-2xl space-y-6 "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="Richard D. Hammond"
                className="w-full p-3 bg-neutral-800 rounded-xl focus:outline-lime-400"
              />
            </div>

            <div className="space-y-2">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="support@gmail.com"
                className="w-full p-3 bg-neutral-800 rounded-xl focus:outline-lime-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label>Phone Number *</label>
              <input
                type="text"
                placeholder="+880 (123) 456 88"
                className="w-full p-3 bg-neutral-800 rounded-xl focus:outline-lime-400"
              />
            </div>

            <div className="space-y-2">
              <label>Subject *</label>
              <input
                type="text"
                placeholder="I would like to discuss"
                className="w-full p-3 bg-neutral-800 rounded-xl focus:outline-lime-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label>Textarea *</label>
            <textarea
              placeholder="Write message"
              rows="6"
              className="w-full p-3 bg-neutral-800 rounded-xl focus:outline-lime-400"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="w-full bg-lime-400 text-black p-4 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            Send Me Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

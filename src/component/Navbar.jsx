import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router";
import { IoHome, IoLogoAmplify } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full  text-white sticky top-0 z-50 bg-gray-900">
      <nav className="container max-w-7xl mx-auto px-3 md:px-0 py-3 flex items-center justify-between ">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-3xl font-bold text-lime-400 flex ">
            <IoLogoAmplify />
            yas
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-6  py-3 px-5 rounded-full ">
          <NavLink
            to="/"
            className="hover:text-[#83C33a] text-md font-semibold "
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutme"
            className="hover:text-[#83C33a] text-md font-semibold "
          >
            About me
          </NavLink>

          <NavLink
            to="/summary"
            className="hover:text-[#83C33a] text-md font-semibold "
          >
            Summary
          </NavLink>
          <NavLink
            to="/portfolio"
            className="hover:text-[#83C33a] text-md font-semibold "
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/testimonial"
            className="hover:text-[#83C33a] text-md font-semibold "
          >
            Testimonial
          </NavLink>
        </div>
        <div className="hidden md:block">
          <Link to='/contact' class="bg-lime-400 text-black flex items-center gap-1 px-4 py-2 rounded-full font-medium hover:bg-[#171A17] ring-2 ring-[#83C33a] hover:text-[#83C33a] transition-colors duration-400">
            <FaPaperPlane /> Contact
          </Link>
        </div>
        {/* Mobile er jonno toggle icon */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu "
            onClick={() => setOpen((s) => !s)}
            className="text-[#83C33a]  p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#83C33a]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3 flex items-center flex-col bg-gray-800 py-5 text-white">
              <NavLink
                to="/"
                className="hover:text-[#83C33a] text-md font-semibold "
              >
                Home
              </NavLink>
              <NavLink
                to="/aboutme"
                className="hover:text-[#83C33a] text-md font-semibold "
              >
                About me
              </NavLink>
              <NavLink
                to="/summary"
                className="hover:text-[#83C33a] text-md font-semibold "
              >
                Summary
              </NavLink>
              <NavLink
                to="/portfolio"
                className="hover:text-[#83C33a] text-md font-semibold "
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/testimonial"
                className="hover:text-[#83C33a] text-md font-semibold "
              >
                Testimonial
              </NavLink>
              <Link to='/contact' class="bg-[#83C33a] flex items-center gap-1 px-4 py-2 rounded-full font-medium hover:bg-[#171A17] ring-2 ring-[#83C33a] hover:text-[#83C33a] transition-colors duration-400">
                <FaPaperPlane /> Contact
              </Link>
            </div>
            <div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";
import { FaClover } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { IoLogoAmplify } from "react-icons/io5";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[800px] bottom-[200px] w-[920px] h-[220px] rounded-full blur-3xl transform rotate-12"
          style={{
            background:
              "radial-gradient(closest-side, rgba(131,195,58,0.35), rgba(131,195,58,0.18) 30%, transparent 60%)",
          }}
        />

        {/* Logo */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-3xl font-bold text-primary flex ">
              <IoLogoAmplify />
              yas
            </h1>
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-220px] bottom-[-0px] w-[820px] h-[420px] rounded-full blur-3xl transform rotate-12"
          style={{
            background:
              "radial-gradient(closest-side, rgba(131,195,58,0.35), rgba(131,195,58,0.18) 30%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-220px] bottom-[-0px] w-[820px] h-[420px] rounded-full blur-3xl transform rotate-12"
          style={{
            background:
              "radial-gradient(closest-side, rgba(131,195,58,0.35), rgba(131,195,58,0.18) 30%, transparent 60%)",
          }}
        />

        {/* Quick Links + Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-6">Quick Link</h3>

          <div className="flex flex-wrap gap-8 mb-12">
            <Link to="/aboutme" className="hover:text-lime-400 transition">
              About
            </Link>
            <Link to="/summary" className="hover:text-lime-400 transition">
              Summary
            </Link>
            <Link to="/portfolio" className="hover:text-lime-400 transition">
              Portfolio
            </Link>
            <Link to="/testimonial" className="hover:text-lime-400 transition">
              Testimonial
            </Link>
            <Link to="/contact" className="hover:text-lime-400 transition">
              Contact
            </Link>
          </div>

          {/* Email Subscribe */}
          <div className="flex items-center gap-4 border-b border-gray-600 pb-3">
            <FaEnvelope className="text-lime-400 text-lg" />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent outline-none w-full text-sm"
            />
            <button className="bg-lime-400 text-black font-semibold px-6 py-2 flex items-center gap-2 rounded hover:bg-lime-300 transition">
              Sign Up <span>›</span>
            </button>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-white font-semibold mb-6">Address</h3>

          <div className="flex items-start gap-4 mb-6">
            <FaMapMarkerAlt className="text-lime-400 text-xl mt-1" />
            <p>Inani-4750 Cox's Bazar, Bangladesh </p>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <FaEnvelope className="text-lime-400 text-xl" />
            <p>mohammadayas545@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-lime-400 text-xl" />
            <p>+8801863199573</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-20 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="flex items-center gap-2">
            &copy; {new Date().getFullYear()} Mohammad Ayas | Made with{" "}
            <GiSelfLove className="text-red-600" />
          </p>

          <div className="flex gap-6 text-lg">
            <Link
              to="https://www.linkedin.com/in/mohammad-ayas/"
              className="w-10 h-10  rounded-full flex items-center justify-center hover:text-lime-400 transition cursor-pointer"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://github.com/AYAS-MAHMUD"
              className="w-10 h-10  rounded-full flex items-center justify-center hover:text-lime-400 transition cursor-pointer"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.facebook.com/md.ayas.998691"
              className="w-10 h-10  rounded-full flex items-center justify-center hover:text-lime-400 transition cursor-pointer"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://www.instagram.com/the_ayas_mahmud/"
              className="w-10 h-10  rounded-full flex items-center justify-center hover:text-lime-400 transition cursor-pointer"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-lime-400 text-black p-4 rounded-md shadow-lg hover:bg-lime-300 mb-5 transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;

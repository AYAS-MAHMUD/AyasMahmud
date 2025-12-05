// ContactCta.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function ContactCta() {
  return (
    <section className="py-12 my-10 max-w-7xl mx-auto px-6 sm:px-8">
      <div
        className="relative overflow-hidden rounded-2xl bg-[#0f1113] text-white/90 shadow-2xl"
        style={{
          // dotted background: subtle repeating radial dots
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          padding: "48px",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 top-8 w-[760px] h-[380px] rounded-full blur-3xl transform -rotate-12"
          style={{
            background:
              "radial-gradient(closest-side, rgba(131,195,58,0.35), rgba(131,195,58,0.18) 30%, transparent 60%)",
          }}
        />
        {/* soft vignette / gradient overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 50% at 10% 10%, rgba(99,102,241,0.06), transparent 15%), radial-gradient(50% 50% at 90% 85%, rgba(124,58,237,0.05), transparent 20%)",
            mixBlendMode: "overlay",
          }}
        />

        {/* center content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center py-12">
          <motion.h1 initial={{opacity : 0,y:60}} viewport={{ once: true }} whileInView={{opacity:1,y:0}} transition={{duration : 1}} className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Let’s build something <span className="block">great together.</span>
          </motion.h1>

          <motion.p initial={{opacity : 0,x:60}} viewport={{ once: true }} whileInView={{opacity:1,x:0}} transition={{duration : 1}} className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-8">
            Whether you’re looking to collaborate, hire, or just say hello —
            feel free to reach out.
          </motion.p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-lime-400  font-medium text-black shadow-lg hover:scale-[1.01] transition-transform"
              style={{
                boxShadow:
                  "0 10px 30px rgba(99,102,241,0.14), 0 4px 10px rgba(99,102,241,0.08)",
              }}
            >
              <span className="sr-only">Send Message</span>
              Send Message
            </Link>
          </div>
        </div>

        {/* decorative bottom dots fade */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 80%)",
          }}
        />
      </div>
    </section>
  );
}

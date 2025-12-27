import React, { useRef } from "react";
import { motion } from "framer-motion";
import Crosshair from "../ui_components/Crosshair";

function Resume() {
  const containerRef = useRef(null);

  return (
    <section className="border-b border-neutral-800 py-28">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center text-4xl lg:text-5xl font-light tracking-tight"
      >
        My{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Resume
        </span>
      </motion.h2>

      {/* Resume Card */}
      <div
        ref={containerRef}
        className="relative mx-auto max-w-4xl h-[320px]
        rounded-3xl overflow-hidden
        border border-white/10
        bg-white/5 backdrop-blur-xl
        shadow-2xl"
      >
        {/* Crosshair Background */}
        <Crosshair containerRef={containerRef} color="#ffffff" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl lg:text-3xl font-light text-white"
          >
            Download My Resume
          </motion.h3>

          <p className="mt-4 max-w-xl text-neutral-400 text-sm lg:text-base">
            A detailed overview of my skills, experience, and projects.
          </p>

          {/* Download Button */}
          <motion.a
            href="https://drive.google.com/file/d/12OTo5MZ0JtIqpJAXxbaYRq-hsuYx_lYQ/view?usp=drivesdk"
            target="_blank"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2
            rounded-full px-8 py-4
            bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
            text-black font-semibold tracking-wide
            shadow-lg hover:shadow-pink-500/40 transition"
          >
            Download Resume
            <span className="text-lg">↓</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Resume;

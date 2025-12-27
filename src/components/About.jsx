import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import Cubes from "../ui_components/Cubes"

const About = () => {
  return (
    <section className="border-b border-neutral-800 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl lg:text-5xl font-light tracking-tight"
      >
        About{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Me
        </span>
      </motion.h1>

      <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2 items-center">
        
        {/* Image Card */}
        <div className="relative h-[520px] rounded-3xl overflow-hidden
          bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5
          border border-white/10 shadow-2xl">

          {/* Soft glow */}
          <div className="absolute inset-0 bg-purple-500/10 blur-3xl opacity-50" />

          {/* CENTERING LAYER */}
          <div className="absolute inset-0 flex items-center justify-center scale-[1.25]">
            <Cubes
              gridSize={7}
              maxAngle={45}
              radius={3}
              borderStyle="1px solid rgba(180,160,255,0.35)"
              faceColor="rgba(20,20,40,0.9)"
              rippleColor="#a78bfa"
              rippleSpeed={1.2}
              autoAnimate={true}
              rippleOnClick={true}
            />
          </div>

          {/* Depth vignette */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 pointer-events-none" />
        </div>


        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-neutral-300 leading-relaxed text-lg">
            {ABOUT_TEXT}
          </p>

          {/* Optional Highlights */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="rounded-full bg-purple-500/10 px-4 py-1 text-sm text-purple-300">
              Full Stack Developer
            </span>
            <span className="rounded-full bg-pink-500/10 px-4 py-1 text-sm text-pink-300">
              Next.js & MERN
            </span>
            <span className="rounded-full bg-red-500/10 px-4 py-1 text-sm text-red-300">
              UI/UX Focused
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

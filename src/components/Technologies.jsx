import React from "react";
import {
  RiReactjsLine
} from "react-icons/ri";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiCplusplus,
  SiJavascript,
  SiMysql
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import Magnet from "../ui_components/Magnet"

const floatVariant = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const techs = [
  { icon: <SiCplusplus />, name: "C++", color: "text-blue-400", d: 3 },
  { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400", d: 2.5 },
  { icon: <RiReactjsLine />, name: "React", color: "text-cyan-400", d: 2 },
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-white", d: 3.5 },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400", d: 2.8 },
  { icon: <SiMysql />, name: "MySQL", color: "text-blue-300", d: 3.2 },
  { icon: <BiLogoPostgresql />, name: "PostgreSQL", color: "text-indigo-300", d: 4 },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400", d: 3.6 },
  { icon: <SiExpress />, name: "Express", color: "text-gray-300", d: 2.7 },
];

const Technologies = () => {
  return (
    <section className="border-b border-neutral-800 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl lg:text-5xl font-light tracking-tight"
      >
        Technologies{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          I Use
        </span>
      </motion.h1>
      <Magnet padding={50} disabled={false} magnetStrength={25}>
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            variants={floatVariant(tech.d)}
            initial="initial"
            animate="animate"
            className="group relative"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl 
              bg-white/5 backdrop-blur-lg 
              border border-white/10
              shadow-lg
              transition-all duration-300
              group-hover:scale-110
              group-hover:border-cyan-400/40
              group-hover:shadow-cyan-400/20"
            >
              
              <span className={`text-5xl ${tech.color}`}>
                {tech.icon}
              </span>
            </div>

            {/* Tooltip */}
            <span className="absolute left-1/2 -translate-x-1/2 mt-3
              text-sm text-neutral-300 opacity-0
              group-hover:opacity-100 transition">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
      </Magnet>
    </section>
  );
};

export default Technologies;

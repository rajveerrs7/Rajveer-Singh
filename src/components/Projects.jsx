import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="border-b border-neutral-800 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl lg:text-5xl font-light tracking-tight"
      >
        Featured{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h1>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group grid gap-8 lg:grid-cols-2 items-center"
          >
            {/* Image */}
            
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full border border-fuchsia-400/20 
                    bg-fuchsia-400/10 px-3 py-1 text-xs 
                    text-fuchsia-300 backdrop-blur-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

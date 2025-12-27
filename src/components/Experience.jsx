import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.5 }}
      className='my-20 text-center text-4xl'>
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{experience.role} - <span className='font-light text-neutral-400'>{experience.company}</span></h6>
              <p className='text-sm text-neutral-400'>{experience.description}</p>
              {experience.technologies.map((tech, techIndex) => (
                <span key={techIndex} className='mr-2 inline-block rounded-full bg-neutral-800 px-3 py-1 text-xs font-semibold text-fuchsia-300'>{tech}</span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
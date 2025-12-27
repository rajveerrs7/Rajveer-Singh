import React from "react";
import { HERO_CONTENT } from "../constants";
import myphoto from "../assets/myphoto.jpeg"
import { motion } from "framer-motion";
import BlurText from "../ui_components/BlurText";
import ProfileCard from "../ui_components/ProfileCard"
import DecryptedText from "../ui_components/DecryptedText";

const textVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  },
});

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
};

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <section className="border-b border-neutral-800 pb-24">
      <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <BlurText
            text="Rajveer Singh"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl mb-8"
          />

          <span className="mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-3xl text-transparent">
            <DecryptedText
            text="Full Stack Developer"
            speed={100}
            maxIterations={20}
            characters="ABCD1234!?"
            sequential={true}
            className="revealed"
            animateOn="view"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            />
          </span>

          <motion.p
            variants={textVariant(0.6)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-neutral-400 leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg shadow-xl">
            <ProfileCard
              imageSrc={myphoto}
              altText="Full Stack Developer"
              captionText=""
              containerHeight="500px"
              containerWidth="400px"
              imageHeight="500px"
              imageWidth="400px"
              rotateAmplitude={5}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  Rajveer Singh
                </p>
              }
            />
            <div className="inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

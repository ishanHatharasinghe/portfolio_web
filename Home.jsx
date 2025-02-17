import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import cv from "./../assets/cv.pdf";
import bg from "./../assets/bg6.jpg";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const handleOpenPDF = () => {
    window.open(cv, "_blank");
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center  text-white overflow-hidden"
    >
      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12"
      >
        {/* Single Column Layout */}
        <div className="space-y-6 text-center">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mt-16"
          >
            <Typewriter
              options={{
                strings: [
                  "<span style='color: #ff6347;'>Hi! I'm Ishan Hatharasinghe</span>",
                  "<span style='color: #8a2be2;'>I'm an Electronics Engineer</span>",
                  "<span style='color: #3cb371;'>I'm a UI/UX Designer</span>",
                  "<span style='color: #ff4500;'>I'm a Web Developer</span>",
                  "<span style='color: #20b2aa;'>I'm a Graphic Designer</span>",
                  "<span style='color: #4F14FFFF;'>Welcome to my Portfolio...</span>"
                ],
                autoStart: true,
                loop: true,
                delay: 100, // Slower typing speed
                deleteSpeed: 40, // Slower delete speed
                wrapperClassName: "typewriter-text",
                cursorClassName: "typewriter-cursor"
              }}
            />
          </motion.h1>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg font-semibold leading-relaxed"
          >
            UG in HND Engineering (Electrical and Electronics) | UG in BIT
            University of Moratuwa | Data Science, Cloud, and Electronics
            Engineering Intern (SLTMobitel Digital Lab - Embryo Innovation
            Center, Maradana) | Freelancer Graphic Designer
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToContact}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all duration-300 shadow-lg"
              aria-label="Contact me"
            >
              <FaEnvelope />
              Contact Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenPDF}
              className="flex items-center gap-3 px-6 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300"
              aria-label="Download CV"
            >
              <FaDownload />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;

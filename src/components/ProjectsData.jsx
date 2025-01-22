import React, { useState } from "react";
import ProjectVpms from "./../components/projectvpms";
import Projectllm from "./../components/projectllm";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import bg from "./../assets/bg6.jpg";
import ProjectVpmslogo from "./../assets/Project1/logo.png";
import Projectllmlogo from "./../assets/Project2/logo.png";

const ProjectsData = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const handleClick = (project) => {
    setPopupContent(project);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent(null);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#19003FFF] via-[#03001BFF] to-[#06173CFF] text-white overflow-hidden py-16"
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%"
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12"
      >
        {/* Projects Title */}
        <div className="space-y-6 text-center">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="py-10 px-6 sm:px-8 lg:px-16 xl:px-24 hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold text-[#f3e8ff]"
          >
            Projects
          </motion.h2>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6  transition-all duration-100 transform "
          >
            Explore some of my recent works, where I applied technical skills
            and creativity to deliver impactful solutions.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ProjectVpms Section */}
          <section
            id="ProjectVpms"
            data-aos="fade-up"
            className="border p-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="bg-[#000718FF] p-4 rounded-md text-[#D1D5DB]">
              <motion.img
                src={ProjectVpmslogo}
                alt="ProjectVpms Logo"
                className="cursor-pointer hover:scale-105 transition-all duration-200 w-20 h-20 mx-auto"
                onClick={() => handleClick(<ProjectVpms />)}
              />
              <h3
                className="text-center text-xl font-semibold mt-4 text-[#e5e7eb] cursor-pointer hover:scale-105"
                onClick={() => handleClick(<ProjectVpms />)}
              >
                Project VPMS
              </h3>
            </div>
          </section>

          {/* Projectllm Section */}
          <section
            id="Projectllm"
            data-aos="fade-up"
            className="border p-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="bg-[#000718FF] p-4 rounded-md text-[#D1D5DB]">
              <motion.img
                src={Projectllmlogo}
                alt="Project LLM Logo"
                className="cursor-pointer hover:scale-105 transition-all duration-200 w-20 h-20 mx-auto"
                onClick={() => handleClick(<Projectllm />)}
              />
              <h3
                className="text-center text-xl font-semibold mt-4 text-[#e5e7eb] cursor-pointer hover:scale-105"
                onClick={() => handleClick(<Projectllm />)}
              >
                Project LLM
              </h3>
            </div>
          </section>
        </div>
      </motion.div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative bg-[#1A1A2E] text-white rounded-lg shadow-lg p-6 sm:p-8 max-w-3xl w-full mx-4"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white text-xl sm:text-2xl hover:text-red-500 transition-all duration-200"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Popup Content */}
            <div className="max-h-[70vh] overflow-y-auto p-2 sm:p-4">
              {popupContent}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProjectsData;

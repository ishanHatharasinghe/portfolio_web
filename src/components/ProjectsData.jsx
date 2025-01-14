import React, { useState } from "react";
import ProjectVpms from "./../components/projectvpms";
import Projectllm from "./../components/projectllm";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsData = () => {
  // State to toggle visibility of each section
  const [showVpms, setShowVpms] = useState(false);
  const [showLlm, setShowLlm] = useState(false);

  return (
    <section
      id="projects"
      className="text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className="py-10 px-6 sm:px-8 lg:px-16 xl:px-24 hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold  text-[#f3e8ff]">
          Projects
        </h2>
        <div className="mb-12 h-2 w-80 sm:w-96 lg:w-120 bg-gradient-to-r from-[#FF0000FF] to-[#4400FFFF] rounded-md shadow-lg mx-auto mb-6"></div>
        <p className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6 hover:text-[#5E63FFFF] transition-all duration-100 transform hover:scale-105">
          Explore some of my recent works, where I applied technical skills and
          creativity to deliver impactful solutions.
        </p>
      </div>

      {/* ProjectVpms Section */}
      <section
        id="ProjectVpms"
        data-aos="fade-up"
        className="border p-6 rounded-lg mb-6 transition-all duration-300 ease-in-out hover:shadow-xl"
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowVpms(!showVpms)}
          aria-expanded={showVpms}
          aria-controls="vpms-content"
        >
          <h3 className="text-xl font-semibold">
            🚗 Vehicle Parking Management System (C#)
          </h3>
          <span
            className={`transform transition-transform duration-300 ${
              showVpms ? "rotate-90 text-[#FF0000]" : "rotate-0"
            }`}
          >
            ➤
          </span>
        </div>
        {showVpms && (
          <div
            id="vpms-content"
            className="mt-4 bg-[#000718FF] p-4 rounded-md text-[#D1D5DB] transition-all duration-500 ease-in-out"
          >
            <ProjectVpms />
          </div>
        )}
      </section>

      {/* Projectllm Section */}
      <section
        id="Projectllm"
        data-aos="fade-up"
        className="border p-6 rounded-lg mb-6 transition-all duration-300 ease-in-out hover:shadow-xl"
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowLlm(!showLlm)}
          aria-expanded={showLlm}
          aria-controls="llm-content"
        >
          <h3 className="text-xl font-semibold">🤖 LLM Chatbot (React)</h3>
          <span
            className={`transform transition-transform duration-300 ${
              showLlm ? "rotate-90 text-[#FF0000]" : "rotate-0"
            }`}
          >
            ➤
          </span>
        </div>
        {showLlm && (
          <div
            id="llm-content"
            className="mt-4 bg-[#000718FF] p-4 rounded-md text-[#D1D5DB] transition-all duration-500 ease-in-out"
          >
            <Projectllm />
          </div>
        )}
      </section>
    </section>
  );
};

export default ProjectsData;

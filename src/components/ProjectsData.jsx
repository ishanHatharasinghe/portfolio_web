import React from "react";
import { motion } from "framer-motion";
import my from "./../assets/Project1/Slide1.JPG";
import my2 from "./../assets/Project2/page.jpg";
import my3 from "./../assets/Project3/page.jpeg";
import bg from "./../assets/Home Section/bg.png";
import robot from "./../assets/robot3.png";

const ProjectsData = () => {
  // Placeholder function for pending projects
  const handlePendingClick = () => {
    alert("This project is still in progress!");
  };

  return (
    <div
      id="projects"
      className="h-full relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-80"
        />

        {/* Robot Image (Over Background) */}
        <img
          src={robot}
          alt="robot"
          className="absolute inset-0 mx-auto w-full h-auto object-contain opacity-100 z-10"
        />
      </div>
      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 mt-16 z-10">
        <div className="rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-gray-700/30">
          <h2 className="font-italiana text-5xl md:text-[160px] text-white tracking-wide text-center">
            Creative Ventures
          </h2>
          <p className="text-[16px] text-gray-300 leading-relaxed text-center mb-7">
            Explore some of my recent works, where I applied technical skills
            and creativity to deliver impactful solutions.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Vehicle Parking Management System */}
            <div className="group relative w-full h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Card content */}
              <div className="flex flex-col items-center justify-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 group-hover:scale-[1.05] h-full">
                <img
                  src={my}
                  alt="profile"
                  className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <h1 className="font-bold text-white text-lg md:text-xl text-center">
                  Vehicle Parking Management System (VPMS)
                </h1>
                <h5 className="font-semibold text-xs md:text-sm text-gray-300 mb-3">
                  University of Moratuwa
                </h5>
                <p className="text-white/80 text-xs md:text-sm text-center leading-relaxed">
                  A desktop application designed to automate parking operations,
                  built with C# and SQL.
                </p>
                <a
                  href="https://www.linkedin.com/posts/ishan-nilaksha-686461308_mysql-vpms-clanguage-activity-7268195521146572800-T8Mi?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Project 2: MOBITEL AI-DRIVEN EDGE SALES MANAGEMENT SYSTEM */}
            <div className="group relative w-full h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Card content */}
              <div className="flex flex-col items-center justify-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 group-hover:scale-[1.05] h-full">
                <img
                  src={my3}
                  alt="profile"
                  className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <h1 className="font-bold text-white text-lg md:text-xl text-center">
                  MOBITEL AI-DRIVEN EDGE SALES MANAGEMENT SYSTEM
                </h1>
                <p className="text-white/80 text-xs md:text-sm text-center leading-relaxed">
                  The Mobitel AI-driven Edge Sales Management System is a
                  comprehensive mobile application designed to assist SIM
                  dealers in Sri Lanka. Many dealers lack awareness of prepaid
                  and postpaid packages, leading to inefficiencies in customer
                  service and sales. This system introduces an intelligent
                  package recommendation engine to suggest the best plans based
                  on platform preferences, budget, and communication needs
                  (voice and SMS).
                </p>
                <a
                  href="https://example.com/llm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>
            {/* Project 3: Large Language Model (LLM) */}
            <div className="group relative w-full h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Card content */}
              <div className="flex flex-col items-center justify-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 group-hover:scale-[1.05] h-full">
                <img
                  src={my2}
                  alt="profile"
                  className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <h1 className="font-bold text-white text-lg md:text-xl text-center">
                  Large Language Model (LLM)
                </h1>
                <p className="text-white/80 text-xs md:text-sm text-center leading-relaxed">
                  A system designed to read documents and answer questions using
                  Python, React, FastAPI, and APIs from Gemini, OpenAI, and
                  Hugging Face.
                </p>
                <a
                  href="https://example.com/llm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsData;

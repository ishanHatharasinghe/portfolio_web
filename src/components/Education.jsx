import React from "react";
import bg from "./../assets/Education/bg.jpeg";
import my from "./../assets/Education/group1.jpg";
import my2 from "./../assets/Education/group2.jpg";
import robot from "./../assets/Home Section/robot2.png";
import { ArrowRight } from "lucide-react";
import "./button.css";

const Education = () => {
  return (
    <div className="h-full relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent" />
      </div>
      {/* Main content */}
      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 mt-16 z-10">
        <div className="rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-gray-700/30">
          {/* Top header */}
          <div className="w-full text-center"></div>
          {/* Center content */}
          <div className="h-full flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-[70px] w-full px-4 flex justify-center">
              {/* Left Card */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Card content */}
                <div className="flex flex-col items-center justify-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 group-hover:scale-[1.05]">
                  <img
                    src={my2}
                    alt="profile"
                    className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <h1 className="font-bold text-white text-lg md:text-xl text-center">
                    Bachelor of Information Technology
                  </h1>
                  <h5 className="font-semibold text-xs md:text-sm text-gray-300 mb-3">
                    University of Moratuwa
                  </h5>
                  <p className="text-white/80 text-xs md:text-sm text-center leading-relaxed">
                    Mastered advanced concepts in computer science, including
                    cloud computing, artificial intelligence, and data
                    structures, building a strong foundation for creating
                    scalable solutions.
                  </p>
                </div>
              </div>
              {/* Title section */}
              <div className="relative flex flex-col items-center justify-center z-20">
                <div className="mb-[500px] relative text-center mb-16 z-10">
                  {/* "At the" text */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="absolute top-6 left-1/2 transform -translate-x-1/2 font-italiana text-white/90 text-[20px]">
                      Journey of
                    </span>
                    <h1 className="font-italiana text-5xl md:text-[200px] text-white tracking-wide">
                      Education
                    </h1>
                  </div>
                </div>
                <div className="absolute top-0 flex justify-center items-center z-20 mt-[100px]">
                  <div className="relative group h-[80vh] w-[100vw] object-cover"></div>
                </div>
              </div>
              {/* Right Card */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Card content */}
                <div className="flex flex-col items-center justify-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 group-hover:scale-[1.05]">
                  <img
                    src={my}
                    alt="profile"
                    className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <h1 className="font-bold text-white text-lg md:text-xl text-center">
                    Higher National Diploma Electrical and Electronics
                    Engineering
                  </h1>
                  <h5 className="font-semibold text-xs md:text-sm text-gray-300 mb-3">
                    Advanced Technological Institute, Galle
                  </h5>
                  <p className="text-white/80 text-xs md:text-sm text-center leading-relaxed">
                    Specialized in Telecommunication and Electronics, gaining
                    hands-on experience and industry-relevant technical
                    expertise through practical applications and project-based
                    learning.
                  </p>
                </div>
              </div>
              {/* Robot section */}
              <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 group">
                {/* Robot glow */}
                <div className="absolute w-[100%] h-[100%] bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative transition-transform duration-500 group-hover:scale-[1.05]">
                  <img src={robot} alt="robot" className="h-[90vh] w-[45vw]" />
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center justify-center w-full">
              {/* Titles */}
              <div className="w-full text-center mb-8">
                <h1 className="font-italiana text-4xl md:text-[200px] text-white tracking-wide">
                  Journey of Education
                </h1>
              </div>

              {/* Left Card (Bachelor of IT) */}
              <div className="group relative w-full max-w-xs mx-auto mb-8">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Card content */}
                <div className="flex flex-col items-center justify-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 group-hover:scale-[1.05]">
                  <img
                    src={my2}
                    alt="profile"
                    className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <h1 className="font-bold text-white text-lg text-center">
                    Bachelor of Information Technology
                  </h1>
                  <h5 className="font-semibold text-xs text-gray-300 mb-3">
                    University of Moratuwa
                  </h5>
                  <p className="text-white/80 text-xs text-center leading-relaxed">
                    Mastered advanced concepts in computer science, including
                    cloud computing, artificial intelligence, and data
                    structures, building a strong foundation for creating
                    scalable solutions.
                  </p>
                </div>
              </div>
              {/* Right Card (HND EEE) */}
              <div className="group relative w-full max-w-xs mx-auto mb-8">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Card content */}
                <div className="flex flex-col items-center justify-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-500 group-hover:scale-[1.05]">
                  <img
                    src={my}
                    alt="profile"
                    className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <h1 className="font-bold text-white text-lg text-center">
                    Higher National Diploma Electrical and Electronics
                    Engineering
                  </h1>
                  <h5 className="font-semibold text-xs text-gray-300 mb-3">
                    Advanced Technological Institute, Galle
                  </h5>
                  <p className="text-white/80 text-xs text-center leading-relaxed">
                    Specialized in Telecommunication and Electronics, gaining
                    hands-on experience and industry-relevant technical
                    expertise through practical applications and project-based
                    learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

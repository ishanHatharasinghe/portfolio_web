import React from "react";
import bg from "./../assets/Education/bg2.jpg";
import my from "./../assets/Education/group1.jpg";
import my2 from "./../assets/Education/group2.jpg";
import robot from "./../assets/Home Section/robot3.png";
import { ArrowRight, ExternalLink, GraduationCap } from "lucide-react";
import "./button.css";

const Education = () => {
  return (
    <div className="h-full relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background with enhanced gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="blur-[3px] w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 mt-16 z-10">
        <div className="rounded-[70px] w-full h-full p-6 border-2 mb-4 border-gray-700/30 backdrop-blur-sm">
          {/* Top header */}
          <div className="w-full text-center"></div>

          {/* Center content */}
          <div className="h-full flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-[70px] w-full px-4 flex justify-center">
              {/* Left Card - Bachelor of IT */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-purple-400/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />

                {/* Card content with glassmorphism */}
                <div className="flex flex-col items-center justify-center relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-6 border border-gray-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-orange-400/40">
                  {/* Image with modern frame */}
                  <div className="relative w-full mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={my2}
                      alt="profile"
                      className="w-full rounded-2xl relative z-10 transition-all duration-500 group-hover:scale-[1.03] shadow-lg"
                    />
                    <div className="absolute top-2 right-2 bg-orange-500/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <GraduationCap className="w-4 h-4 text-orange-300" />
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                    <h1 className="font-bold text-white text-lg md:text-xl leading-tight bg-gradient-to-r from-orange-200 to-purple-200 bg-clip-text text-transparent">
                      Bachelor of Information Technology
                    </h1>
                    <h5 className="font-semibold text-xs md:text-sm text-orange-300/80 mb-3">
                      University of Moratuwa
                    </h5>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      Mastered advanced concepts in computer science, including
                      cloud computing, artificial intelligence, and data
                      structures, building a strong foundation for creating
                      scalable solutions.
                    </p>
                  </div>

                  {/* Modern action buttons */}
                  <div className="flex gap-3 mt-6 w-full">
                    <a
                      href="https://uom.lk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn bg-gradient-to-r from-orange-500/20 to-purple-500/20 hover:from-orange-500/40 hover:to-purple-500/40 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/60 rounded-xl px-4 py-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20"
                    >
                      <div className="flex items-center justify-center gap-2 text-white/80 group-hover/btn:text-white text-xs font-medium">
                        <span>Visit University</span>
                        <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:scale-110" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Title section with enhanced typography */}
              <div className="relative flex flex-col items-center justify-center z-20">
                <div className="mb-[500px] relative text-center mb-16 z-10">
                  {/* Enhanced title styling */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="absolute top-6 left-1/2 transform -translate-x-1/2 font-italiana text-white/70 text-[20px] tracking-wider">
                      Journey of
                    </span>
                    <h1 className="font-italiana text-5xl md:text-[200px] text-transparent bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text tracking-wide drop-shadow-2xl">
                      Education
                    </h1>
                  </div>
                </div>
                <div className="absolute top-0 flex justify-center items-center z-20 mt-[100px]">
                  <div className="relative group h-[80vh] w-[100vw] object-cover"></div>
                </div>
              </div>

              {/* Right Card - HND EEE */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />

                {/* Card content with glassmorphism */}
                <div className="flex flex-col items-center justify-center relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-6 border border-gray-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-cyan-400/40">
                  {/* Image with modern frame */}
                  <div className="relative w-full mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={my}
                      alt="profile"
                      className="w-full rounded-2xl relative z-10 transition-all duration-500 group-hover:scale-[1.03] shadow-lg"
                    />
                    <div className="absolute top-2 right-2 bg-cyan-500/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <GraduationCap className="w-4 h-4 text-cyan-300" />
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                    <h1 className="font-bold text-white text-lg md:text-xl leading-tight bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
                      Higher National Diploma Electrical and Electronics
                      Engineering
                    </h1>
                    <h5 className="font-semibold text-xs md:text-sm text-cyan-300/80 mb-3">
                      Advanced Technological Institute, Galle
                    </h5>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      Specialized in Telecommunication and Electronics, gaining
                      hands-on experience and industry-relevant technical
                      expertise through practical applications and project-based
                      learning.
                    </p>
                  </div>

                  {/* Modern action buttons */}
                  <div className="flex gap-3 mt-6 w-full">
                    <a
                      href="https://hndelabuduwa.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/40 hover:to-cyan-500/40 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 rounded-xl px-4 py-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <div className="flex items-center justify-center gap-2 text-white/80 group-hover/btn:text-white text-xs font-medium">
                        <span>Visit Institute</span>
                        <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:scale-110" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced Robot section */}
              <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 group">
                {/* Multi-layered robot glow */}
                <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-orange-500/15 via-purple-500/15 to-cyan-500/15 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute w-[100%] h-[100%] bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative transition-all duration-700 group-hover:scale-[1.03] drop-shadow-2xl">
                  <img
                    src={robot}
                    alt="robot"
                    className="h-[100vh] filter drop-shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Layout with modern enhancements */}
            <div className="md:hidden flex flex-col items-center justify-center w-full">
              {/* Enhanced mobile titles */}
              <div className="w-full text-center mb-8">
                <h1 className="font-italiana text-4xl text-transparent bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text tracking-wide drop-shadow-lg">
                  Journey of Education
                </h1>
              </div>

              {/* Mobile Left Card (Bachelor of IT) */}
              <div className="group relative w-full max-w-xs mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="flex flex-col items-center justify-center relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-6 border border-gray-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="relative w-full mb-4">
                    <img
                      src={my2}
                      alt="profile"
                      className="w-full rounded-2xl transition-all duration-500 group-hover:scale-[1.02] shadow-lg"
                    />
                  </div>
                  <h1 className="font-bold text-white text-lg text-center bg-gradient-to-r from-orange-200 to-purple-200 bg-clip-text text-transparent">
                    Bachelor of Information Technology
                  </h1>
                  <h5 className="font-semibold text-xs text-orange-300/80 mb-3">
                    University of Moratuwa
                  </h5>
                  <p className="text-white/70 text-xs text-center leading-relaxed mb-4">
                    Mastered advanced concepts in computer science, including
                    cloud computing, artificial intelligence, and data
                    structures, building a strong foundation for creating
                    scalable solutions.
                  </p>
                  <a
                    href="https://uom.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 hover:from-orange-500/40 hover:to-purple-500/40 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/60 rounded-xl px-4 py-2.5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-2 text-white/80 hover:text-white text-xs font-medium">
                      <span>Visit University</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Mobile Right Card (HND EEE) */}
              <div className="group relative w-full max-w-xs mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="flex flex-col items-center justify-center relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-6 border border-gray-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="relative w-full mb-4">
                    <img
                      src={my}
                      alt="profile"
                      className="w-full rounded-2xl transition-all duration-500 group-hover:scale-[1.02] shadow-lg"
                    />
                  </div>
                  <h1 className="font-bold text-white text-lg text-center bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    Higher National Diploma Electrical and Electronics
                    Engineering
                  </h1>
                  <h5 className="font-semibold text-xs text-cyan-300/80 mb-3">
                    Advanced Technological Institute, Galle
                  </h5>
                  <p className="text-white/70 text-xs text-center leading-relaxed mb-4">
                    Specialized in Telecommunication and Electronics, gaining
                    hands-on experience and industry-relevant technical
                    expertise through practical applications and project-based
                    learning.
                  </p>
                  <a
                    href="https://hndelabuduwa.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/40 hover:to-cyan-500/40 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 rounded-xl px-4 py-2.5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-2 text-white/80 hover:text-white text-xs font-medium">
                      <span>Visit Institute</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
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

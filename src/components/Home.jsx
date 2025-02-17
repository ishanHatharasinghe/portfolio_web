import React from "react";
import bg from "./../assets/Home Section/bg.png";
import my from "./../assets/Home Section/my.png";
import robot from "./../assets/Home Section/robot.png";
import slt from "./../assets/Home Section/slt.png";
import aw from "./../assets/Home Section/aw.png";
import lm from "./../assets/Home Section/lm.png";
import { ArrowRight } from "lucide-react";
import "./button.css";

const Home = () => {
  return (
    <div className="h-full relative min-h-full w-full bg-black overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent" />
      </div>
      {/* Main content */}
      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 mt-16 z-10">
        <div className="rounded-[70px] w-full h-full p-12 border border-2 mb-4 border-gray-700/30">
          {/* Top header */}
          <div className="w-full text-center">
            <h3 className="font-italiana text-gray-200 text-sm md:text-base font-extralight tracking-wider">
              Electronics Engineer | Software Developer | Designer
            </h3>
          </div>
          {/* Center content */}
          <div className="h-full flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-[70px] w-full px-4 flex justify-center">
              {/* Profile card */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-500/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Card content */}
                <div className="flex flex-col items-center justify-center relative border border-white/10 bg-black/40 backdrop-blur-md rounded-[2rem] p-1 transition-transform duration-500 group-hover:scale-[1.05]">
                  <p className="mb-3 font-italiana text-gray-400 text-[13px] md:text-sm text-center leading-relaxed">
                    <img
                      src={my}
                      alt="profile"
                      className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    I CRAFT THE FUTURE ONE INNOVATIVE SOLUTION AT A TIME
                  </p>
                  <button className="button">Connect with me</button>
                </div>
              </div>
              {/* Title section */}
              <div className="relative flex flex-col items-center justify-center z-20">
                {/* Title section */}
                <div className="mb-[500px] relative text-center mb-16 z-10">
                  {/* "At the" text */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="absolute top-6 left-12 font-italiana text-white/90 text-[20px]">
                      At the
                    </span>
                    <h1 className="font-italiana text-5xl md:text-[200px] text-white tracking-wide">
                      intersection
                    </h1>
                  </div>
                  {/* Subtitle */}
                  <p className="absolute top-30 right-0 text-right font-italiana text-gray-400 text-[20px] md:text-lg tracking-wider">
                    of electronics and code
                  </p>
                </div>
                <div className="absolute top-0 flex justify-center items-center z-20 mt-[100px]">
                  <div className="relative group h-[80vh] w-[100vw] object-cover"></div>
                </div>
              </div>
              {/* Project cards */}
              <div className="absolute bottom-0 mt-[300px] group relative z-30">
                {/* Card content */}
                <div className="mb-4 relative absolute top-40 left-24 border border-white/10 bg-black/40 backdrop-blur-md rounded-[2rem] p-6 transition-transform duration-500 group-hover:scale-[1.05]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.1]">
                      <img
                        src={slt}
                        alt="Masked Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="flex flex-row gap-[100px] font-italiana text-white font-light">
                        RESENT PROJECT <ArrowRight className="w-5" />
                      </h3>
                      <p className="text-gray-400 text-sm">
                        market edge sales management system
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative absolute left-12 top-40 border border-white/10 bg-black/40 backdrop-blur-md rounded-[2rem] p-6 transition-transform duration-500 group-hover:scale-[1.05]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.1]">
                      <img
                        src={lm}
                        alt="Masked Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="flex flex-row gap-[100px] font-italiana text-white font-light">
                        Lassana Moments <ArrowRight className="w-5" />
                      </h3>
                      <p className="text-gray-400 text-sm">
                        The Platform for find your Photographer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Robot section */}
              <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 group">
                {/* Robot glow */}
                <div className="absolute w-[100%] h-[100%] bg-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative transition-transform duration-500 group-hover:scale-[1.05]">
                  <img src={robot} alt="robot" className="h-[90vh] w-[45vw]" />
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden h-full flex flex-col items-center justify-center h-full w-full">
              {/* Titles */}
              <div className="w-full text-center mb-8">
                <h1 className="font-italiana text-5xl md:text-[200px] text-white tracking-wide">
                  At the intersection
                </h1>
                <p className="font-italiana text-gray-400 text-base md:text-lg tracking-wider">
                  of electronics and code
                </p>
              </div>

              {/* Profile Card */}
              <div className="group relative w-full max-w-xs mx-auto mb-5">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-500/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Card content */}
                <div className="flex flex-col items-center justify-center relative border border-white/10 bg-black/40 backdrop-blur-md rounded-[2rem] p-4 transition-transform duration-500 group-hover:scale-[1.05]">
                  <p className="mb-3 font-italiana text-gray-400 text-[13px] md:text-sm text-center leading-relaxed">
                    <img
                      src={my}
                      alt="profile"
                      className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    I CRAFT THE FUTURE ONE INNOVATIVE SOLUTION AT A TIME
                  </p>
                  <button className="button">Connect with me</button>
                </div>
              </div>
              {/* Project Cards */}
              <div className="w-full flex flex-col gap-4">
                {/* Card 1 */}
                <div className="relative border border-white/10 bg-black/40 backdrop-blur-md rounded-[2rem] p-4 transition-transform duration-500 group-hover:scale-[1.05]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.1]">
                      <img
                        src={slt}
                        alt="Masked Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="flex flex-row gap-[100px] font-italiana text-white font-light">
                        RESENT PROJECT <ArrowRight className="w-5" />
                      </h3>
                      <p className="text-gray-400 text-sm">
                        market edge sales management system
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="relative border border-white/10 bg-black/40 backdrop-blur-md rounded-[2rem] p-4 transition-transform duration-500 group-hover:scale-[1.05]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.1]">
                      <img
                        src={lm}
                        alt="Masked Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="flex flex-row gap-[100px] font-italiana text-white font-light">
                        Lassana Moments <ArrowRight className="w-5" />
                      </h3>
                      <p className="text-gray-400 text-sm">
                        The Platform for find your Photographer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

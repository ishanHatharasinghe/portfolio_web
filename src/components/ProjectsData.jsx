import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import my from "./../assets/Project1/Slide1.JPG";
import my2 from "./../assets/Project2/page.jpg";
import my3 from "./../assets/Project3/page.jpeg";
import my4 from "./../assets/Project4/page.jpg";
import my5 from "./../assets/Project 5 taxi meter/1.jpg";
import my6 from "./../assets/Project 5 taxi meter/2.jpg";
import my7 from "./../assets/Project 5 taxi meter/3.jpg";
import my8 from "./../assets/Project 5 taxi meter/4.jpg";
import my9 from "./../assets/Project 6 SAEDS/1.JPG";
import my10 from "./../assets/Project 6 SAEDS/2.JPG";
import my11 from "./../assets/Project 6 SAEDS/3.JPG";
import my12 from "./../assets/Project 6 SAEDS/4.JPG";
import my13 from "./../assets/Project 6 SAEDS/5.JPG";
import my14 from "./../assets/Project 6 SAEDS/6.JPG";
import my15 from "./../assets/Project 6 SAEDS/7.JPG";
import my16 from "./../assets/Project 6 SAEDS/8.JPG";
import my17 from "./../assets/Project 6 SAEDS/9.JPG";
import my18 from "./../assets/Project 6 SAEDS/10.JPG";
import my19 from "./../assets/Project 6 SAEDS/11.JPG";
import my20 from "./../assets/Project 6 SAEDS/12.JPG";
import my21 from "./../assets/Project 6 SAEDS/13.JPG";
import my22 from "./../assets/Project 6 SAEDS/14.JPG";
import my23 from "./../assets/Project 6 SAEDS/15.JPG";
import my24 from "./../assets/Project 6 SAEDS/16.JPG";
import my26 from "./../assets/Project 6 SAEDS/17.JPG";
import my27 from "./../assets/Project 6 SAEDS/18.JPG";

import bg from "./../assets/Home Section/bg.png";
import robot from "./../assets/robot3.png";

import { ArrowRight, Code, Cpu, Palette, Boxes } from "lucide-react";
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
              <div className="flex flex-col items-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-md transition-transform duration-500 group-hover:scale-[1.05] h-full">
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
                <p className="text-white/80 text-xs md:text-sm text-center leading-relaxed my-4">
                  A desktop application designed to automate parking operations,
                  built with C# and SQL.
                </p>
                <div className="mt-auto flex flex-col items-center">
                  <a
                    href="https://www.linkedin.com/posts/ishan-nilaksha-686461308_mysql-vpms-clanguage-activity-7268195521146572800-T8Mi?utm_source=share&utm_medium=member_desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Read More →
                  </a>
                  <div className="flex items-center mt-3 text-white">
                    <Boxes className="w-4 h-4" />
                    <p className="text-[11px] p-2 font-thin">C#, SQL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Taxi Meter */}
            <div className="group relative w-full h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Card content */}
              <div className="flex flex-col items-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-md transition-transform duration-500 group-hover:scale-[1.05] h-full">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="w-full rounded-2xl mb-4"
                >
                  <SwiperSlide>
                    <img
                      src={my5}
                      alt="my5"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my6}
                      alt="my6"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my7}
                      alt="my7"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my8}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                </Swiper>

                <h1 className="font-bold text-white text-lg md:text-xl text-center">
                  TaxiMeter
                </h1>
                <h5 className="font-semibold text-xs md:text-sm text-gray-300 mb-3">
                  HND in Electrical and Electronics Engineering
                </h5>
                <p className="text-white/80 text-xs md:text-sm text-center leading-relaxed my-4">
                  Fuel Price Manager is your all-in-one solution to stay
                  informed, plan smarter, and save more when it comes to fuel
                  expenses across Sri Lanka. Whether you're a daily commuter,
                  logistics operator, or just want to track fuel trends, our app
                  helps you monitor real-time fuel prices, receive alerts on
                  price changes, and compare rates across fuel types and
                  locations.
                </p>
                <div className="mt-auto flex flex-col items-center">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Read More →
                  </a>
                  <div className="flex items-center mt-3 text-white">
                    <Boxes className="w-4 h-4" />
                    <p className="text-[11px] p-2 font-thin">
                      React, JavaScript, Firebase
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project SAEDS */}
            <div className="group relative w-full h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Card content */}
              <div className="flex flex-col items-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-md transition-transform duration-500 group-hover:scale-[1.05] h-full">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="w-full rounded-2xl mb-4"
                >
                  <SwiperSlide>
                    <img
                      src={my9}
                      alt="my9"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my10}
                      alt="my6"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my11}
                      alt="my7"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my12}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my13}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my14}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my15}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my16}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my17}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my18}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my19}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my20}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my21}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my22}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my23}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my24}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={my26}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={my27}
                      alt="my8"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </SwiperSlide>
                </Swiper>

                <h1 className="font-bold text-white text-lg md:text-xl text-center">
                  Smart Automated Elephant Deterrent System
                </h1>
                <h5 className="font-semibold text-xs md:text-sm text-gray-300 mb-3">
                  HND in Electrical and Electronics Engineering
                </h5>
                <p className="text-white/80 text-xs md:text-sm text-center leading-relaxed my-4">
                  Human-elephant conflict in Sri Lanka is a growing crisis, with
                  elephants destroying crops, property, and even risking lives.
                  Traditional electric fences are inefficient and often fail.
                  Our Smart Automated Elephant Deterrent System combines
                  cutting-edge tech to protect villages while conserving energy
                  and wildlife!.
                </p>
                <div className="mt-auto flex flex-col items-center">
                  <a
                    href="https://www.linkedin.com/posts/ishan-nilaksha-686461308_techforgood-wildlifeconservation-smartfarming-activity-7332505340820742144-ftA3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5goIYBOugp24AsFvYPjo8YMjWyqds3wS4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Read More →
                  </a>
                  <div className="flex items-center mt-3 text-white">
                    <Boxes className="w-4 h-4" />
                    <p className="text-[11px] p-2 font-thin">Arduino, GPS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: MOBITEL AI-DRIVEN EDGE SALES MANAGEMENT SYSTEM */}
            <div className="group relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex flex-col items-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-md transition-transform duration-500 group-hover:scale-[1.05] h-full">
                <img
                  src={my3}
                  alt="profile"
                  className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <h1 className="font-bold text-white text-lg md:text-xl text-center">
                  MOBITEL AI-DRIVEN EDGE SALES MANAGEMENT SYSTEM
                </h1>
                <p className="text-white/80 text-xs md:text-sm text-center leading-relaxed my-4">
                  The Mobitel AI-driven Edge Sales Management System is a
                  comprehensive mobile application designed to assist SIM
                  dealers in Sri Lanka. Many dealers lack awareness of prepaid
                  and postpaid packages, leading to inefficiencies in customer
                  service and sales. This system introduces an intelligent
                  package recommendation engine to suggest the best plans based
                  on platform preferences, budget, and communication needs
                  (voice and SMS).
                </p>
                <div className="mt-auto flex flex-col items-center">
                  <a
                    href="https://example.com/llm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Read More →
                  </a>
                  <div className="flex items-center mt-3 text-white">
                    <Boxes className="w-4 h-4" />
                    <p className="text-[11px] p-2 font-thin">
                      React, JavaScript, Google Script
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: LassanaMoments */}
            <div className="group relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex flex-col items-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-md transition-transform duration-500 group-hover:scale-[1.05] h-full">
                <img
                  src={my4}
                  alt="profile"
                  className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <h1 className="font-bold text-white text-lg md:text-xl text-center">
                  LassanaMoments
                </h1>
                <p className="text-white/80 text-xs md:text-sm text-center leading-relaxed my-4">
                  In the contemporary digital era, the demand for professional
                  photography services has significantly increased. However,
                  photographers in Sri Lanka face challenges in securing clients
                  at the right time and at a fair rate. To address this issue,
                  The AlphaWizards team, a group of passionate BIT
                  undergraduates, has collaboratively designed and developed an
                  innovative Photographic Portal, Lassana Momentz project.
                </p>
                <div className="mt-auto flex flex-col items-center">
                  <a
                    href="https://example.com/llm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Read More →
                  </a>
                  <div className="flex items-center mt-3 text-white">
                    <Boxes className="w-4 h-4" />
                    <p className="text-[11px] p-2 font-thin">
                      React, JavaScript, Firebase
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4: Large Language Model (LLM) */}
            <div className="group relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex flex-col items-center relative bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-6 border border-gray-700/40 shadow-md transition-transform duration-500 group-hover:scale-[1.05] h-full">
                <img
                  src={my2}
                  alt="profile"
                  className="w-full rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <h1 className="font-bold text-white text-lg md:text-xl text-center">
                  Large Language Model (LLM)
                </h1>
                <p className="text-white/80 text-xs md:text-sm text-center leading-relaxed my-4">
                  A system designed to read documents and answer questions using
                  Python, React, FastAPI, and APIs from Gemini, OpenAI, and
                  Hugging Face.
                </p>
                <div className="mt-auto flex flex-col items-center">
                  <a
                    href="https://example.com/llm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Read More →
                  </a>
                  <div className="flex items-center mt-3 text-white">
                    <Boxes className="w-4 h-4" />
                    <p className="text-[11px] p-2 font-thin">
                      React, JavaScript, Python, FastAPI
                    </p>
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

export default ProjectsData;

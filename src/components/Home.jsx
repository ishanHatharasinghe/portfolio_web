import React from "react";
import Typewriter from "typewriter-effect";
import cv from "./../assets/cv.pdf";

const handleOpenPDF = () => {
  window.open(cv, "_blank"); // Open PDF in new tab
};

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex justify-center items-center text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-screen-xl px-8 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        {/* Left Column: Typewriter Text */}
        <div className="flex flex-col justify-center text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold mb-6 text-[#f3e8ff] tracking-wide text-shadow-md">
            <Typewriter
              options={{
                strings: [
                  "Hi! I'm Ishan Hatharasinghe.",
                  "I'm an Electronic Engineer",
                  "Welcome to my Portfolio."
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 100
              }}
            />
          </h1>
        </div>

        {/* Right Column: Description and Buttons */}
        <div className="flex flex-col justify-center text-justify">
          <p className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6 hover:text-[#E6FF82FF] transition-all duration-100 transform hover:scale-105">
            UG in HND Engineering (Electrical and Electronics) | UG in BIT
            University of Moratuwa | Data Science, Cloud, and Electronics
            Engineering Intern (SLTMobitel Digital Lab - Embryo Innovation
            Center, Maradana) | Freelancer Graphic Designer
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#Contact"
              className="bg-gradient-to-r from-[#1900FFFF] to-[#FA1515FF] text-white py-3 px-8 rounded-3xl flex justify-center items-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none font-semibold tracking-wider"
            >
              Contact Me
            </a>

            <button
              onClick={handleOpenPDF}
              className="bg-gradient-to-r from-[#1900FFFF] to-[#FA1515FF] text-white py-3 px-8 rounded-3xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none  font-semibold tracking-wider"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

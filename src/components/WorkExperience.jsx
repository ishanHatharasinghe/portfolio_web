import "aos/dist/aos.css";
import bg from "./../assets/Work1/bg.jpg";
import { motion } from "framer-motion";
import robot from "./../assets/Work1/scene-with-futuristic-robot-used-construction-industry.png";
import Img1 from "./../assets/Work1/1.jpg";
import Img2 from "./../assets/Work1/2.jpg";
import Img3 from "./../assets/Work1/3.jpg";
import Img4 from "./../assets/Work1/1.jpg";
import Img5 from "./../assets/Work1/2.jpg";
import Img6 from "./../assets/Work1/3.jpg";
import { useState } from "react";

const ProfessionalJourney = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "SLT Digital LAB",
      description:
        "Electronics Engineering Intern - Sri Lanka Telecom PLC, Digital LAB, The Embryo Innovation Centre, Trace Expert City, Maradana, Colombo",
      images: [Img1, Img2, Img3]
    }
  ];

  const handleNext = () => {
    setActiveSection((prev) => (prev + 1) % sections.length);
  };

  const handlePrev = () => {
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <section className="h-full relative min-h-screen w-full bg-black overflow-hidden">
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
      {/* Main Content Container */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-6 mt-16 z-10">
        <div className="rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-gray-700/30">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row gap-1 items-center">
            <div>
              <div className="w-[500px]"></div>
            </div>
            <div>
              {/* Title and Description */}
              <div className="bg-black/40 backdrop-blur-md rounded-[2rem] p-8">
                <h1 className="font-italiana text-5xl md:text-[160px] text-white tracking-wide">
                  Professional Journey
                </h1>
                <p className="text-[16px] text-gray-300 leading-relaxed">
                  My academic path has equipped me with both theoretical
                  knowledge and practical skills, forming the foundation of my
                  professional expertise.
                </p>
                {/* Swipeable Sections */}
                <div className="mt-10 border p-8 border-white/10 bg-black/40 backdrop-blur-md rounded-[1rem] relative">
                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-20"
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-20"
                  >
                    &#10095;
                  </button>

                  {/* Active Section */}
                  <h2 className="text-2xl text-white font-italiana mb-7">
                    {sections[activeSection].title}
                  </h2>
                  <p className="text-gray-300">
                    {sections[activeSection].description}
                  </p>
                  {/* Image Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                    {sections[activeSection].images.map((img, index) => (
                      <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <img
                          src={img}
                          alt={`Image ${index + 1}`}
                          className="w-full h-[160px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-40 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Coordination Dots */}
                <div className="flex justify-center mt-6">
                  {sections.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-2 h-2 rounded-full mx-1 ${
                        activeSection === index ? "bg-white" : "bg-gray-500"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center justify-center w-full">
            {/* Titles */}
            <div className="w-full text-center mb-8">
              <h1 className="font-italiana text-4xl text-white tracking-wide">
                Professional Journey
              </h1>
              <p className="text-[16px] text-gray-300 leading-relaxed">
                My academic path has equipped me with both theoretical knowledge
                and practical skills, forming the foundation of my professional
                expertise.
              </p>
            </div>
            {/* Swipeable Sections */}
            <div className="w-full bg-black/40 backdrop-blur-md rounded-[2rem] p-6 border border-white/10 relative">
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-20"
              >
                &#10094;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-20"
              >
                &#10095;
              </button>

              {/* Active Section */}
              <h2 className="text-2xl text-white font-italiana mb-4">
                {sections[activeSection].title}
              </h2>
              <p className="text-gray-300">
                {sections[activeSection].description}
              </p>
              {/* Image Grid */}
              <div className="grid grid-cols-1 gap-6 mt-6">
                {sections[activeSection].images.map((img, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={img}
                      alt={`Image ${index + 1}`}
                      className="w-full h-[200px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-40 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
              {/* Coordination Dots */}
              <div className="flex justify-center mt-6">
                {sections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`w-2 h-2 rounded-full mx-1 ${
                      activeSection === index ? "bg-white" : "bg-gray-500"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;

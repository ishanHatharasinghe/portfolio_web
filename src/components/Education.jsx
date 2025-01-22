import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import BIT from "./../assets/Education/group2.jpg";
import HND from "./../assets/Education/group1.jpg";

const EducationData = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section
      id="education"
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#19003FFF] via-[#03001BFF] to-[#06173CFF] text-white overflow-hidden"
    >
      {/* Background overlay with subtle animation */}
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20 animate-pulse" />

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl sm:text-6xl font-bold text-[#f3e8ff] mb-6 transition-transform hover:scale-105 duration-300">
            Education Journey
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] max-w-2xl mx-auto">
            My academic path has equipped me with both theoretical knowledge and
            practical skills, forming the foundation of my professional
            expertise.
          </p>
        </div>

        {/* Education Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* HND Card */}
          <div
            data-aos="fade-right"
            className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-105 duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={HND}
                alt="HND Studies"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎓</span>
                <h3 className="text-xl font-semibold text-[#f3e8ff]">
                  Higher National Diploma
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-[#a5b4fc] font-medium">
                  Electrical and Electronics Engineering
                </p>
                <p className="text-sm text-[#94a3b8]">
                  Advanced Technological Institute, Labuduwa, Galle
                </p>
                <p className="text-sm leading-relaxed text-[#cbd5e1]">
                  Specialized in Telecommunication and Electronics, gaining
                  hands-on experience and industry-relevant technical expertise
                  through practical applications and project-based learning.
                </p>
              </div>
            </div>
          </div>

          {/* BIT Card */}
          <div
            data-aos="fade-left"
            className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-105 duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={BIT}
                alt="BIT Studies"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📘</span>
                <h3 className="text-xl font-semibold text-[#f3e8ff]">
                  Bachelor of Information Technology
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-[#a5b4fc] font-medium">
                  Computer Science and Technology
                </p>
                <p className="text-sm text-[#94a3b8]">University of Moratuwa</p>
                <p className="text-sm leading-relaxed text-[#cbd5e1]">
                  Mastered advanced concepts in computer science, including
                  cloud computing, artificial intelligence, and data structures,
                  building a strong foundation for creating scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationData;

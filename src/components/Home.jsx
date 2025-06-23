import React from "react";
import bg from "./../assets/Home Section/bg2.jpg";
import my from "./../assets/Home Section/my.png";
import robot from "./../assets/Home Section/robot.png";
import slt from "./../assets/Home Section/slt.png";
import aw from "./../assets/Home Section/aw.png";
import txmeter from "./../assets/Home Section/txmeter.png";
import { ArrowRight } from "lucide-react";
import "./button.css";
import { useState, useEffect } from "react";

import resumePDF from "./../assets/cv.pdf";
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // Fixed variable name
  const [activeSection, setActiveSection] = useState("home");
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); // Fixed variable name
  const FooterLink = ({ href, label }) => (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
      >
        <span>{label}</span>
      </a>
    </li>
  );
  const navItems = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Licenses & Certifications",
    "Work Experience",
    "Projects",
    "Contact"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY); // Fixed comparison operator
      setLastScrollY(currentScrollY);
      setScrollPosition(currentScrollY);

      // Map navItems to their corresponding DOM elements
      const sections = navItems.map((item) =>
        document.getElementById(
          item.toLowerCase().replace(/ & /g, "-").replace(" ", "-") // Fixed regex
        )
      );

      // Find the current active section based on scroll position
      const currentSection = sections.reduce((acc, section) => {
        if (!section) return acc; // Skip missing sections
        const bounds = section.getBoundingClientRect();
        if (bounds.top >= 100) {
          return section.id;
        }
        return acc;
      }, activeSection);

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, lastScrollY]);

  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(id);
    } else {
      console.error(`Section with id "${id}" not found.`); // Debugging for missing sections
    }
  };

  return (
    <div className="h-full relative min-h-full w-full bg-black overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/20 via-transparent to-transparent" />
      </div>
      {/* Main content */}
      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 mt-16 z-10">
        <div className="rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-gray-700/30">
          {/* Top header */}
          <div className="w-full text-center">
            <h3 className="font-italiana text-white text-sm md:text-base font-extralight tracking-wider">
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
                  <div className="flex flex-col gap-2 ">
                    <button
                      className="button"
                      onClick={() => scrollToSection("contact")}
                    >
                      Connect with me
                    </button>
                    <button className="button" href={resumePDF}>
                      Download resume
                    </button>
                  </div>
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
                  <p className="absolute top-30 right-0 text-right font-italiana text-white text-sm md:text-lg tracking-wider">
                    of electronics and code
                  </p>
                </div>
                <div className="absolute top-0 flex justify-center items-center z-20 mt-[100px]">
                  <div className="relative group h-[80vh] w-[100vw] object-cover"></div>
                </div>
              </div>
              {/* Project cards */}
              <div className="absolute bottom-0 mt-[300px] group relative z-30">
                {/* Main Card - Market Edge */}
                <div className="mb-3 relative absolute top-40 left-24 group/card">
                  <div className="border border-white/20 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-xl rounded-3xl p-4 transition-all duration-700 hover:scale-[1.08] hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/30">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>

                    {/* Animated border gradient */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-sm"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden transition-all duration-700 group-hover/card:scale-[1.15] group-hover/card:rotate-6 shadow-lg">
                            <img
                              src={slt}
                              alt="Masked Image"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                            />
                          </div>
                          {/* Floating dot indicator */}
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/40"></div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-2"></div>
                          <ArrowRight className="w-4 h-4 text-white/60 transition-all duration-400 group-hover/card:text-cyan-400 group-hover/card:translate-x-1" />
                          <p className="text-gray-300 text-base font-medium bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Market Edge Sales Management System
                          </p>
                          <div className="mt-3 flex gap-2">
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/20">
                              Enterprise
                            </span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/20">
                              Sales
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Card - Taximeter */}
                <div className="relative absolute left-12 top-40 group/card">
                  <div className="border border-white/15 bg-gradient-to-br from-black/50 via-black/30 to-transparent backdrop-blur-lg rounded-2xl p-6 transition-all duration-600 hover:scale-[1.06] hover:-rotate-1 hover:shadow-xl hover:shadow-cyan-500/15 hover:border-cyan-400/25">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/8 to-teal-500/8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-600"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl overflow-hidden transition-all duration-600 group-hover/card:scale-[1.12] group-hover/card:-rotate-3 shadow-md">
                            <img
                              src={txmeter}
                              alt="Masked Image"
                              className="w-full h-full object-cover transition-transform duration-600 group-hover/card:scale-105"
                            />
                          </div>
                          {/* Status indicator */}
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full shadow-sm"></div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-italiana text-white text-sm font-light tracking-wide">
                              Taximeter
                            </h3>
                            <ArrowRight className="w-4 h-4 text-white/60 transition-all duration-400 group-hover/card:text-cyan-400 group-hover/card:translate-x-1" />
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            The Platform for Fuel Price Manager
                          </p>
                          <div className="mt-2">
                            <span className="px-2 py-0.5 bg-cyan-500/15 text-cyan-300 text-xs rounded-md border border-cyan-400/15">
                              Platform
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Robot section */}
              <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 group">
                {/* Robot glow */}
                <div className="absolute w-[100%] h-[100%] bg-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative transition-transform duration-500 group-hover:scale-[1.05]">
                  {/* <img src={robot} alt="robot" className="h-[100vh] w-[55vw]" />*/}
                  <img src={robot} alt="robot" className="h-[100vh]  " />
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
                <p className="font-italiana text-white text-base md:text-lg tracking-wider">
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
                  <div className="flex flex-col gap-2 ">
                    <button
                      className="button"
                      onClick={() => scrollToSection("contact")}
                    >
                      Connect with me
                    </button>
                    <button className="button" href={resumePDF}>
                      Download resume
                    </button>
                  </div>
                </div>
              </div>
              {/* Project Cards */}
              <div className="w-auto flex flex-col gap-3">
                {/* Card 1 - Recent Project */}
                <div className="relative group/card">
                  <div className="border border-white/20 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-lg rounded-2xl p-4 transition-all duration-500 hover:scale-[1.05] hover:rotate-1 hover:shadow-xl hover:shadow-purple-500/15 hover:border-purple-400/25">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/8 to-blue-500/8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                    {/* Animated border gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/15 via-pink-400/15 to-blue-400/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-sm"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-2 justify-center">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-xl overflow-hidden transition-all duration-500 group-hover/card:scale-[1.12] group-hover/card:rotate-6 shadow-md">
                            <img
                              src={slt}
                              alt="Masked Image"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                            />
                          </div>
                          {/* Floating status indicator */}
                          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-sm shadow-green-400/40"></div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-italiana text-white text-xs font-light tracking-wide">
                              RECENT PROJECT
                            </h3>
                            <div className="flex items-center group/arrow">
                              <ArrowRight className="w-3 h-3 text-white/70 transition-all duration-400 group-hover/card:text-purple-400 group-hover/card:translate-x-1 group-hover/card:scale-110" />
                            </div>
                          </div>
                          <p className="text-gray-300 text-xs bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Market Edge Sales Management System
                          </p>
                          <div className="mt-1.5 flex gap-1">
                            <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/20">
                              Enterprise
                            </span>
                            <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/20">
                              Sales
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Taximeter */}
                <div className="relative group/card">
                  <div className="border border-white/15 bg-gradient-to-br from-black/50 via-black/30 to-transparent backdrop-blur-md rounded-2xl p-4 transition-all duration-450 hover:scale-[1.04] hover:-rotate-1 hover:shadow-lg hover:shadow-cyan-500/12 hover:border-cyan-400/20">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/6 to-teal-500/6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-450"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-2 justify-center">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-xl overflow-hidden transition-all duration-450 group-hover/card:scale-[1.08] group-hover/card:-rotate-3 shadow-sm">
                            <img
                              src={txmeter}
                              alt="Masked Image"
                              className="w-full h-full object-cover transition-transform duration-450 group-hover/card:scale-105"
                            />
                          </div>
                          {/* Status indicator */}
                          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full shadow-sm"></div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-italiana text-white text-xs font-light tracking-wide">
                              Taximeter
                            </h3>
                            <ArrowRight className="w-3 h-3 text-white/60 transition-all duration-350 group-hover/card:text-cyan-400 group-hover/card:translate-x-0.5" />
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            The Platform for Fuel Price Manager
                          </p>
                          <div className="mt-1.5">
                            <span className="px-2 py-0.5 bg-cyan-500/15 text-cyan-300 text-xs rounded-md border border-cyan-400/15">
                              Platform
                            </span>
                          </div>
                        </div>
                      </div>
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

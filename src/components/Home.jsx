import React from "react";
import bg from "./../assets/Home Section/bg3.jpg";
import my from "./../assets/Home Section/my2.png";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
      setScrollPosition(currentScrollY);

      const sections = navItems.map((item) =>
        document.getElementById(
          item.toLowerCase().replace(/ & /g, "-").replace(" ", "-")
        )
      );

      const currentSection = sections.reduce((acc, section) => {
        if (!section) return acc;
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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(id);
    } else {
      console.error(`Section with id "${id}" not found.`);
    }
  };

  return (
    <div className="h-auto relative min-h-auto w-full bg-black overflow-hidden">
      {/* Background with enhanced gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="blur-[9px] w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-700/20 via-purple-900/10 to-cyan-900/5" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-purple-900/15" />
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 mt-4 mb-4 z-10">
        <div className="rounded-[70px] w-full h-full p-2 border border-white/20 backdrop-blur-sm bg-gradient-to-br from-white/5 to-transparent shadow-2xl shadow-purple-500/10">
          {/* Top header with modern styling */}
          <div className="w-full text-center">
            <h3 className="font-italiana text-white text-sm md:text-base font-extralight tracking-wider bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Electronics Engineer | Software Developer | Designer
            </h3>
          </div>

          {/* Center content */}
          <div className="h-full flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-[70px] w-full px-4 flex justify-center">
              {/* Enhanced Profile card */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                {/* Enhanced card content */}
                <div className="flex flex-col items-center justify-center relative border border-white/20 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/20 backdrop-blur-xl rounded-[2rem] p-1 transition-all duration-700  shadow-2xl shadow-purple-500/20 group-hover:shadow-orange-500/30">
                  <p className="mb-3 font-italiana text-gray-300 text-[13px] md:text-sm text-center leading-relaxed relative z-10">
                    <div className="relative overflow-hidden rounded-2xl mb-4 group/img">
                      <img
                        src={my}
                        alt="profile"
                        className="w-full rounded-2xl transition-all duration-700 group-hover:scale-[1.1] group/img:brightness-110"
                      />
                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                      I CRAFT THE FUTURE ONE INNOVATIVE SOLUTION AT A TIME
                    </span>
                  </p>

                  <div className="flex flex-col gap-3 relative z-10">
                    <button
                      className="button relative overflow-hidden group/btn bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                      onClick={() => scrollToSection("contact")}
                    >
                      <span className="relative z-10">Connect with me</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>
                    <button
                      className="button relative overflow-hidden group/btn bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all duration-500 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                      href={resumePDF}
                    >
                      <span className="relative z-10">Download resume</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Title section */}
              <div className="relative flex flex-col items-center justify-center z-20">
                <div className="mb-[600px] relative text-center mt-3 z-10">
                  <div className="flex items-center justify-center gap-2">
                    <span className="absolute top-6 left-12 font-italiana text-white/90 text-[20px] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      At the
                    </span>
                    <h1 className="font-italiana text-5xl md:text-[200px] text-white tracking-wide bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                      intersection
                    </h1>
                  </div>
                  <p className="absolute top-30 right-0 text-right font-italiana text-white text-sm md:text-lg tracking-wider bg-gradient-to-l from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
                    of electronics and code
                  </p>
                </div>
                <div className="absolute top-0 flex justify-center items-center z-20 mt-[100px]">
                  <div className="relative group h-[80vh] w-[100vw] object-cover"></div>
                </div>
              </div>

              {/* Enhanced Project cards */}
              <div className="absolute bottom-0 mt-[300px] group relative z-30">
                {/* Enhanced Main Card - Market Edge */}
                <div className="mb-3 relative absolute top-40 left-24 group/card">
                  <div className="border border-white/30 bg-gradient-to-br from-black/70 via-purple-900/20 to-blue-900/10 backdrop-blur-2xl rounded-3xl p-4 transition-all duration-700 hover:scale-[1.12] hover:rotate-2 hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-400/50 relative overflow-hidden">
                    {/* Enhanced glow effects */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-purple-400/15 to-pink-400/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-lg"></div>

                    {/* Animated particles effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000">
                      <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                      <div className="absolute top-1/2 right-8 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-pulse delay-700"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden transition-all duration-700 group-hover/card:scale-[1.2] group-hover/card:rotate-12 shadow-xl shadow-purple-500/30 border border-white/20">
                            <img
                              src={slt}
                              alt="Masked Image"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 group-hover/card:brightness-110"
                            />
                            {/* Image overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                          </div>
                          {/* Enhanced floating dot indicator */}
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 rounded-full animate-pulse shadow-xl shadow-green-400/60 border-2 border-white/30"></div>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400/50 to-emerald-400/50 rounded-full animate-ping"></div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-2"></div>
                          <ArrowRight className="w-5 h-5 text-white/60 transition-all duration-500 group-hover/card:text-cyan-400 group-hover/card:translate-x-2 group-hover/card:scale-110 drop-shadow-lg" />
                          <p className="text-gray-300 text-base font-medium bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-sm">
                            Market Edge Sales Management System
                          </p>
                          <div className="mt-3 flex gap-2">
                            <span className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-purple-600/20 text-purple-200 text-xs rounded-full border border-purple-400/40 shadow-lg shadow-purple-500/20 backdrop-blur-sm">
                              Enterprise
                            </span>
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-500/30 to-blue-600/20 text-blue-200 text-xs rounded-full border border-blue-400/40 shadow-lg shadow-blue-500/20 backdrop-blur-sm">
                              Sales
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Secondary Card - Taximeter */}
                <div className="relative absolute left-12 top-40 group/card">
                  <div className="border border-white/25 bg-gradient-to-br from-black/60 via-cyan-900/10 to-teal-900/5 backdrop-blur-xl rounded-2xl p-6 transition-all duration-600 hover:scale-[1.08] hover:-rotate-2 hover:shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-400/40 relative overflow-hidden">
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-teal-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-600"></div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-400/5 to-yellow-400/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-600 blur-sm"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl overflow-hidden transition-all duration-600 group-hover/card:scale-[1.15] group-hover/card:-rotate-6 shadow-lg shadow-cyan-500/20 border border-white/20">
                            <img
                              src={txmeter}
                              alt="Masked Image"
                              className="w-full h-full object-cover transition-transform duration-600 group-hover/card:scale-105 group-hover/card:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                          </div>
                          {/* Enhanced status indicator */}
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 rounded-full shadow-lg shadow-orange-400/50 border border-white/30"></div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-italiana text-white text-sm font-light tracking-wide bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                              Taximeter
                            </h3>
                            <ArrowRight className="w-4 h-4 text-white/60 transition-all duration-400 group-hover/card:text-cyan-400 group-hover/card:translate-x-1 group-hover/card:scale-110" />
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                            The Platform for Fuel Price Manager
                          </p>
                          <div className="mt-2">
                            <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-500/25 to-teal-500/20 text-cyan-200 text-xs rounded-md border border-cyan-400/30 shadow-md shadow-cyan-500/20 backdrop-blur-sm">
                              Platform
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Robot section */}
              <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 group">
                {/* Multi-layered robot glow */}
                <div className="absolute w-[100%] h-[100%] bg-gradient-to-r from-orange-500/25 via-purple-500/15 to-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute w-[80%] h-[80%] bg-gradient-to-r from-blue-400/20 to-purple-400/15 rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 delay-200" />
                <div className="relative transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-110 drop-shadow-2xl">
                  <img
                    src={robot}
                    alt="robot"
                    className="h-[140vh] filter drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Mobile Layout */}
            <div className="md:hidden h-full flex flex-col items-center justify-center h-full w-full">
              {/* Enhanced Titles */}
              <div className="w-full text-center mb-8">
                <h1 className="font-italiana text-5xl md:text-[200px] text-white tracking-wide bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                  At the intersection
                </h1>
                <p className="font-italiana text-white text-base md:text-lg tracking-wider bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
                  of electronics and code
                </p>
              </div>

              {/* Enhanced Mobile Profile Card */}
              <div className="group relative w-full max-w-xs mx-auto mb-5">
                {/* Enhanced card content */}
                <div className="flex flex-col items-center justify-center relative border border-white/20 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/20 backdrop-blur-xl rounded-[2rem] p-4 transition-all duration-500 group-hover:scale-[1.08] shadow-xl shadow-purple-500/20">
                  <div className="absolute inset-1 rounded-[1.8rem] bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <p className="mb-3 font-italiana text-gray-300 text-[13px] md:text-sm text-center leading-relaxed relative z-10">
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img
                        src={my}
                        alt="profile"
                        className="w-full rounded-2xl transition-all duration-500 group-hover:scale-[1.05] group-hover:brightness-110"
                      />
                    </div>
                    <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                      I CRAFT THE FUTURE ONE INNOVATIVE SOLUTION AT A TIME
                    </span>
                  </p>

                  <div className="flex flex-col gap-2 relative z-10">
                    <button
                      className="button relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-500 shadow-lg shadow-purple-500/25"
                      onClick={() => scrollToSection("contact")}
                    >
                      Connect with me
                    </button>
                    <button
                      className="button relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all duration-500 shadow-lg shadow-orange-500/25"
                      href={resumePDF}
                    >
                      Download resume
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Mobile Project Cards */}
              <div className="w-auto flex flex-col gap-3">
                {/* Enhanced Card 1 - Recent Project */}
                <div className="relative group/card">
                  <div className="border border-white/25 bg-gradient-to-br from-black/70 via-purple-900/15 to-blue-900/10 backdrop-blur-xl rounded-2xl p-4 transition-all duration-500 hover:scale-[1.08] hover:rotate-1 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400/40 relative overflow-hidden">
                    {/* Enhanced glow effects */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/15 to-blue-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-blue-400/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-sm"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-2 justify-center">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-xl overflow-hidden transition-all duration-500 group-hover/card:scale-[1.15] group-hover/card:rotate-6 shadow-md shadow-purple-500/20 border border-white/20">
                            <img
                              src={slt}
                              alt="Masked Image"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110 group-hover/card:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-blue-500/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                          </div>
                          {/* Enhanced floating status indicator */}
                          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-md shadow-green-400/50 border border-white/30"></div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-italiana text-white text-xs font-light tracking-wide bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                              RECENT PROJECT
                            </h3>
                            <div className="flex items-center group/arrow">
                              <ArrowRight className="w-3 h-3 text-white/70 transition-all duration-400 group-hover/card:text-purple-400 group-hover/card:translate-x-1 group-hover/card:scale-110" />
                            </div>
                          </div>
                          <p className="text-gray-300 text-xs bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                            Market Edge Sales Management System
                          </p>
                          <div className="mt-1.5 flex gap-1">
                            <span className="px-2 py-0.5 bg-gradient-to-r from-purple-500/25 to-purple-600/20 text-purple-200 text-xs rounded-full border border-purple-400/30 shadow-sm shadow-purple-500/20">
                              Enterprise
                            </span>
                            <span className="px-2 py-0.5 bg-gradient-to-r from-blue-500/25 to-blue-600/20 text-blue-200 text-xs rounded-full border border-blue-400/30 shadow-sm shadow-blue-500/20">
                              Sales
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Card 2 - Taximeter */}
                <div className="relative group/card">
                  <div className="border border-white/20 bg-gradient-to-br from-black/60 via-cyan-900/10 to-teal-900/5 backdrop-blur-lg rounded-2xl p-4 transition-all duration-450 hover:scale-[1.06] hover:-rotate-1 hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-400/30 relative overflow-hidden">
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-450"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-2 justify-center">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-xl overflow-hidden transition-all duration-450 group-hover/card:scale-[1.1] group-hover/card:-rotate-3 shadow-sm shadow-cyan-500/15 border border-white/15">
                            <img
                              src={txmeter}
                              alt="Masked Image"
                              className="w-full h-full object-cover transition-transform duration-450 group-hover/card:scale-105 group-hover/card:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-450"></div>
                          </div>
                          {/* Enhanced status indicator */}
                          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full shadow-sm shadow-orange-400/40 border border-white/20"></div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-italiana text-white text-xs font-light tracking-wide bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                              Taximeter
                            </h3>
                            <ArrowRight className="w-3 h-3 text-white/60 transition-all duration-350 group-hover/card:text-cyan-400 group-hover/card:translate-x-0.5 group-hover/card:scale-105" />
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                            The Platform for Fuel Price Manager
                          </p>
                          <div className="mt-1.5">
                            <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-500/20 to-teal-500/15 text-cyan-200 text-xs rounded-md border border-cyan-400/25 shadow-sm shadow-cyan-500/15 backdrop-blur-sm">
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

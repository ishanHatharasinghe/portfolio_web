import React from "react";
import bg from "./../assets/Home Section/bg3.jpg";
import my from "./../assets/Home Section/my2.png";
import robot from "./../assets/Home Section/ChatGPT Image Sep 10, 2025, 10_32_45 AM.png";
import robot2 from "./../assets/Home Section/ChatGPT Image Sep 10, 2025, 10_32_45 AM.png";
import slt from "./../assets/Home Section/slt.png";
import aw from "./../assets/Home Section/aw.png";
import chaya from "./../assets/Project 7/ChatGPT Image Aug 8, 2025, 05_29_32 PM.png";
import logo1 from "../assets/AppsLogos/billgenx.png";
import logo2 from "../assets/AppsLogos/boticon.png";
import logo3 from "../assets/AppsLogos/ChatGPT Image Aug 4, 2025, 02_29_18 PM.png";
import logo4 from "../assets/AppsLogos/icon.png";
import logo5 from "../assets/AppsLogos/Lucid_Origin_I_need_a_logo_for_my_car_parts_website_with_the_n_1.jpg";
import { ArrowRight } from "lucide-react";
import "./button.css";
import { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import resumePDF from "./../assets/cv.pdf";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentRobot, setCurrentRobot] = useState(0); // 0 for robot, 1 for robot2
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const robots = [robot, robot2];
  const appLogos = [logo1, logo2, logo3, logo4, logo5];

  // Theme configurations for each robot
  const themes = [
    {
      // Robot 1 theme (Purple/Blue)
      primaryGradient: "from-purple-600 to-blue-600",
      primaryHoverGradient: "from-purple-500 to-blue-500",
      secondaryGradient: "from-orange-600 to-red-600",
      secondaryHoverGradient: "from-orange-500 to-red-500",
      cardGradient: "from-black/70 via-purple-900/20 to-blue-900/10",
      cardHoverShadow: "hover:shadow-purple-500/40",
      cardBorder: "hover:border-purple-400/50",
      glowEffect: "from-purple-500/20 to-blue-500/15",
      robotGlow: "from-orange-500/25 via-purple-500/15 to-cyan-500/20",
      accentColor: "text-cyan-400",
      badgeGradient: "from-purple-500/30 to-purple-600/20",
      badgeText: "text-purple-200",
      badgeBorder: "border-purple-400/40"
    },
    {
      // Robot 2 theme (Green/Teal)
      primaryGradient: "from-emerald-600 to-teal-600",
      primaryHoverGradient: "from-emerald-500 to-teal-500",
      secondaryGradient: "from-amber-600 to-orange-600",
      secondaryHoverGradient: "from-amber-500 to-orange-500",
      cardGradient: "from-black/70 via-emerald-900/20 to-teal-900/10",
      cardHoverShadow: "hover:shadow-emerald-500/40",
      cardBorder: "hover:border-emerald-400/50",
      glowEffect: "from-emerald-500/20 to-teal-500/15",
      robotGlow: "from-amber-500/25 via-emerald-500/15 to-teal-500/20",
      accentColor: "text-emerald-400",
      badgeGradient: "from-emerald-500/30 to-emerald-600/20",
      badgeText: "text-emerald-200",
      badgeBorder: "border-emerald-400/40"
    }
  ];

  const currentTheme = themes[currentRobot];

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-switch robots every 5 seconds (desktop only)
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        switchRobot();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentRobot, isMobile]);

  const switchRobot = () => {
    if (isMobile) return; // Disable robot switching on mobile

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentRobot((prev) => (prev + 1) % robots.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

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
    <div
      className={`h-auto relative min-h-auto w-full bg-black overflow-hidden transition-all duration-1000`}
    >
      {/* Background with enhanced gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-100"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-cyan-900/5 transition-all duration-1000 ${
            currentRobot === 1 ? "via-emerald-900/10 to-teal-900/5" : ""
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-purple-900/15 transition-all duration-1000 ${
            currentRobot === 1 ? "via-emerald-900/5 to-teal-900/15" : ""
          }`}
        />
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 mt-4 mb-4 z-10">
        <div className="rounded-[70px] w-full h-full p-2 border border-white/20 bg-gradient-to-br from-white/5 to-transparent shadow-2xl shadow-purple-500/10">
          {/* Top header with modern styling */}
          <div className="w-full text-center">
            <h3 className="mt-2 font-italiana text-white text-[12px] md:text-base font-extralight tracking-wider bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Electronics Engineer | Software Developer | Designer
            </h3>
          </div>

          {/* Center content */}
          <div className="h-full flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-[70px] w-full px-4 flex justify-center">
              {/* Enhanced Profile card */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                <div
                  className={`flex flex-col items-center justify-center relative border border-white/20 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/20 backdrop-blur-xl rounded-[2rem] p-1 transition-all duration-700 shadow-2xl shadow-purple-500/20 group-hover:shadow-orange-500/30 ${
                    currentRobot === 1
                      ? "to-emerald-900/20 shadow-emerald-500/20 group-hover:shadow-amber-500/30"
                      : ""
                  }`}
                >
                  {/* React Icon in Top Left */}
                  <FaReact
                    className={`absolute top-4 left-4 ${currentTheme.accentColor} text-2xl animate-spin-slow transition-colors duration-1000`}
                  />

                  {/* Rest of your content */}
                  <p className="mb-3 font-italiana text-gray-300 text-[13px] md:text-sm text-center leading-relaxed relative z-10">
                    <div className="relative overflow-hidden rounded-2xl mb-4 group/img">
                      <img
                        src={my}
                        alt="profile"
                        className="w-full rounded-2xl transition-all duration-700 group-hover:scale-[1.1] group/img:brightness-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          currentRobot === 1 ? "from-emerald-500/10" : ""
                        }`}
                      />
                    </div>

                    {/* App Logos Row */}
                    <div className="flex justify-center items-center gap-3 mb-4">
                      {appLogos.map((logo, index) => (
                        <div
                          key={index}
                          className={`w-8 h-8 rounded-full overflow-hidden border-2 border-orange-500/40 shadow-lg transition-all duration-500 hover:scale-110 hover:border-white/60 hover:shadow-xl ${
                            currentRobot === 1
                              ? "hover:shadow-emerald-400/40"
                              : "hover:shadow-purple-400/40"
                          }`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <img
                            src={logo}
                            alt={`App logo ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>

                    <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                      I craft the Future one Innovative solution at a time
                    </span>
                  </p>

                  {/* Buttons with dynamic theming */}
                  <div className="flex flex-col gap-3 relative z-10">
                    <button
                      className={`button relative overflow-hidden group/btn bg-gradient-to-r ${
                        currentTheme.primaryGradient
                      } hover:${currentTheme.primaryHoverGradient.replace(
                        "hover:",
                        ""
                      )} transition-all duration-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40`}
                      onClick={() => scrollToSection("contact")}
                    >
                      <span className="relative z-10">Connect with me</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>
                    <button
                      className={`button relative overflow-hidden group/btn bg-gradient-to-r ${
                        currentTheme.secondaryGradient
                      } hover:${currentTheme.secondaryHoverGradient.replace(
                        "hover:",
                        ""
                      )} transition-all duration-500 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40`}
                      onClick={() => window.open(resumePDF, "_blank")}
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

              {/* Enhanced Project cards with dynamic theming */}
              <div className="absolute bottom-0 mt-[300px] group relative z-30">
                {/* Enhanced Main Card - Market Edge */}
                <div className="mb-3 relative absolute top-40 left-24 group/card">
                  <div
                    className={`border border-white/30 bg-gradient-to-br ${currentTheme.cardGradient} backdrop-blur-2xl rounded-3xl p-4 transition-all duration-700 hover:scale-[1.12] hover:rotate-2 hover:shadow-2xl ${currentTheme.cardHoverShadow} ${currentTheme.cardBorder} relative overflow-hidden`}
                  >
                    {/* Enhanced glow effects */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${currentTheme.glowEffect} opacity-0 group-hover/card:opacity-100 transition-opacity duration-700`}
                    ></div>
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${currentTheme.glowEffect} opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-lg`}
                    ></div>

                    {/* Animated particles effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000">
                      <div
                        className={`absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse ${
                          currentRobot === 1 ? "bg-emerald-400" : ""
                        }`}
                      ></div>
                      <div
                        className={`absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300 ${
                          currentRobot === 1 ? "bg-teal-400" : ""
                        }`}
                      ></div>
                      <div
                        className={`absolute top-1/2 right-8 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-pulse delay-700 ${
                          currentRobot === 1 ? "bg-emerald-400" : ""
                        }`}
                      ></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="relative">
                          <div
                            className={`w-16 h-16 rounded-2xl overflow-hidden transition-all duration-700 group-hover/card:scale-[1.2] group-hover/card:rotate-12 shadow-xl shadow-purple-500/30 border border-white/20 ${
                              currentRobot === 1 ? "shadow-emerald-500/30" : ""
                            }`}
                          >
                            <img
                              src={slt}
                              alt="Masked Image"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 group-hover/card:brightness-110"
                            />
                            {/* Image overlay */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${currentTheme.glowEffect} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}
                            ></div>
                          </div>
                          {/* Enhanced floating dot indicator */}
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 rounded-full animate-pulse shadow-xl shadow-green-400/60 border-2 border-white/30"></div>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400/50 to-emerald-400/50 rounded-full animate-ping"></div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-2"></div>
                          <h3 className="font-italiana text-white text-xs font-light tracking-wide bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                            MOBITEL Market Edge Sales Management System
                          </h3>
                          <ArrowRight
                            className={`w-5 h-5 text-white/60 transition-all duration-500 group-hover/card:${currentTheme.accentColor} group-hover/card:translate-x-2 group-hover/card:scale-110 drop-shadow-lg`}
                          />

                          <p className="text-gray-400 text-xs leading-relaxed bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                            AI-Powered Sales System
                          </p>
                          <div className="mt-3 flex gap-2">
                            <span
                              className={`px-3 py-1 bg-gradient-to-r ${currentTheme.badgeGradient} ${currentTheme.badgeText} text-xs rounded-full ${currentTheme.badgeBorder} shadow-lg shadow-purple-500/20 backdrop-blur-sm transition-all duration-1000`}
                            >
                              Enterprise
                            </span>
                            <span
                              className={`px-3 py-1 bg-gradient-to-r from-blue-500/30 to-blue-600/20 text-blue-200 text-xs rounded-full border border-blue-400/40 shadow-lg shadow-blue-500/20 backdrop-blur-sm transition-all duration-1000 ${
                                currentRobot === 1
                                  ? "from-teal-500/30 to-teal-600/20 text-teal-200 border-teal-400/40 shadow-teal-500/20"
                                  : ""
                              }`}
                            >
                              Sales
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Secondary Card - Tea Estate Management System */}
                <div className="relative absolute left-12 top-40 group/card">
                  <div
                    className={`border border-white/25 bg-gradient-to-br from-black/60 via-cyan-900/10 to-teal-900/5 backdrop-blur-xl rounded-2xl p-6 transition-all duration-600 hover:scale-[1.08] hover:-rotate-2 hover:shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-400/40 relative overflow-hidden ${
                      currentRobot === 1
                        ? "via-emerald-900/10 to-emerald-900/5 hover:shadow-emerald-500/30 hover:border-emerald-400/40"
                        : ""
                    }`}
                  >
                    {/* Enhanced glow effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-teal-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-600 ${
                        currentRobot === 1
                          ? "from-emerald-500/15 to-emerald-500/10"
                          : ""
                      }`}
                    ></div>
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-400/5 to-yellow-400/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-600 blur-sm ${
                        currentRobot === 1
                          ? "from-amber-400/5 to-amber-400/10"
                          : ""
                      }`}
                    ></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div
                            className={`w-12 h-12 rounded-xl overflow-hidden transition-all duration-600 group-hover/card:scale-[1.15] group-hover/card:-rotate-6 shadow-lg shadow-cyan-500/20 border border-white/20 ${
                              currentRobot === 1 ? "shadow-emerald-500/20" : ""
                            }`}
                          >
                            <img
                              src={chaya}
                              alt="Masked Image"
                              className="w-full h-full object-cover transition-transform duration-600 group-hover/card:scale-105 group-hover/card:brightness-110"
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ${
                                currentRobot === 1
                                  ? "from-emerald-500/10 to-amber-500/10"
                                  : ""
                              }`}
                            ></div>
                          </div>
                          {/* Enhanced status indicator */}
                          <div
                            className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 rounded-full shadow-lg shadow-orange-400/50 border border-white/30 transition-all duration-1000 ${
                              currentRobot === 1
                                ? "from-amber-400 via-amber-400 to-yellow-400 shadow-amber-400/50"
                                : ""
                            }`}
                          ></div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3
                              className={`font-italiana text-white text-sm font-light tracking-wide bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent transition-all duration-1000 ${
                                currentRobot === 1 ? "to-emerald-200" : ""
                              }`}
                            >
                              ChayaSmart+
                            </h3>
                            <ArrowRight
                              className={`w-4 h-4 text-white/60 transition-all duration-400 group-hover/card:text-cyan-400 group-hover/card:translate-x-1 group-hover/card:scale-110 ${
                                currentRobot === 1
                                  ? "group-hover/card:text-emerald-400"
                                  : ""
                              }`}
                            />
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                            Tea Estate Management System
                          </p>
                          <div className="mt-2">
                            <span
                              className={`px-2 py-0.5 bg-gradient-to-r from-cyan-500/25 to-teal-500/20 text-cyan-200 text-xs rounded-md border border-cyan-400/30 shadow-md shadow-cyan-500/20 backdrop-blur-sm transition-all duration-1000 ${
                                currentRobot === 1
                                  ? "from-emerald-500/25 to-emerald-500/20 text-emerald-200 border-emerald-400/30 shadow-emerald-500/20"
                                  : ""
                              }`}
                            >
                              Platform
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Robot section with switching animation - Desktop Only */}
              <div className="absolute top-[600px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 group">
                {/* Multi-layered robot glow with dynamic theming */}
                <div
                  className={`absolute w-[100%] h-[100%] bg-gradient-to-r ${currentTheme.robotGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000`}
                />
                <div
                  className={`absolute w-[100%] h-[100%] bg-gradient-to-r ${currentTheme.glowEffect} rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-700 delay-200`}
                />
                <div
                  className={`relative transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-110 drop-shadow-2xl ${
                    isTransitioning
                      ? "scale-95 opacity-70"
                      : "scale-100 opacity-100"
                  }`}
                >
                  <img
                    src={robots[currentRobot]}
                    alt="robot"
                    loading="lazy"
                    className={`h-[1000px] filter drop-shadow-2xl transition-all duration-600 ${
                      isTransitioning ? "blur-sm" : "blur-0"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Mobile Layout - Robot Hidden */}
            <div className="md:hidden h-full flex flex-col items-center justify-center w-full px-4 py-8">
              {/* Mobile Header Section */}
              <div className="w-full text-center mb-12">
                <h1 className="font-italiana text-4xl text-white tracking-wide bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-lg mb-1">
                  At the intersection
                </h1>
                <p className="font-italiana text-white text-lg tracking-wider bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
                  of electronics and code
                </p>
              </div>

              {/* Mobile Profile Card */}
              <div className="group relative w-full max-w-sm mx-auto mb-10">
                <div
                  className={`flex flex-col items-center justify-center relative border border-white/20 bg-gradient-to-br from-black/70 via-black/50 to-purple-900/20 backdrop-blur-xl rounded-3xl p-6 transition-all duration-500 shadow-xl shadow-purple-500/20`}
                >
                  {/* React Icon */}
                  <FaReact
                    className={`absolute top-4 left-4 text-cyan-400 text-2xl animate-spin-slow`}
                  />

                  {/* Profile Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 w-full">
                    <img
                      src={my}
                      alt="profile"
                      loading="lazy"
                      className="w-full rounded-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Mobile App Logos Row */}
                  <div className="flex justify-center items-center gap-3 mb-6">
                    {appLogos.map((logo, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full overflow-hidden border-2 border-orange-500/40 shadow-lg transition-all duration-500 hover:scale-110 hover:border-white/60 hover:shadow-xl hover:shadow-purple-400/40"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <img
                          src={logo}
                          alt={`App logo ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mb-6 font-italiana text-gray-300 text-sm text-center leading-relaxed">
                    <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                      I craft the Future one Innovative solution at a time
                    </span>
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 w-full">
                    <button
                      className="button w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-500 shadow-lg shadow-purple-500/25"
                      onClick={() => scrollToSection("contact")}
                    >
                      Connect with me
                    </button>
                    <button
                      className="button w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all duration-500 shadow-lg shadow-orange-500/25"
                      onClick={() => window.open(resumePDF, "_blank")}
                    >
                      Download resume
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Project Cards Section */}
              <div className="w-full max-w-md mx-auto space-y-6 mb-8">
                {/* Project Card 1 - Market Edge */}
                <div className="group/card">
                  <div className="border border-white/25 bg-gradient-to-br from-black/70 via-purple-900/15 to-blue-900/10 backdrop-blur-xl rounded-2xl p-5 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden">
                    {/* Card glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        {/* Project Icon */}
                        <div className="relative flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg shadow-purple-500/20 border border-white/20">
                            <img
                              src={slt}
                              alt="MOBITEL Market Edge"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                            />
                          </div>
                          {/* Status indicator */}
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/50 border-2 border-white/30"></div>
                        </div>

                        {/* Project Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-italiana text-white text-sm font-light tracking-wide bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                              MOBITEL Market Edge
                            </h3>
                            <ArrowRight className="w-4 h-4 text-white/60 transition-all duration-400 group-hover/card:text-cyan-400 group-hover/card:translate-x-1 flex-shrink-0 ml-2" />
                          </div>

                          <p className="text-gray-400 text-sm leading-relaxed mb-3">
                            AI-Powered Sales Management System
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gradient-to-r from-purple-500/25 to-purple-600/20 text-purple-200 text-xs rounded-full border border-purple-400/40 shadow-sm">
                              Enterprise
                            </span>
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-500/25 to-blue-600/20 text-blue-200 text-xs rounded-full border border-blue-400/40 shadow-sm">
                              Sales
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Card 2 - ChayaSmart+ */}
                <div className="group/card">
                  <div className="border border-white/20 bg-gradient-to-br from-black/70 via-cyan-900/10 to-teal-900/8 backdrop-blur-xl rounded-2xl p-5 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden">
                    {/* Card glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        {/* Project Icon */}
                        <div className="relative flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/15 border border-white/20">
                            <img
                              src={chaya}
                              alt="ChayaSmart+"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                            />
                          </div>
                          {/* Status indicator */}
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full shadow-lg shadow-orange-400/40 border border-white/20"></div>
                        </div>

                        {/* Project Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-italiana text-white text-sm font-light tracking-wide bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                              ChayaSmart+
                            </h3>
                            <ArrowRight className="w-4 h-4 text-white/60 transition-all duration-400 group-hover/card:text-cyan-400 group-hover/card:translate-x-1 flex-shrink-0 ml-2" />
                          </div>

                          <p className="text-gray-400 text-sm leading-relaxed mb-3">
                            Tea Estate Management System
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-teal-500/15 text-cyan-200 text-xs rounded-full border border-cyan-400/25 shadow-sm">
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

      {/* Theme transition overlay - Desktop only */}
      {!isMobile && (
        <div
          className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${
            isTransitioning ? "bg-black/20" : "bg-transparent"
          }`}
        />
      )}
    </div>
  );
};

export default Home;

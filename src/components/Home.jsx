import my from "./../assets/Home Section/my2.webp";
import man from "./../assets/man.png";
import logo1 from "../assets/AppsLogos/billgenx.webp";
import logo2 from "../assets/AppsLogos/boticon.webp";
import logo3 from "../assets/AppsLogos/ChatGPT Image Aug 4, 2025, 02_29_18 PM.webp";
import logo4 from "../assets/AppsLogos/icon.webp";
import logo5 from "../assets/AppsLogos/Lucid_Origin_I_need_a_logo_for_my_car_parts_website_with_the_n_1.webp";
import fixitnow from "./../assets/Home Section/fixitnow.png";
import { ArrowRight } from "lucide-react";
import "./button.css";
import { useState, useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa";
import resumePDF from "./../assets/cv.pdf";

const Home = ({ currentTheme, currentRobot, isTransitioning, slideDir, robots, onPrev, onNext }) => {
  const activeSectionRef = useRef("home");
  const lastScrollYRef = useRef(0);
  const [activeSection, setActiveSection] = useState("home");

  const appLogos = [logo1, logo2, logo3, logo4, logo5];

  // Detect mobile screen size
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
    let ticking = false;
    const sections = navItems.map((item) =>
      document.getElementById(
        item.toLowerCase().replace(/ & /g, "-").replace(" ", "-")
      )
    );

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const currentSection = sections.reduce((acc, section) => {
          if (!section) return acc;
          const bounds = section.getBoundingClientRect();
          if (bounds.top >= 100) return section.id;
          return acc;
        }, activeSectionRef.current);

        if (currentSection !== activeSectionRef.current) {
          activeSectionRef.current = currentSection;
          setActiveSection(currentSection);
        }

        lastScrollYRef.current = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    } else {
      console.error(`Section with id "${id}" not found.`);
    }
  };

  return (
    <>
      <div className="h-auto relative min-h-auto w-full p-2 overflow-hidden">
        <div className="rounded-[20px] lg:rounded-[60px] w-full h-auto p-2 border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-2xl shadow-purple-500/10">
          
          {/* Top header with modern styling */}
          <div className="w-full text-center">
            <h3 className="mt-2 font-italiana text-white text-[8px] md:text-[15px] font-extralight tracking-wider bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Telecommunication Technical Officer | Designer | Software Engineer UG
            </h3>
          </div>

          {/* Center content */}
          <div className="h-full flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-[70px] w-full px-4 flex justify-center">
                  {/* Enhanced Profile card */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                <div
                  className={`flex flex-col items-center justify-center relative border border-white/20 bg-gradient-to-br from-[#020408]/80 via-[#020408]/60 to-[#020408]/40 backdrop-blur-xl rounded-[2rem] p-1 transition-all duration-700 shadow-2xl shadow-white/10 group-hover:shadow-white/20`}
                >
                  {/* React Icon in Top Left */}
                  <FaReact
                    className={`absolute top-4 left-4 ${currentTheme.accentColor} text-2xl animate-spin-slow`}
                  />

                  {/* Rest of your content */}
                  <div className="mb-3 font-italiana text-gray-300 text-[13px] md:text-sm text-center leading-relaxed relative z-10">
                    <div className="relative overflow-hidden rounded-2xl mb-4 group/img">
                      <img
                        src={my}
                        alt="profile"
                        className="w-full rounded-2xl transition-all duration-700"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 transition-opacity duration-500"
                      />
                    </div>

                    <span className="bg-gradient-to-r from-white via-slate-300 to-[#020408] bg-clip-text text-transparent">
                      I craft the Future one Innovative solution at a time
                    </span>
                  </div>

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
                    <span className="absolute bottom-[160px] left-[8%] transform -translate-x-1/2 text-white/90 text-[20px] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      At the
                    </span>
            <h1 className="font-tusker text-5xl md:text-[180px] text-white tracking-wide drop-shadow-2xl">
              intersection
            </h1>
                  </div>
                  <p className="absolute top-30 right-0 text-right  text-white text-sm md:text-lg tracking-wider">
                    of Telecommunication and code
                  </p>
                </div>

              </div>

              {/* Enhanced Project cards with dynamic theming */}
              <div className="absolute bottom-0 mt-[300px] group relative z-30">
                  {/* Enhanced Secondary Card - Tea Estate Management System */}
                <div className="relative absolute left-12 top-40 group/card">
                  <div
                    className="border border-white/25 bg-gradient-to-br from-black/60 via-cyan-900/10 to-teal-900/5 backdrop-blur-xl rounded-2xl p-6 transition-all duration-600 relative overflow-hidden"
                  >
                    {/* Enhanced glow effect */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity duration-600"
                    ></div>
                    <div
                      className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity duration-600 blur-sm"
                    ></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div
                            className={`w-12 h-12 rounded-xl overflow-hidden transition-all duration-600 shadow-lg shadow-[#D5A99A]/20 border border-white/20 ${
                              currentRobot === 1 ? "shadow-[#D5A99A]/20" : ""
                            }`}
                          >
                            <img
                              src={fixitnow}
                              alt="FIXITNOWplus+"
                              className="w-full h-full object-cover transition-transform duration-600"
                            />
                            <div
                              className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500"
                            ></div>
                          </div>
                          {/* Enhanced status indicator */}
                          <div
                            className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full shadow-lg shadow-white/20 border border-white/30 transition-all duration-1000"
                          ></div>
                        </div>

                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3
                              className="font-italiana text-white text-sm font-light tracking-wide bg-gradient-to-r from-white to-[#020408] bg-clip-text text-transparent transition-all duration-1000"
                            >
                              FIXITNOWplus+
                            </h3>
                            <ArrowRight
                              className="w-4 h-4 text-white/60 transition-all duration-400"
                            />
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                            Local Service Finder Platform
                          </p>
                          <div className="mt-2">
                            <span
                              className={`px-2 py-0.5 bg-gradient-to-r from-[#D5A99A]/25 to-[#D5A99A]/20 text-[#D5A99A] text-xs rounded-md border border-[#D5A99A]/30 shadow-md shadow-[#D5A99A]/20 backdrop-blur-sm transition-all duration-1000 ${
                                currentRobot === 1
                                  ? "from-[#D5A99A]/25 to-[#D5A99A]/20 text-[#D5A99A] border-[#D5A99A]/30 shadow-[#D5A99A]/20"
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
              <div className="absolute top-[600px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20">
                <div className="relative transition-all duration-700 scale-100 opacity-100">
                  <img
                    src={man}
                    alt="profile"
                    loading="lazy"
                    className="h-[1000px] filter transition-all duration-600 blur-0"
                  />
                </div>
              </div>


              
            </div>

            {/* Enhanced Mobile Layout - Robot Hidden */}
            <div className="md:hidden w-full px-4 pt-6 pb-10">

              

              {/* Title */}
              <div className="text-center mt-3">
                <h1 className="font-tusker text-[52px] leading-[0.5] text-white">
                  intersection
                </h1>

                <p className="mt-2 text-white/70 tracking-wider text-sm">
                  of Telecommunication and Code
                </p>
              </div>

              {/* Hero Section */}
              <div className="relative flex justify-center items-center">

                {/* Main Image */}
                <img
                  src={man}
                  alt="profile"
                  className="max-w-[420px] object-contain z-"
                />

                {/* Floating Project Card */}
                <div className="absolute bottom-6 z-20 w-[260px]">

                  <div className="
                    border border-white/20
                    bg-black/50
                    backdrop-blur-xl
                    rounded-3xl
                    p-4
                    shadow-2xl
                    shadow-cyan-500/20
                  ">

                    <div className="flex items-center gap-3">

                      <div className="relative">
                        <img
                          src={fixitnow}
                          alt="FIXITNOWplus+"
                          className="w-14 h-14 rounded-xl object-cover"
                        />

                        <span className="
                          absolute
                          -bottom-1
                          -right-1
                          w-3
                          h-3
                          rounded-full
                          bg-green-400
                        "/>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-white text-sm font-semibold">
                          FIXITNOWplus+
                        </h3>

                        <p className="text-white/60 text-xs">
                          Local Service Finder Platform
                        </p>

                        <span className="
                          inline-block
                          mt-2
                          px-2
                          py-1
                          rounded-full
                          bg-cyan-500/20
                          text-cyan-300
                          text-[10px]
                        ">
                          Platform
                        </span>
                      </div>

                      <ArrowRight className="w-4 h-4 text-white/50" />
                    </div>
                  </div>

                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-3">

                <button
                  className="button w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Connect with me
                </button>

                <button
                  className="button w-full"
                  onClick={() => window.open(resumePDF, "_blank")}
                >
                  Download Resume
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

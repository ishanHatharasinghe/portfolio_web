import { useState, useEffect, useRef } from "react";
import "./header.css";
import "./button.css";
import logo from "./../assets/logo.png";
import {
  Home,
  User,
  Book,
  Briefcase,
  Award,
  Code,
  Paintbrush,
  Palette,
  Mail,
  MonitorSmartphone,
  MessageSquareQuote
} from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const scrollThreshold = 50; // Pixel threshold for scroll effects

  // Define your navigation items - added Testimonials section
  const navItems = [
    { icon: <Home className="w-5 h-5" />, id: "home", tooltip: "Home" },
    { icon: <User className="w-5 h-5" />, id: "about", tooltip: "About" },
    {
      icon: <Book className="w-5 h-5" />,
      id: "education-journey",
      tooltip: "Education Journey"
    },
    {
      icon: <MonitorSmartphone className="w-5 h-5" />,
      id: "dexterity",
      tooltip: "Dexterity"
    },
    {
      icon: <Award className="w-5 h-5" />,
      id: "professional-designations",
      tooltip: "Professional Designations"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      id: "professional-journey",
      tooltip: "Professional Journey"
    },
    {
      icon: <Paintbrush className="w-5 h-5" />,
      id: "creative-ventures",
      tooltip: "Creative Ventures"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      id: "design-scape",
      tooltip: "Design Scape"
    },
    {
      icon: <MessageSquareQuote className="w-5 h-5" />,
      id: "testimonials",
      tooltip: "Testimonials"
    },
    { icon: <Mail className="w-5 h-5" />, id: "contact", tooltip: "Contact" }
  ];

  // Handle click outside of mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-controls="mobile-menu"]')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update scroll position and active section
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollPosition(currentScrollY);

          // Get all sections and determine which one is in view
          const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

          if (sections.length) {
            const viewportHeight = window.innerHeight;
            const currentSection = sections.reduce((acc, section) => {
              const bounds = section.getBoundingClientRect();
              const visiblePortion =
                Math.min(bounds.bottom, viewportHeight) -
                Math.max(bounds.top, 0);
              const isVisible = visiblePortion > 0;
              const visibilityRatio = isVisible
                ? visiblePortion / Math.min(bounds.height, viewportHeight)
                : 0;

              if (
                visibilityRatio > 0.5 ||
                (bounds.top <= 100 && bounds.bottom >= 100)
              ) {
                return section.id;
              }
              return acc;
            }, activeSection);

            if (currentSection !== activeSection) {
              setActiveSection(currentSection);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, navItems]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Add offset to account for fixed header
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });

      setIsMenuOpen(false);
      setActiveSection(id);

      // Update URL hash without jumping
      window.history.pushState(null, null, `#${id}`);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  // Check URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 500); // Delay to ensure DOM is ready
    }
  }, []);

  // Close mobile menu on resize (if screen becomes desktop size)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Calculate scroll progress for the progress bar
  const scrollProgress = Math.min(
    (scrollPosition /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100,
    100
  );

  return (
    <>
      {/* Progress bar */}
      <div
        style={{
          width: `${scrollProgress}%`,
          height: "3px",
          background: "linear-gradient(to right, #8B5CF6, #06B6D4, #10B981)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          transition: "width 0.3s ease-in-out",
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
        }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Scroll progress"
      />

      <nav
        ref={navRef}
        className={`fixed left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[85%] lg:w-[80%] flex justify-between items-center p-2 md:p-3 transition-all duration-700 ${
          scrollPosition > scrollThreshold
            ? "bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 shadow-purple-500/10"
            : "bg-gradient-to-r from-black/50 via-black/40 to-black/50 backdrop-blur-lg rounded-2xl border border-white/10"
        } top-1 md:top-2 opacity-100`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Logo and Title */}
        <div
          onClick={() => scrollToSection("home")}
          onKeyDown={(e) => handleKeyDown(e, "home")}
          className="relative cursor-pointer text-white font-bold text-base sm:text-lg md:mr-8 flex items-center transition-all duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text group"
          role="button"
          tabIndex={0}
          aria-label="Go to home section"
        >
          {/* Logo image with enhanced styling */}
          <div className="relative w-8 h-8 mr-3 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-purple-400/30">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={logo}
              alt="Logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
                e.target.parentNode.innerHTML +=
                  '<span class="text-white font-bold">IN</span>';
              }}
              className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <span className="text-sm font-thin hidden sm:inline-block bg-gradient-to-r from-white to-gray-300 bg-clip-text">
            the intersection |{" "}
            <span className="text-sm font-light bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </span>
        </div>

        {/* Desktop Navigation - Enhanced with modern glassmorphism */}
        <div className="hidden md:flex items-center justify-center p-2 bg-gradient-to-r from-black/60 via-black/50 to-black/60 backdrop-blur-xl rounded-2xl shadow-inner border border-white/10">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className={`relative p-3 mx-1 rounded-xl transition-all duration-500 group overflow-hidden
                  ${
                    isActive
                      ? "text-white bg-gradient-to-br from-purple-600/80 via-purple-500/60 to-cyan-600/40 shadow-lg shadow-purple-500/30 scale-110"
                      : "text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-gray-700/40 hover:to-gray-600/30 hover:scale-105"
                  }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.tooltip}
              >
                {/* Background glow effect */}
                <div
                  className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-400/20 to-cyan-400/20 opacity-100"
                      : "bg-gradient-to-r from-gray-400/10 to-gray-500/10 opacity-0 group-hover:opacity-100"
                  }`}
                ></div>

                <div className="relative z-10">{item.icon}</div>

                {/* Enhanced Tooltip */}
                <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black/90 to-gray-900/90 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none backdrop-blur-sm border border-white/10 shadow-lg">
                  {item.tooltip}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-black/90 to-gray-900/90 rotate-45 border-l border-t border-white/10"></div>
                </span>
              </button>
            );
          })}
        </div>

        {/* Enhanced Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-700/40 backdrop-blur-lg hover:from-gray-700/70 hover:to-gray-600/50 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 group border border-white/10 hover:scale-105"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Toggle Menu</span>
          <div className="absolute w-5 h-3.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center">
            <span
              className={`absolute h-0.5 w-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 transform ${
                isMenuOpen
                  ? "rotate-45 translate-y-1.5 from-purple-400 to-cyan-400"
                  : "translate-y-0"
              }`}
            />
            <span
              className={`absolute top-1/2 h-0.5 w-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 transform ${
                isMenuOpen ? "opacity-0 translate-x-2" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 h-0.5 w-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 transform ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-1.5 from-purple-400 to-cyan-400"
                  : "translate-y-0"
              }`}
            />
          </div>
        </button>

        {/* Enhanced Mobile Menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`absolute top-full mt-3 right-0 w-72 md:hidden bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 origin-top border border-white/20 ${
            isMenuOpen
              ? "max-h-[80vh] opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95 pointer-events-none"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <div className="p-4 space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl text-sm transition-all duration-500 flex items-center space-x-4 group overflow-hidden
                    ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600/70 via-purple-500/50 to-cyan-600/30 text-white font-medium shadow-lg shadow-purple-500/20 scale-105"
                        : "text-gray-300 hover:bg-gradient-to-r hover:from-gray-700/60 hover:to-gray-600/40 hover:text-white hover:scale-102"
                    }`}
                  style={{
                    transitionDelay: `${index * 80}ms`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen
                      ? "translateY(0) translateX(0)"
                      : "translateY(-20px) translateX(10px)"
                  }}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                >
                  {/* Background effect */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-400/10 to-cyan-400/10 opacity-100"
                        : "bg-gradient-to-r from-gray-400/5 to-gray-500/5 opacity-0 group-hover:opacity-100"
                    }`}
                  ></div>

                  <div className="relative z-10 flex items-center space-x-4">
                    <div
                      className={`transition-all duration-300 ${
                        isActive ? "text-white" : "group-hover:text-purple-400"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.tooltip}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Enhanced Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/80 via-purple-500/60 to-cyan-600/40 hover:from-purple-500/90 hover:to-cyan-500/50 text-white p-3 transition-all duration-500 shadow-2xl hover:shadow-purple-500/30 flex items-center justify-center z-40 backdrop-blur-sm border border-white/20 group ${
          scrollPosition > window.innerHeight / 2
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-90 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        {/* Background glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <svg
          className="relative z-10 w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
}

export default Header;

import { useState, useEffect, useRef } from "react";
import "./header.css";
import "./button.css";
import logo from "./../assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const scrollThreshold = 50; // Pixel threshold for scroll effects

  // Define your navigation items
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
            .map((item) => {
              const id = item
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(/\s+/g, "-");
              return document.getElementById(id);
            })
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
          background: "linear-gradient(to right, #050330FF, #FFA200FF)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          transition: "width 0.3s ease-in-out"
        }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Scroll progress"
      />

      <nav
        ref={navRef}
        className={`fixed left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-black/60 to-black w-[90%] md:w-[85%] lg:w-[90%] flex justify-between items-center p-2 md:p-3 transition-all duration-300 ${
          scrollPosition > scrollThreshold
            ? "bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/10"
            : "bg-transparent"
        } top-1 md:top-2 opacity-100`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo and Title */}
        <div
          onClick={() => scrollToSection("home")}
          onKeyDown={(e) => handleKeyDown(e, "home")}
          className="cursor-pointer text-white font-bold text-base sm:text-lg md:mr-8 flex items-center transition-all duration-300 hover:text-blue-400"
          role="button"
          tabIndex={0}
          aria-label="Go to home section"
        >
          {/* Logo image with fallback */}
          <div className="w-7 h-7 mr-2 rounded-full overflow-hidden  flex items-center justify-center">
            <img
              src={logo}
              alt="Ishan Nilaksha"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
                e.target.parentNode.innerHTML +=
                  '<span class="text-white font-bold">IN</span>';
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-thin hidden sm:inline-block">
            the intersection | <span className="text-sm">Portfolio</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 lg:space-x-3">
          {navItems.map((item) => {
            const itemId = item
              .toLowerCase()
              .replace(/ & /g, "-")
              .replace(/\s+/g, "-");
            const isActive = activeSection === itemId;

            return (
              <button
                key={itemId}
                onClick={() => scrollToSection(itemId)}
                onKeyDown={(e) => handleKeyDown(e, itemId)}
                className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-300 overflow-hidden
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600/60 to-blue-800/40 shadow-lg shadow-blue-500/20 font-medium"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/30"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative z-10">{item}</span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    isActive ? "w-1/2 transform -translate-x-1/2" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-10 h-10 rounded-lg bg-gray-800/30 backdrop-blur-sm hover:bg-gray-700/30 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Toggle Menu</span>
          <div className="absolute w-5 h-3.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center ">
            <span
              className={`absolute h-0.5 w-full bg-white rounded-full transition-all duration-300 transform ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : "translate-y-0"
              }`}
            />
            <span
              className={`absolute top-1/2 h-0.5 w-full bg-white rounded-full transition-all duration-300 transform ${
                isMenuOpen ? "opacity-0 translate-x-2" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 h-0.5 w-full bg-white rounded-full transition-all duration-300 transform ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0"
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`absolute top-full mt-2 right-0 left-0 md:hidden bg-black/80 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top ${
            isMenuOpen
              ? "max-h-[80vh] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <div className="p-4 space-y-2">
            {navItems.map((item, index) => {
              const itemId = item
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(/\s+/g, "-");
              const isActive = activeSection === itemId;
              return (
                <button
                  key={itemId}
                  onClick={() => scrollToSection(itemId)}
                  onKeyDown={(e) => handleKeyDown(e, itemId)}
                  className={`w-full text-left font-bol text-white px-4 py-3 rounded-lg text-sm transition-all duration-300 
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600/60 to-blue-800/40 text-blue-400 font-medium"
                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    }
                    transform transition-transform`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen
                      ? "translateY(0)"
                      : "translateY(-10px)"
                  }}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-lg bg-[#1A1E2D] hover:bg-[#252A3A] text-[#FF6B6B] p-3 rounded-full transition-colors shadow-lg hover:shadow-[#FF6B6B]/10 flex items-center justify-center z-40 transition-all duration-300 ${
          scrollPosition > window.innerHeight / 2
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-white"
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

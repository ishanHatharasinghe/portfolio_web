import { useState, useEffect, useRef } from "react";
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

  // Define your navigation items
  const navItems = [
    { icon: <Home className="w-4 h-4" />, id: "home", tooltip: "Home" },
    { icon: <User className="w-4 h-4" />, id: "about", tooltip: "About" },
    {
      icon: <Book className="w-4 h-4" />,
      id: "education-journey",
      tooltip: "Education Journey"
    },
    {
      icon: <MonitorSmartphone className="w-4 h-4" />,
      id: "dexterity",
      tooltip: "Dexterity"
    },
    {
      icon: <Award className="w-4 h-4" />,
      id: "professional-designations",
      tooltip: "Professional Designations"
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      id: "professional-journey",
      tooltip: "Professional Journey"
    },
    {
      icon: <Paintbrush className="w-4 h-4" />,
      id: "creative-ventures",
      tooltip: "Creative Ventures"
    },
    {
      icon: <Palette className="w-4 h-4" />,
      id: "design-scape",
      tooltip: "Design Scape"
    },
    {
      icon: <MessageSquareQuote className="w-4 h-4" />,
      id: "testimonials",
      tooltip: "Testimonials"
    },
    { icon: <Mail className="w-4 h-4" />, id: "contact", tooltip: "Contact" }
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
      // Add offset to account for navigation
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
      }, 500);
    }
  }, []);

  // Close mobile menu on resize
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
      {/* Progress bar - at top */}
      <div
        style={{
          width: `${scrollProgress}%`,
          height: "2px",
          background: "linear-gradient(to right, #F97316, #FB923C, #FDBA74)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          transition: "width 0.3s ease-in-out",
          boxShadow: "0 0 10px rgba(249, 115, 22, 0.5)"
        }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Scroll progress"
      />

      {/* Compact Bottom Navigation */}
      <nav
        ref={navRef}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-black/90 via-black/80 to-black/90 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 px-2 py-1.5"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo - Home button */}
        <div className="flex items-center">
          <button
            onClick={() => scrollToSection("home")}
            onKeyDown={(e) => handleKeyDown(e, "home")}
            className={`p-2 rounded-full transition-all duration-300 mr-2 ${
              activeSection === "home"
                ? "text-white bg-gradient-to-br from-orange-600/80 to-amber-600/40 shadow-lg scale-110"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            }`}
            aria-label="Home"
          >
            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              IN
            </div>
          </button>

          {/* Desktop Navigation - Compact */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.slice(1).map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className={`relative p-2 rounded-full transition-all duration-300 group ${
                    isActive
                      ? "text-white bg-gradient-to-br from-orange-600/80 to-amber-600/40 shadow-lg scale-110"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                  aria-label={item.tooltip}
                >
                  {item.icon}

                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {item.tooltip}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 ml-2"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-4 h-3 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current rounded transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`absolute bottom-full mb-2 right-0 w-48 md:hidden bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden transition-all duration-300 border border-white/20 ${
            isMenuOpen
              ? "max-h-96 opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="p-2 space-y-1">
            {navItems.slice(1).map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 flex items-center space-x-3 ${
                    isActive
                      ? "bg-gradient-to-r from-orange-600/70 to-amber-600/30 text-white"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span className="text-xs">{item.tooltip}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Back to top button - smaller */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-orange-600/80 to-amber-600/40 text-white transition-all duration-300 shadow-lg flex items-center justify-center z-40 ${
          scrollPosition > window.innerHeight / 2
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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

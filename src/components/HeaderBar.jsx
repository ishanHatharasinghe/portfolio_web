import { useState, useEffect } from "react";
import "./../index.css";
import logo from "./../assets/myimage.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        if (bounds.top <= 100 && bounds.bottom >= 100) {
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
    }
  };

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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollPosition > 50
          ? `${
              isScrollingUp
                ? "translate-y-0 bg-black/80 backdrop-blur-lg shadow-lg shadow-blue-500/10"
                : "-translate-y-full"
            }`
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div
            className="flex items-center group cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full animate-pulse"></div>
              <img
                src={logo}
                alt="Ishan Nilaksha Logo"
                className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-gray-800 group-hover:border-blue-500 transition duration-300"
              />
            </div>
            <div className="ml-3 flex flex-col sm:flex-row sm:items-center">
              <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300 group-hover:from-blue-400 group-hover:to-purple-500 transition duration-300">
                Ishan Nilaksha
              </span>
              <span className="hidden sm:block text-sm text-gray-400 ml-2">
                |
              </span>
              <span className="text-xs sm:text-sm text-gray-400 sm:ml-2">
                Portfolio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center bg-gray-800/30 backdrop-blur-sm rounded-full p-1">
              {navItems.map((item) => {
                const itemId = item
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(" ", "-");
                const isActive = activeSection === itemId;

                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(itemId)}
                    className={`relative px-3 py-2 text-sm rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20"
                        : "text-gray-300 hover:text-white hover:bg-gray-700/30"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Designer Mode Button */}
            <a
              href="https://ishanhatharasinghe.github.io/graphic_portfolio_web"
              target="_blank"
              rel="noopener noreferrer"
              className="relative ml-4 inline-flex items-center px-6 py-2 overflow-hidden rounded-full group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
              </span>
              <span className="relative text-white font-medium text-sm">
                Designer Mode
              </span>
            </a>
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-2">
            <div className="relative group">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800/30 backdrop-blur-sm rounded-full hover:bg-gray-700/30 transition duration-300"
              >
                <span className="text-gray-300 text-sm">Menu</span>
                <svg
                  className={`w-4 h-4 text-gray-300 transform transition-transform duration-300 ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700/30 overflow-hidden">
                  {navItems.map((item) => {
                    const itemId = item
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(" ", "-");
                    const isActive = activeSection === itemId;

                    return (
                      <button
                        key={item}
                        onClick={() => scrollToSection(itemId)}
                        className={`w-full text-left px-4 py-2.5 text-sm transition duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400"
                            : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}

                  <a
                    href="https://ishanhatharasinghe.github.io/graphic_portfolio_web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition duration-300"
                  >
                    Designer Mode
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-full bg-gray-800/30 backdrop-blur-sm hover:bg-gray-700/30 transition duration-300 focus:outline-none"
          >
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="flex flex-col items-center justify-center h-full space-y-1.5">
                <span
                  className={`block w-5 h-0.5 bg-gray-300 transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-gray-300 transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-gray-300 transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="bg-gray-800/95 backdrop-blur-lg rounded-2xl p-2 border border-gray-700/30">
            {navItems.map((item) => {
              const itemId = item
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(" ", "-");
              const isActive = activeSection === itemId;

              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(itemId)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}

            <a
              href="https://ishanhatharasinghe.github.io/graphic_portfolio_web"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium text-center hover:from-blue-600 hover:to-purple-700 transition duration-300"
            >
              Designer Mode
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

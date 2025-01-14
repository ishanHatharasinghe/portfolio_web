import { useState } from "react";
import "./../index.css";
import logo from "./../assets/myimage.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    console.log(`Navigating to section: ${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the mobile menu after clicking
    } else {
      console.warn(`Section with id "${id}" not found.`);
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
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg glow-effect">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between rounded-lg">
        {/* Logo and Title */}
        <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
          <img
            src={logo}
            alt="Ishan Nilaksha Logo"
            className="h-6 w-6 rounded-full object-cover border-2 border-gray-700"
          />
          <span className="ml-2 text-xl font-bold text-gray-200 hover:text-blue-400 transition duration-300">
            Ishan Nilaksha
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-200 font-medium items-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(
                  item.toLowerCase().replace(/ & /g, "-").replace(" ", "-")
                )
              }
              className="text-gray-200 hover:text-blue-400 hover:bg-gray-800 transition duration-300 ease-in-out rounded-md px-3 py-2"
            >
              {item}
            </button>
          ))}

          {/* Designer Mode Button */}
          <a
            href="https://ishanhatharasinghe.github.io/graphic_portfolio_web"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Designer Mode
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 border-t border-gray-700 shadow-md rounded-b-lg">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(
                  item.toLowerCase().replace(/ & /g, "-").replace(" ", "-")
                )
              }
              className="block px-10 py-2 text-gray-200 hover:text-blue-400 hover:bg-gray-700 transition duration-200 rounded-md mx-4 my-1"
            >
              {item}
            </button>
          ))}

          {/* Designer Mode Button (Mobile) */}
          <a
            href="https://ishanhatharasinghe.github.io/graphic_portfolio_web"
            rel="noopener noreferrer"
            className="font-bold block px-10 py-2 text-gray-200 hover:text-blue-400 bg-gray-700 hover:bg-blue-600 transition duration-200 rounded-md mx-4 my-1"
          >
            Designer Mode
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;

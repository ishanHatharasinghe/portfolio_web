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

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#000000FF] to-[#000000FF] shadow-lg glow-effect">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between rounded-lg">
        {/* Logo and Title */}
        <div className="flex items-center transform hover:scale-110 transition-transform duration-300">
          <img
            src={logo}
            alt="Ishan Nilaksha Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="ml-2 text-2xl font-bold text-[#f3e8ff] hover:text-[#2200FFFF] transform hover:scale-101 transition-transform duration-300">
            Ishan Nilaksha
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-[#f3e8ff] font-medium items-center">
          {[
            "Home",
            "About",
            "Skills",
            "Work Experience",
            "Projects",
            "Contact"
          ].map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(item.toLowerCase().replace(" ", "-"))
              }
              className="text-[#FFFFFF] hover:text-[#FFFFFFFF] hover:bg-[#00008B] transition duration-300 ease-in-out rounded-md px-2 py-1"
            >
              {item}
            </button>
          ))}

          {/* Designer Mode Button */}
          <a
            href="https://ishanhatharasinghe.github.io/graphic_portfolio_web"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#030029FF] font-semibold px-4 py-2 rounded-md hover:bg-[#030029FF] hover:text-white transition duration-300"
          >
            Designer Mode
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#f3e8ff] focus:outline-none"
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
        <nav className="md:hidden bg-[#090018FF] border-t border-[#f3e8ff] shadow-md rounded-b-lg">
          {[
            "Home",
            "About",
            "Skills",
            "Work Experience",
            "Projects",
            "Contact"
          ].map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(item.toLowerCase().replace(" ", "-"))
              }
              className="block px-10 py-2 text-[#FFFFFF] hover:text-[#FFFFFFFF] hover:bg-[#00008B] transition duration-200 rounded-md mx-4 my-1"
            >
              {item}
            </button>
          ))}

          {/* Designer Mode Button (Mobile) */}
          <a
            href="https://ishanhatharasinghe.github.io/graphic_portfolio_web"
            rel="noopener noreferrer"
            className="block text-center bg-white text-[#030029FF] font-semibold px-4 py-2 rounded-md hover:bg-[#030029FF] hover:text-white transition duration-300 mx-4 my-2"
          >
            Designer Mode
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;

import { useState } from "react";
import "./../index.css";
import logo from "./../assets/logo.png";

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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#030029FF] to-[#3C002FFF] shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between rounded-lg">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#f3e8ff] flex items-center transform hover:scale-110 transition-transform duration-300">
          <img src={logo} alt="Portfolio Logo" className="h-7 w-auto" />
          <span className="hover:text-[#FF0000FF] text-lg">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-[#f3e8ff] font-medium">
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
              className="hover:text-[#FF0000FF] transition duration-300 ease-in-out rounded-md px-2 py-1"
            >
              {item}
            </button>
          ))}
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
              className="block px-10 py-2 hover:bg-[#FF0000FF] text-[#e5e7eb] transition duration-200 rounded-md mx-4 my-1"
            >
              {item}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;

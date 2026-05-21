import { useState, useEffect, useRef } from "react";
import {
  Home,
  User,
  Book,
  Briefcase,
  Award,
  Paintbrush,
  Palette,
  Mail,
  MonitorSmartphone,
  MessageSquareQuote,
  Search
} from "lucide-react";
import throttle from "lodash.throttle";
import dp from "./../assets/myimage.webp";
import Robot from "../assets/28ddd8026ef34e12f9a9c60c864b3e8e-removebg-preview.webp";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchInputRef = useRef(null);
  const menuRef = useRef(null);
  const navRef = useRef(null);

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
      tooltip: "Certifications"
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

  useEffect(() => {
    const handleScroll = throttle(() => {
      const y = window.scrollY;
      setScrollPosition(y);

      const sections = navItems
        .map((i) => document.getElementById(i.id))
        .filter(Boolean);
      const viewport = window.innerHeight;

      for (let sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          if (activeSection !== sec.id) setActiveSection(sec.id);
          break;
        }
      }
    }, 200);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // 🧠 Optional - leave your `highlightInSection` as-is (can be slow if many text nodes)
  const scrollToSection = (id, highlightText = "") => {
    const sec = document.getElementById(id);
    if (!sec) return;
    const yOffset = -80;
    const top = sec.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(id);
    if (highlightText) highlightInSection(sec, highlightText);
  };

  const highlightInSection = (section, text) => {
    if (!text) return;
    const regex = new RegExp(`(${text})`, "gi");
    section.querySelectorAll(".search-highlight").forEach((el) => {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.textContent), el);
      parent.normalize();
    });
    const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) =>
        regex.test(node.textContent)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((textNode) => {
      const frag = document.createDocumentFragment();
      let last = 0,
        match;
      regex.lastIndex = 0;
      while ((match = regex.exec(textNode.textContent))) {
        const before = textNode.textContent.slice(last, match.index);
        if (before) frag.appendChild(document.createTextNode(before));
        const span = document.createElement("span");
        span.className = "search-highlight bg-yellow-300";
        span.textContent = match[0];
        frag.appendChild(span);
        last = regex.lastIndex;
      }
      const after = textNode.textContent.slice(last);
      if (after) frag.appendChild(document.createTextNode(after));
      textNode.parentNode.replaceChild(frag, textNode);
    });
    setTimeout(() => {
      section.querySelectorAll(".search-highlight").forEach((el) => {
        const p = el.parentNode;
        p.replaceChild(document.createTextNode(el.textContent), el);
        p.normalize();
      });
    }, 3000);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = navItems
      .map(({ id, tooltip }) => {
        const sec = document.getElementById(id);
        if (!sec) return null;
        const txt = sec.innerText?.toLowerCase();
        const idx = txt.indexOf(q);
        if (idx === -1) return null;
        let snip = txt.slice(Math.max(0, idx - 30), idx + q.length + 30);
        return { id, tooltip, snippet: snip };
      })
      .filter(Boolean);

    setSearchResults(results);
    setShowResults(true);
  };

  // ✅ Close search and mobile menu on outside click
  useEffect(() => {
    const clickListener = (e) => {
      if (!searchInputRef.current?.contains(e.target)) setShowResults(false);
      if (!menuRef.current?.contains(e.target)) setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", clickListener);
    return () => document.removeEventListener("mousedown", clickListener);
  }, []);

  // ✅ Auto-close menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollProgress = Math.min(
    (scrollPosition /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100,
    100
  );

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        style={{
          width: `${scrollProgress}%`,
          height: "2px",
          background: "#ffffff",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          transition: "width 0.3s ease-in-out",
        }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Scroll progress"
      />
      {/* Nav Bar - Minimal Design */}
      <nav
        ref={navRef}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/95 backdrop-blur-md rounded-full shadow-lg border border-white/10 px-2 py-2 flex items-center space-x-1"
        aria-label="Main navigation"
      >
        {/* Home logo */}
        <button
          onClick={() => scrollToSection("home")}
          className={`p-2 rounded-full transition ${
            activeSection === "home"
              ? "text-black bg-white scale-110"
              : "text-gray-400 hover:text-white hover:bg-white/10"
          }`}
          aria-label="Home"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-300 to-gray-600 flex items-center justify-center text-white font-bold text-xs">
            <img src={dp} alt="profile" className=" rounded-full" />
          </div>
        </button>

        {/* Desktop nav icons */}
        <div className="hidden md:flex items-center space-x-0.5">
          {navItems.slice(1).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-2 rounded-full transition ${
                activeSection === item.id
                  ? "text-black bg-white scale-105"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
              aria-label={item.tooltip}
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Mobile toggle & menu */}
        <div className="relative md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-4 h-3 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current rounded transition ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>

          <div
            id="mobile-menu"
            ref={menuRef}
            className={`absolute bottom-full mb-3 left-[1px] w-48 origin-bottom transform transition-all duration-300 bg-black/95 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/10 z-50 ${
              isMenuOpen
                ? "max-h-96 opacity-100 scale-100"
                : "max-h-0 opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="p-2 space-y-1">
              {/* Mobile Menu Nav Items */}
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition ${
                    activeSection === item.id
                      ? "bg-white text-black"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span className="text-xs">{item.tooltip}</span>
                </button>
              ))}

              {/* Search bar visible inside mobile menu */}
              <form
                onSubmit={handleSearch}
                className="relative mt-2 flex items-center"
                role="search"
                aria-label="Website search"
              >
                <input
                  type="search"
                  autoComplete="off"
                  placeholder="Search..."
                  className="rounded-full px-3 py-1.5 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition text-sm w-full border border-white/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowResults(searchResults.length > 0)}
                />
                <button
                  type="submit"
                  className="ml-2 px-3 py-1.5 rounded-full bg-white hover:bg-gray-200 text-black text-sm transition flex items-center justify-center"
                  aria-label="Submit search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Search form for desktop and tablets */}
        <form
          onSubmit={handleSearch}
          className="relative ml-3 flex items-center"
          ref={searchInputRef}
          role="search"
          aria-label="Website search"
        >
          <input
            type="search"
            autoComplete="off"
            placeholder="Search..."
            className="rounded-full px-3 py-1.5 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition text-sm w-28 sm:w-48 md:w-64 border border-white/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowResults(searchResults.length > 0)}
          />
          <button
            type="submit"
            className="ml-2 px-3 py-1.5 rounded-full bg-white hover:bg-gray-200 text-black text-sm transition flex items-center justify-center"
            aria-label="Submit search"
          >
            <Search className="w-4 h-4" />
          </button>

          {showResults && (
            <ul
              id="search-results"
              role="listbox"
              className="absolute bottom-full mb-1 w-72 max-h-64 overflow-auto bg-black/90 backdrop-blur-md rounded-md shadow-lg border border-white/20 text-white z-50"
            >
              {searchResults.length === 0 && (
                <li className="px-3 py-2 text-gray-400">No results found.</li>
              )}
              {searchResults.map(({ id, tooltip, snippet }) => (
                <li
                  key={id}
                  role="option"
                  tabIndex={0}
                  className="cursor-pointer px-3 py-2 hover:bg-white hover:text-black transition"
                  onClick={() => {
                    scrollToSection(id, searchQuery);
                    setShowResults(false);
                    setSearchQuery("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      scrollToSection(id, searchQuery);
                      setShowResults(false);
                      setSearchQuery("");
                    }
                  }}
                >
                  <strong>{tooltip}</strong>
                  <p className="text-xs mt-1 line-clamp-2">{snippet}</p>
                </li>
              ))}
            </ul>
          )}
        </form>
      </nav>
      {/* Robot Back to top - Hidden on mobile */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-4 right-4 w-16 h-16 shadow-lg flex items-center justify-center transition transform hover:scale-110 hidden sm:flex ${
          scrollPosition > window.innerHeight / 2
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        } z-40`}
        aria-label="Back to top"
      >
        <img
          src={Robot}
          alt="Robot - Back to top"
          className="w-full h-full object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 robot-float"
        />
      </button>
      <style>{`
        .search-highlight { 
          background-color: #fde68a; 
          border-radius: 0.2rem; 
          transition: background-color 0.3s;
        }
        
        .line-clamp-2 { 
          display: -webkit-box; 
          -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical; 
          overflow: hidden;
        }
        
        .robot-float {
          animation: robotFloat 3s ease-in-out infinite;
        }
        
        .robot-float:hover {
          animation: robotFloatFast 1.5s ease-in-out infinite;
        }
        
        @keyframes robotFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-6px) rotate(1deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(0deg); 
          }
          75% { 
            transform: translateY(-4px) rotate(-1deg); 
          }
        }
        
        @keyframes robotFloatFast {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1.25); 
          }
          25% { 
            transform: translateY(-8px) rotate(2deg) scale(1.25); 
          }
          50% { 
            transform: translateY(-12px) rotate(0deg) scale(1.25); 
          }
          75% { 
            transform: translateY(-6px) rotate(-2deg) scale(1.25); 
          }
        }
      `}</style>
    </>
  );
}

export default Header;

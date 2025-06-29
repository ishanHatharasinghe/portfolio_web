import { useState, useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaBehance
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { MessageCircle, X, Sparkles } from "lucide-react";

const links = [
  {
    icon: <FaLinkedin />,
    delay: 0,
    link: "https://www.linkedin.com/in/ishan-nilaksha-686461308/"
  },
  {
    icon: <FaFacebook />,
    delay: 0.1,
    link: "https://www.facebook.com"
  },
  {
    icon: <FaInstagram />,
    delay: 0.2,
    link: "https://www.instagram.com/ishan_hatharasinghe/"
  },
  {
    icon: <FaWhatsapp />,
    delay: 0.3,
    link: "https://wa.me/0703052181"
  },
  {
    icon: <FaGithub />,
    delay: 0.4,
    link: "https://github.com/ishanHatharasinghe"
  },
  {
    icon: <FaBehance />,
    delay: 0.5,
    link: "https://www.behance.net/ishannilaksha"
  },
  {
    icon: <SiFiverr />,
    delay: 0.6,
    link: "https://www.fiverr.com/sellers/vector_ix/"
  }
];

const FloatingSocialSidebar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 });
  const [showSparkle, setShowSparkle] = useState(false);
  const wrapperRef = useRef(null);

  // Sparkle animation on hover
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSparklePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  // Auto-close on mobile after interaction
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setTimeout(() => setOpen(false), 300);
    }
  };

  return (
    <>
      {/* Backdrop blur overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        ref={wrapperRef}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50"
      >
        <div className="relative">
          {/* Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowSparkle(true)}
            onMouseLeave={() => setShowSparkle(false)}
            className={`
              relative overflow-hidden
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
              rounded-2xl md:rounded-3xl
              bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600
              shadow-xl shadow-orange-500/30
              border border-orange-300/30
              text-white
              transition-all duration-500 ease-out
              hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50
              active:scale-95
              group
              touch-manipulation
              flex items-center justify-center
            `}
          >
            {/* Animated background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse" />

            {/* Sparkle effect */}
            {showSparkle && (
              <div
                className="absolute pointer-events-none transition-all duration-300"
                style={{
                  left: sparklePosition.x,
                  top: sparklePosition.y,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <Sparkles className="w-2 h-2 text-yellow-200 animate-spin" />
              </div>
            )}

            {/* Icon with smooth rotation - perfectly centered */}
            <div
              className={`
              relative z-10 flex items-center justify-center
              transform transition-all duration-700 ease-out
              ${open ? "rotate-180 scale-100" : "rotate-0 scale-100"}
            `}
            >
              {open ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </div>

            {/* Pulsing ring animation */}
            <div
              className={`
              absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-orange-400
              ${open ? "animate-ping" : ""}
              transition-opacity duration-300
            `}
            />
          </button>

          {/* Social Links Panel */}
          <div
            className={`
            absolute top-14 sm:top-16 md:top-20 left-0
            transform transition-all duration-700 ease-out
            ${
              open
                ? "opacity-100 translate-y-0 scale-100 translate-x-0"
                : "opacity-0 -translate-y-8 scale-90 -translate-x-4 pointer-events-none"
            }
          `}
          >
            <div
              className="
              w-14 sm:w-16 md:w-18 p-2 space-y-2
              bg-gradient-to-b from-gray-900/95 via-black/95 to-gray-900/95
              backdrop-blur-2xl
              border border-orange-500/30
              rounded-2xl md:rounded-3xl
              shadow-2xl shadow-black/60
              relative
              overflow-hidden
            "
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-400/5 to-transparent opacity-50" />

              {/* Floating particles effect */}
              <div
                className="absolute top-2 right-2 w-1 h-1 bg-orange-400 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="absolute bottom-4 left-3 w-0.5 h-0.5 bg-orange-300 rounded-full animate-bounce opacity-40"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/2 right-1 w-0.5 h-0.5 bg-orange-500 rounded-full animate-bounce opacity-50"
                style={{ animationDelay: "2s" }}
              />

              {links.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`
                  relative block
                  w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
                  rounded-xl
                  flex items-center justify-center
                  text-white text-sm sm:text-base md:text-lg
                  transition-all duration-500 ease-out
                  transform hover:scale-125 active:scale-95
                  ${
                    hoveredIndex === index
                      ? "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 shadow-lg shadow-orange-500/60 -translate-y-1"
                      : "bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 hover:from-gray-700/80 hover:to-gray-800/80"
                  }
                  border border-orange-500/30
                  group/icon
                  touch-manipulation
                `}
                  style={{
                    animationDelay: `${item.delay}s`,
                    animation: open
                      ? "slideInLeft 0.6s ease-out forwards"
                      : "none"
                  }}
                >
                  {/* Multi-layered hover effects */}
                  <div
                    className={`
                  absolute inset-0 rounded-xl
                  bg-gradient-to-br from-orange-400/30 to-orange-600/30
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-500
                  blur-sm group-hover/icon:blur-none
                `}
                  />

                  <div
                    className={`
                  absolute inset-0 rounded-xl
                  bg-gradient-to-tr from-white/10 to-transparent
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-700
                `}
                  />

                  {/* Icon with complex animations - perfectly centered */}
                  <div
                    className={`
                  relative z-10 flex items-center justify-center
                  transform group-hover/icon:rotate-12 group-hover/icon:scale-110
                  transition-all duration-500 ease-out
                  ${hoveredIndex === index ? "animate-pulse" : ""}
                `}
                  >
                    {item.icon}
                  </div>

                  {/* Ripple effect on hover */}
                  {hoveredIndex === index && (
                    <>
                      <div className="absolute inset-0 rounded-xl bg-orange-500/20 animate-ping" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 to-orange-600/20 animate-pulse" />
                    </>
                  )}

                  {/* Glowing border animation */}
                  <div
                    className={`
                  absolute inset-0 rounded-xl
                  border-2 border-orange-400/50
                  opacity-0 group-hover/icon:opacity-100
                  transition-all duration-300
                  animate-pulse
                `}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default FloatingSocialSidebar;

import { useEffect, useState } from "react";
import logo from "../assets/myimage.webp";

// Monochrome Color Theme
const MONO_COLORS = {
  // Pure Black
  darkBg: "#000000",
  // A dark gray for subtle background elements
  darkCard: "#111111",
  // Main accent color: Pure White (high contrast)
  accent: "#ffffff",
  // Secondary accent/subtle effect: Light Gray
  secondaryAccent: "#aaaaaa",
  // Border/Divider color: Mid-Dark Gray
  borderColor: "#333333",
  // Text colors
  textPrimary: "#ffffff",
  textSecondary: "#888888"
};

const PreloaderScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          // Delay before calling onComplete to show completion animation
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        // Random increment for more natural feel
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-1000 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        // Radial gradient from a dark gray to pure black
        background: `radial-gradient(circle at 50% 50%, ${MONO_COLORS.darkCard} 0%, ${MONO_COLORS.darkBg} 100%)`
      }}
    >
      {/* Geometric grid pattern overlay (Subtle background detail) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${MONO_COLORS.borderColor}, ${MONO_COLORS.borderColor} 1px, transparent 1px, transparent 100px), repeating-linear-gradient(90deg, ${MONO_COLORS.borderColor}, ${MONO_COLORS.borderColor} 1px, transparent 1px, transparent 100px)`
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center space-y-10">
        {/* Logo container with complex geometry and animation */}
        <div className="relative">
          {/* Outer geometric spinning rings */}
          <div
            className="absolute -inset-10 animate-spin-slow"
            style={{
              // Use dashes for a 'blueprint' or 'wireframe' look
              border: `1px dashed ${MONO_COLORS.secondaryAccent}`,
              borderRadius: "50%"
            }}
          />

          <div
            className="absolute -inset-12 animate-spin-slower"
            style={{
              border: `1px solid ${MONO_COLORS.borderColor}`,
              borderRadius: "50%",
              transform: "rotate(45deg)"
            }}
          />

          {/* Logo container */}
          <div
            className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center animate-float-no-scale"
            style={{
              // Use a subtle box shadow instead of a full color glow
              boxShadow: `0 0 30px ${MONO_COLORS.accent}15`,
              borderRadius: "50%",
              transform: `scale(${1})` // Keeping scale constant for monochrome look
            }}
          >
            {/* Logo image (assuming it can be monochrome or will fit the theme) */}
            <img
              src={logo}
              alt="Loading..."
              className="rounded-full w-full h-full object-contain"
              style={
                {
                  // Subtle contrast filter if needed, otherwise rely on the logo's appearance
                  // Logo scale animation removed for a more stable, professional look
                }
              }
            />
          </div>
        </div>

        {/* Loading text and progress */}
        <div className="text-center space-y-6">
          <h2
            className="text-xl sm:text-3xl font-light tracking-[0.4em] uppercase"
            style={{ color: MONO_COLORS.textPrimary }}
          >
            <span className="opacity-75">Loading</span>
            <span className="ml-1 font-bold opacity-100">Portfolio</span>
          </h2>

          {/* Progress bar */}
          <div className="w-64 sm:w-96 mx-auto">
            <div className="flex justify-between items-center mb-1">
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: MONO_COLORS.textSecondary }}
              >
                Data Integrity Check
              </span>
              <span
                className="text-sm font-mono"
                style={{ color: MONO_COLORS.accent }}
              >
                {Math.round(progress)}%
              </span>
            </div>

            {/* Progress bar container (Squared for geometric look) */}
            <div
              className="relative h-1 overflow-hidden"
              style={{
                backgroundColor: MONO_COLORS.borderColor
              }}
            >
              {/* Progress fill */}
              <div
                className="absolute left-0 top-0 h-full transition-all duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                  backgroundColor: MONO_COLORS.accent
                }}
              >
                {/* Animated scanline shine effect */}
                <div
                  className="absolute inset-0 animate-shine"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)"
                  }}
                />
              </div>

              {/* Minimalist glow effect (white blur) */}
              <div
                className="absolute top-1/2 transform -translate-y-1/2 h-4 blur-md transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  left: 0,
                  backgroundColor: `${MONO_COLORS.accent}10`
                }}
              />
            </div>
          </div>
        </div>

        {/* Animated geometric indicator (replaces loading dots) */}
        <div className="flex space-x-3 mt-4">
          <div
            className="w-3 h-3 border-2 border-white animate-spin-dot"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-3 h-3 border-2 border-white animate-spin-dot"
            style={{ animationDelay: "150ms", transform: "rotate(45deg)" }}
          />
          <div
            className="w-3 h-3 border-2 border-white animate-spin-dot"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>

      {/* Completion animation overlay (Subtle white flash) */}
      {isComplete && (
        <div
          className="absolute inset-0 animate-pulse-flash"
          style={{
            background: `radial-gradient(circle, ${MONO_COLORS.accent}20, ${MONO_COLORS.darkBg} 60%)`
          }}
        />
      )}

      {/* Custom styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
            from { transform: rotate(45deg); }
            to { transform: rotate(405deg); }
        }
        @keyframes spin-dot {
            0%, 100% { transform: rotate(0deg); opacity: 1; }
            50% { transform: rotate(180deg); opacity: 0.5; }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }
        @keyframes float-no-scale { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-8px); } 
        }
        @keyframes pulse-flash {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }

        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-spin-slower { animation: spin-slower 12s linear infinite; }
        .animate-spin-dot { animation: spin-dot 1.5s ease-in-out infinite; }
        .animate-shine { animation: shine 2s ease-in-out infinite; }
        .animate-float-no-scale { animation: float-no-scale 6s ease-in-out infinite; }
        .animate-pulse-flash { animation: pulse-flash 0.8s ease-out; }
      `}</style>
    </div>
  );
};

export default PreloaderScreen;

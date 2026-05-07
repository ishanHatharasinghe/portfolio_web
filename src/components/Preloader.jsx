import { useEffect, useState, useRef } from "react";
import logo from "../assets/myimage.webp";

const PreloaderScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [phase, setPhase] = useState(0); // 0=loading, 1=reveal, 2=exit
  const [lettersVisible, setLettersVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);

  const name = "PORTFOLIO";

  useEffect(() => {
    // Staggered text reveal
    const t1 = setTimeout(() => setLettersVisible(true), 300);
    const t2 = setTimeout(() => setTaglineVisible(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setPhase(1);
          setTimeout(() => {
            setPhase(2);
            setTimeout(() => onComplete(), 700);
          }, 600);
          return 100;
        }
        const increment = prev < 30
          ? Math.random() * 8 + 4
          : prev < 70
          ? Math.random() * 5 + 2
          : Math.random() * 3 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  const displayProgress = Math.round(progress);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Josefin+Sans:wght@100;300;400&display=swap');

        @keyframes pl-rotate-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pl-rotate-ring-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes pl-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes pl-pulse-ring {
          0%   { transform: scale(0.95); opacity: 0.6; }
          50%  { transform: scale(1.05); opacity: 0.2; }
          100% { transform: scale(0.95); opacity: 0.6; }
        }
        @keyframes pl-letter-in {
          from { opacity: 0; transform: translateY(24px) skewY(4deg); }
          to   { opacity: 1; transform: translateY(0) skewY(0); }
        }
        @keyframes pl-tagline-in {
          from { opacity: 0; letter-spacing: 0.6em; }
          to   { opacity: 1; letter-spacing: 0.35em; }
        }
        @keyframes pl-counter-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pl-bar-glow {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        @keyframes pl-scan {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes pl-grid-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pl-orb-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(30px, -20px) scale(1.1); }
          66%       { transform: translate(-20px, 15px) scale(0.95); }
        }
        @keyframes pl-exit-up {
          from { transform: translateY(0); opacity: 1; }
          to   { transform: translateY(-100vh); opacity: 0; }
        }
        @keyframes pl-corner-draw {
          from { stroke-dashoffset: 80; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes pl-dot-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(0.4); opacity: 0.3; }
        }
        @keyframes pl-shine {
          0%   { left: -40%; }
          100% { left: 120%; }
        }

        .pl-letter {
          display: inline-block;
          opacity: 0;
          animation: pl-letter-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .pl-tagline {
          opacity: 0;
          animation: pl-tagline-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .pl-counter {
          opacity: 0;
          animation: pl-counter-in 0.5s ease forwards 0.4s;
        }
        .pl-exit {
          animation: pl-exit-up 0.7s cubic-bezier(0.76, 0, 0.24, 1) forwards !important;
        }
      `}</style>

      <div
        className={phase === 2 ? "pl-exit" : ""}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#030507",
          overflow: "hidden",
          fontFamily: "'Josefin Sans', sans-serif",
        }}
      >
        {/* ── Ambient orbs ── */}
        <div style={{
          position: "absolute", width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(213,169,154,0.07) 0%, transparent 70%)",
          top: "10%", left: "15%",
          animation: "pl-orb-drift 12s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(213,169,154,0.05) 0%, transparent 70%)",
          bottom: "10%", right: "10%",
          animation: "pl-orb-drift 15s ease-in-out infinite reverse",
          pointerEvents: "none",
        }} />

        {/* ── Fine grid overlay ── */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          animation: "pl-grid-fade 1.5s ease forwards",
          backgroundImage:
            "linear-gradient(rgba(213,169,154,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(213,169,154,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* ── Corner brackets ── */}
        {[
          { top: 24, left: 24, rotate: "0deg" },
          { top: 24, right: 24, rotate: "90deg" },
          { bottom: 24, right: 24, rotate: "180deg" },
          { bottom: 24, left: 24, rotate: "270deg" },
        ].map((pos, i) => (
          <svg key={i} width="32" height="32" viewBox="0 0 32 32"
            style={{ position: "absolute", ...pos, transform: `rotate(${pos.rotate})`, opacity: 0.4 }}>
            <polyline points="0,16 0,0 16,0"
              fill="none" stroke="#D5A99A" strokeWidth="1.5"
              strokeDasharray="80" strokeDashoffset="80"
              style={{ animation: `pl-corner-draw 0.8s ease ${0.2 + i * 0.1}s forwards` }} />
          </svg>
        ))}

        {/* ── Main stage ── */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>

          {/* ── Logo assembly ── */}
          <div style={{ position: "relative", width: 160, height: 160, display: "flex", alignItems: "center", justifyContent: "center" }}>

            {/* Outermost slow ring */}
            <div style={{
              position: "absolute", inset: -28,
              border: "1px dashed rgba(213,169,154,0.2)",
              borderRadius: "50%",
              animation: "pl-rotate-ring 20s linear infinite",
            }} />

            {/* Dashed accent ring */}
            <div style={{
              position: "absolute", inset: -14,
              border: "1px solid rgba(213,169,154,0.12)",
              borderRadius: "50%",
              animation: "pl-rotate-ring-rev 14s linear infinite",
            }}>
              {/* Tick marks on ring */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <div key={deg} style={{
                  position: "absolute", width: 4, height: 1,
                  background: "#D5A99A", opacity: 0.5,
                  top: "50%", left: "50%",
                  transformOrigin: "0 0",
                  transform: `rotate(${deg}deg) translateX(74px)`,
                }} />
              ))}
            </div>

            {/* Pulse ring */}
            <div style={{
              position: "absolute", inset: -4,
              border: "1px solid rgba(213,169,154,0.25)",
              borderRadius: "50%",
              animation: "pl-pulse-ring 3s ease-in-out infinite",
            }} />

            {/* Logo container */}
            <div style={{
              width: 160, height: 160, borderRadius: "50%",
              overflow: "hidden",
              border: "1.5px solid rgba(213,169,154,0.35)",
              boxShadow: "0 0 40px rgba(213,169,154,0.12), inset 0 0 20px rgba(0,0,0,0.4)",
              animation: "pl-float 6s ease-in-out infinite",
              background: "#0a0a0a",
            }}>
              <img src={logo} alt="Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.95) contrast(1.05)" }} />
            </div>
          </div>

          {/* ── Typography block ── */}
          <div style={{ textAlign: "center", userSelect: "none" }}>
            {/* Large staggered name */}
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px, 7vw, 68px)",
              fontWeight: 300,
              color: "#ffffff",
              letterSpacing: "0.2em",
              lineHeight: 1,
              marginBottom: 10,
            }}>
              {lettersVisible && name.split("").map((char, i) => (
                <span key={i} className="pl-letter"
                  style={{ animationDelay: `${i * 55}ms`, color: i < 4 ? "#D5A99A" : "#ffffff" }}>
                  {char}
                </span>
              ))}
            </div>

            {/* Thin rule */}
            <div style={{
              width: lettersVisible ? "100%" : "0%",
              height: "0.5px",
              background: "linear-gradient(90deg, transparent, #D5A99A, transparent)",
              margin: "10px auto",
              transition: "width 1s ease 0.5s",
            }} />

            {/* Tagline */}
            {taglineVisible && (
              <p className="pl-tagline" style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: 10,
                fontWeight: 100,
                color: "rgba(213,169,154,0.7)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginTop: 6,
              }}>
                Electronics · Software · Design
              </p>
            )}
          </div>

          {/* ── Progress section ── */}
          <div className="pl-counter" style={{ width: "min(340px, 80vw)" }}>

            {/* Label row */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              marginBottom: 8,
            }}>
              <span style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: 9, fontWeight: 300,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}>
                Initializing
              </span>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22, fontWeight: 300,
                color: "#D5A99A",
                letterSpacing: "0.05em",
                transition: "all 0.1s",
              }}>
                {displayProgress}<span style={{ fontSize: 12, opacity: 0.6 }}>%</span>
              </span>
            </div>

            {/* Progress track */}
            <div style={{
              position: "relative",
              height: 2,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 1,
              overflow: "hidden",
            }}>
              {/* Fill */}
              <div style={{
                position: "absolute", left: 0, top: 0, height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, rgba(213,169,154,0.6), #D5A99A)",
                borderRadius: 1,
                transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}>
                {/* Shine sweep */}
                <div style={{
                  position: "absolute", top: 0, width: "30%", height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                  animation: "pl-shine 1.8s ease-in-out infinite",
                }} />
              </div>

              {/* Leading dot */}
              <div style={{
                position: "absolute", top: "50%",
                left: `${Math.min(progress, 99)}%`,
                transform: "translate(-50%, -50%)",
                width: 5, height: 5, borderRadius: "50%",
                background: "#D5A99A",
                boxShadow: "0 0 8px #D5A99A, 0 0 16px rgba(213,169,154,0.4)",
                transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }} />
            </div>

            {/* Segmented secondary bar */}
            <div style={{ display: "flex", gap: 3, marginTop: 8 }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} style={{
                  flex: 1, height: 2, borderRadius: 1,
                  background: i < Math.floor(progress / 5)
                    ? `rgba(213,169,154,${0.3 + (i / 20) * 0.5})`
                    : "rgba(255,255,255,0.05)",
                  transition: "background 0.2s ease",
                  animation: i < Math.floor(progress / 5) ? `pl-bar-glow 1.5s ease ${i * 40}ms infinite` : "none",
                }} />
              ))}
            </div>
          </div>

          {/* ── Status dots ── */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {[0, 180, 360].map((delay) => (
              <div key={delay} style={{
                width: 4, height: 4, borderRadius: "50%",
                background: "#D5A99A",
                animation: `pl-dot-pulse 1.4s ease-in-out ${delay}ms infinite`,
              }} />
            ))}
          </div>
        </div>

        {/* ── Bottom watermark ── */}
        <div style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          fontFamily: "'Josefin Sans', sans-serif",
          fontSize: 8, fontWeight: 100,
          color: "rgba(255,255,255,0.15)",
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}>
          Crafting the Future · One Solution at a Time
        </div>
      </div>
    </>
  );
};

export default PreloaderScreen;
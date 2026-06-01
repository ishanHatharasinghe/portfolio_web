import { useEffect, useState } from "react";
import AINHLogo from "../assets/AINH.png";

const PreloaderScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  const [progVisible, setProgVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLogoVisible(true), 200);
    const t2 = setTimeout(() => setLineVisible(true), 600);
    const t3 = setTimeout(() => setTagVisible(true), 1100);
    const t4 = setTimeout(() => setProgVisible(true), 500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setPhase(1);
            setTimeout(() => onComplete(), 600);
          }, 400);
          return 100;
        }
        const inc =
          prev < 30 ? Math.random() * 8 + 4 :
          prev < 70 ? Math.random() * 5 + 2 :
                      Math.random() * 3 + 1;
        return Math.min(prev + inc, 100);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  const padded = String(Math.round(progress)).padStart(3, "0");

  return (
    <>
      <style>{`
        @keyframes pl-letter-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pl-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.2; transform: scale(0.3); }
        }
        @keyframes pl-shine {
          0%   { left: -50%; }
          100% { left: 120%; }
        }
        @keyframes pl-exit {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-60px); }
        }
        @keyframes pl-count-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pl-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(#111 2px, transparent 2px),
            linear-gradient(90deg, #111 2px, transparent 2px);
          background-size: 100px 100px;
          overflow: hidden;
        }
        .pl-background::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(-45deg, rgba(255,255,255,0.05) 20px, transparent 20px),
            linear-gradient(-135deg, rgba(255,255,255,0.05) 20px, transparent 20px),
            linear-gradient(135deg, rgba(255,255,255,0.05) 20px, transparent 20px),
            linear-gradient(45deg, rgba(255,255,255,0.05) 20px, transparent 20px);
          background-size: 100px 100px;
          background-position: 50px 50px;
          opacity: 0.4;
        }
        .pl-background::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(45deg, rgba(255,255,255,0.05) 20px, transparent 20px),
            linear-gradient(-45deg, rgba(255,255,255,0.05) 20px, transparent 20px),
            linear-gradient(135deg, rgba(255,255,255,0.05) 20px, transparent 20px),
            linear-gradient(-135deg, rgba(255,255,255,0.05) 20px, transparent 20px);
          background-size: 100px 100px;
          background-position: 1px 1px;
          opacity: 0.35;
        }

        .pl-letter {
          display: inline-block;
          opacity: 0;
          animation: pl-letter-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .pl-exiting {
          animation: pl-exit 0.6s cubic-bezier(0.76, 0, 0.24, 1) forwards !important;
        }
      `}</style>

      <div
        className={phase === 1 ? "pl-exiting" : ""}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Josefin Sans', sans-serif",
          overflow: "hidden",
        }}
      >
        <div className="pl-background" />
        {/* ── Center block ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                opacity: logoVisible ? 1 : 0,
                transition: "opacity 0.6s ease",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={AINHLogo}
                alt="AINH Logo"
                style={{
                  width: "clamp(180px, 28vw, 320px)",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            
            
          </div>

          

        </div>

        {/* ── Bottom right: font-tusker bold italic counter ── */}
        <div style={{
          position: "absolute",
          bottom: 28,
          right: 32,
          textAlign: "right",
          animation: "pl-count-in 0.5s ease 0.4s both",
        }}>
          <div
            className="font-tusker"
            style={{
              fontSize: "clamp(52px, 10vw, 96px)",
              fontWeight: 700,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {padded}
            <span style={{ fontSize: "0.55em", opacity: 0.4 }}>%</span>
          </div>
          <p style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontSize: 8,
            fontWeight: 100,
            color: "rgba(217,224,227,0.2)",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            marginTop: 4,
          }}>
            Loading
          </p>
        </div>

        {/* ── Bottom left: pulse dots ── */}
        <div style={{
          position: "absolute",
          bottom: 36,
          left: 32,
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}>
          {[0, 160, 320].map((delay) => (
            <div key={delay} style={{
              width: 3, height: 3,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.4)",
              animation: `pl-dot 1.4s ease-in-out ${delay}ms infinite`,
            }} />
          ))}
        </div>

      </div>
    </>
  );
};

export default PreloaderScreen;
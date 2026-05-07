import { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
// import FloatingSocialSidebar from "./components/FloatingSocialSidebar";
import { AuthProvider } from "./components/AuthContext.jsx";
import Header from "./components/HeaderBar";
import bg from "./assets/bg4.jpg";
import robot from "./assets/Home Section/1.webp";
import robot1 from "./assets/Home Section/1.webp";
import robot2 from "./assets/Home Section/2.webp";
import robot3 from "./assets/Home Section/3.webp";
import robot4 from "./assets/Home Section/4.webp";
import robot5 from "./assets/Home Section/5.webp";
import robot6 from "./assets/Home Section/6.webp";
import axios from "axios";

const Home = lazy(() => import("./components/Home"));
const VideoScreen = lazy(() => import("./components/videos"));
const AboutMe = lazy(() => import("./components/AboutUs"));
const Education = lazy(() => import("./components/Education"));
const SkillsData = lazy(() => import("./components/SkillsData"));
const LicensesCertifications = lazy(() =>
  import("./components/LicensesCertifications")
);
const WorkExperience = lazy(() => import("./components/WorkExperience"));
const ProjectsData = lazy(() => import("./components/ProjectsData"));
const Designs = lazy(() => import("./components/designpage"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Copyright = lazy(() => import("./components/Copyright"));

function App() {
  const [loading, setLoading] = useState(true);
  const [currentRobot, setCurrentRobot] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [slideDir, setSlideDir] = useState("right");

  const robots = [robot1, robot2, robot3, robot4, robot5, robot6];

  // New color scheme using only #D5A99A, #020408, and White
  const accentHex = "#D5A99A";
  const theme = {
    primaryGradient: "from-[#D5A99A] to-white",
    primaryHoverGradient: "from-[#D5A99A] to-white",
    secondaryGradient: "from-white to-[#020408]",
    secondaryHoverGradient: "from-white to-[#020408]",
    cardGradient: "from-[#020408]/80 via-[#020408]/60 to-[#020408]/40",
    cardHoverShadow: "hover:shadow-[#D5A99A]/40",
    cardBorder: "hover:border-[#D5A99A]/50",
    glowEffect: "from-[#D5A99A]/20 to-white/15",
    robotGlow: "from-[#D5A99A]/25 via-white/15 to-[#D5A99A]/20",
    accentColor: "text-[#D5A99A]",
    badgeGradient: "from-[#D5A99A]/30 to-white/20",
    badgeText: "text-white",
    badgeBorder: "border-[#D5A99A]/40"
  };

  useEffect(() => {
    AOS.init({ duration: 600, once: true });

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);


  // --- AUTOMATIC WHATSAPP NOTIFICATION (TextMeBot) ---
  useEffect(() => {
    const notifyAdmin = async () => {
      // 1. Check Session Storage: Prevents sending repeated messages if the user refreshes
      const hasNotified = sessionStorage.getItem("portfolio_visit_notified");

      if (!hasNotified) {
        // 2. CONFIGURATION FOR TEXTMEBOT
        const apiKey = "ckFnN22nJxqQ";
        const recipient = "+94703052181";
        const message = encodeURIComponent("Someone seeing your Portfolio");

        // 3. Construct URL
        const url = `https://api.textmebot.com/send.php?recipient=${recipient}&apikey=${apiKey}&text=${message}`;

        try {
          // 4. Send Request (using fetch with no-cors to bypass browser security blocks)
          await fetch(url, { mode: "no-cors" });

          console.log("Portfolio visit notification sent.");

          // 5. Mark as sent in this session
          sessionStorage.setItem("portfolio_visit_notified", "true");
        } catch (error) {
          console.error("Failed to send notification:", error);
          // Set to true anyway to avoid retry loops
          sessionStorage.setItem("portfolio_visit_notified", "true");
        }
      }
    };

    notifyAdmin();
  }, []);
  // --- END NOTIFICATION ---

  const switchRobot = (dir) => {
    if (isTransitioning) return;
    setSlideDir(dir);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentRobot((prev) =>
        dir === "right"
          ? (prev + 1) % robots.length
          : (prev - 1 + robots.length) % robots.length
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <AuthProvider>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative bg-black">
          {/* Background with enhanced gradient overlay */}
          <div className="fixed inset-0 z-0">
            <img
              src={bg}
              alt="background"
              className="w-full h-full object-cover opacity-100 blur-[2px]"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-cyan-900/5`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-purple-900/15`}
            />
          </div>

          <div className="relative z-10">
            <Header />
            <Suspense
              fallback={
                <div className="h-screen w-full flex justify-center items-center text-white"></div>
              }
            >
              <main>
                <section id="home">
                  <Home
                    currentTheme={theme}
                    currentRobot={currentRobot}
                    isTransitioning={isTransitioning}
                    slideDir={slideDir}
                    robots={robots}
                    onPrev={() => switchRobot("left")}
                    onNext={() => switchRobot("right")}
                  />
                </section>

                <section id="videosection">
                  <VideoScreen />
                </section>

                <section id="about">
                  <AboutMe currentTheme={theme} />
                </section>

                <section id="education-journey">
                  <Education />
                </section>

                <section id="dexterity">
                  <SkillsData currentTheme={theme} />
                </section>

                <section id="professional-designations">
                  <LicensesCertifications />
                </section>

                <section id="professional-journey">
                  <WorkExperience />
                </section>

                <section id="creative-ventures">
                  <ProjectsData currentTheme={theme} />
                </section>

                <section id="design-scape">
                  <Designs />
                </section>

                <section id="testimonials">
                  <Testimonials />
                </section>

                <section id="contact">
                  <Contact currentTheme={theme} />
                </section>
              </main>

              <Copyright />
            </Suspense>
          </div>
        </div>
      )}
    </AuthProvider>
  );
}

export default App;

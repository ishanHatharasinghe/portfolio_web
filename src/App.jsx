import { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
// import FloatingSocialSidebar from "./components/FloatingSocialSidebar";
import { AuthProvider } from "./components/AuthContext.jsx";
import Header from "./components/HeaderBar";


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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [slideDir, setSlideDir] = useState("right");


  // New neutral color scheme without green hover/glow accents
  const theme = {
    primaryGradient: "from-white to-slate-200",
    primaryHoverGradient: "from-slate-200 to-white",
    secondaryGradient: "from-white to-[#000000]",
    secondaryHoverGradient: "from-white to-[#111827]",
    cardGradient: "from-[#000000]/80 via-[#000000]/60 to-[#000000]/40",
    cardHoverShadow: "hover:shadow-white/20",
    cardBorder: "hover:border-white/20",
    glowEffect: "from-white/10 to-white/5",
    accentColor: "text-white",
    badgeGradient: "from-white/10 to-white/5",
    badgeText: "text-white",
    badgeBorder: "border-white/10"
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

  

  return (
    <AuthProvider>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative bg-black">
          {/* Background with enhanced gradient overlay */}
          <div className="fixed inset-0 z-0">
            
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
                    isTransitioning={isTransitioning}
                    slideDir={slideDir}
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

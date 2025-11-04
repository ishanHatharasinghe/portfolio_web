import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import FloatingSocialSidebar from "./components/FloatingSocialSidebar";
import { AuthProvider } from "./components/AuthContext.jsx";
import Home from "./components/Home";
import Header from "./components/HeaderBar";
import bg from "./assets/Home Section/bg3.webp";
import robot from "./assets/Home Section/ChatGPT Image Nov 4, 2025, 02_19_47 PM.webp";
import VideoScreen from "./components/videos";
import AboutMe from "./components/AboutUs";
import Education from "./components/Education";
import SkillsData from "./components/SkillsData";
import LicensesCertifications from "./components/LicensesCertifications";
import WorkExperience from "./components/WorkExperience";
import ProjectsData from "./components/ProjectsData";
import Designs from "./components/designpage";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";

function App() {
  const [loading, setLoading] = useState(true);
  const [currentRobot, setCurrentRobot] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const robots = [robot];

  const themes = [
    {
      // Robot 1 theme (Purple/Blue)
      primaryGradient: "from-purple-600 to-blue-600",
      primaryHoverGradient: "from-purple-500 to-blue-500",
      secondaryGradient: "from-orange-600 to-red-600",
      secondaryHoverGradient: "from-orange-500 to-red-500",
      cardGradient: "from-black/70 via-purple-900/20 to-blue-900/10",
      cardHoverShadow: "hover:shadow-purple-500/40",
      cardBorder: "hover:border-purple-400/50",
      glowEffect: "from-purple-500/20 to-blue-500/15",
      robotGlow: "from-orange-500/25 via-purple-500/15 to-cyan-500/20",
      accentColor: "text-cyan-400",
      badgeGradient: "from-purple-500/30 to-purple-600/20",
      badgeText: "text-purple-200",
      badgeBorder: "border-purple-400/40"
    },
    {
      // Robot 2 theme (Green/Teal)
      primaryGradient: "from-emerald-600 to-teal-600",
      primaryHoverGradient: "from-emerald-500 to-teal-500",
      secondaryGradient: "from-amber-600 to-orange-600",
      secondaryHoverGradient: "from-amber-500 to-orange-500",
      cardGradient: "from-black/70 via-emerald-900/20 to-teal-900/10",
      cardHoverShadow: "hover:shadow-emerald-500/40",
      cardBorder: "hover:border-emerald-400/50",
      glowEffect: "from-emerald-500/20 to-teal-500/15",
      robotGlow: "from-amber-500/25 via-emerald-500/15 to-teal-500/20",
      accentColor: "text-emerald-400",
      badgeGradient: "from-emerald-500/30 to-emerald-600/20",
      badgeText: "text-emerald-200",
      badgeBorder: "border-emerald-400/40"
    }
  ];

  const currentTheme = themes[currentRobot];

  useEffect(() => {
    AOS.init({ duration: 600, once: true });

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentRobot((prev) => (prev + 1) % robots.length);
        setIsTransitioning(false);
      }, 600);
    }, 10000);

    return () => clearInterval(interval);
  }, [isMobile, robots.length]);

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
              className="w-full h-full object-cover opacity-100 blur-[1px]"
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

            <main>
              <section id="home">
                <Home
                  currentTheme={currentTheme}
                  currentRobot={currentRobot}
                  isTransitioning={isTransitioning}
                  robots={robots}
                />
              </section>

              <section id="videosection">
                <VideoScreen />
              </section>

              <section id="about">
                <AboutMe currentTheme={currentTheme} />
              </section>

              <section id="education-journey">
                <Education />
              </section>

              <section id="dexterity">
                <SkillsData currentTheme={currentTheme} />
              </section>

              <section id="professional-designations">
                <LicensesCertifications />
              </section>

              <section id="professional-journey">
                <WorkExperience />
              </section>

              <section id="creative-ventures">
                <ProjectsData currentTheme={currentTheme} />
              </section>

              <section id="design-scape">
                <Designs />
              </section>

              <section id="testimonials">
                <Testimonials />
              </section>

              <section id="contact">
                <Contact currentTheme={currentTheme} />
              </section>
            </main>

            <Copyright />
          </div>
        </div>
      )}
    </AuthProvider>
  );
}

export default App;

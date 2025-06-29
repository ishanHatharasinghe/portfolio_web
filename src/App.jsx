import { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // Add scroll-behavior here
import FloatingSocialSidebar from "./components/FloatingSocialSidebar";
// Lazy-loaded components for performance
const Header = lazy(() => import("./components/HeaderBar"));
const Home = lazy(() => import("./components/Home"));
const AboutMe = lazy(() => import("./components/AboutUs"));
const Education = lazy(() => import("./components/Education"));
const SkillsData = lazy(() => import("./components/SkillsData"));
const LicensesCertifications = lazy(() =>
  import("./components/LicensesCertifications")
);
const WorkExperience = lazy(() => import("./components/WorkExperience"));
const ProjectsData = lazy(() => import("./components/ProjectsData"));
const Designs = lazy(() => import("./components/designpage"));
const VideoScreen = lazy(() => import("./components/videos"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Copyright = lazy(() => import("./components/Copyright"));

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <FloatingSocialSidebar />
      {/* Suspense fallback for lazy-loaded components */}
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Header />

        <section id="home">
          <Home />
        </section>

        <section id="videosection">
          <VideoScreen />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="education-journey">
          <Education />
        </section>

        <section id="dexterity">
          <SkillsData />
        </section>

        <section id="professional-designations">
          <LicensesCertifications />
        </section>

        <section id="professional-journey">
          <WorkExperience />
        </section>

        <section id="creative-ventures">
          <ProjectsData />
        </section>

        <section id="design-scape">
          <Designs />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Copyright />
      </Suspense>
    </div>
  );
}

export default App;

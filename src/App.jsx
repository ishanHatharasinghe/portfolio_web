import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import FloatingSocialSidebar from "./components/FloatingSocialSidebar";
import { AuthProvider } from "./components/AuthContext.jsx";
import Home from "./components/Home";
import Header from "./components/HeaderBar";
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
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <AuthProvider>
      <div>
        <Header />

        <main>
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
        </main>

        <Copyright />
      </div>
    </AuthProvider>
  );
}

export default App;

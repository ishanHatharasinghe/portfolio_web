import { useState, useEffect } from "react";
import Header from "./components/HeaderBar";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import ProjectsData from "./components/ProjectsData";
import SkillsData from "./components/SkillsData";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import WorkExperience from "./components/WorkExperience";
import ContactLinks from "./components/ContactLinks";
import Education from "./components/Education";
import LicensesCertifications from "./components/LicensesCertifications";
import Preloader from "./components/Preloader";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onLoadingComplete={handleLoadingComplete} />}

      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-y-0 left-4 flex items-center z-30 hidden sm:block">
          <ContactLinks />
        </div>
        {/* Page Content */}
        <Header />

        <section id="home">
          <Home />
        </section>

        <section id="about" data-aos="fade-up">
          <AboutMe />
        </section>

        <section id="education" data-aos="fade-up">
          <Education />
        </section>

        <section id="skills" data-aos="fade-up">
          <SkillsData />
        </section>

        <section id="licenses-certifications" data-aos="fade-up">
          <LicensesCertifications />
        </section>

        <section id="workexperience" data-aos="fade-up">
          <WorkExperience />
        </section>

        <section id="projects" data-aos="fade-up">
          <ProjectsData />
        </section>

        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>

        <Copyright />
      </div>
    </>
  );
}

export default App;

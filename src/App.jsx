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
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: false // Animation happens every time you scroll
    });
  }, []);

  return (
    <>
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
        {" "}
        {/* Changed ID to match */}
        <WorkExperience />
      </section>

      <section id="projects" data-aos="fade-up">
        {" "}
        {/* Changed ID to match */}
        <ProjectsData />
      </section>

      <section id="contact" data-aos="fade-up">
        {" "}
        {/* Changed ID to match */}
        <Contact />
      </section>

      <Copyright />
    </>
  );
}

export default App;

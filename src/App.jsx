import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import bg from "./assets/bg7.jpg";

import Header from "./components/HeaderBar";
import AboutMe from "./components/AboutUs";
import Home from "./components/Home";
import ProjectsData from "./components/ProjectsData";
import SkillsData from "./components/SkillsData";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import LicensesCertifications from "./components/LicensesCertifications";
import Preloader from "./components/Preloader";

function App() {
  return (
    <>
      <div>
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

        <section id="work-experience" data-aos="fade-up">
          <WorkExperience />
        </section>
        <section id="projects" data-aos="fade-up">
          <ProjectsData />
        </section>
        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
        {/* Optionally include the footer */}
        <Copyright />
      </div>
    </>
  );
}

export default App;

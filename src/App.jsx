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
        <section id="about">
          <AboutMe />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <SkillsData />
        </section>
        <section id="licenses-certifications">
          <LicensesCertifications />
        </section>

        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="projects">
          <ProjectsData />
        </section>
        <section id="contact">
          <Contact />
        </section>

        <Copyright />
      </div>
    </>
  );
}

export default App;

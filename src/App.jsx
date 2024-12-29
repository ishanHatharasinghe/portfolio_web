import { useState, useEffect } from "react";
import Header from "./components/HeaderBar";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import ProjectsData from "./components/ProjectsData";
import SkillsData from "./components/SkillsData";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import WorkExperience from "./components/WorkExperience";
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
      {/* Moving Gradient Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {/* Gradient Circles */}
        <div className="absolute w-72 h-72 bg-gradient-to-r from-[#6F00FFFF] to-[#EEFA15FF] opacity-50 rounded-full blur-3xl animate-move-1"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-[#6F00FFFF] to-[#FA1515FF] opacity-50 rounded-full blur-xl animate-move-2"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-[#6F00FFFF] to-[#1D15FAFF] opacity-50 rounded-full blur-2xl animate-move-3"></div>
      </div>

      {/* Page Content */}
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="about" data-aos="fade-up">
        <AboutMe />
      </section>

      <section id="skills" data-aos="fade-up">
        <SkillsData />
      </section>

      <section id="work-experience" data-aos="fade-up">
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

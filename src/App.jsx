import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./components/Testimonials";
import GetTestimonials from "./components/getTestimonials";
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
import Designs from "./components/designpage";
import VideoScreen from "./components/videos";
function App() {
  return (
    <>
      <div>
        {/* Page Content */}
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
      </div>
    </>
  );
}

export default App;

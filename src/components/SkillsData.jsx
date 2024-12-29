import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import arduino from "./../assets/Skills/arduino.png";
import autocad from "./../assets/Skills/autocad.png";
import c from "./../assets/Skills/c.png";
import css from "./../assets/Skills/css.png";
import docker from "./../assets/Skills/docker.png";
import fastapi from "./../assets/Skills/fastapi.png";
import html from "./../assets/Skills/html.png";
import java from "./../assets/Skills/java.png";
import js from "./../assets/Skills/js.png";
import neo4j from "./../assets/Skills/neo4j.png";
import proteus from "./../assets/Skills/proteus.png";
import python from "./../assets/Skills/python.png";
import solidworks from "./../assets/Skills/solidworks.png";
import react from "./../assets/Skills/react.png";

const SkillsData = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skills = [
    { img: arduino, name: "Arduino" },
    { img: react, name: "React" },
    { img: python, name: "Python" },
    { img: autocad, name: "AutoCAD" },
    { img: solidworks, name: "SolidWorks" },
    { img: c, name: "C" },
    { img: css, name: "CSS" },
    { img: docker, name: "Docker" },
    { img: fastapi, name: "FastAPI" },
    { img: html, name: "HTML" },
    { img: java, name: "Java" },
    { img: js, name: "JavaScript" },
    { img: neo4j, name: "Neo4j" },
    { img: proteus, name: "Proteus" }
  ];

  return (
    <section
      id="skills"
      className=" text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className="hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold mb-4 text-[#f3e8ff] font-poppins">
          My Skills
        </h2>
        <div className="h-2 w-80 sm:w-96 lg:w-120 bg-gradient-to-r from-[#FF0000FF] to-[#4400FFFF] rounded-md shadow-lg mx-auto mb-6"></div>
        <p className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6 hover:text-[#E6FF82FF] transition-all duration-100 transform hover:scale-105 font-poppins">
          Here are some of the technical skills I have acquired over time. I
          have worked with a variety of tools and technologies to bring
          innovative ideas to life.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-[#0b0e2a] to-[#22000e] rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-red-500"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            data-aos-duration="1000"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-24 h-24 object-contain mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <strong className="text-lg">{skill.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsData;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Search } from "lucide-react";

// Assets import
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
import flutter from "./../assets/Skills/flutter.png";

// Categorized skills
const skills = {
  "Programming Languages": [
    { img: python, name: "Python", percentage: 90 },
    { img: java, name: "Java", percentage: 75 },
    { img: c, name: "C", percentage: 85 },
    { img: js, name: "JavaScript", percentage: 85 }
  ],
  "Web Technologies": [
    { img: react, name: "React", percentage: 75 },
    { img: html, name: "HTML", percentage: 90 },
    { img: css, name: "CSS", percentage: 80 },
    { img: fastapi, name: "FastAPI", percentage: 65 }
  ],
  "Tools & Technologies": [
    { img: docker, name: "Docker", percentage: 70 },
    { img: neo4j, name: "Neo4j", percentage: 60 },
    { img: arduino, name: "Arduino", percentage: 80 },
    { img: flutter, name: "Flutter", percentage: 70 }
  ],
  "Design & Engineering": [
    { img: autocad, name: "AutoCAD", percentage: 60 },
    { img: solidworks, name: "SolidWorks", percentage: 65 },
    { img: proteus, name: "Proteus", percentage: 50 }
  ]
};

const SkillsCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-64 bg-[#1a1a2e] rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
      data-aos-delay={`${index * 100}`}
      data-aos-duration="800"
    >
      <div className="relative p-6">
        <div className="bg-gradient-to-br from-[#2a2a4e] to-[#1f1f35] p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <img
            src={skill.img}
            alt={skill.name}
            className={`w-12 h-12 object-contain transition-transform duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          />
        </div>

        <h3 className="text-xl font-semibold text-center text-[#f3e8ff] mb-4">
          {skill.name}
        </h3>

        <div className="relative w-full h-2 bg-[#3a3a54] rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: isHovered ? `${skill.percentage}%` : "0%"
            }}
          />
        </div>

        <span className="block text-center mt-2 text-[#e5e7eb]">
          {skill.percentage}%
        </span>
      </div>
    </div>
  );
};

const SkillsData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile"
    });
  }, []);

  const filterSkills = () => {
    if (selectedCategory === "All") {
      return Object.entries(skills).flatMap(([_, categorySkills]) =>
        categorySkills.filter((skill) =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    return skills[selectedCategory].filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <section className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-[#19003F] via-[#03001B] to-[#06173C] opacity-95" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-4xl sm:text-6xl font-bold text-[#f3e8ff] mb-6 transition-transform hover:scale-105 duration-300">
            Skills
          </h2>
          <p className="text-lg text-[#e5e7eb] opacity-80 max-w-2xl mx-auto">
            Here are some of the technical skills I have acquired over time. I
            have worked with a variety of tools and technologies to bring
            innovative ideas to life.
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search skills..."
              className="w-full px-4 py-2 pl-10 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === "All"
                  ? "bg-emerald-500 text-white"
                  : "bg-[#1a1a2e] text-white hover:bg-emerald-500/20"
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? "bg-emerald-500 text-white"
                    : "bg-[#1a1a2e] text-white hover:bg-emerald-500/20"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {filterSkills().map((skill, index) => (
            <SkillsCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsData;

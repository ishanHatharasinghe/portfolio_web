import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Cpu, Palette, Boxes } from "lucide-react";

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

import ps from "./../assets/Skills/ps.png";
import ai from "./../assets/Skills/ai.png";
import figma from "./../assets/Skills/figma.png";
import id from "./../assets/Skills/id.png";
import xd from "./../assets/Skills/xd.png";

const SkillCard = ({ image, name, category, proficiency }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Card Content */}
      <div className="relative border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl p-4 transition-transform duration-500 h-full">
        <div className="flex flex-col items-center gap-3">
          {/* Skill Icon */}
          <img
            src={image}
            alt={name}
            className="w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          {/* Skill Name */}
          <p className="text-gray-300 text-sm font-medium">{name}</p>
          {/* Hoverable Proficiency Bar */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-center"
              >
                <div className="w-full bg-gray-700/30 h-1 rounded-full mt-2">
                  <div
                    className="bg-orange-500/50 h-1 rounded-full transition-all duration-500"
                    style={{ width: `${proficiency}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {proficiency}% Proficiency
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const CategoryButton = ({ icon: Icon, label, isActive, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
      isActive
        ? "border-orange-500/50 bg-orange-500/10 text-white"
        : "border-white/10 text-gray-400 hover:border-white/30"
    } transition-colors duration-300`}
  >
    <Icon size={16} />
    <span className="">{label}</span>
  </motion.button>
);

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    { id: "all", label: "All Skills", icon: Boxes },
    { id: "development", label: "Development", icon: Code },
    { id: "electronics", label: "Electronics", icon: Cpu },
    { id: "design", label: "Design", icon: Palette }
  ];

  const skillsData = [
    {
      name: "Arduino",
      image: arduino,
      category: "electronics",
      proficiency: 90
    },
    { name: "AutoCAD", image: autocad, category: "design", proficiency: 85 },
    { name: "C/C++", image: c, category: "development", proficiency: 95 },
    { name: "CSS", image: css, category: "development", proficiency: 88 },
    { name: "Docker", image: docker, category: "development", proficiency: 82 },
    {
      name: "FastAPI",
      image: fastapi,
      category: "development",
      proficiency: 87
    },
    { name: "HTML", image: html, category: "development", proficiency: 92 },
    { name: "Java", image: java, category: "development", proficiency: 85 },
    { name: "JavaScript", image: js, category: "development", proficiency: 90 },
    { name: "Neo4j", image: neo4j, category: "development", proficiency: 80 },
    {
      name: "Proteus",
      image: proteus,
      category: "electronics",
      proficiency: 88
    },
    { name: "Python", image: python, category: "development", proficiency: 95 },
    {
      name: "SolidWorks",
      image: solidworks,
      category: "design",
      proficiency: 83
    },
    { name: "React", image: react, category: "development", proficiency: 92 },
    {
      name: "Flutter",
      image: flutter,
      category: "development",
      proficiency: 85
    },
    { name: "Adobe Photoshop", image: ps, category: "design", proficiency: 95 },
    { name: "Adobe Indesign", image: id, category: "design", proficiency: 75 },
    {
      name: "Adobe Illustrator",
      image: ai,
      category: "design",
      proficiency: 90
    },
    { name: "Figma", image: figma, category: "design", proficiency: 80 },
    { name: "Adobe Xd", image: xd, category: "design", proficiency: 80 }
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden relative">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-0" />
      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-6 py-16 z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[70px] w-full max-w-6xl mx-auto p-12 border-2 border-gray-700/30 bg-black/50 backdrop-blur-lg shadow-2xl"
        >
          {/* Title */}
          <div className="w-full text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-italiana text-5xl md:text-[200px] text-white tracking-wide relative z-10"
            >
              Dexterity
            </motion.h1>
            <p className="text-[16px] text-gray-300 leading-relaxed text-center mb-7">
              Here are some of the technical skills I have acquired over time. I
              have worked with a variety of tools and technologies to bring
              innovative ideas to life.
            </p>
          </div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                icon={category.icon}
                label={category.label}
                isActive={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Comet Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/50 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -Math.random() * window.innerHeight
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

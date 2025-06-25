import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";
import my from "./../assets/Project1/Slide1.JPG";
import my2 from "./../assets/Project2/page.jpg";
import my3 from "./../assets/Project3/page.jpeg";
import my4 from "./../assets/Project4/page.jpg";
import my5 from "./../assets/Project 5 taxi meter/1.jpg";
import my6 from "./../assets/Project 5 taxi meter/2.jpg";
import my7 from "./../assets/Project 5 taxi meter/3.jpg";
import my8 from "./../assets/Project 5 taxi meter/4.jpg";
import my9 from "./../assets/Project 6 SAEDS/1.JPG";
import my10 from "./../assets/Project 6 SAEDS/2.JPG";
import my11 from "./../assets/Project 6 SAEDS/3.JPG";
import my12 from "./../assets/Project 6 SAEDS/4.JPG";
import my13 from "./../assets/Project 6 SAEDS/5.JPG";
import my14 from "./../assets/Project 6 SAEDS/6.JPG";
import my15 from "./../assets/Project 6 SAEDS/7.JPG";
import my16 from "./../assets/Project 6 SAEDS/8.JPG";
import my17 from "./../assets/Project 6 SAEDS/9.JPG";
import my18 from "./../assets/Project 6 SAEDS/10.JPG";
import my19 from "./../assets/Project 6 SAEDS/11.JPG";
import my20 from "./../assets/Project 6 SAEDS/12.JPG";
import my21 from "./../assets/Project 6 SAEDS/13.JPG";
import my22 from "./../assets/Project 6 SAEDS/14.JPG";
import my23 from "./../assets/Project 6 SAEDS/15.JPG";
import my24 from "./../assets/Project 6 SAEDS/16.JPG";
import my26 from "./../assets/Project 6 SAEDS/17.JPG";
import my27 from "./../assets/Project 6 SAEDS/18.JPG";

// Member images
import member1 from "./../assets/About/1.jpg";
import member2 from "./../assets/About/2.jpg";
import member3 from "./../assets/About/3.jpg";
import member4 from "./../assets/About/4.jpg";
import member5 from "./../assets/About/5.jpg";
import member6 from "./../assets/About/6.jpg";
import member7 from "./../assets/About/7.jpg";
import member8 from "./../assets/About/8.jpg";

import bg from "./../assets/Home Section/bg4.jpg";
import robot from "./../assets/robot3.png";

import {
  ArrowRight,
  Code,
  Cpu,
  Palette,
  Boxes,
  Users,
  ExternalLink,
  Github
} from "lucide-react";

const ProjectsData = () => {
  // Project data with member configurations
  const projectsData = [
    {
      id: 1,
      title: "Vehicle Parking Management System (VPMS)",
      subtitle: "University of Moratuwa",
      description:
        "A desktop application designed to automate parking operations, built with C# and SQL.",
      technologies: "C#, SQL",
      link: "https://www.linkedin.com/posts/ishan-nilaksha-686461308_mysql-vpms-clanguage-activity-7268195521146572800-T8Mi?utm_source=share&utm_medium=member_desktop",
      images: [my],
      members: [member1],
      category: "Desktop Application",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      title: "TaxiMeter",
      subtitle: "HND in Electrical and Electronics Engineering",
      description:
        "Fuel Price Manager is your all-in-one solution to stay informed, plan smarter, and save more when it comes to fuel expenses across Sri Lanka. Whether you're a daily commuter, logistics operator, or just want to track fuel trends, our app helps you monitor real-time fuel prices, receive alerts on price changes, and compare rates across fuel types and locations.",
      technologies: "React, JavaScript, Firebase",
      link: "",
      images: [my5, my6, my7, my8],
      members: [member1],
      category: "Mobile Application",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 3,
      title: "Smart Automated Elephant Deterrent System",
      subtitle: "HND in Electrical and Electronics Engineering",
      description:
        "Human-elephant conflict in Sri Lanka is a growing crisis, with elephants destroying crops, property, and even risking lives. Traditional electric fences are inefficient and often fail. Our Smart Automated Elephant Deterrent System combines cutting-edge tech to protect villages while conserving energy and wildlife!",
      technologies: "Arduino, GPS",
      link: "https://www.linkedin.com/posts/ishan-nilaksha-686461308_techforgood-wildlifeconservation-smartfarming-activity-7332505340820742144-ftA3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5goIYBOugp24AsFvYPjo8YMjWyqds3wS4",
      images: [
        my9,
        my10,
        my11,
        my12,
        my13,
        my14,
        my15,
        my16,
        my17,
        my18,
        my19,
        my20,
        my21,
        my22,
        my23,
        my24,
        my26,
        my27
      ],
      members: [member1, member5, member6, member7, member8],
      category: "IoT System",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 4,
      title: "MOBITEL AI-DRIVEN EDGE SALES MANAGEMENT SYSTEM",
      subtitle: "AI-Powered Sales Solution",
      description:
        "The Mobitel AI-driven Edge Sales Management System is a comprehensive mobile application designed to assist SIM dealers in Sri Lanka. Many dealers lack awareness of prepaid and postpaid packages, leading to inefficiencies in customer service and sales. This system introduces an intelligent package recommendation engine to suggest the best plans based on platform preferences, budget, and communication needs (voice and SMS).",
      technologies: "React, JavaScript, Google Script",
      link: "https://example.com/llm",
      images: [my3],
      members: [member1],
      category: "AI Application",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      id: 5,
      title: "LassanaMoments",
      subtitle: "Photography Portal",
      description:
        "In the contemporary digital era, the demand for professional photography services has significantly increased. However, photographers in Sri Lanka face challenges in securing clients at the right time and at a fair rate. To address this issue, The AlphaWizards team, a group of passionate BIT undergraduates, has collaboratively designed and developed an innovative Photographic Portal, Lassana Momentz project.",
      technologies: "React, JavaScript, Firebase",
      link: "https://example.com/llm",
      images: [my4],
      members: [member1, member2, member4],
      category: "Web Platform",
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      id: 6,
      title: "Large Language Model (LLM)",
      subtitle: "AI Document Reader",
      description:
        "A system designed to read documents and answer questions using Python, React, FastAPI, and APIs from Gemini, OpenAI, and Hugging Face.",
      technologies: "React, JavaScript, Python, FastAPI",
      link: "https://example.com/llm",
      images: [my2],
      members: [member1],
      category: "AI System",
      gradient: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  // Member avatars component
  const MemberAvatars = ({ members, projectId }) => (
    <div className="flex -space-x-2 mb-4">
      {members.map((member, index) => (
        <motion.div
          key={`${projectId}-member-${index}`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: index * 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          whileHover={{
            scale: 1.1,
            zIndex: 10,
            transition: { duration: 0.2 }
          }}
          className="relative"
        >
          <div className="w-6 h-6 rounded-full border-3 border-white/30 overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 shadow-lg ring-2 ring-purple-500/20">
            <img
              src={member}
              alt={`Team member ${index}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          {/* Online indicator */}
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
        </motion.div>
      ))}
      {/* Team count badge */}
    </div>
  );

  // Enhanced project card component
  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative w-full h-full"
    >
      {/* Animated background glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110`}
      />

      {/* Card content */}
      <div className="flex flex-col relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-6 border border-gray-700/40 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-gray-600/60 h-full overflow-hidden">
        {/* Category badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-800 to-blue-500 text-white text-xs font-semibold rounded-full backdrop-blur-sm border border-white/20">
            {project.category}
          </span>
        </div>

        {/* Member avatars */}
        <div className="relative z-10">
          <MemberAvatars members={project.members} projectId={project.id} />
        </div>

        {/* Project images/slideshow */}
        <div className="relative mb-6 overflow-hidden rounded-2xl group-hover:shadow-2xl transition-shadow duration-500">
          {project.images.length > 1 ? (
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true
              }}
              className="w-full aspect-video rounded-2xl"
            >
              {project.images.map((image, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="relative overflow-hidden rounded-2xl aspect-video">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          )}
        </div>

        {/* Project content */}
        <div className="flex-1 flex flex-col">
          <h1 className="font-bold text-white text-lg md:text-xl text-center mb-2 leading-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <h5 className="font-semibold text-xs md:text-sm text-purple-300 mb-3 text-center">
              {project.subtitle}
            </h5>
          )}

          <p className="text-gray-300 text-xs md:text-sm text-center leading-relaxed my-4 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center bg-gray-800/50 rounded-full px-4 py-2 border border-gray-700/50">
              <Boxes className="w-4 h-4 text-purple-400 mr-2" />
              <p className="text-[11px] font-medium text-gray-300">
                {project.technologies}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 justify-center mt-auto">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white text-sm font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </motion.a>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 bg-gray-800/50 border border-gray-600/50 text-gray-300 text-sm font-semibold rounded-full hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      id="projects"
      className="h-full relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="blur-[5px] w-full h-full object-cover opacity-80"
        />
        <img
          src={robot}
          alt="robot"
          className="absolute inset-0 mx-auto w-full h-auto object-contain opacity-100 z-10"
        />
      </div>

      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 mt-16 z-10">
        <div className="rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-gray-700/30">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-italiana text-5xl md:text-[160px] text-white tracking-wide">
              Creative Ventures
            </h2>
            <p className="text-[16px] text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Explore some of my recent works, where I applied technical skills
              and creativity to deliver impactful solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsData;

import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion, AnimatePresence } from "framer-motion";
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

import project71 from "./../assets/Project 7/1.jpg";
import project72 from "./../assets/Project 7/2.jpg";
import project73 from "./../assets/Project 7/3.jpg";
import project74 from "./../assets/Project 7/4.jpg";
import project75 from "./../assets/Project 7/5.jpg";
import project76 from "./../assets/Project 7/6.jpg";
import project77 from "./../assets/Project 7/7.jpg";
import project78 from "./../assets/Project 7/8.jpg";
import project79 from "./../assets/Project 7/9.jpg";
import project710 from "./../assets/Project 7/10.jpg";

import project81 from "./../assets/Project 8/autonexus (1).png";
import project82 from "./../assets/Project 8/autonexus (2).png";
import project83 from "./../assets/Project 8/autonexus (3).png";
import project84 from "./../assets/Project 8/autonexus (4).png";
import project85 from "./../assets/Project 8/autonexus (5).png";
import project86 from "./../assets/Project 8/autonexus (6).png";
import project87 from "./../assets/Project 8/autonexus (7).png";
import project88 from "./../assets/Project 8/autonexus (8).png";
import project89 from "./../assets/Project 8/autonexus (9).png";
import project810 from "./../assets/Project 8/autonexus (10).png";
import project811 from "./../assets/Project 8/autonexus (11).png";

import project91 from "./../assets/Project 9/portfolio (1).png";
import project92 from "./../assets/Project 9/portfolio (2).png";
import project93 from "./../assets/Project 9/portfolio (3).png";
import project94 from "./../assets/Project 9/portfolio (4).png";
import project95 from "./../assets/Project 9/portfolio (5).png";
import project96 from "./../assets/Project 9/portfolio (6).png";
import project97 from "./../assets/Project 9/portfolio (7).png";
import project98 from "./../assets/Project 9/portfolio (8).png";
import project99 from "./../assets/Project 9/portfolio (9).png";
import project910 from "./../assets/Project 9/portfolio (10).png";
import project911 from "./../assets/Project 9/portfolio (11).png";
import project912 from "./../assets/Project 9/portfolio (12).png";

//Luminance Graphic

import projectLG1 from "./../assets/Luminance Graphic/Screenshot (88).png";
import projectLG2 from "./../assets/Luminance Graphic/Screenshot (90).png";
import projectLG3 from "./../assets/Luminance Graphic/Screenshot (91).png";
import projectLG4 from "./../assets/Luminance Graphic/Screenshot (92).png";
import projectLG5 from "./../assets/Luminance Graphic/Screenshot (93).png";
import projectLG6 from "./../assets/Luminance Graphic/Screenshot (94).png";
import projectLG7 from "./../assets/Luminance Graphic/Screenshot (95).png";
import projectLG8 from "./../assets/Luminance Graphic/Screenshot (96).png";
import projectLG9 from "./../assets/Luminance Graphic/Screenshot (97).png";
import projectLG10 from "./../assets/Luminance Graphic/Screenshot (98).png";
import projectLG11 from "./../assets/Luminance Graphic/Screenshot (99).png";
import projectLG12 from "./../assets/Luminance Graphic/Screenshot (100).png";
import projectLG13 from "./../assets/Luminance Graphic/Screenshot (101).png";

// Team members
import member1 from "./../assets/About/1.jpg";
import member2 from "./../assets/About/2.jpg";
import member4 from "./../assets/About/4.jpg";
import member5 from "./../assets/About/5.jpg";
import member6 from "./../assets/About/6.jpg";
import member7 from "./../assets/About/7.jpg";
import member8 from "./../assets/About/8.jpg";

// Assets
import bg from "./../assets/Home Section/bg4.jpg";
import robot from "./../assets/robot3.png";

// Docs
import report from "./../assets/Project 6 SAEDS/Smart Automated Elephant Deterrent System FINAL REPORT.pdf";
import presentation from "./../assets/Project 6 SAEDS/Project Presentation.pdf";
import report2 from "./../assets/Project 5 taxi meter/taxi meter project report.pdf";
import presentation2 from "./../assets/Project 5 taxi meter/smart taxi meter presentation.pdf";
import report3 from "./../assets/Project1/Final Report.pdf";
import presentation3 from "./../assets/Project1/presentation.pdf";
import report7 from "./../assets/Project 7/report.pdf";
import presentation7 from "./../assets/Project 7/Presentation.pdf";
import report8 from "./../assets/Project 8/report.pdf";

import {
  Boxes,
  ExternalLink,
  FileText,
  Presentation,
  Search,
  Filter,
  X,
  Grid3X3,
  Grid2X2,
  List
} from "lucide-react";

const ProjectsData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [viewMode, setViewMode] = useState("grid-4"); // grid-4, grid-3, grid-2, list
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const projectsData = [
    {
      id: 9,
      title: "Personal Portfolio",
      description: `The Intersection of Electronics and Code`,

      link: "https://www.linkedin.com/posts/ishan-nilaksha-686461308_excited-to-launch-my-portfolio-website-activity-7359939207974346753-iIWq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5goIYBOugp24AsFvYPjo8YMjWyqds3wS4",

      technologies: ["React, , Tailwind css, Firebase"],
      images: [
        project91,
        project92,
        project93,
        project94,
        project95,
        project96,
        project97,
        project98,
        project99,
        project910,
        project911,
        project912
      ],
      members: [member1],
      category: "Web Application",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 10,
      title: "Luminance Graphic Portfolio",
      description: `I design logos, brand systems, apparel graphics, packaging, and marketing assets that are distinctive and production‑ready—built to perform across print and digital.`,

      link: "https://luminancegraphic.netlify.app/",

      technologies: ["React, , Tailwind css, Firebase"],
      images: [
        projectLG1,
        projectLG2,
        projectLG3,
        projectLG4,
        projectLG5,
        projectLG6,
        projectLG7,
        projectLG8,
        projectLG9,
        projectLG10,
        projectLG11,
        projectLG12,
        projectLG13
      ],
      members: [member1],
      category: "Web Application",
      gradient: "from-orange-500/20 to-red-500/20"
    },
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
      gradient: "from-blue-500/20 to-purple-500/20",
      reportLink: report3,
      presentationLink: presentation3
    },
    {
      id: 2,
      title: "TaxiMeter",
      subtitle: "HND in Electrical and Electronics Engineering",
      description:
        "Fuel Price Manager is your all-in-one solution to stay informed, plan smarter, and save more when it comes to fuel expenses across Sri Lanka.",
      technologies: "React, JavaScript, Firebase",
      link: "https://www.linkedin.com/posts/ishan-nilaksha-686461308_mysql-vpms-clanguage-activity-7268195521146572800-T8Mi?utm_source=share&utm_medium=member_desktop",
      images: [my5, my6, my7, my8],
      members: [member1],
      category: "Web Application + IOT Device",
      gradient: "from-emerald-500/20 to-teal-500/20",
      reportLink: report2,
      presentationLink: presentation2
    },
    {
      id: 3,
      title: "Smart Automated Elephant Deterrent System",
      subtitle: "HND in Electrical and Electronics Engineering",
      description:
        "Combining cutting-edge tech to mitigate human-elephant conflict in Sri Lanka while conserving wildlife.",
      technologies: "Arduino, GPS",
      link: "https://www.linkedin.com/posts/ishan-nilaksha-686461308_techforgood-wildlifeconservation-smartfarming-activity-7332505340820742144-ftA3",
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
      gradient: "from-orange-500/20 to-red-500/20",
      reportLink: report,
      presentationLink: presentation
    },
    {
      id: 7,
      title:
        "ChayaSmartPlus – Smart Tea Leaf Collection & Employee Management System",
      description:
        "A comprehensive system for tea factories to manage tea leaf collection from smallholder farmers and employees.",
      link: "https://www.linkedin.com/posts/ishan-nilaksha-686461308_reactnative-firebase-supabase-activity-7359832626150420480-cKST?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5goIYBOugp24AsFvYPjo8YMjWyqds3wS4",
      features: [
        "Farmer registration & profile management",
        "Daily tea leaf collection tracking",
        "Weight, quality, and moisture content recording",
        "Employee attendance & payroll management",
        "Real-time dashboard & reporting"
      ],
      technologies: ["React Expo, Superbase, Firebase"],
      images: [
        project71,
        project72,
        project73,
        project74,
        project75,
        project76,
        project77,
        project78,
        project79,
        project710
      ],
      members: [member1],
      category: "Mobile Application",
      gradient: "from-orange-500/20 to-red-500/20",
      reportLink: report7,
      presentationLink: presentation7
    },
    {
      id: 8,
      title: "AutoNexus",
      description: `The Sri Lankan automotive industry is undergoing a rapid transformation due to technological 
advancements and increased demand for genuine and high-performance vehicle components. 
However, vehicle owners and workshops often face challenges in sourcing authentic parts quickly 
and reliably.`,

      link: "https://www.linkedin.com/posts/ishan-nilaksha-686461308_react-mongodb-firebase-activity-7361652556718047232-5qsG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5goIYBOugp24AsFvYPjo8YMjWyqds3wS4",

      technologies: ["React, MongoDB, Nodejs, Firebase"],
      images: [
        project81,
        project82,
        project83,
        project84,
        project85,
        project86,
        project87,
        project88,
        project89,
        project810,
        project811
      ],
      members: [member1],
      category: "Web Application",
      gradient: "from-orange-500/20 to-red-500/20",
      reportLink: report8
    },
    {
      id: 4,
      title: "MOBITEL AI-DRIVEN EDGE SALES MANAGEMENT SYSTEM",
      subtitle: "AI-Powered Sales Solution",
      description:
        "Helps SIM dealers with intelligent prepaid/postpaid package suggestions using AI.",
      technologies: "React, JavaScript, Google Script",
      link: "https://example.com/llm",
      images: [my3],
      members: [member1],
      category: "Web Application",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      id: 5,
      title: "LassanaMoments",
      subtitle: "Photography Portal",
      description:
        "A portal to connect clients with professional photographers across Sri Lanka.",
      technologies: "React, JavaScript, Firebase",
      link: "https://example.com/llm",
      images: [my4],
      members: [member1, member2, member4],
      category: "Web Platform",
      gradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  // Get unique categories and technologies for filters
  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];
  const technologies = [
    "All",
    ...new Set(
      projectsData
        .flatMap((p) =>
          typeof p.technologies === "string"
            ? p.technologies.split(",").map((t) => t.trim())
            : p.technologies
        )
        .filter(Boolean)
    )
  ];

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.subtitle &&
          project.subtitle.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const projectTechs =
        typeof project.technologies === "string"
          ? project.technologies.split(",").map((t) => t.trim())
          : project.technologies;
      const matchesTech =
        selectedTech === "All" ||
        projectTechs.some((tech) =>
          tech.toLowerCase().includes(selectedTech.toLowerCase())
        );

      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [searchTerm, selectedCategory, selectedTech]);

  // Grid class mapping
  const gridClasses = {
    "grid-4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    "grid-3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "grid-2": "grid-cols-1 lg:grid-cols-2",
    list: "grid-cols-1"
  };

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
          whileHover={{ scale: 1.1, zIndex: 10 }}
          className="relative"
        >
          <div className="w-6 h-6 rounded-full border-3 border-white/30 overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 shadow-lg ring-2 ring-purple-500/20">
            <img
              src={member}
              alt={`Team member ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
        </motion.div>
      ))}
    </div>
  );

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ delay: index * 0.1 }}
      className="group relative w-full h-full"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110`}
      />
      <div
        className={`flex ${
          viewMode === "list" ? "flex-row" : "flex-col"
        } relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-6 border border-gray-700/40 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-gray-600/60 h-full overflow-hidden`}
      >
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-800 to-blue-500 text-white text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>

        <div
          className={`${
            viewMode === "list" ? "w-80 flex-shrink-0 mr-6" : "w-full"
          }`}
        >
          <div className="relative z-10">
            <MemberAvatars members={project.members} projectId={project.id} />
          </div>
          <div className="relative mb-6 overflow-hidden rounded-2xl">
            {project.images.length > 1 ? (
              <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                slidesPerView={1}
                effect="fade"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="w-full aspect-video rounded-2xl"
              >
                {project.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img
                src={project.images[0]}
                alt=""
                className="w-full aspect-video object-cover rounded-2xl"
              />
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h1
            className={`font-bold text-white text-lg md:text-xl ${
              viewMode === "list" ? "text-left" : "text-center"
            } mb-2`}
          >
            {project.title}
          </h1>
          {project.subtitle && (
            <h5
              className={`text-purple-300 text-xs md:text-sm ${
                viewMode === "list" ? "text-left" : "text-center"
              } mb-3`}
            >
              {project.subtitle}
            </h5>
          )}
          <p
            className={`text-gray-300 text-xs md:text-sm ${
              viewMode === "list" ? "text-left" : "text-center"
            } my-4 flex-1`}
          >
            {project.description}
          </p>
          <div
            className={`flex items-center ${
              viewMode === "list" ? "justify-start" : "justify-center"
            } mb-4`}
          >
            <div className="flex items-center bg-gray-800/50 rounded-full px-4 py-2 border border-gray-700/50">
              <Boxes className="w-4 h-4 text-purple-400 mr-2" />
              <p className="text-[11px] font-medium text-gray-300">
                {typeof project.technologies === "string"
                  ? project.technologies
                  : project.technologies.join(", ")}
              </p>
            </div>
          </div>

          {/* Responsive button group */}
          <div
            className={`flex flex-wrap ${
              viewMode === "list" ? "justify-start" : "justify-center"
            } gap-3 mt-auto w-full`}
          >
            {
              (project.id === 3,
              2 ? (
                <>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white text-sm font-semibold rounded-full"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </motion.a>
                  <motion.a
                    href={project.reportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-600/50 text-gray-300 text-sm font-semibold rounded-full"
                  >
                    <FileText className="w-4 h-4" />
                    View Report
                  </motion.a>
                  <motion.a
                    href={project.presentationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-600/50 text-gray-300 text-sm font-semibold rounded-full"
                  >
                    <Presentation className="w-4 h-4" />
                    Presentation
                  </motion.a>
                </>
              ) : (
                project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-800 to-blue-500 text-white text-sm font-semibold rounded-full"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </motion.a>
                )
              ))
            }
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
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="blur-[5px] w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 mt-16 z-10">
        <div className="rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-gray-700/30">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="font-italiana text-5xl md:text-[160px] text-white tracking-wide">
              Creative Ventures
            </h2>
            <p className="text-[16px] text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Explore some of my recent works, where I applied technical skills
              and creativity to deliver impactful solutions.
            </p>

            {/* Search and Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl mx-auto mb-8"
            >
              {/* Search Bar */}
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects by name, description, or subtitle..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Filter and View Controls */}
              <div className="flex flex-wrap gap-4 justify-between items-center">
                {/* Filters */}
                <div className="flex flex-wrap gap-4 items-center">
                  <motion.button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-600/50 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                  </motion.button>

                  <AnimatePresence>
                    {isFilterOpen && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-wrap gap-3"
                      >
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="px-3 py-2 bg-gray-800/50 border border-gray-600/50 text-gray-300 rounded-xl focus:outline-none focus:border-blue-500/50 text-sm"
                        >
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>

                        <select
                          value={selectedTech}
                          onChange={(e) => setSelectedTech(e.target.value)}
                          className="px-3 py-2 bg-gray-800/50 border border-gray-600/50 text-gray-300 rounded-xl focus:outline-none focus:border-blue-500/50 text-sm"
                        >
                          {technologies.map((tech) => (
                            <option key={tech} value={tech}>
                              {tech}
                            </option>
                          ))}
                        </select>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* View Mode Controls */}
                <div className="flex gap-2">
                  {[
                    { mode: "grid-4", icon: Grid3X3, tooltip: "4 Columns" },
                    { mode: "grid-3", icon: Grid3X3, tooltip: "3 Columns" },
                    { mode: "grid-2", icon: Grid2X2, tooltip: "2 Columns" },
                    { mode: "list", icon: List, tooltip: "List View" }
                  ].map(({ mode, icon: Icon, tooltip }) => (
                    <motion.button
                      key={mode}
                      onClick={() => setViewMode(mode)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === mode
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                          : "bg-gray-800/50 text-gray-400 border border-gray-600/50 hover:text-white hover:bg-gray-700/50"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title={tooltip}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Results Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-4"
              >
                <span className="text-sm text-gray-400">
                  Showing {filteredProjects.length} of {projectsData.length}{" "}
                  projects
                  {searchTerm && ` for "${searchTerm}"`}
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  {selectedTech !== "All" && ` using ${selectedTech}`}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={`${viewMode}-${selectedCategory}-${selectedTech}-${searchTerm}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`grid ${gridClasses[viewMode]} gap-6 max-w-screen-xl mx-auto`}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-16"
              >
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/40 max-w-md mx-auto">
                  <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    No Projects Found
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search terms or filters to find what
                    you're looking for.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {searchTerm && (
                      <motion.button
                        onClick={() => setSearchTerm("")}
                        className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/50 rounded-xl hover:bg-blue-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Clear Search
                      </motion.button>
                    )}
                    {selectedCategory !== "All" && (
                      <motion.button
                        onClick={() => setSelectedCategory("All")}
                        className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/50 rounded-xl hover:bg-purple-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Clear Category
                      </motion.button>
                    )}
                    {selectedTech !== "All" && (
                      <motion.button
                        onClick={() => setSelectedTech("All")}
                        className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/50 rounded-xl hover:bg-green-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Clear Technology
                      </motion.button>
                    )}
                    <motion.button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("All");
                        setSelectedTech("All");
                      }}
                      className="px-4 py-2 bg-gray-700/50 text-gray-300 border border-gray-600/50 rounded-xl hover:bg-gray-600/50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Reset All Filters
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3 justify-center"
          >
            <span className="text-sm text-gray-400 mr-2">Quick filters:</span>
            {[
              "Web Application",
              "IoT System",
              "Mobile Application",
              "React",
              "Firebase",
              "Arduino"
            ].map((tag) => (
              <motion.button
                key={tag}
                onClick={() => {
                  if (categories.includes(tag)) {
                    setSelectedCategory(tag);
                  } else {
                    setSelectedTech(tag);
                  }
                }}
                className="px-3 py-1 bg-gray-800/30 text-gray-400 text-xs rounded-full border border-gray-700/30 hover:bg-gray-700/40 hover:text-white hover:border-gray-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsData;

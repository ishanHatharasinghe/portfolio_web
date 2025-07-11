import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Share,
  Github,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { IoIosHeart } from "react-icons/io";
import my from "./../assets/Project1/1.jpg";
import my2 from "./../assets/Project2/page.jpg";
import my3 from "./../assets/Project3/page.jpeg";
import my4 from "./../assets/Project4/page.jpg";

// Import gallery images for each project
import gallery1_1 from "./../assets/Project1/1.jpg";
import gallery1_2 from "./../assets/Project1/2.jpg";
import gallery1_3 from "./../assets/Project1/3.jpg";
import gallery1_4 from "./../assets/Project1/4.jpg";
import gallery1_5 from "./../assets/Project1/5.jpg";
import gallery1_6 from "./../assets/Project1/6.jpg";
import gallery1_7 from "./../assets/Project1/7.jpg";

import gallery2_1 from "./../assets/Designs2/Frame 1.jpg";
import gallery2_2 from "./../assets/Designs2/Frame 2.jpg";
import gallery2_3 from "./../assets/Designs2/Frame 3.jpg";
import gallery2_4 from "./../assets/Designs2/Frame 4.jpg";
import gallery2_5 from "./../assets/Designs2/Frame 5.jpg";
import gallery2_6 from "./../assets/Designs2/Frame 6.jpg";
import gallery2_7 from "./../assets/Designs2/Frame 7.jpg";
import gallery2_8 from "./../assets/Designs2/Frame 8.jpg";
import gallery2_9 from "./../assets/Designs2/logo1.jpg";
import gallery2_10 from "./../assets/Designs2/logo2.jpg";
import gallery2_11 from "./../assets/Designs2/logo3.jpg";
import gallery2_12 from "./../assets/Designs2/logo4.jpg";
import gallery2_13 from "./../assets/Designs2/logo5.jpg";
import gallery2_14 from "./../assets/Designs2/logo6.jpg";

import gallery3_1 from "./../assets/Designs3/Frame 1.png";
import gallery3_2 from "./../assets/Designs3/Frame 2.png";
import gallery3_3 from "./../assets/Designs3/Frame 3.png";
import gallery3_5 from "./../assets/Designs3/Frame 5.png";
import gallery3_6 from "./../assets/Designs3/Frame 6.png";
import gallery3_7 from "./../assets/Designs3/Frame 7.png";
import gallery3_8 from "./../assets/Designs3/Frame 8.png";

import gallery4_1 from "./../assets/Designs4/falling1.jpg";
import gallery4_2 from "./../assets/Designs4/falling2.jpg";
import gallery4_3 from "./../assets/Designs4/falling3.jpg";

import gallery5_1 from "./../assets/Designs5/dark (1).jpg";
import gallery5_2 from "./../assets/Designs5/dark (2).jpg";
import gallery5_3 from "./../assets/Designs5/dark (3).jpg";
import gallery5_4 from "./../assets/Designs5/dark (4).jpg";
import gallery5_5 from "./../assets/Designs5/dark (5).jpg";
import gallery5_6 from "./../assets/Designs5/dark (6).jpg";
import gallery5_7 from "./../assets/Designs5/dark (7).jpg";
import gallery5_8 from "./../assets/Designs5/dark (8).jpg";
import gallery5_9 from "./../assets/Designs5/dark (9).jpg";
import gallery5_10 from "./../assets/Designs5/dark (10).jpg";
import gallery5_11 from "./../assets/Designs5/dark (11).jpg";
import gallery5_12 from "./../assets/Designs5/dark (12).jpg";
import gallery5_13 from "./../assets/Designs5/dark (13).jpg";
import gallery5_14 from "./../assets/Designs5/dark (14).jpg";
import gallery5_15 from "./../assets/Designs5/dark (15).jpg";
import gallery5_16 from "./../assets/Designs5/dark (16).jpg";
import gallery5_17 from "./../assets/Designs5/dark (17).jpg";
import gallery5_18 from "./../assets/Designs5/dark (18).jpg";
import gallery5_19 from "./../assets/Designs5/dark (19).jpg";
import gallery5_20 from "./../assets/Designs5/dark (20).jpg";
import gallery5_21 from "./../assets/Designs5/dark (21).jpg";
import gallery5_22 from "./../assets/Designs5/dark (22).jpg";
import gallery5_23 from "./../assets/Designs5/dark (23).jpg";
import gallery5_24 from "./../assets/Designs5/dark (24).jpg";
import gallery5_25 from "./../assets/Designs5/dark (25).jpg";
import gallery5_26 from "./../assets/Designs5/dark (26).jpg";
import gallery5_27 from "./../assets/Designs5/dark (27).jpg";
import gallery5_28 from "./../assets/Designs5/dark (28).jpg";
import gallery5_29 from "./../assets/Designs5/dark (29).jpg";
import gallery5_30 from "./../assets/Designs5/dark (30).jpg";
import gallery5_31 from "./../assets/Designs5/light (1).jpg";
import gallery5_32 from "./../assets/Designs5/light (2).jpg";
import gallery5_33 from "./../assets/Designs5/light (3).jpg";
import gallery5_34 from "./../assets/Designs5/light (4).jpg";
import gallery5_35 from "./../assets/Designs5/light (5).jpg";
import gallery5_36 from "./../assets/Designs5/light (6).jpg";
import gallery5_37 from "./../assets/Designs5/light (7).jpg";
import gallery5_38 from "./../assets/Designs5/light (8).jpg";
import gallery5_39 from "./../assets/Designs5/light (9).jpg";
import gallery5_40 from "./../assets/Designs5/light (10).jpg";
import gallery5_41 from "./../assets/Designs5/light (11).jpg";
import gallery5_42 from "./../assets/Designs5/light (12).jpg";
import gallery5_43 from "./../assets/Designs5/light (13).jpg";
import gallery5_44 from "./../assets/Designs5/light (14).jpg";
import gallery5_45 from "./../assets/Designs5/light (15).jpg";
import gallery5_46 from "./../assets/Designs5/light (16).jpg";
import gallery5_47 from "./../assets/Designs5/light (17).jpg";
import gallery5_48 from "./../assets/Designs5/light (18).jpg";
import gallery5_49 from "./../assets/Designs5/light (19).jpg";
import gallery5_50 from "./../assets/Designs5/light (20).jpg";
import gallery5_51 from "./../assets/Designs5/light (21).jpg";
import gallery5_52 from "./../assets/Designs5/light (22).jpg";
import gallery5_53 from "./../assets/Designs5/light (23).jpg";
import gallery5_54 from "./../assets/Designs5/light (24).jpg";
import gallery5_55 from "./../assets/Designs5/light (25).jpg";
import gallery5_56 from "./../assets/Designs5/light (26).jpg";
import gallery5_57 from "./../assets/Designs5/light (27).jpg";
import bg from "./../assets/Education/bg2.jpg";

const ProjectsData = () => {
  // Use lazy initialization so that saved data is loaded immediately.
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem("likes");
    return savedLikes ? JSON.parse(savedLikes) : {};
  });
  const [likedProjects, setLikedProjects] = useState(() => {
    const savedLikedProjects = localStorage.getItem("likedProjects");
    return savedLikedProjects ? JSON.parse(savedLikedProjects) : {};
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Save likes to localStorage when updated.
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  // Save likedProjects to localStorage when updated.
  useEffect(() => {
    localStorage.setItem("likedProjects", JSON.stringify(likedProjects));
  }, [likedProjects]);

  const handleLikeClick = (projectId) => {
    const isLiked = likedProjects[projectId];

    setLikedProjects((prev) => ({
      ...prev,
      [projectId]: !isLiked
    }));

    setLikes((prev) => {
      const currentLikes = prev[projectId] || 0;
      return !isLiked
        ? { ...prev, [projectId]: currentLikes + 1 }
        : { ...prev, [projectId]: Math.max(currentLikes - 1, 0) };
    });
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < selectedProject.galleryImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedProject.galleryImages.length - 1
    );
  };

  // Ensure that each project has a unique ID.
  const projects = [
    {
      id: 1,
      image: my,
      title: "Vehicle Parking Management System (VPMS)",
      technologies: ["Figma"],
      category: "Desktop Application",
      description: "A robust system for managing vehicle parking efficiently.",
      galleryImages: [
        gallery1_1,
        gallery1_2,
        gallery1_3,
        gallery1_4,
        gallery1_5,
        gallery1_6,
        gallery1_7
      ]
    },
    {
      id: 2,
      image: gallery2_1,
      title: "AlphaWizzards Portfolio",
      technologies: ["Figma"],
      category: "Website",
      description: "A sleek and modern portfolio design for AlphaWizzards.",
      galleryImages: [
        gallery2_1,
        gallery2_2,
        gallery2_3,
        gallery2_4,
        gallery2_5,
        gallery2_6,
        gallery2_7,
        gallery2_8,
        gallery2_9,
        gallery2_10,
        gallery2_11,
        gallery2_12,
        gallery2_13
      ]
    },
    {
      id: 3,
      image: gallery5_1,
      title: "Lassana Moments",
      technologies: ["Figma"],
      category: "Website",
      description: "A beautiful website capturing memorable moments.",
      galleryImages: [
        gallery5_1,
        gallery5_2,
        gallery5_3,
        gallery5_4,
        gallery5_5,
        gallery5_6,
        gallery5_7,
        gallery5_8,
        gallery5_9,
        gallery5_10,
        gallery5_11,
        gallery5_12,
        gallery5_13,
        gallery5_14,
        gallery5_15,
        gallery5_16,
        gallery5_17,
        gallery5_18,
        gallery5_19,
        gallery5_20,
        gallery5_21,
        gallery5_22,
        gallery5_23,
        gallery5_24,
        gallery5_25,
        gallery5_26,
        gallery5_27,
        gallery5_28,
        gallery5_29,
        gallery5_30,
        gallery5_31,
        gallery5_32,
        gallery5_33,
        gallery5_34,
        gallery5_35,
        gallery5_36,
        gallery5_37,
        gallery5_38,
        gallery5_39,
        gallery5_40,
        gallery5_41,
        gallery5_42,
        gallery5_43,
        gallery5_44,
        gallery5_45,
        gallery5_46,
        gallery5_47,
        gallery5_48,
        gallery5_49,
        gallery5_50,
        gallery5_51,
        gallery5_52,
        gallery5_53,
        gallery5_54,
        gallery5_55,
        gallery5_56,
        gallery5_57
      ]
    },
    {
      id: 4,
      image: gallery3_1,
      title: "LassanaMoments Admin Dashboard",
      technologies: ["Figma"],
      category: "Website",
      description: "An intuitive admin dashboard for LassanaMoments.",
      galleryImages: [
        gallery3_1,
        gallery3_2,
        gallery3_3,
        gallery3_5,
        gallery3_6,
        gallery3_7,
        gallery3_8
      ]
    },
    {
      id: 5,
      image: gallery4_1,
      title: "Falling Detection",
      technologies: ["Figma"],
      category: "Mobile Application",
      description: "A mobile application to detect falls in real-time.",
      galleryImages: [gallery4_1, gallery4_2, gallery4_3]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 py-16">
        {/* Header Section */}
        <div className="rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-gray-700/30">
          <div>
            <span className="font-italiana flex flex-col items-center justify-center text-center text-white/90 text-[20px]">
              Journey of UI/UX
              <h2 className="font-italiana text-5xl md:text-[160px] text-white tracking-wide">
                DesignScape
              </h2>
            </span>
            <p className="text-[16px] text-gray-300 leading-relaxed mt-3 items-center text-center">
              Explore my portfolio of innovative solutions where technology
              meets creativity.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="flex justify-center w-full">
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div
                    className="group relative w-full cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Card Content */}
                    <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-xl p-4 border border-gray-700/40 shadow-lg transition-all duration-500 group-hover:transform group-hover:scale-[1.02] h-full">
                      {/* Category Badge */}
                      <div className="absolute -top-4 right-4 bg-gradient-to-r from-purple-800 to-cyan-800 px-3 py-0.5 rounded-full">
                        <span className="text-xs font-semibold text-white">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Image */}
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <img
                          src={project.image}
                          alt={project.title + " image"}
                          className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
                        />
                        {hoveredProject === project.id && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg">
                            <ExternalLink className="w-6 h-6 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <h2 className="font-bold text-white text-base mb-2 line-clamp-2">
                        {project.title}
                      </h2>
                      <p className="text-gray-300 text-xs mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs rounded-full bg-gray-800 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLikeClick(project.id);
                            }}
                            className="flex items-center gap-1 text-gray-300 hover:text-pink-500 transition-colors"
                          >
                            <IoIosHeart
                              className={`w-5 h-5 transition-transform ${
                                likedProjects[project.id]
                                  ? "text-red-500 scale-110"
                                  : "text-gray-300"
                              }`}
                            />
                            <span className="text-xs text-gray-300">
                              {likes[project.id] || 0}
                            </span>
                          </button>
                        </div>
                        <div className="flex gap-1">
                          <Github className="w-4 h-4 text-gray-300 hover:text-white transition-colors cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-3xl p-12 w-full max-w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Project Content */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm mb-4">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-300">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Main Image */}
                  <div className="relative">
                    <img
                      src={selectedProject.galleryImages[selectedImageIndex]}
                      alt={selectedProject.title + " main image"}
                      className="w-full rounded-2xl"
                    />
                    {/* Navigation Arrows */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePreviousImage();
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage();
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Gallery */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Gallery</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.galleryImages.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Gallery ${index + 1}`}
                          className="w-full rounded-xl cursor-pointer"
                          onClick={() => handleImageClick(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsData;

import React from "react";
import bg from "./../assets/Education/bg2.jpg";
import my from "./../assets/Education/group1.jpg";
import my2 from "./../assets/Education/group2.jpg";
import robot from "./../assets/Home Section/robot.png";
import { ArrowRight, ExternalLink, GraduationCap } from "lucide-react";
import "./button.css";

// Add these imports at the top with others
import e1 from "./../assets/events/1.jpg";
import e2 from "./../assets/events/2.jpg";
import e3 from "./../assets/events/3.jpg";
import e4 from "./../assets/events/4.jpg";
import e5 from "./../assets/events/5.jpg";
import e6 from "./../assets/events/6.jpg";
import e7 from "./../assets/events/7.jpg";
import e8 from "./../assets/events/8.jpg";
import e9 from "./../assets/events/9.jpg";
import e10 from "./../assets/events/10.jpg";
import e11 from "./../assets/events/11.jpg";
import e12 from "./../assets/events/12.jpg";

import { useState } from "react"; // Ensure React state is imported

const eventImages = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12];

const Education = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Open image and store index
  const openImage = (img, index) => {
    setSelectedImage(img);
    setSelectedIndex(index);
  };

  // Navigate prev image with wrap-around
  const prevImage = (e) => {
    e.stopPropagation();
    const prevIndex =
      (selectedIndex - 1 + eventImages.length) % eventImages.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(eventImages[prevIndex]);
  };

  // Navigate next image with wrap-around
  const nextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % eventImages.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(eventImages[nextIndex]);
  };

  return (
    <div className="h-full relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background with enhanced gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="blur-[3px] w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 mt-16 z-10">
        <div className="rounded-[70px] w-full h-full p-2 border-2 mb-4 border-gray-700/30 backdrop-blur-sm">
          {/* Top header */}
          <div className="w-full text-center"></div>

          {/* Center content */}
          <div className="h-full flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-[70px] w-full px-4 flex justify-center">
              {/* Left Card - Bachelor of IT */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-purple-400/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />

                {/* Card content with glassmorphism */}
                <div className="flex flex-col items-center justify-center relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-6 border border-gray-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-orange-400/40">
                  {/* Image with modern frame */}
                  <div className="relative w-full mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={my2}
                      alt="profile"
                      className="w-full rounded-2xl relative z-10 transition-all duration-500 group-hover:scale-[1.03] shadow-lg"
                    />
                    <div className="absolute top-2 right-2 bg-orange-500/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <GraduationCap className="w-4 h-4 text-orange-300" />
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                    <h1 className="font-bold text-white text-lg md:text-xl leading-tight bg-gradient-to-r from-orange-200 to-purple-200 bg-clip-text text-transparent">
                      Bachelor of Information Technology
                    </h1>
                    <h5 className="font-semibold text-xs md:text-sm text-orange-300/80 mb-3">
                      University of Moratuwa
                    </h5>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      Mastered advanced concepts in computer science, including
                      cloud computing, artificial intelligence, and data
                      structures, building a strong foundation for creating
                      scalable solutions.
                    </p>
                  </div>

                  {/* Modern action buttons */}
                  <div className="flex gap-3 mt-6 w-full">
                    <a
                      href="https://uom.lk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn bg-gradient-to-r from-orange-500/20 to-purple-500/20 hover:from-orange-500/40 hover:to-purple-500/40 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/60 rounded-xl px-4 py-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20"
                    >
                      <div className="flex items-center justify-center gap-2 text-white/80 group-hover/btn:text-white text-xs font-medium">
                        <span>Visit University</span>
                        <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:scale-110" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Title section with enhanced typography */}
              <div className="relative flex flex-col items-center justify-center z-20">
                <div className="mb-[500px] relative text-center mb-16 z-10">
                  {/* Enhanced title styling */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="absolute top-6 left-1/2 transform -translate-x-1/2 font-italiana text-white/70 text-[20px] tracking-wider">
                      Journey of
                    </span>
                    <h1 className="font-italiana text-5xl md:text-[200px] text-transparent bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text tracking-wide drop-shadow-2xl">
                      Education
                    </h1>
                  </div>
                </div>
                <div className="absolute top-0 flex justify-center items-center z-20 mt-[100px]">
                  <div className="relative group h-[80vh] w-[100vw] object-cover"></div>
                </div>
              </div>

              {/* Right Card - HND EEE */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />

                {/* Card content with glassmorphism */}
                <div className="flex flex-col items-center justify-center relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-6 border border-gray-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-cyan-400/40">
                  {/* Image with modern frame */}
                  <div className="relative w-full mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={my}
                      alt="profile"
                      className="w-full rounded-2xl relative z-10 transition-all duration-500 group-hover:scale-[1.03] shadow-lg"
                    />
                    <div className="absolute top-2 right-2 bg-cyan-500/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <GraduationCap className="w-4 h-4 text-cyan-300" />
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                    <h1 className="font-bold text-white text-lg md:text-xl leading-tight bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
                      Higher National Diploma Electrical and Electronics
                      Engineering
                    </h1>
                    <h5 className="font-semibold text-xs md:text-sm text-cyan-300/80 mb-3">
                      Advanced Technological Institute, Galle
                    </h5>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      Specialized in Telecommunication and Electronics, gaining
                      hands-on experience and industry-relevant technical
                      expertise through practical applications and project-based
                      learning.
                    </p>
                  </div>

                  {/* Modern action buttons */}
                  <div className="flex gap-3 mt-6 w-full">
                    <a
                      href="https://hndelabuduwa.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/40 hover:to-cyan-500/40 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 rounded-xl px-4 py-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <div className="flex items-center justify-center gap-2 text-white/80 group-hover/btn:text-white text-xs font-medium">
                        <span>Visit Institute</span>
                        <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:scale-110" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced Robot section */}
              <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 group">
                {/* Multi-layered robot glow */}
                <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-orange-500/15 via-purple-500/15 to-cyan-500/15 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute w-[100%] h-[100%] bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative transition-all duration-700 group-hover:scale-[1.03] drop-shadow-2xl">
                  <img
                    src={robot}
                    alt="robot"
                    className="mt-14 h-[130vh] w-auto filter drop-shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Layout with modern enhancements */}
            <div className="md:hidden flex flex-col items-center justify-center w-full">
              {/* Enhanced mobile titles */}
              <div className="w-full text-center mb-8">
                <h1 className="font-italiana text-4xl text-transparent bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text tracking-wide drop-shadow-lg">
                  Journey of Education
                </h1>
              </div>

              {/* Mobile Left Card (Bachelor of IT) */}
              <div className="group relative w-full max-w-xs mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="flex flex-col items-center justify-center relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-6 border border-gray-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="relative w-full mb-4">
                    <img
                      src={my2}
                      alt="profile"
                      className="w-full rounded-2xl transition-all duration-500 group-hover:scale-[1.02] shadow-lg"
                    />
                  </div>
                  <h1 className="font-bold text-white text-lg text-center bg-gradient-to-r from-orange-200 to-purple-200 bg-clip-text text-transparent">
                    Bachelor of Information Technology
                  </h1>
                  <h5 className="font-semibold text-xs text-orange-300/80 mb-3">
                    University of Moratuwa
                  </h5>
                  <p className="text-white/70 text-xs text-center leading-relaxed mb-4">
                    Mastered advanced concepts in computer science, including
                    cloud computing, artificial intelligence, and data
                    structures, building a strong foundation for creating
                    scalable solutions.
                  </p>
                  <a
                    href="https://uom.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 hover:from-orange-500/40 hover:to-purple-500/40 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/60 rounded-xl px-4 py-2.5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-2 text-white/80 hover:text-white text-xs font-medium">
                      <span>Visit University</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Mobile Right Card (HND EEE) */}
              <div className="group relative w-full max-w-xs mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="flex flex-col items-center justify-center relative bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] p-6 border border-gray-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="relative w-full mb-4">
                    <img
                      src={my}
                      alt="profile"
                      className="w-full rounded-2xl transition-all duration-500 group-hover:scale-[1.02] shadow-lg"
                    />
                  </div>
                  <h1 className="font-bold text-white text-lg text-center bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    Higher National Diploma Electrical and Electronics
                    Engineering
                  </h1>
                  <h5 className="font-semibold text-xs text-cyan-300/80 mb-3">
                    Advanced Technological Institute, Galle
                  </h5>
                  <p className="text-white/70 text-xs text-center leading-relaxed mb-4">
                    Specialized in Telecommunication and Electronics, gaining
                    hands-on experience and industry-relevant technical
                    expertise through practical applications and project-based
                    learning.
                  </p>
                  <a
                    href="https://hndelabuduwa.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/40 hover:to-cyan-500/40 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 rounded-xl px-4 py-2.5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-2 text-white/80 hover:text-white text-xs font-medium">
                      <span>Visit Institute</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Event Section */}
      <div className="bg-black relative z-20 w-full h-full p-3 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 ">
        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Column - Event Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300 border border-blue-500/30">
                    Exhibition
                  </span>
                  <span className="text-xs text-gray-500">May 2025</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  Inventx 2025: The Engineering Exhibition
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Higher National Diploma in Engineering, ATI Labuduwa
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-3 gap-2">
                {eventImages.slice(0, 3).map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square relative rounded-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:z-10 hover:shadow-lg"
                    onClick={() => openImage(img, index)}
                  >
                    <img
                      src={img}
                      alt={`Event ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-800/50 flex justify-between items-center">
                <a
                  href="https://www.facebook.com/share/p/1Bz6umM3UK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                >
                  View on Facebook
                  <ExternalLink className="ml-1.5 h-4 w-4 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                </a>
                <button
                  onClick={() => openImage(eventImages[0], 0)}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  View all photos
                </button>
              </div>
            </div>
          </div>

          {/* Second Column - Field Visit Event */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 p-6 h-full flex flex-col">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-300 border border-green-500/30">
                    Field Visit
                  </span>
                  <span className="text-xs text-gray-500">December 2023</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  Field Visit: Kulasinghe Moragahakanda Reservoir
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Higher National Diploma in Engineering, ATI Labuduwa
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-3 gap-2">
                {eventImages.slice(9, 12).map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square relative rounded-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:z-10 hover:shadow-lg"
                    onClick={() => openImage(img, 9 + index)}
                  >
                    <img
                      src={img}
                      alt={`Field Visit ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800/50 flex justify-between items-center">
                <button
                  onClick={() => openImage(eventImages[9], 9)}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  View all photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg bg-black/90">
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all hover:scale-110"
            aria-label="Previous Image"
          >
            <ArrowRight className="rotate-180 w-6 h-6" />
          </button>

          {/* Image container */}
          <div className="relative max-w-4xl w-full h-full max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Event photo"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
              {selectedIndex + 1} / {eventImages.length}
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all hover:scale-110"
            aria-label="Next Image"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Education;

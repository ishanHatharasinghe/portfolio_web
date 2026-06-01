import { useState } from "react";
import my from "./../assets/Education/group1.webp";
import my2 from "./../assets/Education/group2.webp";
import robot from "./../assets/Education/my (2).png";
import { ArrowRight, ExternalLink, GraduationCap } from "lucide-react";
import "./button.css";

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
    <div className="h-auto relative min-h-auto w-full  overflow-hidden">
      {/* Main content */}
      <div className="relative min-h-screen flex flex-col justify-between items-center px-6 mt-16 z-10">
        
        <div className="rounded-[20px] lg:rounded-[60px] w-full h-auto p-2 border border-white/20 bg-gradient-to-br from-white/5 to-transparent shadow-2xl shadow-purple-500/10">
          {/* Top header */}
          <div className="w-full text-center"></div>

          {/* Center content */}
          <div className="h-full flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-[70px] w-full px-4 flex justify-center">
              {/* Left Card - Bachelor of IT */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                {/* Card content with flat dark theme */}
                <div className="flex flex-col items-center justify-center relative bg-[#23272d]/90 rounded-[2rem] p-6 border border-white/10 shadow-[inset_0_1px_1px_rgba(0,0,0,0.2),0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/20">
                  {/* Image with modern frame */}
                  <div className="relative w-full mb-6">
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
                  <h1 className="font-bold text-white text-lg md:text-xl leading-tight">
                    Bachelor of Information Technology
                  </h1>
                    <h5 className="font-semibold text-xs md:text-sm text-white/60 mb-3">
                      University of Moratuwa
                    </h5>
                    <p className="text-[#d9e0e3]/80 text-xs md:text-sm leading-relaxed">
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
                      className="flex-1 button rounded-xl px-4 py-2.5 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-white/10 text-black"
                    >
                      <div className="flex items-center justify-center gap-2 text-black text-xs font-medium">
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
                    <span className="absolute bottom-[190px] left-1/2 transform -translate-x-1/2  text-[#d9e0e3]/80 text-[20px] tracking-wider">
                      Journey of
                    </span>
                    <h1 className="font-tusker text-5xl md:text-[180px] text-[#d9e0e3] tracking-wide drop-shadow-2xl">
                      Education
                    </h1>
                  </div>
                </div>

              </div>

              {/* Right Card - HND EEE */}
              <div className="group relative w-60 md:w-80 mt-[300px] z-30">
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-white/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-white/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />

                {/* Card content with flat dark theme */}
                <div className="flex flex-col items-center justify-center relative bg-[#23272d]/90 rounded-[2rem] p-6 border border-white/10 shadow-[inset_0_1px_1px_rgba(0,0,0,0.2),0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/20">
                  {/* Image with modern frame */}
                  <div className="relative w-full mb-6">
                    <div className="absolute inset-0 bg-white/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                    <h1 className="font-bold text-white text-lg md:text-xl leading-tight">
                      Higher National Diploma Electrical and Electronics
                      Engineering
                    </h1>
                    <h5 className="font-semibold text-xs md:text-sm text-white/60 mb-3">
                      Advanced Technological Institute, Galle
                    </h5>
                    <p className="text-[#d9e0e3]/80 text-xs md:text-sm leading-relaxed">
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
                      className="flex-1 button rounded-xl px-4 py-2.5 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-white/10 text-black"
                    >
                      <div className="flex items-center justify-center gap-2 text-black text-xs font-medium">
                        <span>Visit Institute</span>
                        <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:scale-110" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced Robot section */}
              <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20 group">
  <div className="relative transition-all duration-700 group-hover:scale-[1.03] drop-shadow-2xl">
    <img
      src={robot}
      alt="robot"
      className="mt-18 h-[1700px] w-auto object-contain filter drop-shadow-lg"
    />
  </div>
</div>
            </div>

            {/* Mobile Layout with modern enhancements */}
            <div className="md:hidden flex flex-col items-center justify-center w-full">
              {/* Enhanced mobile titles */}
              <div className="w-full text-center mb-8">
                  <h1 className="font-tusker text-4xl text-[#d9e0e3] tracking-wide drop-shadow-lg">
                    Journey of Education
                  </h1>
              </div>

              {/* Mobile Left Card (Bachelor of IT) */}
              <div className="group relative w-full max-w-xs mx-auto mb-8">
                <div className="absolute inset-0 bg-white/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="flex flex-col items-center justify-center relative bg-[#23272d]/90 rounded-[2rem] p-6 border border-white/10 shadow-[inset_0_1px_1px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="relative w-full mb-4">
                    <img
                      src={my2}
                      alt="profile"
                      className="w-full rounded-2xl transition-all duration-500 group-hover:scale-[1.02] shadow-lg"
                    />
                  </div>
                  <h1 className="font-bold text-white text-lg text-center">
                    Bachelor of Information Technology
                  </h1>
                  <h5 className="font-semibold text-xs text-white/60 mb-3">
                    University of Moratuwa
                  </h5>
                  <p className="text-[#d9e0e3]/80 text-xs text-center leading-relaxed mb-4">
                    Mastered advanced concepts in computer science, including
                    cloud computing, artificial intelligence, and data
                    structures, building a strong foundation for creating
                    scalable solutions.
                  </p>
                  <a
                    href="https://uom.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 button rounded-xl px-4 py-2.5 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-white/10 text-black"
                  >
                    <div className="flex items-center justify-center gap-2 text-black text-xs font-medium">
                      <span>Visit University</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Mobile Right Card (HND EEE) */}
              <div className="group relative w-full max-w-xs mx-auto mb-8">
                <div className="absolute inset-0 bg-white/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="flex flex-col items-center justify-center relative bg-[#23272d]/90 rounded-[2rem] p-6 border border-white/10 shadow-[inset_0_1px_1px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="relative w-full mb-4">
                    <img
                      src={my}
                      alt="profile"
                      className="w-full rounded-2xl transition-all duration-500 group-hover:scale-[1.02] shadow-lg"
                    />
                  </div>

                  <h1 className="font-bold text-white text-lg text-center">
                    Higher National Diploma Electrical and Electronics
                    Engineering
                  </h1>
                  <h5 className="font-semibold text-xs text-white/60 mb-3">
                    Advanced Technological Institute, Galle
                  </h5>
                  <p className="text-[#d9e0e3]/80 text-xs text-center leading-relaxed mb-4">
                    Specialized in Telecommunication and Electronics, gaining
                    hands-on experience and industry-relevant technical
                    expertise through practical applications and project-based
                    learning.
                  </p>
                  <a
                    href="https://hndelabuduwa.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 button rounded-xl px-4 py-2.5 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-white/10 text-black"
                  >
                    <div className="flex items-center justify-center gap-2 text-black text-xs font-medium">
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

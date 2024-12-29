import { useEffect, useState } from "react";
// Import Images
import Image11 from "./../assets/Project1/1.JPG";
import Image12 from "./../assets/Project1/2.JPG";
import Image13 from "./../assets/Project1/3.JPG";
import Image14 from "./../assets/Project1/4.JPG";
import Image15 from "./../assets/Project1/5.JPG";
import Image16 from "./../assets/Project1/6.JPG";
import Image17 from "./../assets/Project1/7.JPG";
import Image18 from "./../assets/Project1/8.JPG";
import Image1 from "./../assets/Project1/Slide1.JPG";
import Image10 from "./../assets/Project1/Slide10.JPG";
import Image2 from "./../assets/Project1/Slide2.JPG";
import Image3 from "./../assets/Project1/Slide3.JPG";
import Image4 from "./../assets/Project1/Slide4.JPG";
import Image5 from "./../assets/Project1/Slide5.JPG";
import Image6 from "./../assets/Project1/Slide6.JPG";
import Image7 from "./../assets/Project1/Slide7.JPG";
import Image8 from "./../assets/Project1/Slide8.JPG";
import Image9 from "./../assets/Project1/Slide9.JPG";
import video from "./../assets/Project1/ProjectVPMS.mp4";
import pdfFile from "./../assets/Project1/Project.pdf";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18
];
const ProjectVpms = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleOpenPDF = () => {
    window.open(pdfFile, "_blank"); // Open PDF in new tab
  };

  return (
    <>
      <div className="mb-5">
        <p className="text-3xl sm:text-2xl lg:text-2xl text-[#e5e7eb] max-w-2xl mx-auto leading-relaxed font-poppins">
          01. Vehicle Parking Management System (VPMS)
        </p>
      </div>
      <div className="w-full h-64 md:h-96 overflow-hidden relative bg-gradient-to-r from-[#1900FFFF] to-[#facc15] rounded-xl shadow-lg">
        {/* Images */}
        <div className="relative w-full h-full">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-[#1900FFFF] hover:bg-[#1900FFFF] hover:text-white p-2 rounded-full shadow-md transition-all"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-[#1900FFFF] hover:bg-[#1900FFFF] hover:text-white p-2 rounded-full shadow-md transition-all"
        >
          &#8594;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white shadow-md scale-125 border-2 border-[#0D00FFFF]"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-1xl sm:text-1xl lg:text-1xl text-[#e5e7eb] max-w-1xl mx-auto leading-relaxed font-poppins">
          As part of my Bachelor of Information Technology degree, I developed a
          Vehicle Parking Management System (VPMS)—a desktop application
          designed to simplify and automate parking operations by replacing
          traditional manual processes. The system streamlines vehicle entry,
          exit, and parking slot management, ensuring efficiency, accuracy, and
          better resource utilization. Built with C# and integrated with a SQL
          database, the VPMS offers features like real-time vehicle tracking,
          section-based parking allocation, and seamless data management. This
          project showcases my expertise in desktop application development,
          database management, and delivering user-friendly software solutions
          to solve real-world challenges in parking management.
        </p>
        <div className="mt-10 video-container">
          <video
            src={video}
            controls
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg shadow-lg gap-5"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <button
            onClick={handleOpenPDF} // Call the function to open PDF
            className="mt-8 bg-gradient-to-r from-[#1900FFFF] to-[#FA1515FF] text-white py-3 px-6 rounded-3xl shadow-2xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 focus:outline-none  font-semibold tracking-wider"
          >
            Open PDF
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/posts/ishan-nilaksha-686461308_mysql-vpms-clanguage-activity-7268195521146572800-T8Mi?utm_source=share&utm_medium=member_desktop",
                "_blank"
              )
            }
            className="mt-8 bg-gradient-to-r from-[#1900FFFF] to-[#FA1515FF] text-white py-3 px-6 rounded-3xl shadow-2xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 focus:outline-none  font-semibold tracking-wider"
          >
            Click For More
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectVpms;

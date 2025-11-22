import React, { useState } from "react";
import certificate1 from "./../assets/Licenses & Certifications/Python_for_Beginners_E-Certificate.webp";
import certificate2 from "./../assets/Licenses & Certifications/Python_Programming_E-Certificate.webp";
import certificate3 from "./../assets/Licenses & Certifications/Web_Design_for_Beginners_E-Certificate.webp";
import certificate4 from "./../assets/Licenses & Certifications/Front-End_Web_Development_E-Certificate.webp";
import certificate5 from "./../assets/Licenses & Certifications/Introduction_to_Cybersecurity_Badge20231026-29-5mapes.webp";
import certificate6 from "./../assets/Licenses & Certifications/ATC_AP70251809768572_Diploma in AutoCAD.webp";
import certificate7 from "./../assets/Licenses & Certifications/NVQ Level 4(ICT Technician).webp";
import certificate9 from "./../assets/Licenses & Certifications/Foundations_of_Project_Management_E-Certificate_page-0001.webp";
import bg from "./../assets/bg3.webp";

const LicensesCertifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      id: 6,
      title: "AutoCAD 2D & 3D",
      description:
        "Autocad 2D & 3D Vocational certificate course - Snap Ferd (Pvt) Ltd ",
      image: certificate6,
      logo: "https://studyway-resources.s3.amazonaws.com/profilePictures/1706767693615.jpg"
    },
    {
      id: 7,
      title: "NVQ Level 4 - ICT Technician ",
      description:
        "Understand fundamental concepts of ICT and Networking - Vocational Training Center",
      image: certificate7,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5tARuhC970s8_8xPbHmRHjbPrOEOCLSXXg&s"
    },
    {
      id: 1,
      title: "Python for Beginners",
      description: "An introductory course on Python programming fundamentals.",
      image: certificate1,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQdVemH7BxB-Wkoo2MienAsSTFWlbgJGDwA&s"
    },
    {
      id: 2,
      title: "Python Programming",
      description:
        "A comprehensive course on Python, covering advanced concepts and practical applications.",
      image: certificate2,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQdVemH7BxB-Wkoo2MienAsSTFWlbgJGDwA&s"
    },
    {
      id: 3,
      title: "Web Design for Beginners",
      description:
        "Learn the basics of web design, including HTML, CSS, and user-friendly layouts.",
      image: certificate3,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQdVemH7BxB-Wkoo2MienAsSTFWlbgJGDwA&s"
    },
    {
      id: 4,
      title: "Front-End Web Development",
      description:
        "Master front-end development skills like HTML, CSS, and JavaScript to build interactive websites.",
      image: certificate4,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQdVemH7BxB-Wkoo2MienAsSTFWlbgJGDwA&s"
    },
    {
      id: 6,
      title: "Foundations of Project Management",
      description: "Learn the basics of Project Management",
      image: certificate9,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQdVemH7BxB-Wkoo2MienAsSTFWlbgJGDwA&s"
    },
    {
      id: 5,
      title: "Introduction to Cybersecurity",
      description:
        "Understand fundamental concepts of cybersecurity, including risk management and threat mitigation.",
      image: certificate5,
      logo: "https://www.svgrepo.com/show/331335/cisco.svg"
    }
  ];

  return (
    <section className="h-full relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-cyan-900/5`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-purple-900/15`}
        />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 mt-16 z-10">
        <div className="space-y-6 text-center rounded-[20px] sm:rounded-[70px] w-full h-full p-3 sm:p-5 border border-2 mb-4 border-gray-700/30">
          <h2 className="font-italiana text-3xl sm:text-5xl md:text-[160px] text-white tracking-wide">
            Professional Designations
          </h2>
          <p className="text-sm sm:text-[16px] text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
            Showcase of certifications that highlight my technical expertise and
            dedication to continuous learning.
          </p>

          {/* Certification Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-10 border p-4 sm:p-8 border-white/10 bg-black/40 backdrop-blur-md rounded-lg sm:rounded-[1rem]">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="relative p-4 sm:p-4 border border-white/10 bg-black/40 backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer hover:scale-105 active:scale-95"
                onClick={() => setSelectedImage(cert.image)}
              >
                {/* Logo Badge - Larger on mobile */}
                <img
                  src={cert.logo}
                  alt="logo"
                  className="absolute top-2 right-2 w-10 h-10 sm:w-8 sm:h-8 rounded-full border border-white shadow-md object-cover bg-white p-1"
                />

                {/* Certificate - Better aspect ratio for mobile */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 sm:h-32 md:h-36 object-cover rounded-md mb-3"
                />

                {/* Title - Larger on mobile */}
                <h3 className="text-lg sm:text-base font-semibold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>

                {/* Description - Better sizing for mobile */}
                <p className="text-sm sm:text-xs text-gray-300 mt-1 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Modal - Mobile Optimized */}
          {selectedImage && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-full max-h-full">
                <img
                  src={selectedImage}
                  alt="Full View"
                  className="max-w-full max-h-[90vh] rounded-lg object-contain"
                />
                <button
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white text-black rounded-full px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold hover:bg-gray-200 transition shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LicensesCertifications;

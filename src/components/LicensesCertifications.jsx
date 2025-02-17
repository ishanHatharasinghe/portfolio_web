import React, { useState } from "react";
import { motion } from "framer-motion";
import certificate1 from "./../assets/Licenses & Certifications/Python_for_Beginners_E-Certificate.jpg";
import certificate2 from "./../assets/Licenses & Certifications/Python_Programming_E-Certificate.jpg";
import certificate3 from "./../assets/Licenses & Certifications/Web_Design_for_Beginners_E-Certificate.jpg";
import certificate4 from "./../assets/Licenses & Certifications/Front-End_Web_Development_E-Certificate.jpg";
import certificate5 from "./../assets/Licenses & Certifications/Introduction_to_Cybersecurity_Badge20231026-29-5mapes.jpg";
import bg from "./../assets/Licenses & Certifications/bg2.jpg";

const LicensesCertifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Python for Beginners",
      description: "An introductory course on Python programming fundamentals.",
      image: certificate1
    },
    {
      id: 2,
      title: "Python Programming",
      description:
        "A comprehensive course on Python, covering advanced concepts and practical applications.",
      image: certificate2
    },
    {
      id: 3,
      title: "Web Design for Beginners",
      description:
        "Learn the basics of web design, including HTML, CSS, and user-friendly layouts.",
      image: certificate3
    },
    {
      id: 4,
      title: "Front-End Web Development",
      description:
        "Master front-end development skills like HTML, CSS, and JavaScript to build interactive websites.",
      image: certificate4
    },
    {
      id: 5,
      title: "Introduction to Cybersecurity",
      description:
        "Understand fundamental concepts of cybersecurity, including risk management and threat mitigation.",
      image: certificate5
    }
  ];

  return (
    <section className="h-full relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-6 mt-16 z-10">
        <div className="space-y-6 text-center rounded-[70px] w-full h-full p-5 border border-2 mb-4 border-gray-700/30">
          <h2 className="font-italiana text-5xl md:text-[160px] text-white tracking-wide">
            Professional Designations
          </h2>

          <p className="text-[16px] text-gray-300 leading-relaxed">
            Showcase of certifications that highlight my technical expertise and
            dedication to continuous learning.
          </p>

          {/* Certification Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 border p-8 border-white/10 bg-black/40 backdrop-blur-md rounded-[1rem]">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className=" p-6 border p-8 border-white/10 bg-black/40 backdrop-blur-md rounded-[1rem] transition-all duration-300 ease-in-out hover:shadow-xl  cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-[#D1D5DB] mt-2">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Full View"
                  className="max-w-full max-h-screen rounded-lg"
                />
                <button
                  className="absolute top-4 right-4 bg-white text-black rounded-full px-4 py-2 font-semibold hover:bg-gray-200 transition"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
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

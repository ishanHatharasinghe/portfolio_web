import React, { useState } from "react";
import { motion } from "framer-motion";
import certificate1 from "./../assets/Licenses & Certifications/Python_for_Beginners_E-Certificate.jpg";
import certificate2 from "./../assets/Licenses & Certifications/Python_Programming_E-Certificate.jpg";
import certificate3 from "./../assets/Licenses & Certifications/Web_Design_for_Beginners_E-Certificate.jpg";
import certificate4 from "./../assets/Licenses & Certifications/Front-End_Web_Development_E-Certificate.jpg";
import certificate5 from "./../assets/Licenses & Certifications/Introduction_to_Cybersecurity_Badge20231026-29-5mapes.jpg";
import bg from "./../assets/bg6.jpg"; // Import the same background image used in the Home component

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
    <section
      id="licenses-certifications"
      className="relative w-full flex items-center justify-center bg-gradient-to-br from-[#19003FFF] via-[#03001BFF] to-[#0041CEFF] text-white overflow-hidden py-20" // Increased top and bottom padding
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%"
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12"
      >
        {/* Section Title */}
        <div className="space-y-6 text-center">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mt-16"
          >
            Licenses & Certifications
          </motion.h2>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6  transition-all duration-100 transform "
          >
            Showcase of certifications that highlight my technical expertise and
            dedication to continuous learning.
          </motion.p>
        </div>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border p-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl bg-[#1F2937] cursor-pointer"
              onClick={() => setSelectedImage(cert.image)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              <p className="text-sm text-[#D1D5DB] mt-2">{cert.description}</p>
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
      </motion.div>
    </section>
  );
};

export default LicensesCertifications;

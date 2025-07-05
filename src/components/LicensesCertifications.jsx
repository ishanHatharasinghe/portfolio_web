import React, { useState } from "react";
import certificate1 from "./../assets/Licenses & Certifications/Python_for_Beginners_E-Certificate.jpg";
import certificate2 from "./../assets/Licenses & Certifications/Python_Programming_E-Certificate.jpg";
import certificate3 from "./../assets/Licenses & Certifications/Web_Design_for_Beginners_E-Certificate.jpg";
import certificate4 from "./../assets/Licenses & Certifications/Front-End_Web_Development_E-Certificate.jpg";
import certificate5 from "./../assets/Licenses & Certifications/Introduction_to_Cybersecurity_Badge20231026-29-5mapes.jpg";
import certificate6 from "./../assets/Licenses & Certifications/ATC_AP70251809768572_Diploma in AutoCAD.jpg";
import certificate7 from "./../assets/Licenses & Certifications/NVQ Level 4(ICT Technician).jpg";
import bg from "./../assets/Licenses & Certifications/bg2.jpg";

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
      id: 5,
      title: "Introduction to Cybersecurity",
      description:
        "Understand fundamental concepts of cybersecurity, including risk management and threat mitigation.",
      image: certificate5,
      logo: "https://www.svgrepo.com/show/331335/cisco.svg"
    }
  ];

  return (
    <section className="h-full relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-6 mt-16 z-10">
        <div className="space-y-6 text-center rounded-[70px] w-full h-full p-5 border border-2 mb-4 border-gray-700/30">
          <h2 className="font-italiana text-5xl md:text-[160px] text-white tracking-wide">
            Professional Designations
          </h2>
          <p className="text-[16px] text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Showcase of certifications that highlight my technical expertise and
            dedication to continuous learning.
          </p>

          {/* Certification Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 border p-8 border-white/10 bg-black/40 backdrop-blur-md rounded-[1rem]">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="relative p-4 border border-white/10 bg-black/40 backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                {/* Logo Badge */}
                <img
                  src={cert.logo}
                  alt="logo"
                  className="absolute top-2 right-2 w-8 h-8 rounded-full border border-white shadow-md object-cover bg-white p-1"
                />

                {/* Certificate */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h3 className="text-base font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1">{cert.description}</p>
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

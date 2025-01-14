import { useState } from "react";
import pdf4 from "./../assets/Licenses & Certifications/Front-End_Web_Development_E-Certificate.pdf";
import pdf5 from "./../assets/Licenses & Certifications/Introduction_to_Cybersecurity_Badge20231026-29-5mapes.pdf";
import pdf1 from "./../assets/Licenses & Certifications/Python_for_Beginners_E-Certificate.pdf";
import pdf2 from "./../assets/Licenses & Certifications/Python_Programming_E-Certificate.pdf";
import pdf3 from "./../assets/Licenses & Certifications/Web_Design_for_Beginners_E-Certificate.pdf";

const LicensesCertifications = () => {
  const [expanded, setExpanded] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Python for Beginners",
      description: "An introductory course on Python programming fundamentals.",
      link: pdf1
    },
    {
      id: 2,
      title: "Python Programming",
      description:
        "A comprehensive course on Python, covering advanced concepts and practical applications.",
      link: pdf2
    },
    {
      id: 3,
      title: "Web Design for Beginners",
      description:
        "Learn the basics of web design, including HTML, CSS, and user-friendly layouts.",
      link: pdf3
    },
    {
      id: 4,
      title: "Front-End Web Development",
      description:
        "Master front-end development skills like HTML, CSS, and JavaScript to build interactive websites.",
      link: pdf4
    },
    {
      id: 5,
      title: "Introduction to Cybersecurity",
      description:
        "Understand fundamental concepts of cybersecurity, including risk management and threat mitigation.",
      link: pdf5
    }
  ];

  return (
    <section
      id="licenses-certifications"
      className="text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className="py-10 px-6 sm:px-8 lg:px-16 xl:px-24 hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold  text-[#f3e8ff]">
          Licenses & Certifications
        </h2>
        <div className="mb-12 h-2 w-80 sm:w-96 lg:w-120 bg-gradient-to-r from-[#FF0000FF] to-[#4400FFFF] rounded-md shadow-lg mx-auto mb-6"></div>
        <p className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6 hover:text-[#5E63FFFF] transition-all duration-100 transform hover:scale-105">
          Showcase of certifications that highlight my technical expertise and
          dedication to continuous learning.
        </p>
      </div>

      {certifications.map((cert) => (
        <section
          key={cert.id}
          className="border p-6 rounded-lg mb-6 transition-all duration-300 ease-in-out hover:shadow-xl"
          data-aos="fade-up"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setExpanded(expanded === cert.id ? null : cert.id)}
            aria-expanded={expanded === cert.id}
            aria-controls={`cert-content-${cert.id}`}
          >
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <span
              className={`transform transition-transform duration-300 ${
                expanded === cert.id ? "rotate-90 text-[#FF0000]" : "rotate-0"
              }`}
            >
              ➤
            </span>
          </div>
          {expanded === cert.id && (
            <div
              id={`cert-content-${cert.id}`}
              className="mt-4 bg-[#000718FF] p-4 rounded-md text-[#D1D5DB] transition-all duration-500 ease-in-out"
            >
              <p className="mb-4">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#FF0000FF] to-[#4400FFFF] text-white py-2 px-4 rounded-md hover:opacity-90 transition-all duration-300"
              >
                View Certificate
              </a>
            </div>
          )}
        </section>
      ))}
    </section>
  );
};

export default LicensesCertifications;

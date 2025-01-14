import "aos/dist/aos.css";
import { useState } from "react";
import BIT from "./../assets/Education/bit.png";
import HND from "./../assets/Education/hnd.jpeg";

const EducationData = () => {
  // State to toggle visibility of each education item
  const [showHND, setShowHND] = useState(false);
  const [showBIT, setShowBIT] = useState(false);

  return (
    <section
      id="education"
      className="min-h-screen  text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden h-full"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className="py-10 px-6 sm:px-8 lg:px-16 xl:px-24 hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold  text-[#f3e8ff]">
          Education
        </h2>
        <div className="mb-12 h-2 w-80 sm:w-96 lg:w-120 bg-gradient-to-r from-[#FF0000FF] to-[#4400FFFF] rounded-md shadow-lg mx-auto mb-6"></div>
        <p className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6 hover:text-[#5E63FFFF] transition-all duration-100 transform hover:scale-105">
          Discover my academic journey, where I gained foundational knowledge
          and skills to build my professional expertise.
        </p>
      </div>

      {/* Higher National Diploma Section */}
      <section
        id="HND"
        data-aos="fade-up"
        className="border p-6 rounded-lg mb-6 transition-all duration-300 ease-in-out hover:shadow-xl"
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowHND(!showHND)}
          aria-expanded={showHND}
          aria-controls="hnd-content"
        >
          <h3 className="text-xl font-semibold">
            🎓 Higher National Diploma In Electrical and Electronics
            Engineering, Advanced Technological Institute, Labuduwa, Galle
          </h3>
          <span
            className={`transform transition-transform duration-300 ${
              showHND ? "rotate-90 text-[#00FF7F]" : "rotate-0"
            }`}
          >
            ➤
          </span>
        </div>
        {showHND && (
          <div
            id="hnd-content"
            className="mt-4 bg-[#000718FF] p-4 rounded-md text-[#D1D5DB] transition-all duration-500 ease-in-out"
          >
            <img
              src={HND}
              alt="HND Certificate"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Completed my Higher National Diploma with a specialization in
              Electrical and Electronics Engineering, focusing on
              Telecommunication and Electronics. This program equipped me with
              practical knowledge and industry-relevant skills.
            </p>
          </div>
        )}
      </section>

      {/* Bachelor of Information Technology Section */}
      <section
        id="BIT"
        data-aos="fade-up"
        className="border p-6 rounded-lg mb-6 transition-all duration-300 ease-in-out hover:shadow-xl"
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowBIT(!showBIT)}
          aria-expanded={showBIT}
          aria-controls="bit-content"
        >
          <h3 className="text-xl font-semibold">
            📘 Bachelor of Information Technology (BIT), University Of Moratuwa
          </h3>
          <span
            className={`transform transition-transform duration-300 ${
              showBIT ? "rotate-90 text-[#00FF7F]" : "rotate-0"
            }`}
          >
            ➤
          </span>
        </div>
        {showBIT && (
          <div
            id="bit-content"
            className="mt-4 bg-[#000718FF] p-4 rounded-md text-[#D1D5DB] transition-all duration-500 ease-in-out"
          >
            <img
              src={BIT}
              alt="BIT Certificate"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Earned my Bachelor of Information Technology, where I deepened my
              understanding of computer science, cloud computing, artificial
              intelligence, and data structures. This program provided me with a
              solid foundation for building scalable and efficient solutions.
            </p>
          </div>
        )}
      </section>
    </section>
  );
};

export default EducationData;

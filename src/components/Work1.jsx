import { useEffect, useState } from "react";
// Import Images
import Image1 from "./../assets/Work1/1.jpg";
import Image2 from "./../assets/Work1/2.jpg";
import Image3 from "./../assets/Work1/3.jpg";

const images = [Image1, Image2, Image3];

const Work1 = () => {
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

  return (
    <>
      <div className="mb-5">
        <p className="text-3xl sm:text-2xl lg:text-2xl text-[#e5e7eb] max-w-2xl mx-auto leading-relaxed font-poppins font-bold">
          SLT Digital LAB
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
          Electronics Engineering Intern - Sri Lanka Telecom PLC, Digital LAB,
          The Embryo Innovation Centre, Trace Expert City, Maradana, Colombo
        </p>
      </div>
    </>
  );
};

export default Work1;

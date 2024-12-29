import { useEffect, useState } from "react";
// Import Images
import Image1 from "./../assets/Project2/1.png";
import Image2 from "./../assets/Project2/2.png";
import video from "./../assets/Project2/video.mp4";

const images = [Image1, Image2];

const ProjectLLM = () => {
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
        <p className="text-3xl sm:text-2xl lg:text-2xl text-[#e5e7eb] max-w-2xl mx-auto leading-relaxed font-poppins">
          02. Large Language Model(LLM)
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
        The LLM Project is a sophisticated system designed to read documents and answer questions based on the content using four distinct bots. It utilizes a combination of technologies, including Python, React, FastAPI, and APIs from Gemini, OpenAI, and Hugging Face.
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
            onClick={() =>
              window.open(
                "https://github.com/ishanHatharasinghe/LLM-Project",
                "_blank"
              )
            }
            className="mt-8 bg-gradient-to-r from-[#1900FFFF] to-[#FA1515FF] text-white py-3 px-6 rounded-3xl shadow-2xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 focus:outline-none font-semibold tracking-wider"
          >
            Click For More
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectLLM;

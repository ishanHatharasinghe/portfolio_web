import "aos/dist/aos.css";
import Work1 from "./../components/Work1";

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className=" text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className="py-10 px-6 sm:px-8 lg:px-16 xl:px-24 hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold  text-[#f3e8ff]">
          Work Experience
        </h2>
        <div className="mb-12 h-2 w-80 sm:w-96 lg:w-120 bg-gradient-to-r from-[#FF0000FF] to-[#4400FFFF] rounded-md shadow-lg mx-auto mb-6"></div>
        <p className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6 hover:text-[#5E63FFFF] transition-all duration-100 transform hover:scale-105">
          Below are my key work experiences, showcasing my skills and
          achievements across various roles.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
        <section
          id="Work1"
          data-aos="fade-up" // Using fade-up for swipe-up effect
        >
          <Work1 />
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center"></div>
      </div>
    </section>
  );
};

export default WorkExperience;

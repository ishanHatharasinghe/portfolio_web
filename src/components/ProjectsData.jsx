import ProjectVpms from "./../components/projectvpms";
import Projectllm from "./../components/projectllm";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsData = () => {
  return (
    <section
      id="projects"
      className=" text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className=" hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold mb-4 text-[#f3e8ff] font-poppins">
          My Projects
        </h2>
        <div className="mb-12 h-2 w-80 sm:w-96 lg:w-120 bg-gradient-to-r from-[#FF0000FF] to-[#4400FFFF] rounded-md shadow-lg mx-auto mb-6"></div>
        <p className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6 hover:text-[#E6FF82FF] transition-all duration-100 transform hover:scale-105 font-poppins">
          Explore some of my recent works, where I applied technical skills and
          creativity to deliver impactful solutions.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
        <section
          id="ProjectVpms"
          data-aos="fade-up" // Using fade-up for swipe-up effect
        >
          <ProjectVpms />
        </section>
        <section
          id="ProjectVpms"
          data-aos="fade-up" // Using fade-up for swipe-up effect
        >
          <Projectllm />
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center"></div>
      </div>
    </section>
  );
};

export default ProjectsData;

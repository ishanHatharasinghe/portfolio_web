import myimage from "./../assets/myimage2.jpg";
import bg from "./../assets/bg3.jpg"; // Import the background image
import "./../index.css";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="h-screen w-full flex justify-center items-center text-white py-16 px-6 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} // Set the background image
    >
      {/* Content Area */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center relative z-20">
        {/* Left Column - Image */}
        <div className="flex justify-center">
          <div className="relative w-64 sm:w-72 lg:w-80 rounded-full overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-500 bg-[#2e1065]">
            <img
              src={myimage}
              alt="Details Image"
              className="object-cover w-full h-auto transition-all duration-500 transform hover:scale-105"
            />
          </div>
        </div>

        {/* Right Column - About Me Details */}
        <div className="text-center sm:text-left flex flex-col justify-center">
          <h2 className="hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold mb-4 text-[#f3e8ff] font-poppins">
            About Me
          </h2>
          <div className="mt-6 flex justify-center sm:justify-start">
            <div className="h-2 w-80 sm:w-96 lg:w-120 bg-gradient-to-r from-[#FF0000FF] to-[#4400FFFF] rounded-md shadow-lg mb-4"></div>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6 hover:text-[#5E63FFFF] transition-all duration-100 transform hover:scale-105 font-poppins">
            A committed, passionate, and talented seeker with technical
            expertise and the capacity to lead and collaborate with others in a
            team. Equipped with communication skills, leadership, and teamwork
            skills.
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/ishan-nilaksha-686461308/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 bg-[#0022FFFF] text-white font-bold py-3 px-6 rounded-md hover:bg-[#FF0000FF] transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

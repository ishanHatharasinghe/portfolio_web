import "aos/dist/aos.css";
import robot from "./../assets/Work1/scene-with-futuristic-robot-used-construction-industry.webp";
import Img1 from "./../assets/Work1/1.webp";
import Img2 from "./../assets/Work1/2.webp";
import Img3 from "./../assets/Work1/3.webp";
import AtasLogo from "./../assets/Work2/images.jpg";

const ProfessionalJourney = () => {
  const sections = [
    {
      title: "SLT Digital LAB",
      logo: "https://www.hostasia.lk/assets/imgs/bandwidth-provider/slt-logo.png",
      description:
        "Electronics Engineering Intern - Sri Lanka Telecom PLC, Digital LAB, The Embryo Innovation Centre, Trace Expert City, Maradana, Colombo",
      images: [Img1, Img2, Img3]
    },
    {
      title: "ATSL International Pvt Ltd",
      logo: AtasLogo,
      description:
        "Trainee Technical Officer - currently employed since April 27, 2026 at ATSL International Pvt Ltd.",
      images: []
    }
  ];

  return (
    <section className="h-full relative min-h-screen w-full  overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-cyan-900/5`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-purple-900/15`}
        />
        <img
          src={robot}
          alt="robot"
          className="absolute  p-2 inset-0 mx-auto w-full h-auto object-contain opacity-100 z-10"
        />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-6 mt-16 z-10">
        <div className="rounded-[20px] lg:rounded-[70px] w-full h-full p-6 border border-2 mb-4 border-gray-700/30">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row gap-1 items-center">
            <div>
              <div className="w-[500px]"></div>
            </div>
            <div>
              {/* Text Block */}
              <div className="bg-gradient-to-br from-[#020408]/80 via-[#020408]/60 to-[#020408]/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/10">
                <h1 className="font-italiana text-5xl md:text-[160px] text-[#CCFF00] tracking-wide">
                  Professional Journey
                </h1>
                <p className="text-[16px] text-[#FFFFFF] leading-relaxed">
                  My academic path has equipped me with both theoretical
                  knowledge and practical skills, forming the foundation of my
                  professional expertise.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className="border p-8 border-white/10 bg-gradient-to-br from-[#020408]/80 via-[#020408]/60 to-[#020408]/40 backdrop-blur-md rounded-[1rem]"
                    >
                      <h2 className="text-2xl text-white font-italiana mb-7 flex items-center gap-3">
                        <img
                          src={section.logo}
                          alt={`${section.title} Logo`}
                          className="w-10 h-10 object-contain rounded-md bg-white p-1"
                        />
                        {section.title}
                      </h2>
                      <p className="text-gray-300">{section.description}</p>

                      {section.images.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                          {section.images.map((img, index) => (
                            <div
                              key={index}
                              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              <img
                                src={img}
                                alt={`Image ${index + 1}`}
                                className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-40 transition-all duration-300"></div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center justify-center w-full">
            <div className="w-full text-center mb-8">
              <h1 className="font-italiana text-4xl text-[#CCFF00] tracking-wide">
                Professional Journey
              </h1>
              <p className="text-[16px] text-[#FFFFFF] leading-relaxed">
                My academic path has equipped me with both theoretical knowledge
                and practical skills, forming the foundation of my professional
                expertise.
              </p>
            </div>

            <div className="w-full bg-black/40 backdrop-blur-md rounded-[2rem] p-6 border border-white/10">
              <div className="grid grid-cols-1 gap-6">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#020408]/80 via-[#020408]/60 to-[#020408]/40 backdrop-blur-md rounded-[1.5rem] p-6 border border-white/10"
                  >
                    <h2 className="text-2xl text-white font-italiana mb-4 flex items-center justify-center gap-3">
                      <img
                        src={section.logo}
                        alt={`${section.title} Logo`}
                        className="w-8 h-8 object-contain rounded-md bg-white p-1"
                      />
                      {section.title}
                    </h2>
                    <p className="text-gray-300">{section.description}</p>

                    {section.images.length > 0 && (
                      <div className="grid grid-cols-1 gap-6 mt-6">
                        {section.images.map((img, index) => (
                          <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <img
                              src={img}
                              alt={`Image ${index + 1}`}
                              className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-40 transition-all duration-300"></div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;

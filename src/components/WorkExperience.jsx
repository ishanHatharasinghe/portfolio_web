import "aos/dist/aos.css";
import Work1 from "./../components/Work1";
import { motion } from "framer-motion";
import bg from "./../assets/bg5.jpg";

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="relative min-h-full w-full flex items-center justify-center bg-gradient-to-br from-[#19003FFF] via-[#03001BFF] to-[#06173CFF] text-white overflow-hidden py-16"
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
        <div className="text-center space-y-6">
          {/* Title */}
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="py-10 px-6 sm:px-8 lg:px-16 xl:px-24 hover:scale-110 font-poppins text-4xl sm:text-6xl font-bold text-[#f3e8ff]"
          >
            Work Experience
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base lg:text-lg text-[#e5e7eb] leading-relaxed mb-6 transition-all duration-100 transform "
          >
            Below are my key work experiences, showcasing my skills and
            achievements across various roles.
          </motion.p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
          <section
            id="Work1"
            data-aos="fade-up" // Using fade-up for swipe-up effect
          >
            <Work1 />
          </section>

          {/* Additional work experience sections can be added here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;

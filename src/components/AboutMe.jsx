import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg from "./../assets/bg6.jpg";
import my from "./../assets/bg.jpg";
import "./aboutus.css";

const styles = {
  pagePadding: {
    paddingTop: "4rem",
    paddingBottom: "3rem"
  },
  backgroundImage: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }
};

const Title = () => {
  return (
    <div>
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

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        style={{ lineHeight: "1.2", paddingBottom: "0.2em" }}
      >
        About Me
      </motion.h2>
    </div>
  );
};

const ProfileImage = () => {
  return (
    <motion.div
      className="flex justify-center mb-6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#60a5fa] shadow-lg transition-transform duration-300 hover:scale-110">
        <img src={my} alt="Profile" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

const About = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("about");
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative text-white overflow-hidden"
      style={{
        ...styles.pagePadding,
        backgroundImage: `url(${bg})`, // Retain background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay with Gradient Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00103FFF] via-[#03001BFF] to-[#0E00A6FF] opacity-80 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-3xl sm:max-w-4xl text-center text-white px-6 py-10 bg-gradient-to-b from-[#0a0a0a] to-transparent rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1.2 }}
      >
        <Title />
        <ProfileImage />

        <motion.h3
          className="text-xl md:text-2xl font-bold mb-4 text-[#FFFFFFFF]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          &lt; Ishan Nilaksha /&gt;
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg leading-relaxed mb-6 text-[#fafafa]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I am an undergraduate pursuing a Higher National Diploma in Electrical
          and Electronic Engineering at the Sri Lanka Advanced Technology
          Institute, Galle. I successfully combine practical knowledge with
          theoretical concepts in the field of Electrical and Electronic
          Engineering. Additionally, I am an undergraduate at BIT, University of
          Moratuwa. I am well-versed in Adobe Photoshop and Adobe Illustrator,
          capable of designing posts, banners, cover designs, and much more. I
          am an energetic, hardworking, and enthusiastic individual who enjoys
          challenges and is committed to achieving personal goals while ready to
          tackle any challenges in my career path.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;

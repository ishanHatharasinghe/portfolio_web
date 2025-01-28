import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg from "./../assets/bg6.jpg";

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
const Preloader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onLoadingComplete();
          return 100;
        }
        return prev + 1; // Increment loading by 1
      });
    }, 30); // Adjust the interval speed as needed

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 40;
    const y = ((clientY - top) / height - 0.5) * 40;

    setMousePosition({ x, y });
  };

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black to-blue-950 z-50 overflow-hidden"
      onMouseMove={handleMouseMove}
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
      {/* 3D Container */}
      <motion.div
        className="relative mb-12"
        animate={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        {/* Preloader Image */}
        <motion.img
          src="./src/assets/preloader.png"
          alt="Loading..."
          className="w-32 h-32 object-contain"
          animate={{
            scale: isHovering ? 1.1 : 1,
            filter: isHovering
              ? "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))"
              : "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Glowing Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Loading Text */}
      <motion.div
        className="mt-6 text-blue-400 font-mono text-2xl tracking-widest"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [0.98, 1, 0.98]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {loading}%
      </motion.div>

      {/* Status Message */}
      <div className="mt-4 text-blue-300/80 font-light">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Preparing your experience
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ...
        </motion.span>
      </div>
    </div>
  );
};

export default Preloader;

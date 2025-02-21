import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import video from "./../../public/videos/2ndscreen.mp4";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const videoContainerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true
      }
    });

    // Initial state for video container
    clipAnimation.set(".mask-clip-path", {
      width: "60vw",
      height: "50vh",
      borderRadius: 20
    });

    // Initial state for text
    clipAnimation.set(".overlay-text", {
      scale: 0.8,
      opacity: 0.5
    });

    // Expand video to fullscreen and enhance text simultaneously
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0
    });

    // Enhance text as video expands
    clipAnimation.to(
      ".overlay-text",
      {
        scale: 1,
        opacity: 1
      },
      "<" // Start at same time as previous animation
    );
  });

  return (
    <div id="video-screent" className="min-h-full w-screen relative">
      {/* Content */}
      <div className="relative z-10">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5"></div>

        {/* Video with centered text section */}
        <div
          className="h-dvh w-screen flex items-center justify-center"
          id="clip"
        >
          <div
            className="mask-clip-path relative overflow-hidden flex items-center justify-center"
            style={{ width: "60vw", height: "100vh" }}
            ref={videoContainerRef}
          >
            {/* Video background */}
            <video
              src={video}
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 size-full object-cover"
            />

            {/* Centered text that enhances with scroll */}
            <div
              className="overlay-text relative z-10 text-center px-8 max-w-xl flex flex-col items-center justify-center"
              ref={textRef}
            >
              <h1 className="font-italiana text-5xl md:text-[200px] text-white tracking-wide">
                At
              </h1>
              <h1 className="font-italiana text-5xl md:text-[200px] text-white tracking-wide">
                the
              </h1>
              <h1 className="font-italiana text-5xl md:text-[200px] text-white tracking-wide">
                intersection
              </h1>
              <p className="font-italiana text-white text-base md:text-lg tracking-wider">
                of electronics and code
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import video from "./../../public/videos/2ndscreen.mp4";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const videoContainerRef = useRef(null);
  const textRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
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

    clipAnimation.set(".mask-clip-path", {
      width: "60vw",
      height: "50vh",
      borderRadius: 20,
      willChange: "width, height, border-radius"
    });

    clipAnimation.set(".overlay-text", {
      scale: 0.8,
      opacity: 0.5,
      willChange: "transform, opacity"
    });

    clipAnimation.to(
      ".mask-clip-path",
      {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        ease: "power1.inOut"
      },
      0
    );

    clipAnimation.to(
      ".overlay-text",
      {
        scale: 1,
        opacity: 1,
        ease: "power1.inOut"
      },
      0
    );

    scrollTriggerRef.current = clipAnimation.scrollTrigger;

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      clipAnimation.kill();
    };
  }, []);

  return (
    <div id="video-screent" className="min-h-screen w-screen relative bg-black">
      <div className="relative z-10">
        <div className="mb-8 mt-6 flex flex-col items-center gap-5"></div>

        <div
          className="h-[50vh] md:h-[100vh] w-screen flex items-center justify-center"
          id="clip"
        >
          <div
            className="mask-clip-path relative overflow-hidden flex items-center justify-center rounded-[20px]"
            style={{ width: "60vw", height: "50vh" }}
            ref={videoContainerRef}
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute left-0 top-0 w-full h-full object-cover"
              // poster="path/to/poster.jpg" // optional for fast loading placeholder
            />

            <div
              className="overlay-text relative z-10 text-center px-8 max-w-xl flex flex-col items-center justify-center text-white"
              ref={textRef}
            >
              <h1 className="font-italiana text-5xl md:text-[200px] tracking-wide select-none pointer-events-none">
                At
              </h1>
              <h1 className="font-italiana text-5xl md:text-[200px] tracking-wide select-none pointer-events-none">
                the
              </h1>
              <h1 className="font-italiana text-5xl md:text-[200px] tracking-wide select-none pointer-events-none">
                intersection
              </h1>
              <p className="font-italiana text-base md:text-lg tracking-wider select-none pointer-events-none">
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

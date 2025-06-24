// src/components/ScrollEffects.jsx
import { useEffect, useRef } from "react";
import { useScroll } from "../contexts/ScrollContext";

const ScrollContext = () => {
  const { scrollY, scrollDirection, scrollProgress } = useScroll();
  const scrollProgressRef = useRef(null);
  const distortionItems = useRef([]);

  // Initialize scroll effects
  useEffect(() => {
    // Update scroll progress bar
    if (scrollProgressRef.current) {
      scrollProgressRef.current.style.width = `${scrollProgress * 100}%`;
    }

    // Apply scroll-triggered animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll("[data-scroll]");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;

        if (isVisible) {
          el.classList.add("is-visible");
          if (el.dataset.scroll === "fadeIn") {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        }
      });
    };

    // Apply 3D scroll effects
    const apply3DEffects = () => {
      const elements = document.querySelectorAll(".scroll-3d-item");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distanceFromCenter = centerY - viewportCenter;

        // Rotate based on position in viewport
        const rotation = distanceFromCenter / 20;
        el.style.transform = `rotateX(${rotation}deg)`;
      });
    };

    // Apply distortion effects
    const applyDistortion = () => {
      distortionItems.current.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const distanceFromCenter =
          (centerY - window.innerHeight / 2) / window.innerHeight;

        // Apply subtle distortion based on scroll position
        item.style.transform = `scale(${
          1 + Math.abs(distanceFromCenter) * 0.05
        })`;
      });
    };

    // Initialize distortion items
    distortionItems.current = Array.from(
      document.querySelectorAll(".distortion-image")
    );

    // Run all effects
    animateOnScroll();
    apply3DEffects();
    applyDistortion();

    // Set up scroll event listeners
    window.addEventListener("scroll", animateOnScroll);
    window.addEventListener("scroll", apply3DEffects);
    window.addEventListener("scroll", applyDistortion);

    return () => {
      window.removeEventListener("scroll", animateOnScroll);
      window.removeEventListener("scroll", apply3DEffects);
      window.removeEventListener("scroll", applyDistortion);
    };
  }, [scrollY, scrollDirection]);

  return (
    <>
      <div ref={scrollProgressRef} className="scroll-progress"></div>
    </>
  );
};

export default ScrollContext;

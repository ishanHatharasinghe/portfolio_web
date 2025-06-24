// src/utils/scrollUtils.js
export const smoothScrollTo = (target, duration = 1000) => {
  const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

export const initScrollReveal = () => {
  const elements = document.querySelectorAll('[data-scroll-reveal]');
  
  elements.forEach(el => {
    const delay = el.dataset.delay || 0;
    const duration = el.dataset.duration || 800;
    
    el.style.transition = `all ${duration}ms cubic-bezier(0.5, 0, 0, 1) ${delay}ms`;
    el.style.opacity = '0';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(el);
  });
};

export const initScrollTilt = () => {
  const elements = document.querySelectorAll('[data-scroll-tilt]');
  
  const handleScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = (centerY - viewportCenter) / viewportCenter;
      
      el.style.transform = `rotateX(${distanceFromCenter * 10}deg) rotateY(${distanceFromCenter * 5}deg)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

export const initScrollMorph = () => {
  const elements = document.querySelectorAll('[data-scroll-morph]');
  
  const handleScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const progress = 1 - Math.max(0, Math.min(1, rect.top / window.innerHeight));
      
      // Example morph effect - change border radius based on scroll
      const borderRadius = 5 + progress * 50;
      el.style.borderRadius = `${borderRadius}px`;
      
      // Example color change
      const hue = progress * 360;
      el.style.backgroundColor = `hsla(${hue}, 80%, 60%, 0.8)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};
import { useEffect, Suspense, lazy, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import FloatingSocialSidebar from "./components/FloatingSocialSidebar";
import { AuthProvider } from "./components/AuthContext.jsx";
import Home from "./components/Home";

// Preload critical components
const Header = lazy(() => import("./components/HeaderBar"));
const VideoScreen = lazy(() => import("./components/videos"));

// Load rest only when in viewport
const AboutMe = lazy(() => import("./components/AboutUs"));
const Education = lazy(() => import("./components/Education"));
const SkillsData = lazy(() => import("./components/SkillsData"));
const LicensesCertifications = lazy(() =>
  import("./components/LicensesCertifications")
);
const WorkExperience = lazy(() => import("./components/WorkExperience"));
const ProjectsData = lazy(() => import("./components/ProjectsData"));
const Designs = lazy(() => import("./components/designpage"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Copyright = lazy(() => import("./components/Copyright"));
function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <AuthProvider>
      <div>
        <Suspense fallback={<Loading />}>
          <Header />
        </Suspense>

        <main>
          <section id="home">
            <Home />
          </section>

          {/* Preload Video Immediately */}
          <LazySection id="videosection" Component={VideoScreen} />

          {/* Load others only when visible */}
          <LazyOnView id="about" Component={AboutMe} />
          <LazyOnView id="education-journey" Component={Education} />
          <LazyOnView id="dexterity" Component={SkillsData} />
          <LazyOnView
            id="professional-designations"
            Component={LicensesCertifications}
          />
          <LazyOnView id="professional-journey" Component={WorkExperience} />
          <LazyOnView id="creative-ventures" Component={ProjectsData} />
          <LazyOnView id="design-scape" Component={Designs} />
          <LazyOnView id="testimonials" Component={Testimonials} />
          <LazyOnView id="contact" Component={Contact} />
        </main>

        <Suspense fallback={<Loading />}>
          <Copyright />
        </Suspense>
      </div>
    </AuthProvider>
  );
}

function LazyOnView({ id, Component }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  return (
    <section id={id}>
      {visible ? (
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      ) : (
        <div style={{ height: "50vh" }} /> // placeholder height to avoid layout shift
      )}
    </section>
  );
}

function LazySection({ id, Component }) {
  return (
    <section id={id}>
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    </section>
  );
}

function Loading() {
  return (
    <div className="text-center py-10 text-gray-400 animate-pulse text-sm">
      Loading...
    </div>
  );
}

export default App;

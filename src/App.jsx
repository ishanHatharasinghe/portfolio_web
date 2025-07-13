import { useEffect, Suspense, lazy, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Curser from "./components/SplashCursour";
import FloatingSocialSidebar from "./components/FloatingSocialSidebar";
import { AuthProvider } from "./components/AuthContext.jsx";

// Eagerly load the Hero Section
import Home from "./components/Home";

// Lazy-loaded components
const Header = lazy(() => import("./components/HeaderBar"));
const AboutMe = lazy(() => import("./components/AboutUs"));
const Education = lazy(() => import("./components/Education"));
const SkillsData = lazy(() => import("./components/SkillsData"));
const LicensesCertifications = lazy(() =>
  import("./components/LicensesCertifications")
);
const WorkExperience = lazy(() => import("./components/WorkExperience"));
const ProjectsData = lazy(() => import("./components/ProjectsData"));
const Designs = lazy(() => import("./components/designpage"));
const VideoScreen = lazy(() => import("./components/videos"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Copyright = lazy(() => import("./components/Copyright"));

function App() {
  const [homeLoaded, setHomeLoaded] = useState(false);

  useEffect(() => {
    const aosTimer = setTimeout(() => {
      AOS.init({ duration: 600, once: true });
    }, 500);
    return () => clearTimeout(aosTimer);
  }, []);

  useEffect(() => {
    // Fake delay to simulate loading
    const timer = setTimeout(() => {
      setHomeLoaded(true);
    }, 800); // you can adjust this
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <div>
        <FloatingSocialSidebar />
        <Suspense fallback={<Loading />}>
          <Header />
        </Suspense>

        <main>
          <section id="home">
            <Home />
          </section>

          {homeLoaded && (
            <>
              <LazySection id="videosection" Component={VideoScreen} />
              <LazySection id="about" Component={AboutMe} />
              <LazySection id="education-journey" Component={Education} />
              <LazySection id="dexterity" Component={SkillsData} />
              <LazySection
                id="professional-designations"
                Component={LicensesCertifications}
              />
              <LazySection
                id="professional-journey"
                Component={WorkExperience}
              />
              <LazySection id="creative-ventures" Component={ProjectsData} />
              <LazySection id="design-scape" Component={Designs} />
              <LazySection id="testimonials" Component={Testimonials} />
              <LazySection id="contact" Component={Contact} />
            </>
          )}
        </main>

        <Suspense fallback={<Loading />}>
          <Copyright />
        </Suspense>
      </div>
    </AuthProvider>
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

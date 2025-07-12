import { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Curser from "./components/SplashCursour";
import FloatingSocialSidebar from "./components/FloatingSocialSidebar";
import { AuthProvider } from "./components/AuthContext.jsx";

// Lazy-loaded components
const Header = lazy(() => import("./components/HeaderBar"));
const Home = lazy(() => import("./components/Home"));
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
  useEffect(() => {
    // Delay AOS init for better first paint
    const aosTimer = setTimeout(() => {
      AOS.init({ duration: 600, once: true });
    }, 500); // Slight delay

    return () => clearTimeout(aosTimer);
  }, []);

  return (
    <AuthProvider>
      <div>
        <FloatingSocialSidebar />
        <Suspense fallback={<Loading />}>
          <Header />
          
        </Suspense>
        <main>
          <LazySection id="home" Component={Home} />
          <LazySection id="videosection" Component={VideoScreen} />
          <LazySection id="about" Component={AboutMe} />
          <LazySection id="education-journey" Component={Education} />
          <LazySection id="dexterity" Component={SkillsData} />
          <LazySection
            id="professional-designations"
            Component={LicensesCertifications}
          />
          <LazySection id="professional-journey" Component={WorkExperience} />
          <LazySection id="creative-ventures" Component={ProjectsData} />
          <LazySection id="design-scape" Component={Designs} />
          <LazySection id="testimonials" Component={Testimonials} />
          <LazySection id="contact" Component={Contact} />
        </main>
        <Suspense fallback={<Loading />}>
          <Copyright />
        </Suspense>
      </div>
    </AuthProvider>
  );
}

// Custom Section wrapper with individual Suspense
function LazySection({ id, Component }) {
  return (
    <section id={id}>
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    </section>
  );
}

// Light Loading component
function Loading() {
  return (
    <div className="text-center py-10 text-gray-500 animate-pulse text-sm"></div>
  );
}

export default App;

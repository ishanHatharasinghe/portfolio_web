import { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import FloatingSocialSidebar from "./components/FloatingSocialSidebar";
import { AuthProvider } from "./components/AuthContext.jsx"; // Updated import

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
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <AuthProvider>
      <div>
        <FloatingSocialSidebar />

        <Suspense
          fallback={<div className="text-center mt-10">Loading...</div>}
        >
          <Header />

          <main>
            <Section id="home" Component={Home} />
            <Section id="videosection" Component={VideoScreen} />
            <Section id="about" Component={AboutMe} />
            <Section id="education-journey" Component={Education} />
            <Section id="dexterity" Component={SkillsData} />
            <Section
              id="professional-designations"
              Component={LicensesCertifications}
            />
            <Section id="professional-journey" Component={WorkExperience} />
            <Section id="creative-ventures" Component={ProjectsData} />
            <Section id="design-scape" Component={Designs} />
            <Section id="testimonials" Component={Testimonials} />
            <Section id="contact" Component={Contact} />
          </main>

          <Copyright />
        </Suspense>
      </div>
    </AuthProvider>
  );
}

function Section({ id, Component }) {
  return (
    <section id={id}>
      <Component />
    </section>
  );
}

export default App;

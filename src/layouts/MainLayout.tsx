import { lazy, Suspense } from "react";
import Home from "../pages/Home/Home";
import "./mainLayout.css";

const About = lazy(() => import("../pages/About/About"));
const Experience = lazy(() => import("../pages/Experience/Experience"));
const Projects = lazy(() => import("../pages/Projects/Projects"));
const Education = lazy(() => import("../pages/Education/Education"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-white/60 text-lg">Cargando...</div>
  </div>
);

const MainLayout = () => {
  return (
    <div className="main-layout">
      <section id="home" className="relative">
        <Home />
      </section>

      <Suspense fallback={<SectionLoader />}>
        <section id="about" className="relative">
          <About />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="experience" className="relative">
          <Experience />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="projects" className="relative">
          <Projects />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="education" className="relative">
          <Education />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <section id="contact" className="relative">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default MainLayout;

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Experience from "../pages/Experience/Experience";
import Projects from "../pages/Projects/Projects";
import Education from "../pages/Education/Education";
import Contact from "../pages/Contact/Contact";
import "./mainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <section id="home" className="relative">
        <Home />
      </section>

      <section id="about" className="relative">
        <About />
      </section>

      <section id="experience" className="relative">
        <Experience />
      </section>

      <section id="projects" className="relative">
        <Projects />
      </section>

      <section id="education" className="relative">
        <Education />
      </section>

      <section id="contact" className="relative">
        <Contact />
      </section>
    </div>
  );
};

export default MainLayout;

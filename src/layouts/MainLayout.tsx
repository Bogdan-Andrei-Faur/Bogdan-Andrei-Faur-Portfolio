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
      {/* Home Section - Primera pantalla */}
      <section id="home" className="relative">
        <Home />
      </section>

      {/* About Section - Segunda pantalla */}
      <section id="about" className="relative">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative">
        <Projects />
      </section>

      {/* Education Section */}
      <section id="education" className="relative">
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        <Contact />
      </section>
    </div>
  );
};

export default MainLayout;

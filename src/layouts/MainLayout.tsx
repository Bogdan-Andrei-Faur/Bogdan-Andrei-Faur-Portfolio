import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Experience from "../pages/Experience/Experience";
import Education from "../pages/Education/Education";
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

      {/* Education Section */}
      <section id="education" className="relative">
        <Education />
      </section>
    </div>
  );
};

export default MainLayout;

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
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
    </div>
  );
};

export default MainLayout;

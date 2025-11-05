import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Dock from "./components/Dock.tsx";
import "./App.css";

const DevelopmentBanner = ({ visible }: { visible: boolean }) =>
  visible && (
    <div className="z-50 fixed top-0 left-0 right-0 text-black flex justify-center items-center p-2 text-sm bg-yellow-300/80 backdrop-blur-md border-b border-yellow-400 shadow-md">
      This site is under development. Some features may be missing or
      incomplete.
    </div>
  );

const App = () => {
  return (
    <div className="flex flex-col">
      <Router>
        <DevelopmentBanner visible={false} />
        <Dock />
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

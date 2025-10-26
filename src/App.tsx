import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.tsx";

import Dock from "./components/Dock.tsx";

import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col">
      <Router>
        <Dock />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SocialSidebar from "./components/SocialSidebar";

function App() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de animación (en ms)
      once: false, // solo se anima una vez
    });
  }, []);
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 with-social-bottom" >
        <Navbar />
        <SocialSidebar />
        <div className="container flex-grow-1 mt-4" data-aos="fade-up">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 with-social-bottom" id="inicio">
       <PageLoader />
      <Navbar />
      <SocialSidebar />
      <div className="container flex-grow-1 mt-2" data-aos="fade-up">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

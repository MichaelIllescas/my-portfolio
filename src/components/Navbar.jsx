import { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const handleNavLinkClick = (sectionId) => {
    const navbar = document.getElementById("navbarNav");

    // Cierra el menú al hacer clic (mobile)
    if (navbar && navbar.classList.contains("show")) {
      const fullHeight = navbar.scrollHeight;
      navbar.style.height = `${fullHeight}px`;
      navbar.style.transition = "height 0.2s ease";
      navbar.style.overflow = "hidden";
      void navbar.offsetHeight;
      navbar.style.height = "0px";

      setTimeout(() => {
        navbar.classList.remove("show");
        navbar.style.height = "";
        navbar.style.overflow = "";
      }, 400);
    }

    // Scroll suave a la sección
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detectar scroll para cambiar el estilo del nav y sección activa
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ["inicio", "sobre-mi", "proyectos", "habilidades", "contacto"];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "inicio", text: "Inicio" },
    { id: "sobre-mi", text: "Sobre mí" },
    { id: "proyectos", text: "Proyectos" },
    { id: "habilidades", text: "Habilidades" },
    { id: "contacto", text: "Contacto" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top  ${
        scrolled ? "navbar-dark bg-dark shadow-sm" : "navbar-dark bg-transparent"
      }`}
      style={{ width: "100dvw", transition: "background-color .3s ease", paddingRight: "1rem" }}
    >
      <div className="container">
        {/* Logo */}
        <span
          className="navbar-brand"
          role="button"
          onClick={() => handleNavLinkClick("inicio")}
        >
          <img
            src={logo}
            alt="Logo Jonathan Illescas"
            className="logo"
            height="70"
          />
        </span>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ transition: "all .2s ease" }}
        >
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <span
                  className={`nav-link nav-hover ${activeSection === item.id ? 'active-nav' : ''}`}
                  role="button"
                  onClick={() => handleNavLinkClick(item.id)}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CSS extra */}
      <style>{`
        /* Navbar con backdrop blur */
        .navbar.navbar-dark.bg-dark {
          background-color: rgba(33, 37, 41, 0.95) !important;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Hover animado en links */
        .nav-hover {
          position: relative;
          transition: all 0.3s ease;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8) !important;
        }
        
        .nav-hover::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #61dbfb, #0d6efd);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 1px;
        }
        
        .nav-hover:hover {
          color: #ffffff !important;
          transform: translateY(-1px);
        }
        
        .nav-hover:hover::after {
          width: 100%;
        }

        /* Estilo para sección activa */
        .active-nav {
          color: #61dbfb !important;
          font-weight: 600;
        }
        
        .active-nav::after {
          width: 100% !important;
          background: #61dbfb !important;
        }

        /* Logo mejorado */
        .navbar-brand img {
          transition: all 0.3s ease;
          filter: brightness(1.1);
        }
        .navbar-brand img:hover {
          transform: scale(1.05);
          filter: brightness(1.3);
        }

        /* Mejoras responsive */
        @media (max-width: 768px) {
          .navbar .logo {
            height: 50px !important;
          }
          .navbar {
            padding: 0.5rem 0 !important;
          }
          .navbar-nav .nav-link {
            padding: 0.8rem 0;
            font-size: 1.1rem;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          .navbar-nav .nav-link:last-child {
            border-bottom: none;
          }
          .navbar-collapse {
            background: linear-gradient(180deg, rgba(33, 37, 41, 0.98), rgba(33, 37, 41, 0.95));
            backdrop-filter: blur(15px);
            border-radius: 0 0 15px 15px;
            padding: 1rem 0;
            margin-top: 0.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-top: none;
          }
          .nav-hover::after {
            bottom: 0;
            height: 1px;
          }
        }

        /* Ajuste de scroll mejorado */
        section {
          scroll-margin-top: 85px;
        }
        
        /* Animación suave del navbar */
        .navbar {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </nav>
  );
}

export default Navbar;

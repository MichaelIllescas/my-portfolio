import { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

  // Detectar scroll para cambiar el estilo del nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
                  className="nav-link nav-hover"
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
        /* Hover animado en links */
        .nav-hover {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-hover::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #0d6efd;
          transition: width 0.3s ease;
        }
        .nav-hover:hover::after {
          width: 100%;
        }

        /* Logo hover */
        .navbar-brand img {
          transition: transform 0.3s ease;
        }
        .navbar-brand img:hover {
          transform: scale(1.05);
        }

        /* Responsive ajustes */
        @media (max-width: 768px) {
          .navbar .logo {
            height: 45px !important; /* logo más chico en mobile */
          }
          .navbar {
            padding-top: 0.3rem !important;
            padding-bottom: 0.3rem !important;
          }
          .navbar-nav .nav-link {
            padding: 0.7rem 0;
            font-size: 1rem;
            text-align: center;
          }
          .navbar-collapse {
            background-color: #212529; /* fondo sólido en mobile */
            border-radius: 0 0 10px 10px;
            padding: 0.5rem 0;
          }
        }

        /* Ajuste de scroll para secciones */
        section {
          scroll-margin-top: 90px; /* evita que el navbar tape contenido */
        }
      `}</style>
    </nav>
  );
}

export default Navbar;

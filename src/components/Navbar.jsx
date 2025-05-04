import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';

function Navbar() {
  const handleNavLinkClick = (sectionId) => {
    const navbar = document.getElementById('navbarNav');

    if (navbar && navbar.classList.contains('show')) {
      const fullHeight = navbar.scrollHeight;
      navbar.style.height = `${fullHeight}px`;
      navbar.style.transition = 'height 0.2s ease';
      navbar.style.overflow = 'hidden';
      void navbar.offsetHeight;
      navbar.style.height = '0px';

      setTimeout(() => {
        navbar.classList.remove('show');
        navbar.style.height = '';
        navbar.style.overflow = '';
      }, 400);
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{width:"100vw"}}>
      <div className="container">
        <span className="navbar-brand" role="button" onClick={() => handleNavLinkClick('inicio')}>
          <img src={logo} alt="Logo" height="70" className="logo" />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" style={{ transition: "all .2s ease" }}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <span className="nav-link" role="button" onClick={() => handleNavLinkClick('inicio')}>
                Inicio
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" role="button" onClick={() => handleNavLinkClick('sobre-mi')}>
                Sobre mí
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" role="button" onClick={() => handleNavLinkClick('proyectos')}>
                Proyectos
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" role="button" onClick={() => handleNavLinkClick('habilidades')}>
                Habilidades
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" role="button" onClick={() => handleNavLinkClick('contacto')}>
                Contacto
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;

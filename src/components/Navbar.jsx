import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';

function Navbar() {
  const handleNavLinkClick = () => {
    const navbar = document.getElementById('navbarNav');

    if (navbar && navbar.classList.contains('show')) {
      const fullHeight = navbar.scrollHeight;

      // Fijar la altura actual para poder animar
      navbar.style.height = `${fullHeight}px`;
      navbar.style.transition = 'z 0.2s ease';
      navbar.style.overflow = 'hidden';

      // Forzar reflow (es necesario para que funcione la animación)
      void navbar.offsetHeight;

      // Animar hacia height: 0
      navbar.style.height = '0px';

      // Después de la animación, limpiar estilos y clases
      setTimeout(() => {
        navbar.classList.remove('show');
        navbar.style.height = '';
        
        navbar.style.overflow = '';
      }, 400); // debe coincidir con el tiempo de transición
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container" data-aos="fade-left">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="70" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" style={{transition:"all .2s ease"}}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handleNavLinkClick}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>
                Sobre mí
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" onClick={handleNavLinkClick}>
                Proyectos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills" onClick={handleNavLinkClick}>
                Habilidades
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

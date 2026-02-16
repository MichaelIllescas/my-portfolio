function Footer() {
  return (
    <footer 
      className="footer-section py-5"
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="footer-content" data-aos="fade-up">
              
              {/* Logo/Nombre */}
              <div className="footer-brand text-center mb-4">
                <h4 style={{color: "#ffffff"}} className="mb-2">
                  Michael Jonathan Illescas
                </h4>
                <p style={{color: "#a8b2c1"}} className="mb-0">
                  Full Stack Developer especializado en Java & React
                </p>
              </div>

              {/* Redes sociales */}
              <div className="footer-social text-center mb-4">
                <div className="social-links">
                  <a
                    href="https://github.com/MichaelIllescas"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-btn"
                    aria-label="GitHub"
                  >
                    <i className="bi bi-github"></i>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/michael-jonathan-illescas"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-btn"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Enlaces rápidos */}
              <div className="footer-links text-center mb-4">
                <div className="quick-links">
                  <a href="#inicio" className="footer-link">Inicio</a>
                  <a href="#sobre-mi" className="footer-link">Sobre Mí</a>
                  <a href="#proyectos" className="footer-link">Proyectos</a>
                  <a href="#habilidades" className="footer-link">Habilidades</a>
                  <a href="#contacto" className="footer-link">Contacto</a>
                </div>
              </div>

              {/* Copyright */}
              <div className="footer-bottom text-center">
                <div className="copyright-line mb-2">
                  <p style={{color: "#d1d5db"}} className="mb-0">
                    © {new Date().getFullYear()} Michael Jonathan Illescas. Todos los derechos reservados.
                  </p>
                </div>
                <div className="built-with">
                  <p style={{color: "#6b7280"}} className="mb-0 small">
                    Desarrollado con React • Diseñado para la experiencia profesional
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Estilos modernos */}
      <style>{`
        .footer-content {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem 2rem;
          backdrop-filter: blur(10px);
        }

        .footer-brand h4 {
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-social-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #a8b2c1;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .footer-social-btn:hover {
          background: rgba(97, 219, 251, 0.1);
          border-color: rgba(97, 219, 251, 0.3);
          color: #61dbfb;
          transform: translateY(-2px);
          text-decoration: none;
        }

        .footer-social-btn i {
          font-size: 1.1rem;
        }

        .quick-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .footer-link {
          color: #a8b2c1;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-link:hover {
          color: #61dbfb;
          text-decoration: none;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          background: #61dbfb;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .copyright-line {
          padding: 1.5rem 0 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: 2rem 1.5rem;
          }
          
          .social-links {
            gap: 0.75rem;
          }
          
          .footer-social-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }
          
          .quick-links {
            gap: 1.5rem;
            flex-direction: column;
            align-items: center;
          }
          
          .footer-link {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .social-links {
            flex-direction: column;
            align-items: center;
          }
          
          .footer-social-btn {
            width: 100%;
            max-width: 200px;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;

function Footer() {
  return (
    <footer className="mt-auto bg-dark text-light py-4 border-top border-secondary">
      <div
        className="container text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {/* Redes */}
        <div className="mb-3">
          <a
            href="https://github.com/MichaelIllescas"
            target="_blank"
            rel="noreferrer"
            className="text-light mx-2 fs-4"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/michael-jonathan-illescas"
            target="_blank"
            rel="noreferrer"
            className="text-light mx-2 fs-4"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="mailto:michael.illescas.dev@gmail.com"
            className="text-light mx-2 fs-4"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>

        {/* Créditos */}
        <p className="mb-1 fs-6">
          © {new Date().getFullYear()} <strong>Jonathan Illescas</strong> — Desarrollador de Software
        </p>
        <p className="mb-0 text-secondary small">
          Construido con 💙 usando React — desplegado en entorno productivo.
        </p>
      </div>

      {/* Estilos extra */}
      <style>{`
        footer a:hover {
          color: #0d6efd !important; /* azul Bootstrap */
          transition: color .3s ease;
        }
        footer a:nth-child(1):hover { color: #333 !important; } /* GitHub negro */
        footer a:nth-child(2):hover { color: #0a66c2 !important; } /* LinkedIn azul */
        footer a:nth-child(3):hover { color: #d14836 !important; } /* Gmail rojo */
      `}</style>
    </footer>
  );
}

export default Footer;

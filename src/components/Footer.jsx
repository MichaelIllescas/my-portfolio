function Footer() {
  return (
    <footer className="mt-auto bg-dark text-light py-4">
      <div
        className="container text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <p className="mb-1 fs-6">
          © {new Date().getFullYear()} <strong>MJI</strong>. Todos los derechos reservados.
        </p>
        <p className="mb-0 text-secondary">
          Sitio desarrollado por Jonathan Illescas — Soluciones profesionales en desarrollo web.
        </p>
      </div>
    </footer>
  );
}



export default Footer;

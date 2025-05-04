function Footer() {
  return (
    <footer className="mt-auto bg-dark text-light py-4 border-top border-secondary">
      <div
        className="container text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <p className="mb-1 fs-6">
          © {new Date().getFullYear()} <strong>Jonathan Illescas</strong> — Desarrollador de software.
        </p>
        <p className="mb-0 text-secondary small">
          Portfolio desarrollado con React y desplegado en entorno productivo.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

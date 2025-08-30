function About() {
  return (
    <section className="container about-section mb-5" id="sobre-mi">
      {/* Bloque principal */}
      <div className="row p-3 px-md-5" data-aos="fade-left">
        <h1 className="text-center mb-5 w-100">Sobre mí</h1>

        {/* Columna izquierda */}
        <div className="col-md-6 mb-4 mt-3">
          <h5>👨‍💻 Especialización Técnica</h5>
          <p className="text-start mb-4">
            Soy <strong>Michael Jonathan Illescas</strong>,{" "}
            <strong>desarrollador de software</strong> con orientación a
            soluciones <strong>sólidas, eficientes y escalables</strong>.
            Apasionado por las <strong>buenas prácticas, patrones de diseño</strong> y{" "}
            <strong>principios SOLID</strong>.
          </p>

          <h5>🚀 Experiencia en Proyectos</h5>
          <ul className="list-unstyled mb-4">
            <li>📦 ERP para gestión de inventarios y ventas</li>
            <li>📅 Portales de reservas de turnos</li>
            <li>🏟️ Sistemas administrativos para clubes</li>
            <li>🏢 Soluciones internas para PyMEs</li>
            <li>🚔 Aplicaciones policiales de registro</li>
            <li>🌐 Sitios institucionales y personales</li>
          </ul>

          <h5>🔐 Seguridad Informática</h5>
          <p className="text-start mb-4">
            En formación para construir{" "}
            <strong>aplicaciones seguras desde la arquitectura</strong>, con
            conocimientos en control de accesos, encriptación y mitigación de
            vulnerabilidades como <strong>XSS, CSRF e inyecciones SQL</strong>.
          </p>
        </div>

        {/* Columna derecha */}
        <div className="col-md-6 mt-3">
          <h5>📚 Formación Continua</h5>
          <p className="text-start mb-4">
            Especializado en <strong>backend con Java y Spring Boot</strong>,
            complementado con <strong>React</strong> para el frontend. También
            perfecciono mi <strong>nivel de inglés</strong> para ampliar
            proyección internacional.
          </p>

          <h5>💡 Valores Profesionales</h5>
          <p className="text-start mb-4">
            Soy <strong>proactivo, responsable y orientado a la mejora continua</strong>.
            Disfruto trabajar en equipos multidisciplinarios y adaptarme a
            nuevos entornos tecnológicos.
          </p>

          <h5>📜 Certificaciones Destacadas</h5>
          <div className="mb-3 d-flex flex-wrap gap-2">
            <span className="badge bg-success">Java</span>
            <span className="badge bg-primary">Spring Boot</span>
            <span className="badge bg-warning text-dark">React</span>
            <span className="badge bg-info text-dark">Git & GitHub</span>
            <span className="badge bg-secondary">Scrum</span>
          </div>

          {/* Lista extendida */}
          <details>
            <summary className="mb-2">Ver todas las certificaciones</summary>
            <ul className="list-unstyled small text-white">
              <li>✅ Web Designer – Digital House</li>
              <li>✅ Herramientas de Trabajo Colaborativo – Globant/DH</li>
              <li>✅ HTML y CSS – Globant/DH</li>
              <li>✅ Metodologías Ágiles y Scrum – Globant/DH</li>
              <li>✅ JavaScript Entry Level Programmer – OpenEDG</li>
              <li>✅ Desarrollo de APIs con Spring Boot – TodoCode</li>
              <li>✅ Introducción a Git y GitHub – TodoCode</li>
              <li>✅ Java con Spring – Platzi</li>
              <li>✅ Backend Basics – Platzi</li>
              <li>✅ Java SE Persistencia de Datos – Platzi</li>
              <li>✅ SQL y Bases de Datos – Platzi</li>
              <li>✅ Java SE Orientado a Objetos – Platzi</li>
            </ul>
          </details>
        </div>
      </div>

      {/* Formación Académica */}
      <div className="row p-3 px-md-5 mt-4" data-aos="fade-right">
        <div className="col-12 mb-4">
          <h3 className="mb-4">🎓 Formación Académica</h3>
        </div>

        {/* Licenciatura */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm border-info hover-card">
            <div className="card-body">
              <h5 className="card-title text-info">
                <i className="fas fa-graduation-cap me-2"></i>
                Lic. en Tecnologías de la Información
              </h5>
              <p className="card-text">Universidad Católica de Santa Fe</p>
              <p className="card-text">
                <small>Ciclo de Complementación Curricular</small>
                <span className="badge bg-info text-dark ms-2">Cursando</span>
              </p>
            </div>
          </div>
        </div>

        {/* Técnico en Desarrollo */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm border-primary hover-card">
            <div className="card-body">
              <h5 className="card-title text-primary">
                <i className="fas fa-laptop-code me-2"></i>
                Téc. Sup. en Desarrollo de Software
              </h5>
              <p className="card-text">
                Instituto Superior Santo Domingo (2022-2024)
              </p>
            </div>
          </div>
        </div>

        {/* Técnico en Seguridad Pública */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm border-danger hover-card">
            <div className="card-body">
              <h5 className="card-title text-danger">
                <i className="fas fa-shield-alt me-2"></i>
                Téc. Sup. en Seguridad Pública
              </h5>
              <p className="card-text">
                Instituto Juan Vicetich (2014-2017)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Extra CSS sugerido */}
      <style>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}

export default About;

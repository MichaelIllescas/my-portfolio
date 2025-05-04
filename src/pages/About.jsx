function About() {
  return (
    <section className="container about-section mb-3" id="sobre-mi">
      {/* Bloque principal: Sobre mí */}
      <div className="row p-3 px-md-5" data-aos="fade-left">
        <h1 className="text-center mb-4 w-100 my-4">Sobre mí</h1>

        {/* Columna izquierda */}
        <div className="col-md-6 mb-4 mt-3 ">
        <p className="text-justify mb-4">
  👤Soy <strong>Michael Jonathan Illescas</strong>, <strong>desarrollador de software</strong> con una marcada orientación al diseño de soluciones sólidas, eficientes y escalables. Me apasiona aplicar tecnologías modernas para resolver problemas reales, mediante un enfoque centrado en <strong>buenas prácticas, patrones de diseño</strong> y <strong>principios SOLID</strong>.
</p>

<p className="text-justify mb-4">
  Actualmente me especializo en <strong>desarrollo backend con Java y Spring Boot</strong>, utilizando <strong>bases de datos relacionales</strong> como MySQL. Además, desarrollo interfaces modernas y responsivas con <strong>JavaScript y React</strong>. Mi objetivo es construir software limpio, mantenible y preparado para el crecimiento.
</p>
<p className="text-justify mb-4">
  🔐 También estoy incursionando en el mundo de la <strong>seguridad informática</strong>, con el objetivo de diseñar y construir <strong>aplicaciones seguras desde la arquitectura</strong>. Estudio buenas prácticas de desarrollo seguro, control de accesos, encriptación, y protección contra vulnerabilidades como XSS, CSRF e inyecciones SQL, fundamentales para entornos empresariales.
</p>

<p className="text-justify mb-4">
  🔧 Tengo experiencia en el desarrollo de sistemas orientados a la gestión empresarial, incluyendo:
</p>
<ul className="mb-4">
  <li>ERP para gestión de inventarios y ventas</li>
  <li>Portales de reservas de turnos</li>
  <li>Sistemas administrativos para clubes</li>
  <li>Soluciones de gestión interna para PyMEs</li>
  <li>Aplicaciones policiales de registro de detenidos</li>
  <li>Sitios institucionales y personales</li>
</ul>

<p className="text-justify mb-4">
  🚀 Me encuentro en formación activa para convertirme en <strong>arquitecto de software</strong>, profundizando en <strong>arquitecturas monolíticas modulares, basadas en capas y microservicios</strong>. Paralelamente, estoy ampliando mis conocimientos en <strong>arquitecturas cloud</strong> y <strong>despliegue profesional con Docker y VPS</strong>.
</p>
        </div>

        {/* Columna derecha */}
        <div className="col-md-6 mt-3">
        <p className="text-justify mb-4">
  📚 Mi formación es continua. Complemento mi desarrollo técnico con certificaciones en herramientas colaborativas, metodologías ágiles y tecnologías de desarrollo moderno. Actualmente perfecciono mi <strong>nivel de inglés</strong> para ampliar mi proyección internacional.
</p>


<p className="text-justify mb-4">
  💡 Me considero una persona <strong>proactiva, responsable y enfocada en la mejora constante</strong>. Disfruto colaborar en equipos multidisciplinarios, comunicar ideas con claridad y adaptarme a nuevos entornos tecnológicos.
</p>

<p className="text-justify mb-4">
  🌐 Estoy comprometido con el crecimiento profesional, integrando constantemente <strong>nuevas herramientas, frameworks y prácticas DevOps</strong> en mis proyectos para lograr soluciones de alto impacto.
</p>

          {/* Certificaciones */}
          <div className="mt-4">
            <h5 className="mb-3">📜 Certificaciones destacadas</h5>
            <ul className="list-unstyled">
              <li>✅ Web Designer – Digital House</li>
              <li>✅ Herramientas de Trabajo Colaborativo – Globant and Digital House</li>
              <li>✅ Diseño Wen: HTML y CSS – Globant and Digital House</li>
              <li>✅ Metodologías Agiles y Scrum – Globant and Digital House</li>

              <li>✅JavaScript Certificate Entry Level Programmer – OpenEDG</li>
              <li>✅ Desarrollo de APIs en Java con Spring Boot – TodoCode</li>
              <li>
                ✅ Introducción a Git y GitHub – TodoCode
              </li>
              <li>
                ✅ Java con Spring – Platzi
              </li>
              <li>✅  Introducción al Desarrollo Backend – Platzi</li>
              <li>✅  Java SE Persistencia de Datos – Platzi</li>
              <li>✅  Java SE Persistencia de Datos – Platzi</li>
              <li>✅  Java SE: SQL y Bases de Datos – Platzi</li>
              <li>✅  Java SE Orientado a Objetos – Platzi</li>
              
            </ul>
          </div>
        </div>
      </div>

      {/* Bloque separado de Formación Académica con tarjetas */}
      <div className="row p-3 px-md-5 mt-0" data-aos="fade-right">
        <div className="col-12 mb-4">
          <h3 className="mb-4">🎓 Formación Académica</h3>
        </div>

        {/* CCC Licenciatura */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-graduation-cap me-2"></i>
                Lic. en Tecnologías de la Información
                <span className="badge bg-info text-dark ms-2">Cursando</span>
              </h5>
              <p className="card-text mb-1">
                Ciclo de Complementación Curricular
              </p>
              <p className="card-text text-muted">
                <small>Universidad Católica de Santa Fe (UCSF)</small>
                (2025)
              </p>
            </div>
          </div>
        </div>

        {/* Técnico en Desarrollo de Software */}
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
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
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-shield-alt me-2"></i>
                Téc. Sup. en Seguridad Pública
              </h5>
              <p className="card-text">Instituto Juan Vicetich (2014-2017)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

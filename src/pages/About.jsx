function About() {
  return (
    <div className="container about-section mb-3">
      {/* Bloque principal: Sobre mí */}
      <div className="row p-3 px-md-5" data-aos="fade-left">
        <h1 className="text-center mb-4 w-100">Sobre mí</h1>

        {/* Columna izquierda */}
        <div className="col-md-6 mb-4 ">
          <p className="text-justify">
            👤Soy <strong>Michael Jonathan Illescas</strong>, desarrollador de Software apasionado por la tecnología y el desarrollo
            web. Tengo especial interés en la creación de{" "}
            <strong>aplicaciones profesionales</strong>, siguiendo{" "}
            <strong>buenas prácticas de programación</strong> y aplicando
            distintas <strong>arquitecturas de software</strong> según cada
            necesidad.
          </p>

          <p className="text-justify">
            Me especializo en el desarrollo{" "}
            <strong>
              backend con Java, Spring Boot y bases de datos relacionales
            </strong>
            , y también en <strong>frontend con JavaScript y React</strong>,
            creando interfaces modernas y responsivas. Cuento con una sólida
            base en el desarrollo de software profesional, aplicando estructuras
            organizadas de código y enfoques modernos. Me esfuerzo por escribir
            código limpio, mantenible y escalable.
          </p>

          <p className="text-justify">
            🛠️ Me gusta crear soluciones eficientes para problemas reales. He
            trabajado en proyectos como:
          </p>
          <ul>
            <li>Sistemas de gestión de inventarios</li>
            <li>Reservas de turnos</li>
            <li>Administración interna de clubes</li>
            <li>Gestión administrativa para PyMEs</li>
            <li>Sistemas de registro de detenidos penales</li>
            <li>Sitios web personales y corporativos</li>
          </ul>

          <p className="text-justify">
            📈 Actualmente, me encuentro impulsando la formación de una{" "}
            <strong>startup</strong> enfocada en digitalizar PyMEs locales
            mediante sistemas web adaptables y efecientes que faliciten la administración de los procesos diarios de las organizaciones.
          </p>
        </div>

        {/* Columna derecha */}
        <div className="col-md-6">
          <p className="text-justify">
            📚 Siempre busco seguir aprendiendo. Obtuve certificaciones que
            fortalecen mi perfil técnico y metodológico, y estoy perfeccionando
            mi <strong>inglés</strong> para ampliar mis oportunidades
            profesionales.
          </p>

          <p className="text-justify">
            🚀 Me considero una persona{" "}
            <strong>
              responsable, proactiva y con gran capacidad de aprendizaje
            </strong>
            . Disfruto trabajar en equipo, comunicar ideas con claridad y
            adaptarme a nuevos desafíos tecnológicos.
          </p>

          <p className="text-justify">
            🔁 Estoy en constante búsqueda de crecimiento, siempre explorando
            nuevas herramientas y tecnologías para seguir mejorando tanto a
            nivel técnico como humano.
          </p>

          {/* Certificaciones */}
          <div className="mt-4">
            <h5 className="mb-3">📜 Certificaciones destacadas</h5>
            <ul className="list-unstyled">
              <li>✅ Web Designer – Digital House</li>
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
      <div className="row p-3 px-md-5 mt-5" data-aos="fade-right">
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
                Instituto Superior Santo Domingo (2024)
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
              <p className="card-text">Instituto Juan Vicetich (2014)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

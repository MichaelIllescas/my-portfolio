function About() {
  return (
    <section className="about-section py-5 mb-5" id="sobre-mi" style={{
      minHeight: "100vh"
    }}>
      {/* Hero de la sección */}
      <div className="container mb-5" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-5 fw-bold mb-3" style={{color: "#ffffff"}}>
              Sobre mí
            </h1>
            <p className="lead mb-4" style={{color: "#a8b2c1"}}>
              Desarrollador apasionado por crear soluciones que realmente importen
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal en dos columnas más elegante */}
      <div className="container">
        <div className="row mb-5" data-aos="fade-left">
        <div className="col-lg-6 mb-4">
          <div className="about-card p-4 h-100">
            <h3 className="mb-4" style={{color: "#61dbfb"}}>Mi Historia</h3>
            <p className="mb-4" style={{color: "#d1d5db", lineHeight: "1.7"}}>
              Soy <strong style={{color: "#ffffff"}}>Michael Jonathan Illescas</strong>, un desarrollador full stack 
              que encontró en la programación una forma de resolver problemas reales. 
            </p>
            <p className="mb-4" style={{color: "#d1d5db", lineHeight: "1.7"}}>
              Mi experiencia abarca desde <strong style={{color: "#ffffff"}}>sistemas ERP</strong> hasta 
              <strong style={{color: "#ffffff"}}> aplicaciones web modernas</strong>, siempre enfocándome en 
              código limpio y arquitecturas escalables.
            </p>
            <p style={{color: "#d1d5db", lineHeight: "1.7"}}>
              Actualmente perfecciono mis habilidades en <strong style={{color: "#ffffff"}}>seguridad informática</strong> 
              y <strong style={{color: "#ffffff"}}>inglés técnico</strong> para ampliar mis horizontes profesionales.
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="about-card p-4 h-100">
            <h3 className="mb-4" style={{color: "#61dbfb"}}>¿Qué me mueve?</h3>
            
            <div className="mb-4">
              <h5 style={{color: "#ffffff"}}>Tecnologías que domino</h5>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="tech-badge">Java & Spring Boot</span>
                <span className="tech-badge">React & JavaScript</span>
                <span className="tech-badge">Bases de Datos</span>
                <span className="tech-badge">Git & DevOps</span>
              </div>
            </div>

            <div className="mb-4">
              <h5 style={{color: "#ffffff"}}>Proyectos destacados</h5>
              <ul className="custom-list" style={{color: "#d1d5db"}}>
                <li>ERP completo para gestión empresarial</li>
                <li>Sistemas de reservas online</li>
                <li>Aplicaciones administrativas</li>
                <li>Portales institucionales</li>
              </ul>
            </div>

            <div>
              <h5 style={{color: "#ffffff"}}>Mi enfoque</h5>
              <p style={{color: "#d1d5db", lineHeight: "1.7"}}>
                <strong style={{color: "#28a745"}}>Arquitectura sólida</strong>, 
                <strong style={{color: "#28a745"}}> trabajo en equipo</strong> y 
                <strong style={{color: "#28a745"}}> mejora continua</strong> son los pilares 
                de mi desarrollo profesional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Formación Académica */}
      <div className="row mb-5" data-aos="fade-right">
        <div className="col-12 mb-4">
          <h2 className="text-center fw-bold" style={{color: "#ffffff"}}>
            Formación Académica
          </h2>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="education-card p-4 text-center h-100">
            <div className="education-icon mb-3">
              <i className="fas fa-graduation-cap" style={{fontSize: "2.5rem", color: "#61dbfb"}}></i>
            </div>
            <h5 style={{color: "#ffffff"}}>Lic. en Tecnologías de la Información</h5>
            <p style={{color: "#a8b2c1"}}>Universidad Católica de Santa Fe</p>
            <span className="badge bg-primary">En curso</span>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="education-card p-4 text-center h-100">
            <div className="education-icon mb-3">
              <i className="fas fa-laptop-code" style={{fontSize: "2.5rem", color: "#28a745"}}></i>
            </div>
            <h5 style={{color: "#ffffff"}}>Téc. Sup. en Desarrollo de Software</h5>
            <p style={{color: "#a8b2c1"}}>Instituto Superior Santo Domingo</p>
            <span className="badge bg-success">2022-2024</span>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="education-card p-4 text-center h-100">
            <div className="education-icon mb-3">
              <i className="fas fa-shield-alt" style={{fontSize: "2.5rem", color: "#dc3545"}}></i>
            </div>
            <h5 style={{color: "#ffffff"}}>Téc. Sup. en Seguridad Pública</h5>
            <p style={{color: "#a8b2c1"}}>Instituto Juan Vicetich</p>
            <span className="badge bg-danger">2014-2017</span>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style>{`
        .about-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .about-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(97, 219, 251, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .education-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .education-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }

        .tech-badge {
          background: linear-gradient(135deg, #61dbfb, #0d6efd);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .education-icon {
          transition: transform 0.3s ease;
        }
        
        .education-card:hover .education-icon {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .about-card, .education-card {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
      </div>
    </section>
  );
}

export default About;

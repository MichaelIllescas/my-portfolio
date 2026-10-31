import React, { useState } from "react";
import { FaServer, FaLaptopCode, FaCogs } from "react-icons/fa";
import springSecurityLogo from "../assets/img/tecnologies-logos/spring-security.svg";

// --- Datos de tecnologías (idénticos a los tuyos, se pueden extender) ---
const technologies = {
  backend: {
    title: "🛠️ Backend con Java y Spring",
    description:
      "Desarrollo de APIs RESTful escalables con Java + Spring Boot. Experiencia en arquitecturas monolíticas modulares, hexagonal y microservicios. Implementación de patrones de diseño GOF, Repository, Factory y Strategy. Autenticación con Spring Security/JWT y persistencia optimizada con JPA/MySQL.",
    items: [
      {
        name: "Java",
        svg: (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="Java" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://www.oracle.com/java/",
      },
      {
        name: "Spring Boot",
        svg: (
          <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
            alt="Spring Boot" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://spring.io/projects/spring-boot",
      },
      {
        name: "Spring Security",
        svg: (
          <img src={springSecurityLogo} alt="Spring Security"
            style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://spring.io/projects/spring-security",
      },
      {
        name: "JWT",
        svg: (
          <img src="https://jwt.io/img/pic_logo.svg"
            alt="JWT" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://jwt.io/introduction",
      },
      {
        name: "Spring Data JPA",
        icon: "bi-database-fill-lock",
        color: "text-success",
        link: "https://spring.io/projects/spring-data-jpa",
      },
      {
        name: "Spring Cloud",
        svg: (
          <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
            alt="Spring Cloud" style={{ width: "32px", height: "32px", filter: "sepia(100%) saturate(200%) hue-rotate(180deg)" }} />
        ),
        link: "https://spring.io/projects/spring-cloud",
      },
      {
        name: "MySQL",
        svg: (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://www.mysql.com/",
      },
    ],
  },
  frontend: {
    title: "🎨 Frontend moderno",
    description:
      "SPA responsivas con React y Angular, componentes reutilizables, hooks personalizados y consumo de APIs. Estilado con Bootstrap y CSS Grid para lograr interfaces profesionales y adaptativas.",
    items: [
      {
        name: "HTML5",
        svg: (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        svg: (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        svg: (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JS" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "React",
        svg: (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://reactjs.org/",
      },
      {
        name: "Angular",
        svg: (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
            alt="Angular" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://angular.dev/",
      },
      {
        name: "Bootstrap",
        svg: (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://getbootstrap.com/",
      },
      {
        name: "Tailwind CSS",
        svg: (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://tailwindcss.com/",
      },
    ],
  },
  devops: {
    title: "⚙️ DevOps & Colaboración",
    description:
      "Gestión de versiones con Git/GitHub y flujo de trabajo GitFlow. Despliegue en VPS y contenedores con Docker. Trabajo en entornos colaborativos y metodologías ágiles (Scrum).",
    items: [
      {
        name: "Git",
        icon: "bi-git",
        color: "text-danger",
        link: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        icon: "bi-github",
        color: "text-dark",
        link: "https://github.com/",
      },
      {
        name: "Git Flow",
        icon: "bi-diagram-3-fill",
        color: "text-secondary",
        link: "https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow",
      },
      {
        name: "Docker",
        icon: "bi-box-seam",
        color: "text-info",
        link: "https://www.docker.com/",
      },
    ],
  },
};

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("backend");

  return (
    <section className="skills-container py-5 mb-5" id="habilidades" style={{
      minHeight: "100vh"
    }}>
      {/* Hero de la sección */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-5 fw-bold mb-3" style={{color: "#ffffff"}}>
              Habilidades Profesionales
            </h1>
            <p className="lead mb-4" style={{color: "#a8b2c1"}}>
              Stack tecnológico sólido enfocado en desarrollo full stack escalable
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Navegación por categorías */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="skill-nav">
              {Object.entries(technologies).map(([key]) => (
                <button
                  key={key}
                  className={`skill-nav-btn ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(key)}
                >
                  <span className="nav-icon">
                    {key === 'backend' ? <FaServer /> : key === 'frontend' ? <FaLaptopCode /> : <FaCogs />}
                  </span>
                  <span className="nav-text">
                    {key === 'backend' ? 'Backend' : key === 'frontend' ? 'Frontend' : 'DevOps'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contenido de la categoría activa */}
        <div className="row">
          <div className="col-12">
            <div className="skill-content">
              <div className="category-header mb-4">
                <h3 style={{color: "#61dbfb"}} className="mb-2">
                  {activeCategory === 'backend' ? 'Backend con Java y Spring' : 
                   activeCategory === 'frontend' ? 'Frontend moderno' : 
                   'DevOps & Colaboración'}
                </h3>
                <p style={{color: "#d1d5db", lineHeight: "1.6"}}>
                  {technologies[activeCategory].description}
                </p>
              </div>

              {/* Grid de tecnologías con niveles */}
              <div className="row g-4">
                {technologies[activeCategory].items.map((tech, index) => (
                  <div key={`${activeCategory}-${tech.name}-${index}`} className="col-lg-6" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="skill-card">
                      <div className="skill-header">
                        <div className="skill-icon">
                          {tech.icon ? (
                            <i className={`bi ${tech.icon} ${tech.color} fs-3`}></i>
                          ) : (
                            tech.svg
                          )}
                        </div>
                        <div className="skill-info">
                          <h5 className="skill-name">{tech.name}</h5>
                        </div>
                      </div>
                      <a 
                        href={tech.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="skill-link"
                      >
                        Documentación →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills como complemento */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="soft-skills-section">
              <h3 className="text-center mb-4" style={{color: "#ffffff"}}>
                Habilidades Complementarias
              </h3>
              <div className="row g-3">
                {[
                  "Arquitecturas y Patrones de Diseño",
                  "Metodologías Ágiles",
                  "Trabajo en Equipo",
                  "Resolución de Problemas",
                  "Aprendizaje Continuo",
                  "Comunicación Efectiva"
                ].map((skill, index) => (
                  <div key={skill} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 50}>
                    <div className="soft-skill-badge">
                      <span className="badge-icon">✓</span>
                      <span className="badge-text">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style>{`
        .skill-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skill-nav-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #a8b2c1;
          transition: all 0.3s ease;
          cursor: pointer;
          min-width: 120px;
        }

        .skill-nav-btn:hover {
          border-color: rgba(97, 219, 251, 0.5);
          color: #61dbfb;
          transform: translateY(-2px);
        }

        .skill-nav-btn.active {
          border-color: #61dbfb;
          background: rgba(97, 219, 251, 0.1);
          color: #61dbfb;
        }

        .nav-icon {
          font-size: 1.5rem;
        }

        .nav-text {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .skill-content {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          height: 100%;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .skill-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(97, 219, 251, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .skill-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .skill-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(97, 219, 251, 0.1);
          border-radius: 10px;
          border: 1px solid rgba(97, 219, 251, 0.3);
        }

        .skill-info {
          flex: 1;
        }

        .skill-name {
          color: #ffffff;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .skill-level {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .experience-badge {
          background: linear-gradient(135deg, rgba(97, 219, 251, 0.2), rgba(40, 167, 69, 0.2));
          color: #61dbfb;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(97, 219, 251, 0.3);
          white-space: nowrap;
        }

        .skill-link {
          color: #a8b2c1;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .skill-link:hover {
          color: #61dbfb;
          text-decoration: none;
        }

        .soft-skills-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .soft-skill-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem;
          background: rgba(40, 167, 69, 0.1);
          border: 1px solid rgba(40, 167, 69, 0.3);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .soft-skill-badge:hover {
          transform: translateY(-2px);
          background: rgba(40, 167, 69, 0.15);
          border-color: rgba(40, 167, 69, 0.5);
        }

        .badge-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: #28a745;
          color: white;
          border-radius: 50%;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .badge-text {
          color: #ffffff;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .skill-nav {
            flex-direction: column;
            gap: 0.8rem;
          }
          
          .skill-nav-btn {
            flex-direction: row;
            min-width: auto;
            padding: 0.8rem 1rem;
          }
          
          .skill-content, .soft-skills-section {
            padding: 1.5rem;
          }
          
          .skill-header {
            flex-direction: column;
            text-align: center;
            gap: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}

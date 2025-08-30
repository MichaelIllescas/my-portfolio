import React, { useState } from "react";
import springSecurityLogo from "../assets/img/tecnologies-logos/spring-security.svg";

// --- Datos de tecnologías (idénticos a los tuyos, se pueden extender) ---
const technologies = {
  backend: {
    title: "🛠️ Backend con Java y Spring",
    description:
      "Desarrollo de APIs RESTful escalables y seguras con Java + Spring Boot. Arquitectura en capas, SOLID, autenticación con Spring Security y JWT, persistencia con JPA/MySQL. Uso de DTOs, validaciones robustas y control centralizado de errores.",
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
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg"
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
      "SPA responsivas con React, componentes reutilizables, hooks personalizados y consumo de APIs. Estilado con Bootstrap y CSS Grid para lograr interfaces profesionales y adaptativas.",
    items: [
      {
        name: "React",
        svg: (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://reactjs.org/",
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
        name: "Bootstrap",
        svg: (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://getbootstrap.com/",
      },
      {
        name: "Axios",
        svg: (
          <img src="https://axios-http.com/assets/logo.svg"
            alt="Axios" style={{ width: "32px", height: "32px" }} />
        ),
        link: "https://axios-http.com/",
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

// --- Buenas prácticas y soft skills ---
const softSkills = [
  "Responsabilidad y compromiso con los objetivos",
  "Proactividad para anticipar necesidades",
  "Aprendizaje ágil y adaptación a nuevas tecnologías",
  "Trabajo en equipo con enfoque colaborativo",
  "Comunicación clara y efectiva",
  "Flexibilidad ante cambios de requerimientos",
  "Gestión del tiempo y prioridades",
  "Resolución de problemas de forma analítica",
];

const goodPractices = [
  "Arquitectura en capas (Controlador, Servicio, Repositorio)",
  "Principios SOLID y patrones de diseño",
  "Uso de DTOs para desacoplar presentación y dominio",
  "Validación robusta con Spring Validation",
  "Gestión centralizada de errores y excepciones",
  "Arquitectura monolítica modular escalable",
  "Diseño desacoplado con orientación a microservicios",
  "Versionado y documentación de APIs con Swagger",
];

const realExperience = [
  "Diseño e implementación de APIs RESTful robustas con Java + Spring Boot",
  "Autenticación y autorización con Spring Security y JWT",
  "Persistencia con Spring Data JPA y modelado eficiente en MySQL",
  "Renderizado SSR con Thymeleaf y JSP",
  "SPA con React, formularios controlados y hooks personalizados",
  "Estilado responsive con Bootstrap y CSS Grid",
  "Gestión de versiones con Git/GitHub y GitFlow",
  "Despliegue en VPS (Linux) con frontend en Hostinger",
  "Contenerización y despliegue con Docker",
  "Documentación de APIs con Swagger (OpenAPI)",
  "Generación de reportes PDF y dashboards dinámicos",
  "Aplicación de Scrum en proyectos reales",
];

export default function SkillsPage() {
  const [openSection, setOpenSection] = useState("backend");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const SectionButton = ({ id, title }) => (
    <button
      className={`btn w-100 text-start mb-2 rounded border d-flex justify-content-between align-items-center ${
        openSection === id ? "btn-primary" : "btn-outline-light"
      }`}
      style={{ minHeight: "55px", transition: "all .5s ease" }}
      onClick={() => toggleSection(id)}
    >
      <span>{title}</span>
      <i className={`bi ${openSection === id ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
    </button>
  );

  return (
    <section className="skills-container p-1 pt-5 mb-5" id="habilidades">
      <div className="container-fluid pb-5 pt-4" style={{ maxWidth: "950px" }} data-aos="fade-left">
        <h1 className="mb-4 text-center">💼 Mis Habilidades Profesionales</h1>

        <p className="text-light text-center mb-4">
          En constante evolución, combino <strong>backend sólido</strong>,{" "}
          <strong>frontend moderno</strong> y <strong>prácticas DevOps</strong> para
          entregar soluciones completas, seguras y escalables.
        </p>

        {/* Stack principal */}
        <div className="text-center mb-4">
          <span className="badge bg-danger me-2">Java</span>
          <span className="badge bg-success me-2">Spring Boot</span>
          <span className="badge bg-success me-2">Spring Security</span>
          <span className="badge bg-primary me-2">React</span>
          <span className="badge bg-info text-dark me-2">Docker</span>
          <span className="badge bg-warning text-dark">MySQL</span>
        </div>

        {/* Tecnologías */}
        {Object.entries(technologies).map(([key, group]) => (
          <div key={key} className="mb-3">
            <SectionButton id={key} title={group.title} />
            {openSection === key && (
              <div className="px-3 py-3 bg-dark bg-opacity-10 rounded shadow-sm">
                <p className="text-light">{group.description}</p>
                <div className="row row-cols-2 row-cols-md-5 g-3 text-center">
                  {group.items.map((tech) => (
                    <div key={tech.name} className="col">
                      <a href={tech.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <div className="p-2 hover-tech">
                          {tech.icon ? (
                            <i className={`bi ${tech.icon} ${tech.color} fs-3`}></i>
                          ) : (
                            tech.svg
                          )}
                          <div className="mt-2 text-light fw-semibold small">{tech.name}</div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Buenas prácticas */}
        <div className="mb-3">
          <SectionButton id="goodPractices" title="📐 Buenas Prácticas y Arquitectura" />
          {openSection === "goodPractices" && (
            <div className="px-3 py-3 bg-dark bg-opacity-10 rounded shadow-sm">
              <ul className="list-unstyled">
                {goodPractices.map((practice, i) => (
                  <li key={i} className="text-light mb-2">✅ {practice}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Experiencia real */}
        <div className="mb-3">
          <SectionButton id="realExperience" title="🧠 Experiencia en proyectos reales" />
          {openSection === "realExperience" && (
            <div className="px-3 py-3 bg-dark bg-opacity-10 rounded shadow-sm">
              <ul className="list-unstyled">
                {realExperience.map((item, i) => (
                  <li key={i} className="text-light mb-2">🔹 {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Soft Skills */}
        <div className="mb-3">
          <SectionButton id="softSkills" title="🌟 Habilidades Blandas" />
          {openSection === "softSkills" && (
            <div className="px-3 py-3 bg-dark bg-opacity-10 rounded shadow-sm">
              <ul className="list-unstyled">
                {softSkills.map((skill, i) => (
                  <li key={i} className="text-light mb-2">✨ {skill}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Extra CSS inline */}
      <style>{`
        .hover-tech {
          transition: transform .3s ease, filter .3s ease;
        }
        .hover-tech:hover {
          transform: scale(1.1);
          filter: brightness(1.2);
        }
      `}</style>
    </section>
  );
}

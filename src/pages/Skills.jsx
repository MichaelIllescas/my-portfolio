import React, { useState } from "react";
import springSecurityLogo from "../assets/img/tecnologies-logos/spring-security.svg";

const technologies = {
  backend: {
    title: "🛠️ Desarrollo Backend con Java y Spring",
    description:
    "Desarrollo de APIs RESTful escalables y seguras utilizando Java con Spring Boot. Implementación de lógica de negocio desacoplada y estructurada en capas (controlador, servicio, repositorio), autenticación y autorización robusta con Spring Security y JWT, y persistencia eficiente de datos con Spring Data JPA sobre MySQL. Aplicación de buenas prácticas como validación de datos, manejo centralizado de errores y principios SOLID. Generación de vistas dinámicas en SSR utilizando Thymeleaf o JSP cuando el proyecto lo requiere.",
      items: [
      {
        name: "Java",
        svg: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="Java"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://www.oracle.com/java/",
      },
      {
        name: "Spring Boot",
        svg: (
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg"
            alt="Spring Boot"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://spring.io/projects/spring-boot",
      },
      {
        name: "Spring Security",
        svg: (
          <img
            src={springSecurityLogo}
            alt="Spring Security"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://spring.io/projects/spring-security",
      },
      {
        name: "JWT",
        svg: (
          <img
            src="https://jwt.io/img/pic_logo.svg"
            alt="JWT"
            style={{ width: "32px", height: "32px" }}
          />
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
        name: "SQL",
        svg: (
          <img
            src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
            alt="SQL"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://www.w3schools.com/sql/",
      },

      {
        name: "MySQL",
        svg: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://www.mysql.com/",
      },
      {
        name: "JSP",
        svg: (
          <img
            src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_jsp.svg"
            alt="JSP"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://docs.oracle.com/javaee/7/tutorial/servlets.htm",
      },

      {
        name: "Thymeleaf",
        icon: "bi-filetype-html",
        color: "text-danger",
        link: "https://www.thymeleaf.org/",
      },
    ],
  },
  frontend: {
    title: "🎨 Desarrollo Frontend moderno y responsivo",
    description:
    "Desarrollo de interfaces interactivas y responsivas utilizando React con enfoque SPA (Single Page Application). Implementación de componentes reutilizables, formularios controlados, hooks personalizados y consumo eficiente de APIs REST. Uso de HTML5 y CSS3 junto a Bootstrap para lograr estructuras semánticas, estilos adaptativos y una experiencia de usuario coherente en múltiples dispositivos.",
      items: [
      {
        name: "HTML5",
        svg: (
          <img
            src="https://www.w3.org/html/logo/downloads/HTML5_Logo.svg"
            alt="HTML5"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
      },
      {
        name: "CSS",
        svg: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        svg: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "Bootstrap",
        svg: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://getbootstrap.com/",
      },
      {
        name: "React",
        svg: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://reactjs.org/",
      },
      {
        name: "Axios",
        svg: (
          <img
            src="https://axios-http.com/assets/logo.svg"
            alt="Axios"
            style={{ width: "32px", height: "32px" }}
          />
        ),
        link: "https://axios-http.com/",
      }
    ],
  },
  devops: {
    title: "⚙️ DevOps y Herramientas de Desarrollo Colaborativo",
    description:
    "Manejo fluido de herramientas para control de versiones, trabajo en equipo, flujo de desarrollo colaborativo y despliegue de aplicaciones. Experiencia con Git y GitHub en equipos, gestión de ramas con Git Flow, y uso básico de Docker para contenerización y despliegue eficiente.",
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
const softSkills = [
  "Responsabilidad y compromiso con los objetivos del proyecto",
  "Proactividad para anticipar necesidades y proponer mejoras",
  "Capacidad de aprendizaje ágil y adaptación a nuevas tecnologías",
  "Trabajo en equipo con enfoque colaborativo y comunicación constante",
  "Comunicación efectiva para transmitir ideas técnicas de forma clara",
  "Flexibilidad ante cambios de requerimientos o contexto",
  "Gestión del tiempo para cumplir con plazos y prioridades",
  "Resolución de problemas de forma analítica y autónoma",
];

const goodPractices = [
  "Separación de responsabilidades a través de una arquitectura en capas (Controlador, Servicio, Repositorio)",
  "Aplicación de principios SOLID para lograr código mantenible, extensible y testable",
  "Uso de DTOs (Data Transfer Object) para desacoplar la capa de presentación del dominio",
  "Arquitectura Cliente-Servidor con backend desacoplado del frontend",
  "Patrón MVC (Model-View-Controller) para organizar la lógica de presentación",
  "Inyección de dependencias (DI) para facilitar el testeo y la modularidad",
  "Validación de datos robusta con Spring Validation y anotaciones personalizadas",
  "Gestión centralizada de errores y excepciones para una experiencia de usuario coherente",
  "Uso de arquitectura monolítica modular para escalar funcionalidades de forma ordenada",
  "Aplicación de enfoque modular orientado a microservicios (diseño desacoplado y reutilizable)",
  "Estrategias de versionado y documentación de APIs REST con Swagger (OpenAPI)",
];

const realExperience = [
  "Diseño e implementación de APIs RESTful robustas con Java y Spring Boot, siguiendo principios SOLID y patrón MVC.",
  "Integración de seguridad en aplicaciones web con Spring Security, JWT, y control de acceso por roles.",
  "Persistencia de datos mediante Spring Data JPA e Hibernate, con modelado eficiente en MySQL.",
  "Renderizado del lado del servidor (SSR) con Thymeleaf y JSP para generación dinámica de vistas.",
  "Desarrollo de aplicaciones SPA con React, integrando formularios controlados, hooks personalizados y consumo de APIs con Axios.",
  "Estilado responsivo y diseño UI/UX profesional con Bootstrap, CSS personalizado y estructura grid.",
  "Gestión de versiones con Git y GitHub, implementación de Git Flow para trabajo colaborativo en equipos.",
  "Despliegue en entornos reales: backend Java en VPS (Linux) y frontend React en Hostinger, con configuración de DNS y subdominios.",
  "Uso de Docker para empaquetado y despliegue de servicios en producción.",
  "Documentación profesional de APIs con Swagger (OpenAPI), incluyendo seguridad, modelos y endpoints REST.",
  "Manejo de validaciones personalizadas con Spring Validation y control centralizado de errores.",
  "Desarrollo de funcionalidades de facturación, generación de reportes PDF y gráficos estadísticos en tiempo real.",
  "Aplicación de metodología Scrum para planificación y desarrollo incremental en proyectos reales.",
];

export default function SkillsPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const SectionButton = ({ id, title }) => (
    <button
      className={`btn w-100 text-start mb-2 rounded border d-flex justify-content-between align-items-center ${
        openSection === id ? "btn-primary" : "btn-outline-light"
      }`}
      style={{ minHeight: "55px", transition: "all .7s ease" }}
      onClick={() => toggleSection(id)}
    >
      <span>{title}</span>
      <i
        className={`bi ${
          openSection === id ? "bi-chevron-up" : "bi-chevron-down"
        }`}
      ></i>
    </button>
  );

  return (
    <section className=" skills-container p-1 pt-5 mb-4" id="habilidades">
      <div
        className="container-fluid pb-5 pt-5 "
        style={{ maxWidth: "900px" }}
        data-aos="fade-left"
      >
        <h1 className="mb-5 text-center pb-1">
          💼 Mis Habilidades Profesionales
        </h1>

        <p className="text-light text-center mb-4 ">
          Me encuentro en constante evolución como profesional del software.
          Busco siempre incorporar nuevas tecnologías, mejorar mis buenas
          prácticas y adaptarme a los desafíos de cada proyecto, combinando una
          base sólida en desarrollo backend con habilidades frontend y
          metodologías modernas.
        </p>
        <p className="text-light text-center mt-3">
          <strong>Stack principal:</strong> Java, Spring Boot, Spring Security,
          JPA, MySQL, React, Bootstrap, Docker.
        </p>

        {Object.entries(technologies).map(([key, group]) => (
          <div key={key} className="mb-4 ">
            <SectionButton id={key} title={group.title} />
            <div
              className={`collapsible-section ${
                openSection === key ? "expanded" : ""
              }`}
              style={{ transition: "all 0.7s ease" }}
            >
              <div className="px-3 py-2 bg-dark bg-opacity-10 rounded">
                <p className="text-light text-justify">{group.description}</p>
                <div className="row row-cols-2 row-cols-md-5 g-3 text-center">
                  {group.items.map((tech) => (
                    <div key={tech.name} className="col">
                      <a
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <div className="p-2">
                          {tech.icon ? (
                            <i
                              className={`bi ${tech.icon} ${tech.color} fs-3`}
                            ></i>
                          ) : (
                            <span className="fs-5 fw-bold text-light">
                              {tech.svg}
                            </span>
                          )}
                          <div className="mt-2 text-light fw-semibold small">
                            {tech.name}
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mb-4">
          <SectionButton
            id="goodPractices"
            title="📐 Buenas Prácticas y Arquitectura"
            className
          />
          <div
            className={`collapsible-section  ${
              openSection === "goodPractices" ? "expanded" : ""
            }`}
            style={{ transition: "all .7s ease" }}
          >
            <div className="px-3 py-2 bg-dark bg-opacity-10 rounded">
            <p className="text-light text-justify">
  Estas prácticas reflejan mi enfoque en escribir código limpio, escalable y preparado para producción, apoyándome en patrones de arquitectura modernos y principios de ingeniería de software.
</p>

              <ul className="list-group list-group-flush">
                {goodPractices.map((practice, index) => (
                  <li
                    key={index}
                    className="list-group-item bg-transparent text-light"
                  >
                    ✅ {practice}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <SectionButton
            id="realExperience"
            title="🧠 Conocimientos aplicados en proyectos reales"
          />
          <div
            className={`collapsible-section ${
              openSection === "realExperience" ? "expanded" : ""
            }`}
            style={{ transition: "all 0.7s ease" }}
          >
            <div className="px-3 py-2 bg-dark bg-opacity-10 rounded">
              <ul className="list-group list-group-flush">
                {realExperience.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item bg-transparent text-light text-justify"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <SectionButton id="softSkills" title="🌟 Habilidades Blandas" />
          <div
            className={`collapsible-section ${
              openSection === "softSkills" ? "expanded" : ""
            }`}
            style={{ transition: "all 0.7s ease" }}
          >
            <div className="px-3 py-2 bg-dark bg-opacity-10 rounded">
              <p className="text-light text-justify">
                Competencias interpersonales que potencian mi rendimiento
                profesional y mi integración efectiva en equipos de trabajo
                multidisciplinarios:
              </p>
              <ul className="list-group list-group-flush">
                {softSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="list-group-item bg-transparent text-light"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

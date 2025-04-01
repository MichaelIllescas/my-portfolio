import React, { useState } from "react";
import springSecurityLogo from "../assets/img/tecnologies-logos/spring-security.svg";

const technologies = {
  backend: {
    title: "🛠️ Backend",
    description:
      "Diseño y desarrollo de APIs RESTful con Java y Spring Boot, implementación de seguridad con Spring Security y JWT, persistencia de datos con JPA y gestión de bases de datos MySQL. Además, desarrollo de aplicaciones web con renderizado del lado del servidor (SSR) utilizando el motor de plantillas Thymeleaf o JSP para la generación dinámica de vistas.",
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
    title: "🎨 Frontend",
    description:
      "Desarrollo de interfaces modernas, dinámicas y responsivas utilizando JavaScript con React, siguiendo el enfoque de aplicaciones de una sola página (SPA). Uso de HTML5 y CSS3 para la estructura y estilos, junto con Bootstrap para un diseño consistente, adaptable y componentes reutilizables.",
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
    ],
  },
  devops: {
    title: "⚙️ DevOps y Herramientas",
    description:
      "Control de versiones con Git y GitHub, integración de Git Flow para flujos de trabajo colaborativos, uso básico de contenedores Docker.",
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
  "Responsabilidad",
  "Proactividad",
  "Aprendizaje ágil",
  "Trabajo en equipo",
  "Comunicación efectiva",
  "Adaptabilidad",
];

const goodPractices = [
  "Arquitectura Cliente-Servidor",
  "Arquitectura Monolítica",
  "Arquitectura en Capas (presentación, servicio, repositorio)",
  "Microservicios (enfoque modular)",
  "MVC (Model-View-Controller)",
  "Patrón DTO (Data Transfer Object)",
  "Principios SOLID",
  "Inyección de Dependencias (DI)",
  "Separación de responsabilidades",
  "Validación de datos (Spring Validation)",
  "Manejo centralizado de errores y excepciones",
];

const realExperience = [
  "Diseño y desarrollo de APIs RESTful con Java y Spring Boot",
  "Autenticación y autorización con Spring Security y JWT",
  "Renderizado del lado del servidor con Thymeleaf (SSR)",
  "Persistencia de datos con Spring Data JPA y Hibernate",
  "Construcción de aplicaciones SPA con React y consumo de APIs mediante Axios",
  "Diseño responsivo y uso de Bootstrap para componentes reutilizables",
  "Modelado de base de datos y consultas SQL en MySQL",
  "Versionado y trabajo colaborativo con Git y GitHub (Git Flow)",
  "Despliegue de frontend en Hostinger y backend en VPS",
  "Aplicación de metodología Scrum para organización del trabajo",
  "Documentación de APIs con Swagger (OpenAPI)",
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
      }`} style={{ minHeight:"55px", transition:"all .7s ease"}}
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
    <section className=" skills-container p-1 pt-5 mb-4">
      <div
        className="container-fluid "
        style={{ maxWidth: "900px" }}
        data-aos="fade-left"
      >
        <h2 className="mb-5 text-center">💼 Mis Habilidades Profesionales</h2>

        {Object.entries(technologies).map(([key, group]) => (
          <div key={key} className="mb-4 ">
            <SectionButton id={key} title={group.title}  />
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
            title="📐 Buenas Prácticas y Arquitectura" className
          />
          <div
            className={`collapsible-section  ${
              openSection === "goodPractices" ? "expanded" : ""
            }`}
            style={{ transition: "all .7s ease" }}
          >
            <div className="px-3 py-2 bg-dark bg-opacity-10 rounded">
              <ul className="list-group list-group-flush">
                {goodPractices.map((practice, index) => (
                  <li
                    key={index}
                    className="list-group-item bg-transparent text-light"
                  >
                    {practice}
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
                Aptitudes personales que potencian mi trabajo en equipo y
                adaptación:
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

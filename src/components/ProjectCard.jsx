import React from "react";
import { FaGithub, FaGlobe, FaLaptopCode, FaServer } from "react-icons/fa";
import '../styles/cards.css'
import '../styles/ProjectCardAnimated.css'
const ProjectCard = ({
  title,
  tag,
  date,
  description,
  image,
  frontendUrl,
  backendUrl,
  githubUrl,
  demoUrl,
  techList,
  isOpen,
  onToggle,
}) => {
  return (
 <div className={`card project-card shadow-sm border-0 ${isOpen ? "expanded" : ""}`}>
  <img
    src={image}
    alt={title}
    className="card-img-top"
  />
  <div className="card-body d-flex flex-column">
        <div>
          <h5 className="card-title fw-bold">{title}</h5>
          <small className="text-muted">
            <span className="badge bg-primary me-2 ">{tag}</span>
            <span className="text-white"> {date}</span> 
         
          </small>
        </div>

        {/* Contenido expandido */}
        {isOpen && (
          <div>
            <p className="card-text mt-3">{description}</p>

            {techList && (
              <div className="mb-3">
                <strong>Tecnologías:</strong>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {techList.map((tech, i) => (
                    <span key={i} className="badge bg-secondary">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="d-flex flex-wrap gap-2 mt-2">
              {frontendUrl && (
                <a
                  href={frontendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm a"
                >
                  <FaLaptopCode className="me-1 a" /> Frontend
                </a>
              )}
              {backendUrl && (
                <a
                  href={backendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-dark tag bg-dark text-white "
                >
                  <FaServer className="me-1" /> Backend
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm a"
                >
                  <FaGithub className="me-1" /> GitHub
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-success"
                >
                  <FaGlobe className="me-1" /> Demo
                </a>
              )}
            </div>
          </div>
        )}

        {/* Botón toggle */}
        <div className="mt-3 text-center">
          <button className="btn btn-sm btn-primary" onClick={onToggle}>
            {isOpen ? "Ver menos ▲" : "Ver más ▼"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

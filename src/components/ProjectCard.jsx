import React from "react";
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
    <div className={`card h-100 shadow-sm border-0 project-card ${isOpen ? 'expanded' : ''}`}>
      <img src={image} alt={title} className="card-img-top " style={{ minHeight: "190px", objectFit: "cover" }} />

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <small className="text-white"> <span className="btn text-white btn-tag">{tag}</span> • {date}</small>
        </div>

        {isOpen && (
          <div>
            <p className="card-text mt-2">{description}</p>

            {techList && (
              <div className="mb-2 ">
                <strong>Tecnologías:</strong>
                <ul className="list-inline mt-1">
                  {techList.map((tech, i) => (
                    <li key={i} className="list-inline-item badge bg-secondary me-1">{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="d-flex flex-wrap gap-2 mt-2 ">
              {frontendUrl && <a href={frontendUrl} target="_blank" rel="noopener noreferrer" className="a btn btn-sm btn-outline-dark">Frontend</a>}
              {backendUrl && <a href={backendUrl} target="_blank" rel="noopener noreferrer" className="a btn btn-sm btn-outline-dark">Backend</a>}
              {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="a btn btn-sm btn-outline-dark">GitHub</a>}
              {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer" className=" a btn btn-sm btn-outline-success">Demo</a>}
            </div>
          </div>
        )}

        <div className="mt-3 text-center">
          <button className="btn btn-sm btn-primary" onClick={onToggle}>
            {isOpen ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React, { useState } from "react";
import { FaGithub, FaGlobe, FaLaptopCode, FaServer, FaExternalLinkAlt } from "react-icons/fa";

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
  const [showAllTech, setShowAllTech] = useState(false);

  return (
    <div className={`project-card ${isOpen ? "expanded" : ""}`}>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay">
          <button className="expand-btn" onClick={onToggle}>
            {isOpen ? "Ver menos" : "Ver detalles"}
          </button>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="project-title">{title}</h5>
            <span className="project-tag">{tag}</span>
          </div>
          <small className="project-date">{date}</small>
        </div>

        {/* Contenido expandido */}
        {isOpen && (
          <div className="project-details">
            <p className="project-description">{description}</p>

            {techList && (
              <div className="tech-stack mb-3">
                <div className="d-flex flex-wrap gap-1">
                  {(showAllTech ? techList : techList.slice(0, 4)).map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                  {techList.length > 4 && (
                    <span 
                      className="tech-badge more clickable" 
                      onClick={() => setShowAllTech(!showAllTech)}
                      title={showAllTech ? "Ver menos" : `Ver todas (${techList.slice(4).join(', ')})`}
                    >
                      {showAllTech ? "Ver menos" : `+${techList.length - 4}`}
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="project-links">
              {frontendUrl && (
                <a href={frontendUrl} target="_blank" rel="noopener noreferrer" className="project-link frontend">
                  <FaLaptopCode size={14} /> Frontend
                </a>
              )}
              {backendUrl && (
                <a href={backendUrl} target="_blank" rel="noopener noreferrer" className="project-link backend">
                  <FaServer size={14} /> Backend
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                  <FaGithub size={14} /> Código
                </a>
              )}
              {demoUrl && (
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo">
                  <FaExternalLinkAlt size={12} /> Demo
                </a>
              )}
            </div>
          </div>
        )}

        {/* Botón para expandir cuando está cerrado */}
        {!isOpen && (
          <div className="mt-auto pt-3">
            <button className="btn btn-sm btn-outline-primary w-100" onClick={onToggle}>
              Ver detalles
            </button>
          </div>
        )}
      </div>

      {/* Estilos CSS */}
      <style>{`
        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: auto;
          min-height: 320px;
          display: flex;
          flex-direction: column;
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(97, 219, 251, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(97, 219, 251, 0.8), rgba(13, 110, 253, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .expand-btn {
          background: white;
          color: #333;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          transform: translateY(10px);
        }

        .project-card:hover .expand-btn {
          transform: translateY(0);
        }

        .expand-btn:hover {
          background: #f8f9fa;
          transform: scale(1.05);
        }

        .project-content {
          padding: 1.2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-header {
          flex-shrink: 0;
        }

        .project-title {
          color: #ffffff;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0;
          line-height: 1.3;
        }

        .project-tag {
          background: linear-gradient(135deg, #28a745, #20c997);
          color: white;
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .project-date {
          color: #a8b2c1;
          font-size: 0.8rem;
        }

        .project-details {
          margin-top: 1rem;
          animation: fadeIn 0.3s ease;
          flex: 1;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .project-description {
          color: #d1d5db;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .tech-badge {
          background: rgba(97, 219, 251, 0.2);
          color: #61dbfb;
          padding: 0.2rem 0.5rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
          border: 1px solid rgba(97, 219, 251, 0.3);
        }

        .tech-badge.more {
          background: rgba(255, 255, 255, 0.1);
          color: #a8b2c1;
          border-color: rgba(255, 255, 255, 0.2);
        }

        .tech-badge.more.clickable {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tech-badge.more.clickable:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.05);
        }

        .project-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid;
        }

        .project-link.frontend {
          background: rgba(97, 219, 251, 0.1);
          color: #61dbfb;
          border-color: rgba(97, 219, 251, 0.3);
        }

        .project-link.backend {
          background: rgba(40, 167, 69, 0.1);
          color: #28a745;
          border-color: rgba(40, 167, 69, 0.3);
        }

        .project-link.github {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .project-link.demo {
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          border-color: rgba(255, 193, 7, 0.3);
        }

        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          text-decoration: none;
        }

        .project-link.frontend:hover { color: #61dbfb; }
        .project-link.backend:hover { color: #28a745; }
        .project-link.github:hover { color: #ffffff; }
        .project-link.demo:hover { color: #ffc107; }

        .btn {
          background: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
          border: 1px solid rgba(13, 110, 253, 0.3);
          transition: all 0.3s ease;
        }

        .btn:hover {
          background: rgba(13, 110, 253, 0.2);
          color: #0d6efd;
          border-color: rgba(13, 110, 253, 0.5);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .project-card {
            min-height: 280px;
          }
          
          .project-image-container {
            height: 160px;
          }
          
          .project-content {
            padding: 1rem;
          }
          
          .project-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;

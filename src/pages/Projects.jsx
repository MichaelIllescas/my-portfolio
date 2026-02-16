import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

// Imágenes
import dashboardinventiorystock from "../assets/img/dashboard-inventiory-stock.jpeg";
import dashboardinventioryapp from "../assets/img/dashboard-inventiory-app.jpeg";
import dashboardelCeibo from "../assets/img/dashboard-el-ceibo.jpeg";
import solfotofashionimage from "../assets/img/solfotofashion-image.jpeg";
import coblanImage from "../assets/img/coblan-image.jpeg";
import sdrp from "../assets/img/sdrp.jpeg";
import coblanAdmin from "../assets/img/image-coblan-system-admin.png";
import qrestImage from "../assets/img/qrest2.png";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title: "QRest - Sistema de Gestión para Restaurantes",
      tag: "ERP",
      date: "Diciembre 2025 - Febrero 2026",
      description:
        "Sistema integral para la gestión de restaurantes. Incluye administración de mesas, pedidos en tiempo real, menú digital con QR, gestión de reservas, control de personal y reportes de ventas. Arquitectura moderna con API REST.",
      image: qrestImage,
      githubUrl: "https://github.com/MichaelIllescas/Qrest",
      techList: ["React", "TypeScript", "Vite", "Java 21", "Spring Boot", "Spring Data JPA", "MySQL", "WebSocket", "Swagger", "Git", "GitHub"],
    },
    {
      title: "Coblan ERP Administrativo",
      tag: "ERP",
      date: "Abril - Mayo 2025",
      description:
        "Aplicación web modular para la gestión administrativa de la empresa Coblan. Incluye gestión de empleados, clientes, contrataciones, horas trabajadas, pagos de salarios y reportes financieros. Desarrollada siguiendo SOLID, DDD y arquitectura en capas.",
      image: coblanAdmin,
      frontendUrl: "https://github.com/MichaelIllescas/coblan-system-admin-fronted",
      backendUrl: "https://github.com/MichaelIllescas/coblan-system-admin-backend",
      techList: ["React", "Bootstrap", "Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Git", "GitHub"],
    },
    {
      title: "Inventiory App",
      tag: "ERP",
      date: "Enero - Marzo 2025",
      description:
        "ERP web para PyMEs que permite gestionar productos, proveedores, clientes, ventas y facturación. Incluye reportes de rentabilidad y dashboards claros para la toma de decisiones.",
      image: dashboardinventioryapp,
      frontendUrl: "https://github.com/MichaelIllescas/inventiory-frontend",
      backendUrl: "https://github.com/MichaelIllescas/inventiory-backend",
      techList: ["React", "Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Git", "GitHub", "Gitflow"],
    },
    {
      title: "El Ceibo App",
      tag: "Sistema Interno",
      date: "Enero - Febrero 2025",
      description:
        "Sistema administrativo para socios y jugadores del club El Ceibo. Permite gestionar pagos, reportes de ingresos y comprobantes. Optimizado para móviles.",
      image: dashboardelCeibo,
      frontendUrl: "https://github.com/MichaelIllescas/el-ceibo-frontEnd",
      backendUrl: "https://github.com/MichaelIllescas/inventiory-backend",
      techList: ["React", "Java", "Spring", "Spring Security", "JWT", "MySQL", "Git", "GitHub"],
    },
    {
      title: "Sistema de Registro de Detenidos Penales (SDRP)",
      tag: "Sistema Interno",
      date: "Marzo - Noviembre 2024",
      description:
        "Aplicación para registrar y administrar datos de detenidos penales en seccionales policiales. Agiliza la gestión interna de la dependencia.",
      image: sdrp,
      githubUrl: "https://github.com/MichaelIllescas/SistemaRegistroDetenidos",
      techList: ["Java", "JSP", "JPA", "EclipseLink", "MySQL", "Bootstrap", "Git", "GitHub"],
    },
    {
      title: "Inventiory Stocks",
      tag: "ERP",
      date: "Junio - Julio 2024",
      description:
        "Gestor de inventarios, clientes, ventas y reportes para una tienda de ropa.",
      image: dashboardinventiorystock,
      githubUrl: "https://github.com/MichaelIllescas/Inventiory-Spring-Boot-Thymeleaf",
      techList: ["Thymeleaf", "Java", "Spring Boot", "Spring Data JPA", "Spring Security", "JWT", "MySQL", "GitHub"],
    },
    {
      title: "Coblan Servicios",
      tag: "Sitio Web",
      date: "Enero 2025",
      description:
        "Landing page corporativa para la empresa Coblan, con diseño responsive y formulario de contacto.",
      image: coblanImage,
      githubUrl: "https://github.com/MichaelIllescas/coblan",
      demoUrl: "https://coblan.org",
      techList: ["HTML", "CSS", "Bootstrap", "JavaScript", "GitHub"],
    },
    {
      title: "Sol FotoFashion",
      tag: "Sitio Web",
      date: "Diciembre 2024",
      description:
        "Sitio web empresarial para Sol.FotoFashion, con galerías, formulario de contacto y diseño visual atractivo.",
      image: solfotofashionimage,
      githubUrl: "https://github.com/MichaelIllescas/web-sol-fotofashion",
      demoUrl: "https://solfotofashion.com/",
      techList: ["HTML", "CSS", "Bootstrap", "JavaScript", "GitHub"],
    },
  ];

  return (
    <section className="project-section py-5 mb-4" data-aos="fade-left" id="proyectos">
      {/* Hero de la sección */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-5 fw-bold mb-3" style={{color: "#ffffff"}}>
              Proyectos Destacados
            </h1>
            <p className="lead mb-4" style={{color: "#a8b2c1"}}>
              Soluciones completas que demuestran mi capacidad técnica y visión de negocio
            </p>
            
            {/* Stats rápidas */}
            <div className="row g-3 mb-4">
              <div className="col-4">
                <div className="stat-card p-3">
                  <h3 style={{color: "#61dbfb"}}>8+</h3>
                  <small style={{color: "#d1d5db"}}>Proyectos</small>
                </div>
              </div>
              <div className="col-4">
                <div className="stat-card p-3">
                  <h3 style={{color: "#28a745"}}>3</h3>
                  <small style={{color: "#d1d5db"}}>ERPs</small>
                </div>
              </div>
              <div className="col-4">
                <div className="stat-card p-3">
                  <h3 style={{color: "#ffc107"}}>100%</h3>
                  <small style={{color: "#d1d5db"}}>Full Stack</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de proyectos mejorado */}
      <div className="container">
        <div className="row g-4">
          {projects.slice(0, 6).map((project, index) => (
            <div key={index} className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <ProjectCard
                {...project}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-5">
          <p style={{color: "#a8b2c1"}} className="mb-3">
            ¿Quieres ver más proyectos o colaborar en uno nuevo?
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a 
              href="https://github.com/MichaelIllescas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-btn github-btn"
            >
              <FaGithub className="me-2" /> Ver GitHub
            </a>
            <button 
              className="cta-btn primary-btn"
              onClick={() => {
                const section = document.getElementById("contacto");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Trabajemos juntos
            </button>
          </div>
        </div>
      </div>

      {/* Estilos CSS para los botones CTA */}
      <style>{`
        .cta-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .github-btn {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .github-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          text-decoration: none;
        }

        .primary-btn {
          color: #ffffff;
          background: linear-gradient(135deg, #61dbfb, #0d6efd);
          border: none;
        }

        .primary-btn:hover {
          background: linear-gradient(135deg, #4fc3f7, #0056b3);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(97, 219, 251, 0.3);
        }

        @media (max-width: 768px) {
          .cta-btn {
            padding: 0.7rem 1.2rem;
            font-size: 0.9rem;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* Estilos CSS */}
      <style>{`
        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(97, 219, 251, 0.3);
        }
        
        .stat-card h3 {
          margin-bottom: 0.2rem;
          font-size: 1.8rem;
          font-weight: 700;
        }
        
        .stat-card small {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        @media (max-width: 768px) {
          .stat-card h3 {
            font-size: 1.4rem;
          }
          .stat-card small {
            font-size: 0.65rem;
            letter-spacing: 0;
          }
        }
        
        @media (max-width: 400px) {
          .stat-card h3 {
            font-size: 1.2rem;
          }
          .stat-card small {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

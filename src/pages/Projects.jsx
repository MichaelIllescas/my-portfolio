import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "../components/ProjectCard";

// Imágenes
import dashboardinventiorystock from "../assets/img/dashboard-inventiory-stock.jpeg";
import dashboardinventioryapp from "../assets/img/dashboard-inventiory-app.jpeg";
import dashboardelCeibo from "../assets/img/dashboard-el-ceibo.jpeg";
import solfotofashionimage from "../assets/img/solfotofashion-image.jpeg";
import coblanImage from "../assets/img/coblan-image.jpeg";
import sdrp from "../assets/img/sdrp.jpeg";
import coblanAdmin from "../assets/img/image-coblan-system-admin.png";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 3 },
    desktop: { breakpoint: { max: 1400, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const projects = [
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
      <h1 className="mt-3 mb-3 text-center">🚀 Proyectos destacados</h1>
      <p className="text-center mx-auto mb-4" style={{ maxWidth: "850px" }}>
        Cada proyecto refleja mi capacidad para{" "}
        <strong>liderar el ciclo completo de desarrollo</strong>: desde el{" "}
        <strong>análisis y diseño arquitectónico</strong> hasta la{" "}
        <strong>implementación, pruebas y despliegue</strong>.  
        Todas las soluciones están pensadas para <strong>escalabilidad, seguridad y experiencia de usuario</strong>.
      </p>

      <div className="container-fluid">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          arrows
          keyBoardControl
          pauseOnHover
          centerMode={!isMobile}
        >
          {projects.map((project, index) => (
            <div key={index} className="p-2" data-aos="fade-up">
              <ProjectCard
                {...project}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;

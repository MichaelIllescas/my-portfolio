import { useState } from "react";
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

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
    desktop: { breakpoint: { max: 1200, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const projects = [
    {
      title: "Coblan ERP Administrativo",
      tag: "ERP",
      date: "2025 - En desarrollo",
      description:
        "Aplicación web modular para la gestión administrativa de la empresa Coblan. Permite registrar y administrar empleados, clientes, servicios contratados, horas trabajadas, pagos de salarios y reportes financieros. Desarrollada siguiendo principios SOLID, arquitectura en capas y Domain-Driven Design, con autenticación y autorización basada en roles.",
      image: coblanImage,
      frontendUrl: "https://github.com/MichaelIllescas/coblan-system-admin-fronted",
      backendUrl: "https://github.com/MichaelIllescas/coblan_system_admin_backend",
      techList: ["Html5", "Css3", "Bootstrap", "JavaScript", "React", "Java", "Spring Boot", "Spring Security", "JWT", "Spring Data Jpa", "MySql", "Git", "Github"],
    },
    {
      title: "Inventiory App",
      tag: "ERP",
      date: "Enero - Marzo-2025",
      description:
        "ERP web diseñado para PyMEs que necesitan gestionar de forma eficiente la información sus productos, proveedores, clientes, stocks, ventas y facturaciones. Incluye reportes claros y rentables para tomar decisiones estratégicas y optimizar la administración diaria del comercio.",
      image: dashboardinventioryapp,
      frontendUrl: "https://github.com/MichaelIllescas/inventiory-frontend",
      backendUrl: "https://github.com/MichaelIllescas/inventiory-backend",
      techList: ["Html5", "Css3", "Bootstrap", "JavaScript", "React", "Java", "Spring Boot", "Spring Security", "JWT", "Spring Data Jpa", "MySql", "Git" ,"Github", "Gitflow"],
    },
    {
      title: "El Ceibo App",
      tag: "Sistema Interno",
      date: "Enero - Febrero 2025",
      description:
        "Sistema de gestión administrativa de información de socios y jugadores del club Centro Social y Deportivo El Ceibo. Permite registrar socios, administrar pagos, generar reportes de ingresos y descargar comprobantes. Optimizado para dispositivos móviles.",
      image: dashboardelCeibo,
      frontendUrl: "https://github.com/MichaelIllescas/el-ceibo-frontEnd",
      backendUrl: "https://github.com/MichaelIllescas/inventiory-backend",
      techList: ["Html5", "Css3", "Bootstrap", "JavaScript", "React", "Java", "Spring", "Spring Security", "JWT", "Spring Data Jpa", "MySql", "Git","Github", "Gitflow"],
    },
    {
      title: "Sistema de Registro de Detenidos Penales (SDRP)",
      tag: "Sistema Interno",
      date: "Marzo - Noviembre 2024",
      description:
        "Aplicación web diseñada para registrar y gestionar información de detenidos penales en una seccional policial. Permite registrar, consultar y administrar la información de manera eficiente e intuitiva agilizando de manera eficiente los procesos internos en la dependencia.",
      image: sdrp,
      githubUrl: "https://github.com/MichaelIllescas/SistemaRegistroDetenidos",
      techList: ["Html5", "Css3", "Bootstrap", "Java", "JSP", "JPA","EclipseLink", "MySql", "Git", "Github"],
    },
    {
      title: "Inventiory Stocks",
      tag: "ERP",
      date: "Junio - Julio 2024",
      description:
        "Gestor de inventarios, productos, clientes, ventas, y generador de reportes de ventas para una tienda de ropa.",
      image: dashboardinventiorystock,
      githubUrl: "https://github.com/MichaelIllescas/Inventiory-Spring-Boot-Thymeleaf",
      techList: ["Html5", "Css3", "Bootstrap", "Thymeleaf", "Java", "Spring Boot", "Spring Data Jpa", "Spring Security", "JWT", "MySql", "Git", "Hithub"],
    },
    {
      title: "Coblan Servicios",
      tag: "Sitio Web",
      date: "Enero 2025",
      description:
        "Landing page profesional de la empresa Coblan, diseñada para promocionar servicios de limpieza, cuidado y asistencia de personas. Cuenta con diseño responsive y formulario de contacto.",
      image: coblanImage,
      githubUrl: "https://github.com/MichaelIllescas/coblan",
      demoUrl: "https://coblan.org",
      techList: ["Html", "Css", "Bootstrap", "JavaScript", "Git", "github"],
    },
    {
      title: "Sol FotoFashion",
      tag: "Sitio Web",
      date: "Diciembre 2024",
      description:
        "Sitio web empresarial para la empresa Sol.FotoFashion, diseñado para promocionar servicios de cabina fotográfica para eventos. Incluye galerías, formulario de contacto y diseño visual atractivo.",
      image: solfotofashionimage,
      githubUrl: "https://github.com/MichaelIllescas/web-sol-fotofashion",
      demoUrl: "https://solfotofashion.com/",
      techList: ["Html", "Css", "Bootstrap", "JavasScript", "Git", "GitHub"],
    },
  ];

  return (
    <section className="project-section py-5 mb-4" data-aos="fade-left" id="proyectos">
      <h1 className="mt-3 mb-4 text-center">Últimos trabajos</h1>
      <p className="text-center mx-auto mb-4" style={{ maxWidth: "800px" }}>
        Cada uno de los siguientes proyectos fue <strong>diseñado, desarrollado e implementado íntegramente por mí</strong>. Estuve a cargo de todo el ciclo de vida del software, desde el <strong>relevamiento de requerimientos</strong>, análisis y diseño de la arquitectura, hasta el <strong>desarrollo, pruebas, despliegue y mantenimiento</strong> de las aplicaciones.
      </p>

      <div className="container-fluid">
        <Carousel responsive={responsive} infinite autoPlay={false} arrows keyBoardControl>
          {projects.map((project, index) => (
            <div key={index} className="p-2">
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

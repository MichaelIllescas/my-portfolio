import inventioryLogin from '../assets/img/inventioryLogin.jpeg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from '../components/ProjectCard'
import dashboardinventiorystock from '../assets/img/dashboard-inventiory-stock.jpeg';
import dashboardinventioryapp from '../assets/img/dashboard-inventiory-app.jpeg';
import dashboardelCeibo from '../assets/img/dashboard-el-ceibo.jpeg';
import solfotofashionimage from '../assets/img/solfotofashion-image.jpeg';
import coblanImage from '../assets/img/coblan-image.jpeg';
import sdrp from '../assets/img/sdrp.jpeg';
const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  

  const projects = [
    {
      title: 'Inventiory App',
      description:
    "ERP web diseñado para PyMEs que necesitan gestionar de forma eficiente la información sus productos, proveedores, clientes, stocks, ventas y facturaciones. Incluye reportes claros y rentables para tomar decisiones estratégicas y optimizar la administración diaria del comercio."   ,
   image: dashboardinventioryapp,
      frontendUrl: 'https://github.com/MichaelIllescas/inventiory-frontend',
      backendUrl: 'https://github.com/MichaelIllescas/inventiory-backend',
      techList: [
        'html5', 'css3',  'bootstrap', 'javascript', 'react',  'java', 'spring', 'springsecurity', 'jwt', 'spring data jpa',
        'mysql',  'github', 'gitflow',
      ],
    },
   
    {
      title: 'El Ceibo App',
      description:
        'Sistema de gestión administrativa de información de socios y jugadores del club Centro Social y Deportivo El Ceibo. Permite registrar socios, administrar pagos, generar reportes de ingresos y descargar comprobantes. Optimizado para dispositivos móviles.',
      image: dashboardelCeibo,
      frontendUrl: 'https://github.com/MichaelIllescas/el-ceibo-frontEnd',
      backendUrl: 'https://github.com/MichaelIllescas/inventiory-backend',
      techList: [
        'html5', 'css3', 'bootstrap', 'javascript', 'react',  'java','spring', 'springsecurity',  'jwt', 'spring data jpa',
        'mysql',  'github', 'gitflow',
      ],
    },
    {
      title: 'Sistema de Registro de Detenidos Penales (SDRP)',
      description:
        'Aplicación web diseñada para registrar y gestionar información de detenidos penales en una seccional policial. Permite registrar, consultar y administrar la información de manera eficiente e intuitiva agilizando de manera eficiente los procesos internos en la dependencia.',
      image: sdrp,
      githubUrl: 'https://github.com/MichaelIllescas/SistemaRegistroDetenidos',
      techList: [
        'html5', 'css3', 'bootstrap','java', 'jsp', 'jpa',
        'mysql', 
      ],
    },
    {
      title: 'Inventiory Stocks',
      description:
        'Gestor de inventarios, productos, clientes, ventas, y generador de reportes de ventas para una tienda de ropa.',
      image: dashboardinventiorystock,
      githubUrl: 'https://github.com/MichaelIllescas/Inventiory-Spring-Boot-Thymeleaf',
      techList: [
        'html', 'css', 'bootstrap', 'thymeleaf',
        'java', 'spring boot', 'spring data jpa', 'spring security',
        'jwt', 'mysql', 'git', 'github',
      ],
    },
    {
      title: 'Coblan Servicios',
      description:
        'Sitio web profesional de la empresa Coblan, diseñado para promocionar servicios de limpieza, cuidado y asistencia de personas, como asi tambien nexo para contratación de empleados.',
      image: coblanImage,
      githubUrl: 'https://github.com/MichaelIllescas/coblan',
      demoUrl: 'https://coblan.org',
      techList: ['html', 'css', 'bootstrap', 'javascript', 'git', 'github'], 
    },
    {
      title: 'Sol FotoFashion',
      description:
        'Sitio web empresarial de la empresa Sol.FotoFashion es un proyecto web diseñado para promocionar servicios de cabina fotográfica para eventos. Presenta una interfaz visual atractiva con galerías, información sobre servicios y un formulario de contacto.',
      image: solfotofashionimage,
      githubUrl: 'https://github.com/MichaelIllescas/web-sol-fotofashion',
      demoUrl: 'https://solfotofashion.com/',
      techList: ['html', 'css', 'bootstrap', 'javascript', 'git', 'github'], 
    },
  ]

  
  return (
    <section className="project-section py-5 mb-4" data-aos="fade-left">
    <h1 className="mb-4 text-center">Últimos trabajos</h1>
  
    <div className="container-fluid">
      <Carousel responsive={responsive} infinite autoPlay={false} arrows keyBoardControl>
        {projects.map((project, index) => (
          <div key={index} className="p-2">
            <ProjectCard {...project} />
          </div>
        ))}
      </Carousel>
    </div>
  </section>
  
  
  );
};

export default Projects

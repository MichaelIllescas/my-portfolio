import fotoPerfil from "../assets/img/img-generic.jpg";
import cv from "../assets/cv/Michael_Illescas_CV_Backend_Developer2025.pdf";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiDocker } from "react-icons/si";
import { FaRocket, FaFileAlt } from "react-icons/fa";

function Home() {
  return (
    <section
      className="d-flex align-items-center py-5 px-3 home-section pt-1 section-home"
      data-aos="fade-left"
    >
      <div className="container py-4">
        <div className="row align-items-center mt-5">
          {/* Columna de la imagen */}
          <div className="col-lg-5 d-flex justify-content-center mb-4 mb-lg-0">
            <img
              src={fotoPerfil}
              alt="Michael Jonathan Illescas - Desarrollador de Software"
              className="profile-img"
              style={{
                borderRadius: "50%",
                width: "100%",
                maxWidth: "300px",
                height: "300px",
                objectFit: "cover",
                border: "6px solid rgba(19, 31, 59, 0.79)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.25)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.2)";
              }}
            />
          </div>

          {/* Columna del contenido */}
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="fw-bold">Michael Jonathan Illescas</h1>

            <div className="text-animated">
              <TypeAnimation
                sequence={[
                  "Backend con Java + Spring Boot — APIs escalables",
                  2000,
                  "Full Stack con React — Interfaces modernas",
                  2000,
                  "Arquitectura de Software — Diseño limpio",
                  2000,
                ]}
                speed={30}
                wrapper="h2"
                repeat={Infinity}
                style={{
                  fontSize: "1.6em",
                  fontWeight: "600",
                  color: "#405d77",
                }}
              />
            </div>

            <p className="mt-4">
              Desarrollo sistemas backend con{" "}
              <strong>Java + Spring Boot</strong>, complementados con interfaces
              dinámicas en <strong>React</strong>. Mi enfoque está en{" "}
              <strong>código limpio, escalabilidad y experiencia de usuario</strong>.
            </p>

            <p className="fst-italic text-home-secondary">
              "Construyo software con propósito: soluciones que optimizan
              procesos y generan impacto real."
            </p>

            {/* Badges de tecnologías */}
            <div className="d-flex flex-wrap gap-3 mt-4 tecnologies">
              <span className="badge bg-light text-dark d-flex align-items-center gap-2">
                <FaJava color="#f89820" /> Java
              </span>
              <span className="badge bg-light text-dark d-flex align-items-center gap-2">
                <SiSpringboot color="#6db33f" /> Spring Boot
              </span>
              <span className="badge bg-light text-dark d-flex align-items-center gap-2">
                <FaReact color="#61dbfb" /> React
              </span>
              <span className="badge bg-light text-dark d-flex align-items-center gap-2">
                <SiDocker color="#2496ed" /> Docker
              </span>
            </div>

            {/* Botones y enlaces */}
       
<div className="d-flex gap-3 mt-5 flex-wrap justify-content-center justify-content-sm-start cta-wrap">
  <button
    className="btn btn-primary btn-unify"
    onClick={() => {
      const section = document.getElementById("proyectos");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <FaRocket className="me-2" /> Explorar proyectos
  </button>

  <a href={cv} className="btn btn-secondary btn-unify" download>
    <FaFileAlt className="me-2" /> Descargar CV
  </a>

  <a
    href="https://github.com/MichaelIllescas"
    className="btn btn-outline-dark btn-unify bg-dark text-white"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="me-2" /> GitHub
  </a>

  <a
    href="https://linkedin.com/in/michael-jonathan-illescas"
    className="btn btn-outline-primary btn-unify"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="me-2" /> LinkedIn
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

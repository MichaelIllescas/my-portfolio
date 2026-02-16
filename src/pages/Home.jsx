import fotoPerfil from "../assets/img/img-generic.jpg";
import cv from "../assets/cv/Michael_Illescas_CV_FullStack_Developer2025.pdf";
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
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
              }}
            />
          </div>

          {/* Columna del contenido */}
          <div className="col-lg-7 text-center text-lg-start">
            <div className="mb-3">
              <span className="badge bg-success px-3 py-2 mb-3 d-inline-flex align-items-center">
                <span className="me-2">●</span> Disponible para proyectos
              </span>
            </div>

            <h1
              className="fw-bold mb-3"
              style={{ color: "#ffffff", fontSize: "2.8rem" }}
            >
              Michael Jonathan Illescas
            </h1>

            <h2
              className="mb-4"
              style={{
                fontSize: "1.6rem",
                fontWeight: "500",
                color: "#a8b2c1",
                lineHeight: "1.4",
              }}
            >
              Full Stack Developer especializado en Java & React
            </h2>

            <p
              className="mb-4"
              style={{
                color: "#d1d5db",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              Desarrollo aplicaciones web completas con{" "}
              <strong>Java + Spring Boot</strong> en el backend y{" "}
              <strong>React</strong> en el frontend. Enfocado en código limpio y
              soluciones escalables.
            </p>

            {/* Badges de tecnologías */}
            <div className="d-flex flex-wrap gap-3 mb-4 tecnologies">
              <span
                className="badge bg-light text-dark d-flex align-items-center gap-2"
                style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
              >
                <FaJava color="#f89820" size={16} /> Java
              </span>
              <span
                className="badge bg-light text-dark d-flex align-items-center gap-2"
                style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
              >
                <SiSpringboot color="#6db33f" size={16} /> Spring Boot
              </span>
              <span
                className="badge bg-light text-dark d-flex align-items-center gap-2"
                style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
              >
                <FaReact color="#61dbfb" size={16} /> React
              </span>
              <span
                className="badge bg-light text-dark d-flex align-items-center gap-2"
                style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
              >
                <SiDocker color="#2496ed" size={16} /> Docker
              </span>
            </div>

            {/* Botones y enlaces */}
            <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-sm-start cta-wrap">
              <button
                className="btn btn-primary"
                onClick={() => {
                  const section = document.getElementById("proyectos");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FaRocket className="me-2" /> Ver proyectos
              </button>

              <a href={cv} className="btn btn-secondary" download>
                <FaFileAlt className="me-2" /> Descargar CV
              </a>

              <a
                href="https://github.com/MichaelIllescas"
                className="btn btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="me-2" /> GitHub
              </a>

              <a
                href="https://linkedin.com/in/michael-jonathan-illescas"
                className="btn btn-outline-info"
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

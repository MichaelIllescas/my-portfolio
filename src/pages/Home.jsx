import fotoPerfil from "../assets/img/fotoPerfil.png";
import cv from "../assets/cv/CV-ILLESCAS-MICHAEL-JONATHAN.pdf";
import { Link } from "react-router-dom";


function Home() {
  return (
    <section
      className="d-flex align-items-center py-5 px-3 home-section"
      data-aos="fade-left"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Columna de la imagen */}
          <div className="col-lg-5 d-flex justify-content-center mb-4 mb-lg-0">
            <img
              src={fotoPerfil}
              alt="Jonathan Illescas - Desarrollador de Software"
              className="rounded"
              style={{
                background: `linear-gradient(135deg,rgba(236, 239, 240, 0.88),rgb(17, 124, 159))`,
                width: "100%",
                maxWidth: "300px",
                height: "300px",
                objectFit: "cover",
                border: "6px solid rgba(19, 31, 59, 0.79)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          {/* Columna del contenido */}
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="fw-semibold mb-3">
              Michael Jonathan Illescas– Desarrollador de Software
            </h1>

            <p className="mb-3">
              Me especializo en el desarrollo web <strong>backend con Java y Spring Boot</strong>,
              y complementando mi perfil en el desarrollo de interfaces
              modernas utilizando <strong>React y JavaScript</strong>.
            </p>

            <p className="mb-3">
              Creo soluciones web funcionales y escalables, con foco en la
              calidad del código y la experiencia del usuario.
            </p>

            <p className="fst-italic text-home-secondary">
              "Mi objetivo es desarrollar aplicaciones modernas, mantenibles y
              centradas en las personas."
            </p>

            <div className="d-flex gap-3 mt-4 flex-wrap justify-content-center justify-content-sm-start">
              <Link to={"/projects"} className="btn btn-primary">
                Ver proyectos
              </Link>
              <a href={cv} className="btn btn-secondary" download>
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

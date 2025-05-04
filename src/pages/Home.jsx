import fotoPerfil from "../assets/img/img-generic.jpg";
import cv from "../assets/cv/JonathanIllescas_CV_2025.pdf";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section
      className="d-flex align-items-center py-5 px-3 home-section pt-1  section-home"
      data-aos="fade-left"
    >
      <div className="container py-4 ">
        <div className="row align-items-center mt-5">
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
            <h1 className="fw-bold">Michael Jonathan Illescas</h1>
            <TypeAnimation
              sequence={[
                "Desarrollador Backend con Java",
                2000,
                "Desarrollador Full Stack con React",
                2000,
                "Arquitecto de Software en formación",
                2000,
              ]}
              speed={50}
              wrapper="h1"
              repeat={Infinity}
              style={{
                fontSize: "2.1em",
                fontWeight: "bold",
                color: "#405d77",
              }}
            />

            <p className="mb-4">
              Especializado en desarrollo backend con{" "}
              <strong> Java y Spring Boot </strong>. Completo mi perfil con
              experiencia en interfaces modernas utilizando{" "}
              <strong>React y JavaScript</strong>..
            </p>

            <p className="mb-4">
              Creo soluciones web funcionales y escalables, con foco en la
              calidad del código y la experiencia del usuario.
            </p>

            <p className="fst-italic text-home-secondary">
              "Construyo software con propósito: resolver problemas, automatizar
              procesos y mejorar la vida de las personas"
            </p>

            <div className="d-flex gap-3 mt-5 flex-wrap justify-content-center justify-content-sm-start">
              <button
                className="btn btn-primary"
                onClick={() => {
                  const section = document.getElementById("proyectos");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Ver proyectos
              </button>

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

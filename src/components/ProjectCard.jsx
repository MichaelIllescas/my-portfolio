import TechIcon from "../components/TechIcons";

const ProjectCard = ({
  title,
  description,
  image,
  githubUrl,
  frontendUrl,
  backendUrl,
  demoUrl,
  techList = [],
}) => {
  return (
    <div className="col" style={{  width: "100%", maxWidth: "400px", margin: "30px auto"}}>
      <div className="card h-100 shadow-sm rounded-4" style={{minHeight:"700px"}}>
        <img
          src={image}
          className="card-img-top rounded-top-4"
          alt={title}
          style={{ height: "250px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h3 className="card-title fw-bold">{title}</h3>
          <p className="card-text small flex-grow-1 text-justify" >{description}</p>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {techList.map((tech) => (
              <TechIcon key={tech} tech={tech} />
            ))}
          </div>
        </div>

        <div className="card-footer bg-white border-0 d-flex justify-content-end gap-2 flex-wrap">
          {frontendUrl ? (
            <a
              href={frontendUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary btn-sm rounded-pill"
            >
              Frontend
            </a>
          ) : githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary btn-sm rounded-pill"
            >
              GitHub
            </a>
          )}

          {backendUrl && (
            <a
              href={backendUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-secondary btn-sm rounded-pill"
            >
              Backend
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm rounded-pill"
            >
              Ver sitio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

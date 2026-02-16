import { useState } from "react";
import useContactForm from "../hooks/useContactForm";
import { LoadingScreen } from "../components/LoadingScreen";
import Swal from "sweetalert2";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const { sendContactForm, loading } = useContactForm();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!form.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())) {
      newErrors.email = "El correo electrónico no es válido.";
    }
    if (!form.message.trim()) newErrors.message = "El mensaje no puede estar vacío.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const result = await sendContactForm(form);
    if (result === true) {
      Swal.fire({
        icon: "success",
        title: "📨 ¡Mensaje enviado!",
        text: "Gracias por contactarme, te responderé pronto.",
        confirmButtonColor: "#0d6efd",
      });
      setForm({ name: "", email: "", message: "" });
    } else {
      Swal.fire({
        icon: "error",
        title: "⚠️ Ocurrió un error",
        text: Array.isArray(result)
          ? result.join("\n")
          : "No se pudo enviar el mensaje. Probá de nuevo más tarde.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <section
      className="contact-container py-5 mb-5"
      id="contacto"
      style={{
        minHeight: "100vh"
      }}
    >
      {/* Hero de la sección */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-5 fw-bold mb-3" style={{color: "#ffffff"}}>
              Trabajemos Juntos
            </h1>
            <p className="lead mb-4" style={{color: "#a8b2c1"}}>
              ¿Tienes un proyecto en mente? Me encantaría saber más sobre tu idea y cómo puedo ayudarte a hacerla realidad
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          {/* Información de contacto */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info-card">
              <h3 style={{color: "#61dbfb"}} className="mb-4">
                Información de Contacto
              </h3>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="contact-details">
                  <h5>Ubicación</h5>
                  <p>Argentina</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-clock-fill"></i>
                </div>
                <div className="contact-details">
                  <h5>Tiempo de respuesta</h5>
                  <p>24-48 horas</p>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="social-links">
                <h5 style={{color: "#ffffff"}} className="mb-3">Conectemos</h5>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/MichaelIllescas"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    <i className="bi bi-github"></i>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/michael-jonathan-illescas"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    <i className="bi bi-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="contact-form-card">
              <h3 style={{color: "#61dbfb"}} className="mb-4">
                Envíame un Mensaje
              </h3>
              <form onSubmit={handleSubmit} noValidate>
                {loading ? (
                  <div className="form-loading-container">
                    <LoadingScreen />
                  </div>
                ) : (
                  <>
                    {/* Nombre */}
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label">
                        Nombre Completo
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-person-fill"></i>
                        </span>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                          id="name"
                          placeholder="Tu nombre completo"
                          value={form.name}
                          onChange={handleChange}
                          aria-label="Nombre"
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">
                        Correo Electrónico
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-envelope-fill"></i>
                        </span>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          id="email"
                          placeholder="tu@email.com"
                          value={form.email}
                          onChange={handleChange}
                          aria-label="Correo electrónico"
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        Mensaje
                      </label>
                      <textarea
                        className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        id="message"
                        rows="5"
                        placeholder="Cuéntame sobre tu proyecto o consulta..."
                        value={form.message}
                        onChange={handleChange}
                        aria-label="Mensaje"
                      ></textarea>
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>

                    {/* Botón */}
                    <div className="text-center">
                      <button type="submit" className="contact-submit-btn" disabled={loading}>
                        <i className="bi bi-send-fill me-2"></i>
                        Enviar Mensaje
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style>{`
        .contact-info-card, .contact-form-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          height: 100%;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: translateX(5px);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(97, 219, 251, 0.1);
          border-radius: 10px;
          border: 1px solid rgba(97, 219, 251, 0.3);
          color: #61dbfb;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .contact-details h5 {
          color: #ffffff;
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        .contact-details p {
          color: #a8b2c1;
          margin: 0;
          font-size: 0.95rem;
        }

        .social-links {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: #a8b2c1;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .social-btn:hover {
          background: rgba(97, 219, 251, 0.1);
          border-color: rgba(97, 219, 251, 0.3);
          color: #61dbfb;
          transform: translateY(-2px);
        }

        .form-label {
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .form-control {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 0.75rem 1rem;
        }

        .form-control:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(97, 219, 251, 0.5);
          box-shadow: 0 0 0 0.2rem rgba(97, 219, 251, 0.25);
          color: #ffffff;
        }

        .form-control::placeholder {
          color: #6c757d;
        }

        .input-group-text {
          background: rgba(97, 219, 251, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #61dbfb;
        }

        .contact-submit-btn {
          background: linear-gradient(135deg, #61dbfb, #0ea5e9);
          border: none;
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 10px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #0ea5e9, #61dbfb);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(97, 219, 251, 0.3);
        }

        .contact-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-loading-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-info-card, .contact-form-card {
            padding: 1.5rem;
          }
          
          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }
          
          .social-btn {
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;

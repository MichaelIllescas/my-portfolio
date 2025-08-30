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
      className="container contact-container p-5 mb-5 pt-5"
      data-aos="fade-left"
      id="contacto"
    >
      <h1 className="text-center mb-3">📩 Contactame</h1>
      <p className="text-center text-muted mb-5">
        Si tenés una idea, proyecto o consulta, escribime y te responderé lo antes posible 🚀
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} noValidate>
            {loading ? (
              <LoadingScreen />
            ) : (
              <>
                {/* Nombre */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Nombre
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person-fill"></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      id="name"
                      placeholder="Ej: Juan Pérez"
                      value={form.name}
                      onChange={handleChange}
                      aria-label="Nombre"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Correo electrónico
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      id="email"
                      placeholder="ejemplo@email.com"
                      value={form.email}
                      onChange={handleChange}
                      aria-label="Correo electrónico"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>

                {/* Mensaje */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Mensaje
                  </label>
                  <textarea
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    id="message"
                    rows="4"
                    placeholder="Escribí tu mensaje..."
                    value={form.message}
                    onChange={handleChange}
                    aria-label="Mensaje"
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
              </>
            )}

            {/* Botón */}
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary px-4 py-2" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="bi bi-send-fill me-2"></i> Enviar
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Redes */}
          <hr className="my-5" />
          <div className="text-center">
            <p className="fw-semibold">También podés encontrarme en:</p>
            <a
              href="https://github.com/MichaelIllescas"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark me-2"
            >
              <i className="bi bi-github me-1"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/michael-jonathan-illescas"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              <i className="bi bi-linkedin me-1"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

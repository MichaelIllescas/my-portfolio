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
    setErrors({ ...errors, [e.target.id]: "" }); // limpia error mientras escribe
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!form.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      newErrors.email = "El correo electrónico no es válido.";
    }

    if (!form.message.trim()) {
      newErrors.message = "El mensaje no puede estar vacío.";
    }

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
        title: "Mensaje enviado",
        text: "Gracias por contactarme, te responderé pronto.",
      });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      Swal.fire({
        icon: "error",
        title: "Ocurrió un error",
        text: Array.isArray(result)
          ? result.join("\n")
          : "No se pudo enviar el mensaje.",
      });
    }
  };

  return (
    <section
      className="container contact-container p-5 mb-4 scroll-margin-top section-contact  pt-5 py-5"
      data-aos="fade-left"
      id="contacto"
    >
      <h1 className="mb-4 text-center mt-5 mb-5">Contacto</h1>

      <div className="row justify-content-center ">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} noValidate>
            {loading ? (
              <LoadingScreen />
            ) : (
              <>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    id="message"
                    rows="4"
                    placeholder="Escribí tu mensaje..."
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>
              </>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>

          <hr className="my-5" />

          <div className="text-center">
            <p>O encontrame en mis redes:</p>
            <a
              href="https://github.com/MichaelIllescas"
              target="_blank"
              rel="noreferrer"
              className="me-3"
            >
              <i className="bi bi-github fs-3"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/michael-jonathan-illescas"
              target="_blank"
              rel="noreferrer"
              className="me-3"
            >
              <i className="bi bi-linkedin fs-3 text-primary"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

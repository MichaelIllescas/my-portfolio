import { useState } from "react";
import useContactForm from "../hooks/useContactForm";
import { LoadingScreen } from "../components/LoadingScreen";
import Swal from "sweetalert2";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { sendContactForm, loading } = useContactForm();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await sendContactForm(form);

    if (result === true) {
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        text: "Gracias por contactarme, te responderé pronto.",
      });
      setForm({ name: "", email: "", message: "" });
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
    <section className="container contact-container p-5 mb-4 scroll-margin-top" data-aos="fade-left" id="contact">
      <h1 className="mb-4 text-center">Contacto</h1>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
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
                    className="form-control"
                    id="name"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Escribí tu mensaje..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
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
              href="https://linkedin.com/in/tu-perfil"
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

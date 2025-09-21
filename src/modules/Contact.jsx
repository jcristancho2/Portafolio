import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const { t } = useTranslation();
  const [selectedProject] = useState("");
  const [selectedContact, setSelectedContact] = useState("Email");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactMethods = ["Email", "WhatsApp"];

  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    let url = "";
    let body = {};

    if (selectedContact === "Email") {
      url = `${process.env.REACT_APP_API_URL}/email/send`;
      body = {
        to: formData.email,
        subject: `Nuevo mensaje de ${formData.name}`,
        message: formData.message,
      };
    } else if (selectedContact === "WhatsApp") {
      url = `${process.env.REACT_APP_API_URL}/whatsapp/send`;
      body = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };
    } else {
      toast.info(
        <div>
          <strong>📎 Información</strong>
          <p>Para LinkedIn te contactaré manualmente.</p>
        </div>
      );
      setLoading(false);
      return;
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.warn("La respuesta no es JSON");
      data = {};
    }

    if (data.status === "success") {
      toast.success(
        <div>
          <strong>✅ Éxito</strong>
          <p>Mensaje enviado correctamente. Te contactaré pronto.</p>
        </div>,
        { autoClose: 5000, theme: "colored" }
      );
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error(
        <div>
          <strong>❌ Error</strong>
          <p>Hubo un problema al enviar tu mensaje. Intenta nuevamente.</p>
        </div>,
        { autoClose: 6000, theme: "colored" }
      );
    }
  } catch (error) {
    console.error("Error enviando formulario:", error);
    toast.warn(
      <div>
        <strong>⚠️ Advertencia</strong>
        <p>Error de conexión con el servidor. Verifica tu internet.</p>
      </div>,
      { autoClose: 6000, theme: "colored" }
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" className="min-h-screen bg-transparent text-white relative overflow-hidden">
      <ToastContainer position="top-right" autoClose={4000} />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            CONTACTO
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Suelo responder en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-10 max-w-2xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label className="flex text-sm font-medium text-gray-300 mb-2 justify-center">
                  Prefiero que me contactes por
                </label>
                <div className="flex gap-5 justify-center">
                  {contactMethods.map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setSelectedContact(method)}
                      className={`px-6 py-2 rounded-lg border transition-all duration-300 text-sm font-medium ${
                        selectedContact === method
                          ? "border-cyan-400 bg-cyan-400 text-black"
                          : "border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame en pocas líneas qué necesitas. Prometo responderte pronto!"
                  rows={4}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                  required
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 text-cyan-400 bg-gray-800 border-gray-600 rounded focus:ring-cyan-400"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-400">
                  Acepto que uses mis datos únicamente para responder este mensaje. No enviarás spam.
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-1/2 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

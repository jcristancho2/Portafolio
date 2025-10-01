import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const { t } = useTranslation();

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
          subject: `${t("contact.emailSubject")} ${formData.name}`,
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
            <strong>📎 {t("contact.infoTitle")}</strong>
            <p>{t("contact.infoLinkedin")}</p>
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
            <strong>✅ {t("contact.successTitle")}</strong>
            <p>{t("contact.successMessage")}</p>
          </div>,
          { autoClose: 5000, theme: "colorgreen" }
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(
          <div>
            <strong>✅✅ {t("contact.errorTitle")}</strong>
            <p>{t("contact.errorMessage")}</p>
          </div>,
          { autoClose: 6000, theme: "colorgreen" }
        );
      }
    } catch (error) {
      console.error("enviando formulario:", error);
      toast.warn(
        <div>
          <strong>⚠️ {t("contact.warningTitle")}</strong>
          <p>{t("contact.warningMessage")}</p>
        </div>,
        { autoClose: 6000, theme: "colorgreen" }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-6 sm:py-12 md:py-8 bg-transparent text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300"
    >
      <ToastContainer position="top-right" autoClose={4000} />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-cyan-400 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent">
            {t("contact.title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-xl mx-auto transition-colors duration-300">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-6 max-w-xl mx-auto">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-800 rounded-2xl p-6 transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={t("contact.form.placeholderName")}
                  className="w-full p-4 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={t("contact.form.placeholderEmail")}
                  className="w-full p-4 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
              </div>

              {/* Métodos de contacto */}
              <div>
                <label className="flex text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 justify-center transition-colors duration-300">
                  {t("contact.preferContact")}
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
                          : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm  font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  {t("contact.form.message")}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t("contact.form.placeholderMessage")}
                  rows={4}
                  className="w-full p-4 mbg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  required
                />
              </div>

              {/* Privacidad */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 text-cyan-400 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded focus:ring-cyan-400"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {t("contact.privacy")}
                </label>
              </div>

              {/* Botón */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-1/2 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? t("contact.sending") : t("contact.button")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

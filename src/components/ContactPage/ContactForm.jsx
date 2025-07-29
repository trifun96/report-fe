import React, { useState } from "react";
import { sendContactMessage } from "../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";
import Header from "../Header/Header";

const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    try {
      const res = await sendContactMessage(formData);
      setResponseMessage(res.message);
      setFormData({ name: "", email: "", message: "" });
      toast.success(t("contactForm.toastSuccess"), {
        toastId: "sent-request",
        className: "my-toast",
        progressClassName: "my-toast-progress",
      });
      navigate("/");
    } catch (err) {
      setResponseMessage(err.message || t("contactForm.toastError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <h2>{t("contactForm.title")}</h2>
          <p style={{ color: "#2B2B2B" }}>{t("contactForm.description")}</p>

          <input
            type="text"
            name="name"
            placeholder={t("contactForm.namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contactForm.emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={t("contactForm.messagePlaceholder")}
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            style={{
              resize: "vertical",
              padding: "12px 16px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid #c8c9f3",
              color: "black",
              fontSize: "1rem",
            }}
          />
          <button type="submit" disabled={loading}>
            {loading ? t("contactForm.sending") : t("contactForm.sendButton")}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

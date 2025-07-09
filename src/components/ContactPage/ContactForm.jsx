import React, { useState } from "react";
import { sendContactMessage } from "../../api/api";
import "./ContactForm.css";
import Logo from "../Logo/Logo";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
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
    } catch (err) {
      setResponseMessage(err.message || "Greška pri slanju poruke.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Logo />
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Kontaktirajte nas</h2>
        <input
          type="text"
          name="name"
          placeholder="Vaše ime"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Vaš email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Vaša poruka"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ resize: "vertical", padding: "12px 16px", borderRadius: "12px", background: "rgba(255,255,255,0.06)", border: "none", color: "#fff", fontSize: "1rem" }}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Šaljem..." : "Pošalji poruku"}
        </button>
        {responseMessage && <p>{responseMessage}</p>}
      </form>
    </div>
    </>
  );
};

export default ContactForm;

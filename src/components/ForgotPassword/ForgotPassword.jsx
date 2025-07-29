import React, { useState } from "react";
import { forgotPassword } from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import { toast } from "react-toastify";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(email);
      setMessage(res.message);
      toast.success(t("forgotPassword.success"), {
        toastId: "sent-request",
        className: "my-toast",
        progressClassName: "my-toast-progress",
      });
      navigate("/");
    } catch (err) {
      setMessage(`${t("forgotPassword.error")}: ${err?.message || "nepoznato"}`);
    }
  };

  return (
    <>
      <Header />
      <div className="forgot-password-container">
        <form onSubmit={handleSubmit}>
          <h2>{t("forgotPassword.title")}</h2>
          <p>{t("forgotPassword.description")}</p>
          <input
            type="email"
            placeholder={t("forgotPassword.input-placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">{t("forgotPassword.submit-button")}</button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;

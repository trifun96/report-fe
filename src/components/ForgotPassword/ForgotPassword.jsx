import React, { useState } from "react";
import { forgotPassword } from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import { toast } from "react-toastify";
import Logo from "../Logo/Logo";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(email);
      setMessage(res.message);
      toast.success("Link za promenu lozinke je poslat na vaš mejl.", {
        toastId: "sent-request",
        className: "my-toast",
        progressClassName: "my-toast-progress",
      });
      navigate("/");
    } catch (err) {
      setMessage("Greška: " + (err?.message || "nepoznato"));
    }
  };

  return (
    <>
      <Logo />
      <div className="forgot-password-container">
        <form onSubmit={handleSubmit}>
          <h2>Zaboravili ste lozinku?</h2>
          <p>
            Unesite svoj email i uskoro ćete dobiti poruku sa uputstvima za
            resetovanje lozinke.
          </p>
          <input
            type="email"
            placeholder="Unesite email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Pošalji link</button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;

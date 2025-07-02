import React, { useState } from "react";
import { forgotPassword } from "../../api/api";
import "./ForgotPassword.css";
import Logo from "../Logo/Logo";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(email);
      setMessage(res.message);
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
          {message && <p>{message}</p>}
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;

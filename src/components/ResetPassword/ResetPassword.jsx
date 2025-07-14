import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../api/api";
import "./ResetPassword.css";
import Logo from "../Logo/Logo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Lozinke se ne poklapaju.");
      return;
    }

    try {
      await resetPassword(token, password);
      toast("Lozinka je uspešno promenjena!", {
        className: "my-toast",
        progressClassName: "my-toast-progress",
      });
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Logo />
      <div className="reset-container">
        <form onSubmit={handleSubmit}>
          <h2>Kreirajte novu lozinku</h2>
          <p>
            Unesite lozinku koja je sigurna i lako pamtljiva — vaša sigurnost
            nam je na prvom mestu.
          </p>
          <input
            type="password"
            placeholder="Nova lozinka"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Potvrdi lozinku"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && (
            <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>
          )}
          <button type="submit">Resetuj lozinku</button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;

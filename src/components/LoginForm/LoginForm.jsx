import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import Logo from "../Logo/Logo";

const AuthForm = ({ mode }) => {
  const [isLogin, setIsLogin] = useState(mode === "login");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(mode === "login");
  }, [mode]);

  const toggleMode = () => {
    if (isLogin) {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
    <Logo/>
    <div className="auth-background">
      <div className="auth-form-container">
        <h2 className="auth-title">{isLogin ? "Prijava" : "Registracija"}</h2>
        <p className="auth-intro">
          {isLogin
            ? "Dobrodošli nazad! Molimo vas da unesete svoje podatke za prijavu."
            : "Napravite novi nalog unosom traženih podataka."}
        </p>
        <form className="auth-form">
          {!isLogin && (
            <input type="text" placeholder="Ime i prezime" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Lozinka" required />
          {!isLogin && (
            <input type="password" placeholder="Potvrdi lozinku" required />
          )}
          <button type="submit" className="auth-button">
            {isLogin ? "Prijavi se" : "Registruj se"}
          </button>
        </form>
        <p className="auth-toggle">
          {isLogin ? "Nemaš nalog?" : "Već imaš nalog?"}{" "}
          <span onClick={toggleMode}>
            {isLogin ? "Registruj se" : "Prijavi se"}
          </span>
        </p>
      </div>
    </div>
        </>
  );
};

export default AuthForm;

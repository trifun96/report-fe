import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { loginUser, registerUser } from "../../api/api";

const AuthForm = ({ mode }) => {
  const [isLogin, setIsLogin] = useState(mode === "login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    delatnost: "",
    adresa: "",
  });

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Lozinke se ne poklapaju");
      return;
    }

    try {
      if (isLogin) {
        // ✅ Login logika
        const response = await loginUser({
          email: formData.email,
          lozinka: formData.password,
        });

        if (response?.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }

        alert("Uspešno prijavljeni");
        navigate("/user/report");
        return;
      }

      // ✅ Registracija logika
      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        lozinka: formData.password,
        delatnost: formData.delatnost,
        adresa: formData.adresa,
      });

      alert("Uspešna registracija");
      navigate("/login");
    } catch (err) {
      alert(err.message || "Došlo je do greške");
      console.error("Greška:", err);
    }
  };

  return (
    <>
      <Logo />
      <div className="auth-background">
        <div className="auth-form-container">
          <h2 className="auth-title">{isLogin ? "Prijava" : "Registracija"}</h2>
          <p className="auth-intro">
            {isLogin
              ? "Dobrodošli nazad! Molimo vas da unesete svoje podatke za prijavu."
              : "Napravite novi nalog unosom traženih podataka."}
          </p>
          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Ime i prezime"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="delatnost"
                  placeholder="Delatnost"
                  required
                  value={formData.delatnost}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="adresa"
                  placeholder="Adresa"
                  required
                  value={formData.adresa}
                  onChange={handleChange}
                />
              </>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Lozinka"
              required
              value={formData.password}
              onChange={handleChange}
            />
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
          {isLogin && (
            <p className="forgot-password">
              <span onClick={() => navigate("/forgot-password")}>
                Zaboravili ste lozinku?
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthForm;

import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { loginUser, registerUser } from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import Header from "../Header/Header";

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
  const { t } = useTranslation();

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

    try {
      if (isLogin) {
        const response = await loginUser({
          email: formData.email,
          lozinka: formData.password,
        });

        if (response?.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }

        toast(t("auth.login-success"), {
          className: "my-toast",
          progressClassName: "my-toast-progress",
        });
        navigate("/user/report");
        return;
      }

      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        lozinka: formData.password,
        delatnost: formData.delatnost,
        adresa: formData.adresa,
      });

      toast(t("auth.signup-success"), {
        className: "my-toast",
        progressClassName: "my-toast-progress",
      });
      navigate("/login");
    } catch (err) {
      alert(err.message || "Došlo je do greške");
      console.error("Greška:", err);
    }
  };

  return (
    <>
      <Header />
      <div className="auth-background">
        <div className="auth-form-container">
          <h2 className="auth-title">
            {t(isLogin ? "auth.login-title" : "auth.signup-title")}
          </h2>
          <p className="auth-intro">
            {t(isLogin ? "auth.login-subtitle" : "auth.signup-subtitle")}
          </p>
          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder={t("auth.name")}
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <select
                  name="delatnost"
                  required
                  value={formData.delatnost}
                  onChange={handleChange}
                >
                  <option value="">{t("auth.select-activity")}</option>
                  <option value="gradjevina-inzenjering">
                    {t("auth.activity.engineering")}
                  </option>
                  <option value="terenske-usluge">
                    {t("auth.activity.field")}
                  </option>
                  <option value="inspekcija-kontrola">
                    {t("auth.activity.inspection")}
                  </option>
                  <option value="upravljanje-projektima">
                    {t("auth.activity.management")}
                  </option>
                  <option value="zdravstvo-stomatologija">
                    {t("auth.activity.healthcare")}
                  </option>
                </select>
                <input
                  type="text"
                  name="adresa"
                  placeholder={t("auth.address")}
                  required
                  value={formData.adresa}
                  onChange={handleChange}
                />
              </>
            )}
            <input
              type="email"
              name="email"
              placeholder={t("auth.email")}
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder={t("auth.password")}
              required
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" className="auth-button">
              {t(isLogin ? "auth.login-button" : "auth.signup-button")}
            </button>
          </form>
          <p className="auth-toggle">
            {t(isLogin ? "auth.no-account" : "auth.have-account")}{" "}
            <span onClick={toggleMode}>
              {t(isLogin ? "auth.register-here" : "auth.login-here")}
            </span>
          </p>
          {isLogin && (
            <p className="forgot-password">
              <span onClick={() => navigate("/forgot-password")}>
                {t("auth.forgot-password")}
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthForm;

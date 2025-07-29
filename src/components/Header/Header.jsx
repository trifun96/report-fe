import { useState, useEffect } from "react";
import { UserRound } from "lucide-react";
import logo from "../../images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const navigate = useNavigate();
  const location = useLocation();
    const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleHome = () => {
    navigate("/");
  };

  const getButtonClass = (path) => {
    if (!isMobile && location.pathname === "/") {
      return "inactive-tab";
    }
    return location.pathname === path ? "active-tab" : "inactive-tab";
  };

  return (
   <header className="header">
      <img src={logo} alt="Logo" />

      <div className="user-section">
        {user ? (
          <>
            <div className="user-icon" onClick={toggleDropdown}>
              <UserRound size={35} color="#000000ff" />
            </div>
            {menuOpen && (
              <div className="dropdown">
                <div className="user-name">
                  <a className="profile-link">{user.name}</a>
                </div>
                <button className="logout-button" onClick={onLogout}>
                  {t("auth.logout")}
                </button>
              </div>
            )}
          </>
        ) : isMobile ? (
          location.pathname === "/" ? (
            <button
              className={`tab-button ${getButtonClass("/signup")}`}
              onClick={handleSignUp}
            >
              {t("auth.signup", "Sign Up")}
            </button>
          ) : (
            <button className="tab-button inactive-tab" onClick={handleHome}>
              {t("auth.home")}
            </button>
          )
        ) : (
          <>
            {["/login", "/contact", "/reset-password", "/forgot-password"].includes(
              location.pathname
            ) && (
              <>
                <button className="tab-button inactive-tab" onClick={handleHome}>
                  {t("auth.home")}
                </button>
                <button
                  className={`tab-button ${getButtonClass("/login")}`}
                  onClick={handleLogin}
                >
                  {t("auth.login", "Login")}
                </button>
              </>
            )}

            {location.pathname === "/signup" && (
              <>
                <button className="tab-button inactive-tab" onClick={handleHome}>
                  {t("auth.home")}
                </button>
                <button
                  className={`tab-button ${getButtonClass("/signup")}`}
                  onClick={handleSignUp}
                >
                  {t("auth.signup", "Sign Up")}
                </button>
              </>
            )}

            {location.pathname === "/" && (
              <>
                <button
                  className={`tab-button ${getButtonClass("/login")}`}
                  onClick={handleLogin}
                >
                  {t("auth.login", "Login")}
                </button>
                <button
                  className={`tab-button ${getButtonClass("/signup")}`}
                  onClick={handleSignUp}
                >
                  {t("auth.signup", "Sign Up")}
                </button>
              </>
            )}

            {!["/", "/login", "/signup", "/contact", "/reset-password", "/forgot-password"].includes(
              location.pathname
            ) && (
              <>
                <button
                  className={`tab-button ${getButtonClass("/login")}`}
                  onClick={handleLogin}
                >
                  {t("auth.login", "Login")}
                </button>
                <button
                  className={`tab-button ${getButtonClass("/signup")}`}
                  onClick={handleSignUp}
                >
                  {t("auth.signup", "Sign Up")}
                </button>
              </>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

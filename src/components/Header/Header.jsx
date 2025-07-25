import { useState } from "react";
import { UserRound } from "lucide-react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
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
                  <a className="profile-link">
                    {user.name}
                  </a>
                </div>
                <button className="logout-button" onClick={onLogout}>
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <button className="login-button desktop-only" onClick={handleLogin}>
              LOG IN
            </button>

            <button className="signup-button mobile-only" onClick={handleSignUp}>
              SIGN UP
            </button>

            <button className="signup-button desktop-only" onClick={handleSignUp}>
              SIGN UP
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

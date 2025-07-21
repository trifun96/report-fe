import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { UserRound } from "lucide-react";
import logo from "../../images/docora-logo.png";
import "./Header.css";

const Header = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="user-section">
        <div className="user-icon" onClick={toggleDropdown}>
          <UserRound size={35} color="#000000ff" />
        </div>

        {menuOpen && (
          <div className="dropdown">
            <div className="user-name">
              {user ? (
                <a className="profile-link">
                  {user.name}
                </a>
              ) : (
                "Gost"
              )}
            </div>
            <button className="logout-button" onClick={onLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

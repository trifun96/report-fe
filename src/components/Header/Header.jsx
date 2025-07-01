import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
    
  <img
        src={logo} 
        alt="Logo"
        className="logo"
      />
      <div className="user-section">
        <div className="user-icon" onClick={toggleDropdown}>
          <FaUserCircle size={28} color="#ffffff" />
        </div>

        {menuOpen && (
          <div className="dropdown">
            <div className="user-name">{user ? user.name : "Gost"}</div>
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

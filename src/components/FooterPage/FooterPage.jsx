import "./FooterPage.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h6 className="footer-logo">Docora</h6>
          <p className="footer-description">
            Docora je platforma koja olakšava kreiranje izveštaja i beleški
            korišćenjem glasa. Bilo da ste profesionalac, preduzetnik ili član
            tima koji beleži informacije, Docora vam štedi vreme i eliminiše
            potrebu za ručnim kucanjem.
          </p>
        </div>

        <div className="footer-center">
          <h3>Linkovi</h3>
          <ul>
            <li>
              <a href="/">Početna</a>
            </li>
            <li>
              <a href="/login">Prijava</a>
            </li>
            <li>
              <a href="/signup">Registracija</a>
            </li>
            <li>
              <a href="/kontakt">Kontakt</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Pratite nas</h3>
          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Docora. Sva prava zadržana.</p>
      </div>
    </footer>
  );
};

export default Footer;

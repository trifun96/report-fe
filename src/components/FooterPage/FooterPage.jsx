import React from "react";
import { useTranslation } from "react-i18next";
import "./FooterPage.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h6 className="footer-logo">{t("footer.logo")}</h6>
          <p className="footer-description">{t("footer.description")}</p>
        </div>

        <div className="footer-center">
          <h3>{t("footer.linksTitle")}</h3>
          <ul>
            <li>
              <a href="/">{t("footer.links.home")}</a>
            </li>
            <li>
              <a href="/login">{t("footer.links.login")}</a>
            </li>
            <li>
              <a href="/signup">{t("footer.links.signup")}</a>
            </li>
            <li>
              <a href="/contact">{t("footer.links.contact")}</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>{t("footer.followUs")}</h3>
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
        <p>
          &copy; {new Date().getFullYear()} Docora. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

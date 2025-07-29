import "./AboutPage.css";
import pdfIcon from "../../images/pdf.png";
import viberIcon from "../../images/viber.png";
import gmailIcon from "../../images/gmail.png";
import { FaMicrophone, FaFilePdf, FaPaperPlane, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutDocora = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="about-docora-wrapper">
      <div className="about-content">
        <div className="about-left">
          <p>
            <strong>Docora</strong> {t("about.headline")}
          </p>
          <p>
         {t("about.description")}
          </p>

          <p>
          {t("about.ideal-for")}
            nivo.
          </p>
          <ul className="about-features">
            <p>{t("about.how-it-helps")}:</p>
            <li>
              <FaMicrophone /> {t("about.features.speech-to-text")}
            </li>
            <li>
              <FaFilePdf />{t("about.features.structure-report")}
            </li>
            <li>
              <FaClock /> {t("about.features.generate-pdf")}
            </li>
            <li>
              <FaPaperPlane /> {t("about.features.send-report")}
            </li>
          </ul>

          <button className="btn-start" onClick={() => navigate("/login")}>
         {t("about.features.user-login")}
          </button>
        </div>

        <div className="about-right">
          <img src={pdfIcon} alt="PDF" />
          <img src={viberIcon} alt="Viber" />
          <img src={gmailIcon} alt="Gmail" />
        </div>
      </div>
    </div>
  );
};

export default AboutDocora;

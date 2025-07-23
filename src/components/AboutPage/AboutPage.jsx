import "./AboutPage.css";
import pdfIcon from "../../images/pdf.png";
import viberIcon from "../../images/viber.png";
import gmailIcon from "../../images/gmail.png";
import { FaMicrophone, FaFilePdf, FaPaperPlane, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutDocora = () => {
  const navigate = useNavigate();

  return (
    <div className="about-docora-wrapper">
      <h2 className="about-docora-title">
        Kreiraj izveštaj u par jednostavnih koraka
      </h2>

      <div className="about-content">
        <div className="about-left">
    <p>
  <strong>Docora</strong> je inovativni alat koji ti omogućava da brzo i
  efikasno kreiraš profesionalne PDF izveštaje i beleške koristeći samo
  glasovne komande. Uz minimalan trud, štediš dragoceno vreme i pojednostavljuješ
  svakodnevne obaveze.
</p>

<p>
  Korišćenjem Docore, automatizuješ svoju dokumentaciju i ubrzavaš procese - što ti omogućava da budeš korak ispred konkurencije i fokusiraš se na ono
  što je zaista važno: tvoje korisnike i posao.
</p>

<p>
  Idealan je izbor za sve koji žele da modernizuju rad, eliminišu nepotrebnu
  papirologiju i podignu kvalitet svog poslovanja na viši nivo.
</p>
          <ul className="about-features">
            <p>Kako ti Docora pomaže:</p>
            <li>
              <FaMicrophone /> Pretvara govor u tekst
            </li>
            <li>
              <FaFilePdf /> Strukturira izveštaj
            </li>
            <li>
              <FaClock /> Generiše PDF
            </li>
            <li>
              <FaPaperPlane /> Šalje izveštaj gde ti želiš (gmail, viber)
            </li>
          </ul>

          <button className="btn-start" onClick={() => navigate("/login")}>
            Login za korisnike
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

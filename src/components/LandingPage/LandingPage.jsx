import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import docora from "../../images/docora.png";
import Logo from "../Logo/Logo";
import FeaturesSection from "../FeaturePage/FeaturePage";
import TestimonialsSection from "../TestimonialPage/TestimonialComponent";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Logo />
      <div className="landing-background">
        <div className="landing-content">
          <div className="landing-overlay">
            <h1 className="landing-title">
              Govorite – Docora beleži. Profesionalni izveštaji bez čekanja.
            </h1>
            <p className="landing-subtitle">
              Docora je savremena platforma za automatsko kreiranje
              profesionalnih i strukturiranih izveštaja i beleški pomoću
              glasovnih komandi. Brže dokumentovanje, efikasniji rad – bez
              potrebe za kucanjem.
            </p>

            <div className="landing-benefits">
              <p>
                Zaboravite na ručno pisanje i gubljenje vremena. Jednim govorom
                kreirajte jasan, uredan i precizan izveštaj. Aplikacija
                omogućava automatsko pretvaranje izveštaja u PDF format, kao i
                automatsko slanje na e-mail – sve u samo nekoliko klikova.
              </p>
            </div>

            <button
              className="landing-button"
              onClick={() => navigate("/login")}
            >
              Započni besplatno
            </button>
          </div>

          <div className="landing-image-container">
            <img
              src={docora}
              alt="Docora screenshot"
              className="landing-image"
            />
          </div>
        </div>
      </div>
      <FeaturesSection />
      <TestimonialsSection />
    </>
  );
};

export default LandingPage;

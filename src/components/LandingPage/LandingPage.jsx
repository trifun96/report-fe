import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Logo from "../Logo/Logo";
import FeaturesSection from "../FeaturePage/FeaturePage";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Logo/>
    <div className="landing-background">
      <div className="landing-overlay">
        <h1 className="landing-title">
          Ti govoriš, Docora beleži. Izveštaji bez čekanja.
        </h1>
        <p className="landing-subtitle">
          Docora je moderna platforma za brzo kreiranje izveštaja i beleški
          pomoću glasovnih komandi. Brzo, efikasno i bez kucanja.
        </p>

        <div className="landing-benefits">
          <p>
            Zaboravite na dugotrajno kucanje. Pretvorite govor u izveštaj za
            pola minuta. Više slobodnog vremena, manje rutine – sa Docora
            platformom.
          </p>
        </div>

        <button className="landing-button" onClick={() => navigate("/login")}>
          Započni
        </button>
      </div>
    </div>
    <FeaturesSection/>
        </>
  );
};

export default LandingPage;

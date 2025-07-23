import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Logo from "../Logo/Logo";
import FeaturesSection from "../FeaturePage/FeaturePage";
import TestimonialsSection from "../TestimonialPage/TestimonialComponent";
import FAQAccordion from "../FAQAcordion/FAQAccordion";
import Footer from "../FooterPage/FooterPage";
import PricingPlans from "../PricingPlan/PricingPlan";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Logo />
      <div className="landing-background">
        <div className="landing-content">
          <div className="landing-overlay">
            <h1 className="landing-title">
              Govorite – Docora beleži. <span>Brzo. Profesionalno.</span>
            </h1>
            <p className="landing-subtitle">
              Uštedite vreme. Docora je savremena aplikacija za automatsko
              kreiranje profesionalnih i strukturiranih izveštaja i beleški
              pomoću glasovnih komandi.
            </p>
            <div className="landing-benefits">
              <p>
                Pretvarajte govor u PDF izveštaje i šaljite ih direktno na email
                – sve iz jedne aplikacije.
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
            <div className="phone-mockup">
              <div className="phone-top-speaker"></div>
              <div className="phone-screen">
                <p>Ovde možeš prikazati preview aplikacije</p>
              </div>
              <div className="phone-home-button"></div>
            </div>
            <div className="bg-wave-shape"></div>
          </div>
        </div>
      </div>
      <FeaturesSection />
      <TestimonialsSection />
      <PricingPlans />
      <FAQAccordion />
      <Footer />
    </>
  );
};

export default LandingPage;

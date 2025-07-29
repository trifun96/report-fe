import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import FeaturesSection from "../FeaturePage/FeaturePage";
import TestimonialsSection from "../TestimonialPage/TestimonialComponent";
import FAQAccordion from "../FAQAcordion/FAQAccordion";
import Footer from "../FooterPage/FooterPage";
import PricingPlans from "../PricingPlan/PricingPlan";
import AboutDocora from "../AboutPage/AboutPage";
import { useTranslation } from "react-i18next";
import Header from "../Header/Header";

const LandingPage = () => {
  const navigate = useNavigate();
      const { t } = useTranslation();


  return (
  <>
  <Header />
  <section className="landing-hero">
    <div className="landing-hero-content">
      <h1 className="landing-title">
        {t("landing.headline")}
      </h1>
      <p className="landing-subtitle">
        {t("landing.info")}
      </p>
      <p className="landing-subtitle">
        {t("landing.info-p")}
      </p>
      <div className="landing-buttons-wrapper">
        <button
          className="landing-button"
          onClick={() => navigate("/signup")}
          aria-label={t("landing.button")}
        >
          {t("landing.button")}
        </button>

        <button
          className="contact-button"
          onClick={() => navigate("/contact")}
          aria-label={t("general.contact")}
        >
          {t("general.contact")}
        </button>
      </div>
    </div>
  </section>

  <AboutDocora />
  <FeaturesSection />
  <TestimonialsSection />
  <PricingPlans />
  <FAQAccordion />
  <Footer />
</>
  );
};

export default LandingPage;

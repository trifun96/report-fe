import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import FeaturesSection from "../FeaturePage/FeaturePage";
import TestimonialsSection from "../TestimonialPage/TestimonialComponent";
import FAQAccordion from "../FAQAcordion/FAQAccordion";
import Footer from "../FooterPage/FooterPage";
import PricingPlans from "../PricingPlan/PricingPlan";
import AboutDocora from "../AboutPage/AboutPage";
import Header from "../Header/Header";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="landing-hero">
        <div className="landing-hero-content">
          <h1 className="landing-title">
            Pretvorite glas u <span>stručne izveštaje</span> <br /> brzo i lako.
          </h1>
          <p className="landing-subtitle">
            Docora vam pomaže da kreirate profesionalne i detaljne izveštaje
            koristeći samo glas. Brzo, jednostavno i bez kucanja. Kreirajte PDF
            izveštaj u par klikova i pošaljite ga gde god želite — direktno iz
            aplikacije. Vi govorite – Docora zapisuje, formatira i šalje.
          </p>
          <p className="landing-subtitle">
            Uštedite vreme, poboljšajte efikasnost i budite ispred konkurencije.
          </p>
          <div className="landing-buttons-wrapper">
            <button
              className="landing-button"
              onClick={() => navigate("/signup")}
              aria-label="Započni besplatno"
            >
              Započni besplatno
            </button>

            <button
              className="contact-button"
              onClick={() => navigate("/contact")}
              aria-label="Kontakt"
            >
              Kontakt
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

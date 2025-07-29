import React from "react";
import "./FeaturePage.css";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaRocket, FaShieldAlt, FaHeadset } from "react-icons/fa";

const featuresTranslations = {
  en: [
    {
      icon: <FaGlobe />,
      title: "Global Availability",
      description:
        "Docora is available worldwide and perfect for anyone who wants to quickly and efficiently create reports or notes using their voice. Automatically convert content to PDF and send it via email – with no limitations on usage.",
    },
    {
      icon: <FaRocket />,
      title: "Faster Organization",
      description:
        "Advanced features enable quick information capture and document creation – saving time and simplifying your workflow.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Money-Back Guarantee",
      description:
        "If you're not satisfied with the service, no worries – we offer a hassle-free money-back guarantee. Your trust is our top priority.",
    },
    {
      icon: <FaHeadset />,
      title: "Personal Support",
      description:
        "Our team is available to help you set up and optimize your usage – fast, simple, and efficient.",
    },
  ],
  sr: [
    {
      icon: <FaGlobe />,
      title: "Globalna Dostupnost",
      description:
        "Docora je dostupna širom sveta i pogodna za sve koji žele da brzo i efikasno kreiraju izveštaje ili beleške pomoću glasa. Automatski pretvori sadržaj u PDF i pošalji ga mejlom – bez ograničenja u primeni.",
    },
    {
      icon: <FaRocket />,
      title: "Brža Organizacija",
      description:
        "Napredne funkcionalnosti omogućavaju brzo beleženje informacija i izradu dokumenata – štede vreme i olakšavaju rad.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Garancija Povrata Novca",
      description:
        "Ukoliko nisi zadovoljan uslugom, bez brige – vraćamo novac bez dodatnih pitanja. Tvoje poverenje nam je najvažnije.",
    },
    {
      icon: <FaHeadset />,
      title: "Lična Podrška",
      description:
        "Naš tim ti je dostupan za pomoć pri podešavanju i optimizaciji korišćenja – brzo, jednostavno i efikasno.",
    },
  ],
};

const FeaturesSection = () => {
  const { i18n, t } = useTranslation();

  const currentLang = i18n.language || "en";

  const features = featuresTranslations[currentLang] || featuresTranslations["en"];

  return (
    <section className="features-section">
      <h5 className="features-title">{t("feature-page.headline")}</h5>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

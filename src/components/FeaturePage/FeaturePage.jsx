import React from "react";
import "./FeaturePage.css";
import { FaGlobe, FaRocket, FaShieldAlt, FaHeadset } from "react-icons/fa";
const features = [
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
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h5 className="features-title">Zašto baš Docora?</h5>
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

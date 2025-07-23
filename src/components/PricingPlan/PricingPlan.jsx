import React from "react";
import "./PricingPlan.css";

const plans = [
  {
    title: "Start",
    price: "$12.99",
    reports: "100 izveštaja",
    description: "Idealan za pojedince i manje firme koje žele efikasnost.",
    features: [
      "Kreiranje strukturiranog izveštaja",
      "Beleške",
      "Slanje na mail direktno",
    ],
  },
  {
    title: "Pro",
    price: "$22.99",
    reports: "250 izveštaja",
    description: "Za timove kojima je važna efikasnost",
    popular: true,
    features: [
      "Kreiranje strukturiranog izveštaja",
      "Beleške",
      "Slanje na mail direktno",
    ],
  },
  {
    title: "Business",
    price: "$48.99",
    reports: "500 izveštaja",
    description: "Za profesionalce i zahtevnije korisnike",
    features: [
      "Kreiranje strukturiranog izveštaja",
      "Beleške",
      "Slanje na mail direktno",
    ],
  },
  {
    title: "Po dogovoru",
    price: "Kontaktiraj nas",
    reports: "Više od 500 izveštaja",
    description: "Za veće sisteme i individualne potrebe",
    custom: true,
    features: [
      "Kreiranje strukturiranog izveštaja",
      "Beleške",
      "Slanje na mail direktno",
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">
      Docora je tu za tebe. Odaberi plan.
      </h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.popular ? "popular" : ""} ${
              plan.custom ? "custom" : ""
            }`}
          >
            {plan.popular && <div className="badge">Najpopularnije</div>}
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <p className="reports">{plan.reports}</p>
            <p className="description">{plan.description}</p>

            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i} className="feature-item">
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`btn ${plan.custom ? "btn-contact" : ""}`}>
              {plan.custom ? "Kontakt" : "Izaberi plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;

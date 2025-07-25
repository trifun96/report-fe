import React from "react";
import { useNavigate } from "react-router-dom";
import "./PricingPlan.css";

const plans = [
  {
    title: "Free",
    price: "$0",
    reports: "10 izveštaja",
    description: "Osnovni plan za testiranje i povremeno korišćenje.",
    features: [
      "Kreiranje strukturisanih izveštaja",
      "Dodavanje beleški",
      "Slanje izveštaja na email",
    ],
  },
  {
    title: "Start",
    price: "$11,99",
    reports: "100 izveštaja mesečno",
    description: "Savršen plan za svakodnevnu i ličnu upotrebu.",
    features: [
      "Kreiranje strukturisanih izveštaja",
      "Dodavanje beleški",
      "Slanje izveštaja na email",
    ],
  },
  {
    title: "Pro",
    price: "$23.99",
    reports: "250 izveštaja mesečno",
    description: "Za profesionalce kojima je potrebna veća fleksibilnost.",
    popular: true,
    features: [
      "Kreiranje strukturisanih izveštaja",
      "Dodavanje beleški",
      "Slanje izveštaja na email",
    ],
  },
  {
    title: "Business",
    price: "$45.99",
    reports: "500 izveštaja mesečno",
    description: "Za timove, firme i intenzivnu upotrebu.",
    features: [
      "Kreiranje strukturisanih izveštaja",
      "Dodavanje beleški",
      "Slanje izveštaja na email",
    ],
  },
];

const PricingPlans = () => {
  const navigate = useNavigate();

  const handleButtonClick = (plan) => {
    if (plan.custom) {
      navigate("/contact");
    } else {
      alert(`Izabrali ste plan: ${plan.title}`);
    }
  };

  return (
    <div className="pricing-container">
      <h2 className="pricing-title">Docora je tu za tebe. Odaberi plan.</h2>
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
            <h6 className="price">{plan.price}</h6>
            <p className="reports">{plan.reports}</p>
            <p className="description">{plan.description}</p>

            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i} className="feature-item">
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`btn ${plan.custom ? "btn-contact" : ""}`}
              onClick={() => handleButtonClick(plan)}
            >
              {plan.custom ? "Kontakt" : "Izaberi plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;

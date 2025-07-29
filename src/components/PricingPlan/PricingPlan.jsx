import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./PricingPlan.css";

const plansTranslations = {
  en: [
    {
      title: "Free",
      price: "$0",
      reports: "10 reports",
      description: "Basic plan for testing and occasional use.",
      features: [
        "Create structured reports",
        "Add notes",
        "Send reports by email",
      ],
    },
    {
      title: "Start",
      price: "$11.99",
      reports: "100 reports per month",
      description: "Perfect plan for daily and personal use.",
      features: [
        "Create structured reports",
        "Add notes",
        "Send reports by email",
      ],
    },
    {
      title: "Pro",
      price: "$23.99",
      reports: "250 reports per month",
      description: "For professionals needing more flexibility.",
      popular: true,
      features: [
        "Create structured reports",
        "Add notes",
        "Send reports by email",
      ],
    },
    {
      title: "Business",
      price: "$45.99",
      reports: "500 reports per month",
      description: "For teams, companies, and intensive use.",
      features: [
        "Create structured reports",
        "Add notes",
        "Send reports by email",
      ],
    },
  ],
  sr: [
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
  ],
};

const PricingPlans = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || "sr";
  const plans = plansTranslations[currentLang] || plansTranslations["en"];
  const navigate = useNavigate();

  const handleButtonClick = (plan) => {
    if (plan.custom) {
      navigate("/contact");
    } else {
      alert(t("pricing.selectedPlan", { plan: plan.title }));
    }
  };

  return (
    <div className="pricing-container">
      <h2 className="pricing-title">{t("pricing.title")}</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.popular ? "popular" : ""} ${
              plan.custom ? "custom" : ""
            }`}
          >
            {plan.popular && <div className="badge">{t("pricing.mostPopular")}</div>}
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
              {plan.custom ? t("pricing.contact", "Kontakt") : t("pricing.selectPlan")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;

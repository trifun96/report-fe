import React from "react";
import "./CustomButton.css";
import { useTranslation } from "react-i18next";

const CustomButton = ({ loading, onClick }) => {
     const { t } = useTranslation();
  return (
    <button
      type="submit"
      disabled={loading}
      className="custom-gradient-button"
      onClick={onClick}
    >
{loading ? t("report.button-two") : t("report.button")}
    </button>
  );
};

export default CustomButton;
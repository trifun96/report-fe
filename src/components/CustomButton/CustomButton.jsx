// CustomButton.jsx
import React from "react";
import "./CustomButton.css";

const CustomButton = ({ loading, onClick }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="custom-gradient-button"
      onClick={onClick}
    >
      {loading ? "Generišem..." : "Generiši izveštaj"}
    </button>
  );
};

export default CustomButton;
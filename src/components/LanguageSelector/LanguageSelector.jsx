import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

const LANGUAGES = {
  en: { label: "Eng", countryCode: "GB" },
  sr: { label: "Srp", countryCode: "RS" },
};

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

const currentLang = LANGUAGES[i18n.language] ? i18n.language : "en";

  const toggleOpen = () => setOpen(!open);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="language-selector"
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <button
        onClick={toggleOpen}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: "6px 8px",
          fontSize: "1rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          userSelect: "none",
        }}
      >
        <Flag
          style={{ width: 24, height: 16, borderRadius: 2 }}
          code={LANGUAGES[currentLang].countryCode}
          alt={LANGUAGES[currentLang].label}
        />
        <span style={{ marginLeft: "6px", fontWeight: "bold" }}>▾</span>
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="language-list"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            backgroundColor: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            borderRadius: "8px",
            listStyle: "none",
            margin: 0,
            padding: "4px 0",
            width: "140px",
            zIndex: 1000,
          }}
        >
          {Object.entries(LANGUAGES).map(([lng, { label, countryCode }]) => (
            <li key={lng} role="option" aria-selected={lng === currentLang}>
              <button
                onClick={() => changeLanguage(lng)}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "none",
                  backgroundColor: lng === currentLang ? "#f0f0f0" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: "pointer",
                  fontWeight: lng === currentLang ? "600" : "400",
                  userSelect: "none",
                }}
              >
                <Flag
                  style={{ width: 24, height: 16, borderRadius: 2 }}
                  code={countryCode}
                  alt={label}
                />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

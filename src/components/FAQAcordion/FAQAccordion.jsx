import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./FAQAccordion.css";

const faqDataTranslations = {
  en: [
    {
      question: "What is Docora.rs and what is it used for?",
      answer:
        "Docora.rs is an application for quickly generating professional and structured reports. Based on your speech and entered data, the system automatically creates a PDF document and sends it to the desired email address. No typing, no complications — just speak, and Docora writes, formats, and delivers the report for you.",
    },
    {
      question: "Can I use voice dictation in Serbian or English languages?",
      answer:
        "Yes, Docora.rs supports speech recognition in Serbian, including automatic conversion of expressions like 'period', 'comma', 'new line', and similar into appropriate punctuation and text formatting.",
    },
    {
      question: "How can I send the generated report to a patient or client?",
      answer:
        "After generating the report, click 'Send PDF by email' — the system will automatically send the document to the entered email address.",
    },
    {
      question: "Who can use Docora.rs?",
      answer:
        "Docora.rs is a platform designed for anyone who needs quick, simple, and efficient creation of professional reports — without wasting time typing. Whether you work in the field, in the office, or on the go, Docora allows you to create structured reports by voice that are automatically converted into PDF and sent directly to the desired email.\n\n" +
        "This platform is used by various professionals and experts who need reliable and fast documentation, regardless of industry or job specifics.\n\n" +
        "Docora.rs revolutionizes report creation – forget long typing and complicated procedures. With Docora, you speak, and the system works for you.",
    },
    {
      question: "Is it safe to enter data on the platform?",
      answer:
        "Yes, your data is stored locally until you send the report. We do not store or share your data without your consent.",
    },
    {
      question: "How can I register and get started?",
      answer:
        "Visit the registration page, enter your basic information, and you can start using the platform immediately.",
    },
    {
      question: "Does Docora.rs have monthly subscriptions and how do they work?",
      answer:
        "Docora.rs offers flexible subscription options that provide access to all platform features. Monthly subscriptions are tailored to different user needs, and you always have the option to change or cancel your subscription at any time without hidden fees.",
    },
  ],
  sr: [
    {
      question: "Šta je Docora.rs i čemu služi?",
      answer:
        "Docora.rs je aplikacija za brzo generisanje profesionalnih i strukturiranih izveštaja. Na osnovu govora i unetih podataka, sistem automatski kreira PDF dokument i šalje ga na željenu e-mail adresu. Bez kucanja, bez komplikacija — samo govorite, a Docora piše, formatira i dostavlja izveštaj umesto vas.",
    },
    {
      question: "Da li mogu da koristim glasovno diktiranje na srpskom ili engleskom jeziku?",
      answer:
        "Da, Docora.rs podržava govorno prepoznavanje na srpskom jeziku, uključujući automatsko pretvaranje izraza poput ‘tačka’, ‘zarez’, ‘novi red’ i sličnih u odgovarajuću interpunkciju i formatiranje teksta.",
    },
    {
      question: "Kako mogu da pošaljem generisani izveštaj pacijentu ili klijentu?",
      answer:
        "Nakon generisanja izveštaja, kliknite na „Pošalji PDF na mejl” — sistem će automatski poslati dokument na unetu email adresu.",
    },
    {
      question: "Ko sve može da koristi Docora.rs?",
      answer:
        "Docora.rs je platforma namenjena svima kojima je potrebna brza, jednostavna i efikasna izrada profesionalnih izveštaja — bez gubljenja vremena na kucanje. Bilo da radite na terenu, u kancelariji ili u pokretu, Docora vam omogućava da govorom kreirate strukturirane izveštaje koji se automatski pretvaraju u PDF i šalju direktno na željeni e-mail.\n\n" +
        "Ovu platformu koriste različiti profesionalci i stručnjaci kojima je neophodna pouzdana i brza dokumentacija, bez obzira na industriju ili specifičnost posla.\n\n" +
        "Docora.rs donosi revoluciju u kreiranju izveštaja – zaboravite na dugotrajno kucanje i komplikovane procedure. Sa Docorom govorite, a sistem radi za vas.",
    },
    {
      question: "Da li je bezbedno unositi podatke na platformu?",
      answer:
        "Da, vaši podaci se čuvaju lokalno dok ne pošaljete izveštaj. Ne čuvamo niti delimo vaše podatke bez vaše saglasnosti.",
    },
    {
      question: "Kako mogu da se registrujem i započnem?",
      answer:
        "Posetite stranicu za registraciju, unesite svoje osnovne informacije, i odmah možete početi da koristite platformu.",
    },
    {
      question: "Da li Docora.rs ima mesečne pretplate i kako funkcionišu?",
      answer:
        "Docora.rs nudi fleksibilne opcije pretplate koje omogućavaju pristup svim funkcionalnostima platforme. Mesečne pretplate su prilagođene potrebama različitih korisnika, a uvek imate mogućnost da promenite ili otkažete pretplatu u bilo kom trenutku, bez skrivenih troškova.",
    },
  ],
};

const FAQAccordion = () => {
  const { i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentLang = i18n.language.startsWith("sr") ? "sr" : "en";
  const faqData = faqDataTranslations[currentLang];

  return (
    <div className="faq-wrapper">
      <h2 className="faq-title">
        {currentLang === "sr" ? "Najčešća pitanja" : "Frequently Asked Questions"}
      </h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleIndex(index)}>
            {item.question}
            <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;

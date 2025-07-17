import React, { useState } from "react";
import "./FAQAccordion.css";

const faqData = [
  {
    question: "Šta je Docora.rs i čemu služi?",
    answer:
      "Docora.rs je aplikacija za brzo generisanje profesionalnih i strukturiranih izveštaja. Na osnovu govora i unetih podataka, sistem automatski kreira PDF dokument i šalje ga na željenu e-mail adresu. Bez kucanja, bez komplikacija — samo govorite, a Docora piše, formatira i dostavlja izveštaj umesto vas.",
  },
  {
    question: "Da li mogu da koristim glasovno diktiranje na srpskom jeziku?",
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
    "Docora.rs donosi revoluciju u kreiranju izveštaja – zaboravite na dugotrajno kucanje i komplikovane procedure. Sa Docorom govorite, a sistem radi za vas."
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
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <h2 className="faq-title">Najčešća pitanja</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleIndex(index)}
          >
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

import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useTranslation } from "react-i18next";

import "./TestimonialComponent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsTranslations = {
  en: [
    {
      quote:
        "I use Docora for field reports. It's faster and easier than writing everything by hand after work. I input by voice and finish my tasks immediately.",
      name: "Ana Stojanović",
      role: "Project Manager",
    },
    {
      quote:
        "The construction site is chaotic – Docora helps me quickly capture notes and instructions without pen and paper. Everything stays organized and precise.",
      name: "Milan Đorđević",
      role: "Civil Engineer",
    },
    {
      quote:
        "As a service technician, I don’t have time to write after each intervention. Docora allows me to speak and immediately have a complete report ready.",
      name: "Marko Lukić",
      role: "Electrical Technician",
    },
    {
      quote:
        "It saved me a lot of time. Instead of sitting and typing after the exam, I speak everything and get a ready report in just seconds.",
      name: "Aleksandar Petrović",
      role: "Dentist",
    },
    {
      quote:
        "I didn’t believe it would make my job easier, but with Docora I really save hours weekly. More time for work, less for administration.",
      name: "Ivan Marković",
      role: "Entrepreneur",
    },
    {
      quote:
        "Docora sped up my work. I can focus on patients instead of bureaucracy. I input the report by voice while the exam is still ongoing.",
      name: "Marina Tomić",
      role: "Dentist",
    },
  ],
  sr: [
    {
      quote:
        "Koristim Docoru za izveštaje sa terena. Brže je i lakše nego da pišem sve ručno nakon posla. Glasovno unosim i odmah završim obaveze.",
      name: "Ana Stojanović",
      role: "Vođa projekta",
    },
    {
      quote:
        "Na gradilištu je haotično – Docora mi pomaže da brzo zabeležim napomene i instrukcije bez papira i olovke. Sve ostaje uredno i precizno.",
      name: "Milan Đorđević",
      role: "Građevinski inženjer",
    },
    {
      quote:
        "Kao serviser, nemam vremena da pišem nakon svake intervencije. Docora mi omogućava da govorim i odmah imam spreman kompletan izveštaj.",
      name: "Marko Lukić",
      role: "Elektro-serviser",
    },
    {
      quote:
        "Uštedela mi je mnogo vremena. Umesto da sedim i kucam nakon pregleda, govorim sve i dobijem gotov izveštaj u samo nekoliko sekundi.",
      name: "Aleksandar Petrović",
      role: "Stomatolog",
    },
    {
      quote:
        "Nisam verovao da će mi olakšati posao, ali uz Docoru zaista štedim sate nedeljno. Više vremena za posao, manje za administraciju.",
      name: "Ivan Marković",
      role: "Preduzetnik",
    },
    {
      quote:
        "Docora je ubrzala moj rad. Mogu da se fokusiram na pacijente, a ne na birokratiju. Glasovno unosim izveštaj dok još traje pregled.",
      name: "Marina Tomić",
      role: "Stomatolog",
    },
  ],
};

const TestimonialsSection = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || "sr"; // default na srpski
  const testimonials = testimonialsTranslations[currentLang] || testimonialsTranslations["en"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">{t("testimonial-page.title")}</h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div className="testimonial-slide" key={index}>
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">"{item.quote}"</p>
              <div className="testimonial-author">
                <HiOutlineUserCircle className="icon" />
                <div>
                  <div className="author-name">{item.name}</div>
                  <div className="author-role">{item.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSection;

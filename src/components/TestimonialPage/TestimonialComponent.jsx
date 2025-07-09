import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./TestimonialComponent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Koristim Docoru za dnevne izveštaje sa terena. Mnogo lakše nego da pišem sve ručno nakon napornog dana.",
    author: "Ana S., vođa projekta",
  },
  {
    quote:
      "Na gradilištu je uvek haotično – Docora mi pomaže da brzo zabeležim važne napomene i uputstva bez papira i olovke.",
    author: "Milan D., građevinski inženjer",
  },
  {
    quote:
      "Kao serviser na terenu, nemam vremena da pišem izveštaje posle svake intervencije. Docora mi omogućava da ih snimim odmah i uštedim vreme.",
    author: "Marko L., elektro-serviser",
  },
  {
    quote:
      "Uštedela mi je gomilu vremena pri pisanju izveštaja. Govorim – i gotovo.",
    author: "Stomatolog, Aleksandar P.",
  },
  {
    quote:
      "Nisam verovao da ovako nešto može olakšati moj posao, ali Docora zaista štedi sate svake nedelje.",
    author: "Ivan M., preduzetnik",
  },
  {
    quote:
      "Docora mi je značajno ubrzala rad. Mogu se fokusirati na pacijenta, umesto da mislim o kucanju i papirologiji.",
    author: "Stomatolog, Marina T.",
  },
];


const TestimonialsSection = () => {
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
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Iskustva naših korisnika</h2>
<Slider {...settings}>
  {testimonials.map((item, index) => (
    <div className="testimonial-slide" key={index}>
      <div className="testimonial-card">
        <FaQuoteLeft className="quote-icon" />
        <p className="testimonial-text">"{item.quote}"</p>
        <div className="testimonial-author">
          <HiOutlineUserCircle className="user-icon" />
          <span>{item.author}</span>
        </div>
      </div>
    </div>
  ))}
</Slider>
    </section>
  );
};

export default TestimonialsSection;

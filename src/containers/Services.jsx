import React from "react";
import Card from "../components/Card";
import "../assets/styles/containers/services.scss";
import Portraits from "../assets/images/icons/portraits.svg";
import Family from "../assets/images/icons/family.svg";
import Advertising from "../assets/images/icons/advertising.svg";
import Events from "../assets/images/icons/events.svg";

const servicesCards = [
  {
    icon: Portraits,
    title: "Portraits",
    text: "Setting the right accents in beautiful portraits.",
  },
  {
    icon: Family,
    title: "Family photos",
    text: "Catching the brightest moments of your family.",
  },
  {
    icon: Advertising,
    title: "Advertising",
    text: "Shootings for advertising campaigns and e-commerce.",
  },
  {
    icon: Events,
    title: "Events",
    text: "Capturing moments of your important events.",
  },
];

function Services() {
  return (
    <section className="services container">
      <h2 className="services__title title">Services</h2>
      <div className="divider"></div>
      <p className="services__subtitle subtitle">
        WE OPEN FOR NEW OPPORTUNITIES AND COLLABORATIONS.
      </p>
      <ul className="services__list">
        {servicesCards.map((card, index) => (
          <Card
            key={`servicesCard-${index}`}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </ul>
    </section>
  );
}
export default Services;

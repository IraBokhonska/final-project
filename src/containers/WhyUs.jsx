import React from "react";

import Card from "../components/Card";

import "../assets/styles/containers/why-us.scss";
import Experience from "../assets/images/icons/experience.svg";
import Equipment from "../assets/images/icons/equipment.svg";
import Professional from "../assets/images/icons/professional.svg";

const whyUsCards = [
  {
    icon: Experience,
    title: "Experience",
    text: "We are a team of young and creative people. But we have been photographing for more than 5 years.",
    preferences: [
      "more than 600 clients a year",
      "10 000+ edited photos",
      "Shooting for 5+ top magazines",
    ],
  },
  {
    icon: Equipment,
    title: "Modern Equipment",
    text: "He uses only the latest equipment which provides amazing quality and highlights the details in every frame.",
    preferences: [
      "Canon EOS 5D Mark IV 24-105L IS II",
      "Canon EF 24-70mm f/2.8 L II USM lens",
      "POWERPLANT UV 95 mm color filter ",
    ],
  },
  {
    icon: Professional,
    title: "Professional Editing",
    text: "After the photoshoot, all photos undergo thorough editing, you get a format that meets your requirements.",
    preferences: [
      "Full-resolution final images",
      "Photos delivered via online gallery",
      "Processing time is up to 2 months",
    ],
  },
];

function WhyUs() {
  return (
    <section className="why-us container">
      <h2 className="why-us__title title">Why Just Moment?</h2>
      <div className="divider"></div>
      <p className="why-us__subtitle subtitle">We are professionals</p>
      <ul className="why-us__list">
        {whyUsCards.map((card, index) => (
          <Card
            key={`whyUSCard-${index}`}
            icon={card.icon}
            title={card.title}
            text={card.text}
            preferences={
              <ul className="card-preferences__list">
                {card.preferences.map((preference, index) => (
                  <li className="card-preferences__item text" key={index}>
                    {preference}
                  </li>
                ))}
              </ul>
            }
          />
        ))}
      </ul>
    </section>
  );
}

export default WhyUs;

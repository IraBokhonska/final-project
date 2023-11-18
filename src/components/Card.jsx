import React from "react";
import { Link } from "react-router-dom";

import Button from "../elements/Button";

import "../assets/styles/components/card.scss";

const Card = ({ icon, title, text, preferences }) => {
  return (
    <li className="card">
      <div className="card__icon">
        <img src={icon} alt={title} className="icon" />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text text">{text}</p>
      <Link>
        <Button
          type="secondary"
          onClick={() => (window.location.href = "#pricing")}
        >
          LEARN MORE
        </Button>
      </Link>
      <ul className="card-preferences__list">
        {preferences.map((preference, index) => (
          <li className="card-preferences__item text" key={index}>
            {preference}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Card;

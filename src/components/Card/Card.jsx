import React from "react";
import { useNavigate } from "react-router-dom";

// assets
import "../../assets/styles/components/card.scss";

// elements
import Button from "../../elements/Button";

const Card = ({ icon, title, text, preferences }) => {
  const navigate = useNavigate();

  return (
    <li className="card">
      <div className="card__icon">
        <img src={icon} alt={title} className="icon" />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text text">{text}</p>
      <Button
        type="secondary"
        onClick={() => navigate("/categories")}
        data-testid="view-details-button"
      >
        LEARN MORE
      </Button>
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

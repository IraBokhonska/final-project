import React from "react";
import { useNavigate } from "react-router-dom";

// elements
// import Button from "../../elements/Button";

// assets
import "../../../../assets/styles/containers/pricing.scss";

const PricingCard = ({ image, name, price = "from $30/hour", description }) => {
  const navigate = useNavigate();

  return (
    <li className="pricing-card">
      <div className="pricing-card__photo">
        <img src={image} alt={name} className="pricing-card__image" />
      </div>
      <div className="pricing-card__block">
        <div className="pricing-card__content">
          <h3 className="pricing-card__title">{name}</h3>
          <p className="pricing-card__price">{price}</p>
          <p className="pricing-card__description">{description}</p>
        </div>
        <p
          className="pricing-card__learn-more"
          onClick={() => navigate("/categories")}
          data-testid="view-details-button"
        >
          Learn more
        </p>
        {/* <Button
          type="secondary"
          onClick={() => navigate("/categories")}
          data-testid="view-details-button"
        >
          VIEW DETAILS
        </Button> */}
      </div>
    </li>
  );
};

export default PricingCard;

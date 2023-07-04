import React from "react";
import { Link } from "react-router-dom";

// elements
// import Button from "../../elements/Button";

// assets
import "../../../../assets/styles/containers/pricing.scss";

const PricingCard = ({ image, name, price = "from $30/hour", description }) => {
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
        <Link>
          <p
            className="pricing-card__learn-more"
            onClick={() => (window.location.href = "#form")}
          >
            Learn more
          </p>
        </Link>
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

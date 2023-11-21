import React from "react";

import PricingCard from "./components/PricingCard";

import "../../assets/styles/containers/pricing.scss";
import photoFirst from "../../assets/images/containers/pricing/photo1.jpg";
import photoSecond from "../../assets/images/containers/pricing/photo2.jpg";
import photoThird from "../../assets/images/containers/pricing/photo3.jpg";
import photoFourth from "../../assets/images/containers/pricing/photo4.jpg";

const pricingCards = [
  {
    image: photoFirst,
    name: "Portraits",
    description:
      "Capturing your beauty in every detail. The price includes 3 styles and 20 edited photos per style.",
  },
  {
    image: photoSecond,
    name: "Family Photos",
    description:
      "Family photos that create a mood, open up the whole range of feelings, can make you cry and laugh at the same time...",
  },
  {
    image: photoThird,
    name: "Advertising",
    price: "from $50/hour",
    description:
      "Shootings for magazines, advertising campaigns, e-commerce, lookbooks, etc.",
  },
  {
    image: photoFourth,
    name: "Events",
    price: "from $50/hour",
    description:
      "Shooting at your special events: wedding, benefit events, gala banquets, etc.",
  },
];

function Pricing() {
  return (
    <section className="pricing container" id="pricing">
      <h2 className="pricing__title title">Pricing</h2>
      <div className="divider"></div>
      <p className="pricing__subtitle subtitle">
        THE COST OF SHOOTING CAN BE DISCUSSED ACCORDING TO THE CONDITIONS.
      </p>
      <ul className="pricing__list">
        {pricingCards.map((card, index) => (
          <PricingCard
            key={`pricingCard-${index}`}
            image={card.image}
            name={card.name}
            description={card.description}
          />
        ))}
      </ul>
    </section>
  );
}
export default Pricing;

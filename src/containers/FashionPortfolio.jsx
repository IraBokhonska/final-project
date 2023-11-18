import React from "react";

import Portfolio from "../components/Portfolio";

import portfolioFirst from "../assets/images/containers/portfolio/portfolio-1.jpg";
import portfolioSecond from "../assets/images/containers/portfolio/portfolio-2.jpg";
import portfolioThird from "../assets/images/containers/portfolio/portfolio-3.jpg";
import portfolioFourth from "../assets/images/containers/portfolio/portfolio-4.jpg";
import portfolioFifth from "../assets/images/containers/portfolio/portfolio-5.jpg";
import portfolioSixth from "../assets/images/containers/portfolio/portfolio-6.jpg";

export const FashionPortfolio = () => {
  return (
    <Portfolio
      title="Portfolio"
      subtitle="EVERY PHOTOSHOOT IS ART."
      portfolioImages={[
        portfolioFirst,
        portfolioSecond,
        portfolioThird,
        portfolioFourth,
        portfolioFifth,
        portfolioSixth,
      ]}
    />
  );
};

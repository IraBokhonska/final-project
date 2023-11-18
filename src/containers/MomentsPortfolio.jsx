import React from "react";

import Portfolio from "../components/Portfolio";

import momentFirst from "../assets/images/containers/moment/moment-1.jpg";
import momentSecond from "../assets/images/containers/moment/moment-2.jpg";
import momentThird from "../assets/images/containers/moment/moment-3.jpg";
import momentFourth from "../assets/images/containers/moment/moment-4.jpg";
import momentFifth from "../assets/images/containers/moment/moment-5.jpg";
import momentSixth from "../assets/images/containers/moment/moment-6.jpg";
import momentSeventh from "../assets/images/containers/moment/moment-7.jpg";
import momentEighth from "../assets/images/containers/moment/moment-8.jpg";
import momentNinth from "../assets/images/containers/moment/moment-9.jpg";

export const MomentsPortfolio = () => {
  return (
    <Portfolio
      title="Our moment photo"
      subtitle="EVERY MOMENT IS IMPORTANT..."
      portfolioImages={[
        momentFirst,
        momentSecond,
        momentThird,
        momentFourth,
        momentFifth,
        momentSixth,
        momentSeventh,
        momentEighth,
        momentNinth,
      ]}
    />
  );
};

// export const FashionPortfolio = () => {
//   return (
//     <Portfolio
//       title="Portfolio"
//       subtitle="EVERY PHOTOSHOOT IS ART."
//       portfolioImages={[
//         portfolioFirst,
//         portfolioSecond,
//         portfolioThird,
//         portfolioFourth,
//         portfolioFifth,
//         portfolioSixth,
//       ]}
//     />
//   );
// };

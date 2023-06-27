import React from "react";

//assets
import "../../assets/styles/containers/services.scss";

import Portraits from "../../assets/images/icons/portraits.svg";
import Family from "../../assets/images/icons/family.svg";
import Advetising from "../../assets/images/icons/advertising.svg";
import Events from "../../assets/images/icons/events.svg";

//components
import Card from "../../components/Card";

function Services() {
  return (
    <section className="services container">
      <h2 className="services__title title">Services</h2>
      <div className="divider"></div>
      <p className="services__subtitle subtitle">
        WE OPEN FOR NEW OPPORTUNITIES AND COLLABORATIONS.
      </p>
      <ul className="services__list">
        <Card
          icon={Portraits}
          title="Portraits"
          text="Setting the right accents in
        beautiful portraits."
        preferences={[]}
        />
        <Card
          icon={Family}
          title="Family photos"
          text="Catching the brightest moments of your family."
          preferences={[]}
        />
        <Card
          icon={Advetising}
          title="Advertising"
          text="Shootings for advertising
          campaigns and e-commerce."
          preferences={[]}
        />
        <Card
          icon={Events}
          title="Events"
          text="Capturing moments of your
          important events."
          preferences={[]}
        />
      </ul>
    </section>
  );
}
export default Services;

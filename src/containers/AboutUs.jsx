import { Link } from "react-router-dom";

import Button from "../elements/Button";

import "../assets/styles/containers/about-us.scss";
import aboutUsImage from "../assets/images/containers/about-us/about-us-image.jpg";

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__image">
        <img src={aboutUsImage} alt="img" className="image" />
      </div>
      <div className="about-us__content">
        <h2 className="about-us__title title">About us</h2>
        <div className="divider"></div>
        <p className="about-us__text text">
          We love people, we love nature, we love world...
        </p>
        <p className="about-us__text text">
          Just a Moment was created in 2017 by talented young photographers. Two
          friends, sitting in a cozy Lviv cafe discussing plans for the future,
          never imagined that their small dream would become a grandiose
          project. Just a Moment is not just a photo studio, it's a new horizon
          for your vision. 
        </p>
        <p className="about-us__text text">
          We care about each client and discover your personality. 
        </p>
        <p className="about-us__text text">
          Now we are engaged in individual photography and take on commercial
          projects.
        </p>
        <Link>
          <Button
            type="primary"
            onClick={() => (window.location.href = "#photographers")}
          >
            LEARN MORE
          </Button>
        </Link>
      </div>
    </section>
  );
}
export default AboutUs;

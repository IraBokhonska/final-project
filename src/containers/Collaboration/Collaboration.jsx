//assets
import "../../assets/styles/containers/collaboration.scss";
import collaborationImage from "../../assets/images/containers/collaboration/collaboration-image.jpg";

//components
import CollaborationCard from "./components/CollaborationCard";

function Collaboration() {
  return (
    <section className="collaboration container">
      <h2 className="collaboration__title title">Collaboration</h2>
      <div className="divider"></div>
      <p className="collaboration__subtitle subtitle">
        LET'S CREATE SOMETHING GREAT AND BEAUTIFUL TOGETHER.
      </p>
      <div className="collaboration__block">
        <img
          src={collaborationImage}
          alt="collaborationImage"
          className="collaboration__image"
        />
        {/* <picture class="picture">
          <source
            srcset="./assets/images/header-images/header_desktop.jpg"
            media="(min-width: 992px)"
          />
          <source
            srcset="./assets/images/header-images/header_tablet.jpg"
            media="(min-width: 576px)"
          />
          <source
            srcset="./assets/images/header-images/header_mobile.jpg"
            media="(min-width: 320px)"
          />
          <img
            class="image"
            src="./assets/images/header-images/header_mobile.jpg"
            alt="img"
          />
        </picture> */}
        <ul className="collaboration__list">
          <CollaborationCard
            number="01"
            title="Contact US"
            text="You can call or write us, or simply fill out the contact form on
        this website."
          />
          <CollaborationCard
            number="02"
            title="Choose the date"
            text="Indicate where the shooting will take place, specify the
          preferred date and exact time."
          />
          <CollaborationCard
            number="03"
            title="Take care of the details"
            text="Make sure that the studio is rented, models are booked and
          there's everything necessary for the shooting."
          />
          <CollaborationCard
            number="04"
            title="Get the perfect photos!"
            text="All photos will be ready in a maximum of 2 months if you
          need retouch services."
          />
        </ul>
      </div>
    </section>
  );
}
export default Collaboration;

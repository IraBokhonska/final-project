//assets
import "../../assets/styles/containers/home.scss";
import homeImage from "../../assets/images/containers/home/home-image.jpg";
import { Link } from "react-router-dom";

//elements
import Button from "../../elements/Button";

function Home() {
  return (
    <section className="home">
      <div className="home__image">
        <img src={homeImage} alt="img" className="bg-image" />
      </div>
      <div className="home__block">
        <p className="home__studio">studio</p>
        <h1 className="home__title">Just a Moment</h1>
        <div className="divider"></div>
        <p className="home__subtitle">
          We capture the most beautiful moments of your life...
        </p>
        <Link>
          <Button
            type="secondary"
            onClick={() => (window.location.href = "#form")}
            data-testid="view-details-button"
          >
            CONTACT US
          </Button>
        </Link>
      </div>
    </section>
  );
}
export default Home;

//assets
import "../../assets/styles/containers/home.scss";
import homeImage from "../../assets/images/containers/home/home-image.jpg";

//elements
import Button from "../../elements/Button";

function Home() {
  return (
    <section className="home">
      <img src={homeImage} alt="img" className="home__image" />
      <div className="home__block">
        <p className="home__studio">studio</p>
        <h1 className="home__title">Just a Moment</h1>
        <div className="divider"></div>
        <p className="home__subtitle">
          We capture the most beautiful moments of your life...
        </p>
        <Button
          type="secondary"
          // onClick={() => navigate("/categories")}
          data-testid="view-details-button"
        >
          CONTACT US
        </Button>
      </div>
    </section>
  );
}
export default Home;

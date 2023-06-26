// import ../../assets/styles/components/weather-card.scss;

//containers
import Home from "../../containers/Home";
import AboutUs from "../../containers/AboutUs";
import Banner from "../../containers/Banner";

import bannerHome from "../../assets/images/containers/banners/banner-4.jpg";

function HomePage() {
  return (
    <div className="main__wrapper">
      <Home />
      <AboutUs />
      <Banner
        title="Let's Shoot!"
        description="SEND A REQUEST RIGHT NOW AND SCHEDULE YOUR NEXT SHOOTING WITH
        US."
        image={bannerHome}
      />
    </div>
  );
}
export default HomePage;

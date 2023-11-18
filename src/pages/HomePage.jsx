import Home from "../containers/Home";
import AboutUs from "../containers/AboutUs";
import Photographers from "../containers/Photographers";
import Banner from "../containers/Banner";
import WhyUs from "../containers/WhyUs";
import Collaboration from "../containers/Collaboration";
import { FashionPortfolio } from "../containers/FashionPortfolio";

import bannerHome from "../assets/images/containers/banners/banner-1.jpg";

function HomePage() {
  return (
    <div className="main__wrapper">
      <Home />
      <AboutUs />
      <Photographers />
      <Banner
        title="Let's Shoot!"
        description="SEND A REQUEST RIGHT NOW AND SCHEDULE YOUR NEXT SHOOTING WITH
        US."
        image={bannerHome}
      />
      <WhyUs />
      <Collaboration />
      <FashionPortfolio />
    </div>
  );
}
export default HomePage;

import Banner from "../containers/Banner";
import Pricing from "../containers/Pricing";
import Services from "../containers/Services";
import { MomentsPortfolio } from "../containers/MomentsPortfolio";

import bannerServices from "../assets/images/containers/banners/banner-2.jpg";

function ServicesPage() {
  return (
    <div className="main__wrapper">
      <Banner
        title="Schedule Your Shooting"
        description="GET A 10% DISCOUNT FOR THE NEXT FASHION PHOTOSHOOT."
        image={bannerServices}
      />
      <Services />
      <Pricing />
      <MomentsPortfolio />
    </div>
  );
}
export default ServicesPage;

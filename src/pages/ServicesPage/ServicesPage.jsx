//asserts
import bannerServices from "../../assets/images/containers/banners/banner-services.jpg";

//containers
import Banner from "../../containers/Banner";
import Pricing from "../../containers/Pricing";

function ServicesPage() {
  return (
    <div className="main__wrapper">
      <Banner
        title="Schedule Your Shooting"
        description="CONTACT US NOW AND GET A 10% DISCOUNT FOR THE NEXT FASHION PHOTOSHOOT."
        image={bannerServices}
      />
      <Pricing />
    </div>
  );
}
export default ServicesPage;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

//assets
import "../../assets/styles/containers/portfolio.scss";

import portfolioFirst from "../../assets/images/containers/portfolio/portfolio-1.jpg";
import portfolioSecond from "../../assets/images/containers/portfolio/portfolio-2.jpg";
import portfolioThird from "../../assets/images/containers/portfolio/portfolio-3.jpg";
import portfolioFourth from "../../assets/images/containers/portfolio/portfolio-4.jpg";
import portfolioFifth from "../../assets/images/containers/portfolio/portfolio-5.jpg";
import portfolioSixth from "../../assets/images/containers/portfolio/portfolio-6.jpg";

//components
import PortfolioCard from "./components/PortfolioCard";

import Slider from "../../components/Slider";

function Portfolio() {
  return (
    <section className="portfolio container">
      <h2 className="portfolio__title title">Portfolio</h2>
      <div className="divider"></div>
      <p className="portfolio__subtitle subtitle">EVERY PHOTOSHOOT IS ART.</p>
      <Slider slidesPerView={3}>
        <Swiper>
          <SwiperSlide>
            <PortfolioCard photo={portfolioFirst} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard photo={portfolioSecond} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard photo={portfolioThird} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard photo={portfolioFourth} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard photo={portfolioFifth} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard photo={portfolioSixth} />
          </SwiperSlide>
        </Swiper>
      </Slider>
    </section>
  );
}
export default Portfolio;

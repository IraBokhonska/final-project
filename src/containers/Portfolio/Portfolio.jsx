import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import Slider from "../../components/Slider";

import "../../assets/styles/containers/portfolio.scss";

import portfolioFirst from "../../assets/images/containers/portfolio/portfolio-1.jpg";
import portfolioSecond from "../../assets/images/containers/portfolio/portfolio-2.jpg";
import portfolioThird from "../../assets/images/containers/portfolio/portfolio-3.jpg";
import portfolioFourth from "../../assets/images/containers/portfolio/portfolio-4.jpg";
import portfolioFifth from "../../assets/images/containers/portfolio/portfolio-5.jpg";
import portfolioSixth from "../../assets/images/containers/portfolio/portfolio-6.jpg";

function Portfolio() {
  const breakpoints = {
    992: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  };

  const portfolioImages = [
    portfolioFirst,
    portfolioSecond,
    portfolioThird,
    portfolioFourth,
    portfolioFifth,
    portfolioSixth,
  ];

  return (
    <section className="portfolio container">
      <h2 className="portfolio__title title">Portfolio</h2>
      <div className="divider"></div>
      <p className="portfolio__subtitle subtitle">EVERY PHOTOSHOOT IS ART.</p>
      <Slider slidesPerView={3} breakpoints={breakpoints}>
        <Swiper>
          {portfolioImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="portfolio__photo">
                <img src={item} alt="portfolioPhoto" className="photo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Slider>
    </section>
  );
}
export default Portfolio;

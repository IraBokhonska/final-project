import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import Slider from "./Slider";

import "../assets/styles/components/portfolio.scss";

function Portfolio({ title, subtitle, portfolioImages }) {
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

  return (
    <section className="portfolio container">
      <h2 className="portfolio__title title">{title}</h2>
      <div className="divider"></div>
      <p className="portfolio__subtitle subtitle">{subtitle}</p>
      <Slider slidesPerView={3} breakpoints={breakpoints}>
        <Swiper>
          {portfolioImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="portfolio__photo">
                <img
                  src={item}
                  alt={`portfolioPhoto-${index}`}
                  className="photo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Slider>
    </section>
  );
}

export default Portfolio;

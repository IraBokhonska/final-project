import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../assets/styles/components/slider.scss";

function Slider({ children, slidesPerView }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={slidesPerView}
      loop={true}
      speed={300}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {children}
    </Swiper>
  );
}
export default Slider;

import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

//assets
import "../../assets/styles/containers/photographers.scss";

import photographerFirst from "../../assets/images/containers/photographers/photographer-1.jpg";
import photographerSecond from "../../assets/images/containers/photographers/photographer-2.jpg";
import photographerThird from "../../assets/images/containers/photographers/photographer-3.jpg";

//components
import PhotographerCard from "./components/PhotographerCard";
import Slider from "../../components/Slider";

function Photographers() {
  return (
    <section className="photographers" id="photographers">
      <Slider>
        <SwiperSlide>
          <PhotographerCard
            photographerName="Liza Lypchynska"
            content={[
              "Lisa is an extremely talented photographer. Her fetish is portrait photography. Her work is not just a shot, it's a flight of fancy, it's the discovery of new facets of your personality.",
              'She also loves shooting with pets. "I love those crazy unplanned photos," says Lisa.',
            ]}
            photo={photographerFirst}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PhotographerCard
            photographerName="Max Lys"
            content={[
              "Max is charismatic and full of life. His work impresses with its thirst for knowledge of the world. It's like a sip of something new, it's like a reflection of peace of mind and frenzy at the same time.",
              "Max loves family photos, his pictures are always bright and interesting. And the process of shooting is something unique, once you get into it, you will never want to look for someone else.",
            ]}
            photo={photographerSecond}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PhotographerCard
            photographerName="Lilia Rudchenko"
            content={[
              "Lilia has extensive experience in fashion shoots and a unique ability to make you feel comfortable in the frame. She does a great job of finding the best location, managing the shoot, and listening to your wishes.",

              "She is very creative,  and even an ordinary picture will look so original and crazy that you don't understand how it is possible.",
            ]}
            photo={photographerThird}
          />
        </SwiperSlide>
      </Slider>
    </section>
  );
}
export default Photographers;

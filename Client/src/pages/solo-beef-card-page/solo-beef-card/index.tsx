import BeefModel from 'models/beef-model';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Mousewheel, Keyboard,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Img from 'components/ui/img';

type SoloBeefProps = BeefModel;

const SoloBeefCard: React.FC<SoloBeefProps> = ({
  price,
  cut,
  img,
  rating,
  id,
  farm: {
    country,
    city,
  },
}) => (
  <Swiper
    cssMode
    navigation
    pagination
    mousewheel
    keyboard
    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    className="mySwiper"
  >
    <SwiperSlide>
      <Img src={img[0]} />
    </SwiperSlide>
    <SwiperSlide><Img src={img[1]} /></SwiperSlide>
    <SwiperSlide><Img src={img[2]} /></SwiperSlide>
  </Swiper>
);

export default SoloBeefCard;

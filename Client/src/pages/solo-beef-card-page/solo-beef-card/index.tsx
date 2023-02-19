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
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Stack,
} from '@mui/material';

type SoloBeefProps = BeefModel;

const SoloBeefCard: React.FC<SoloBeefProps> = ({
  price,
  cut,
  images,
  rating,
  farm: {
    country,
    name,
  },
}) => (
  <Card sx={{
    width: 500,
    margin: 'auto',
    height: 550,
    boxShadow: 3,
  }}
  >
    <CardMedia>
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
          <Img
            sx={{ aspectRatio: '1.42', width: 1 }}
            src={images[0]}
          />
        </SwiperSlide>
        <SwiperSlide><Img sx={{ aspectRatio: '1.42', width: 1 }} src={images[1]} /></SwiperSlide>
        <SwiperSlide><Img sx={{ aspectRatio: '1.42', width: 1 }} src={images[2]} /></SwiperSlide>
      </Swiper>

    </CardMedia>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {cut}
      </Typography>
      <Stack>
        <Typography>
          This beef cut is from
          {' '}
          {country}
          ,
          {' '}
          {name}
        </Typography>
      </Stack>
      <Typography>Lorem ipsum dolor sit amet.</Typography>
      <Typography>
        Price is often:
        {' '}
        {price}
      </Typography>
      <Stack justifyContent="center">
        <Typography>
          Rating for this cut is
          {' '}
          {rating}
          {' '}
          stars
          {' '}
        </Typography>
      </Stack>
    </CardContent>
  </Card>

);

export default SoloBeefCard;

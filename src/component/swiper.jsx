import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import review1 from '../img/review1.png'
import review2 from '../img/review2.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
  const id = rand(1, 200);
  return `${review1}`;
}

function imgUrl2() {
  const id = rand(1, 200);
  return `${review2}`;
}

function createSlide() {
  return (
    <SwiperSlide>
      <img className="reviw-img" src={imgUrl()} alt="reviewキャンペーン" />
    </SwiperSlide>
  );
}

function createSlidce2() {
  return (
    <SwiperSlide>
      <img className="reviw-img" src={imgUrl2()} alt="reviewキャンペーン" />
    </SwiperSlide>
  );
}

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      centeredSlides={true}
      loop={true}
    >
      
      {createSlidce2()}
      {createSlide()}
      {createSlidce2()}
      {createSlide()}
      {createSlidce2()}
      {createSlide()}
      {createSlidce2()}
      {createSlide()}
    </Swiper>
  );
};

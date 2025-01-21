import { FaSearch } from "react-icons/fa";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import campaign from '../img/canp.jpg';
import campaign2 from '../img/3000pur.png';
import campaign3 from '../img/purcanp.jpg';

function Campaign () {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="purcheck-swiper"
      >
        <SwiperSlide><img src={campaign} alt="campaign" /></SwiperSlide>
        <SwiperSlide><img src={campaign2} alt="campaign2" /></SwiperSlide>
        <SwiperSlide><img src={campaign3} alt="campaign3" /></SwiperSlide>
        <SwiperSlide><img src={campaign} alt="campaign" /></SwiperSlide>
        <SwiperSlide><img src={campaign2} alt="campaign2" /></SwiperSlide>
        <SwiperSlide><img src={campaign3} alt="campaign3" /></SwiperSlide>
        <SwiperSlide><img src={campaign} alt="campaign" /></SwiperSlide>
        <SwiperSlide><img src={campaign2} alt="campaign2" /></SwiperSlide>
        <SwiperSlide><img src={campaign3} alt="campaign3" /></SwiperSlide>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </>
  );
}


function Purcheck() {
    return (
        <div className='purcheck'>
            <h2>今すぐ買取金額をチェック！</h2>
            <input className='LPsearchtext' type="search" placeholder='製品名や型番などで検索' name='s'/>
            <div className='LPsearchboxright'>
            <FaSearch className='LPsearch_icon'/>
            </div>
            <Campaign />
        </div>

    )
}


export default Purcheck;

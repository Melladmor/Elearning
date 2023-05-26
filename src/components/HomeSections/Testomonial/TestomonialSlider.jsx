import React, { useRef, useState } from 'react'
import Swiper from 'react-id-swiper';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleRight ,faAngleLeft} from '@fortawesome/fontawesome-free-solid'
import style from './KidsTestomonial.module.scss'
function TestomonialSlider({children ,className ,testim}) {
    const swiperRef = useRef(null);
    const goNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();

      }
    };
    const params={
      spaceBetween: 150,
    }

  return (
    <div className={`${className} ${style.slider}` }>
      <Swiper ref={swiperRef} {...params}>
        {children}
      </Swiper>
      <button onClick={goPrev} className={`${style.slider_btn} ${style.prev_btn}`} >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      <button onClick={goNext} className={`${style.slider_btn} ${style.next_btn}`} >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  )
}

export default TestomonialSlider
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


import './sweperStyle.scss'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Mousewheel, Pagination  ,FreeMode} from "swiper";
type Props = {
    children:any,
    margen:number,
    slide:number
}

const SmallScreenSlide = (props: Props) => {
  return (
        <Swiper
        direction={"horizontal"}
        slidesPerView={props.slide}
        spaceBetween={props.margen}
        freeMode={true}
        mousewheel={true}
        modules={[Mousewheel ,FreeMode ,Pagination]}
        className="mySwiper"
      >
            {props.children}
      </Swiper>
  )
}
export default SmallScreenSlide
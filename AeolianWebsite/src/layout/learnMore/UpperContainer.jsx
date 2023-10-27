import "../../layout/layout-styles/learnMore.css";

import '/node_modules/swiper/swiper.css'

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';



const LearnUpper = () => {    
  return <div className="Main-Container">

    <div className="title-container">
    <h1>Enable touch functionality <br/>for <span>any</span> monitor.</h1>
    </div>

    <div className="swiperContainer">
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

    </div>


  </div>
  
};

export default LearnUpper;

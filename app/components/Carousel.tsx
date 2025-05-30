"use client"
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import NavigationButton from "./NavigationButton";
import SlideCaption from "./SlideCaption";

interface SwiperCssProperties extends React.CSSProperties {
  "--swiper-pagination-color": string;
}

interface Slide {
  image: ImageProps;
  caption?: string;
}


const Carousel = ({ slides }: { slides: Slide[] }) => {


  const SwiperNavigationAsArrows = () => {
    const swiper = useSwiper();
    const buttonClassName =
      "text-white border-white border-2 rounded-full w-10 h-10 hover:text-zinc-200 hover:border-zinc-200";
    return (
      <div className="absolute right-3 bottom-3 z-50">
        <NavigationButton
          className={`${buttonClassName} mr-3`}
          onClick={() => swiper.slidePrev()}
          arrowIcon={faArrowLeft}
          arrowSize="lg"
        />
        <NavigationButton
          className={`${buttonClassName}`}
          onClick={() => swiper.slideNext()}
          arrowIcon={faArrowRight}
          arrowSize="lg"
        />
      </div>
    );
  };

  const swiperCssProperties: SwiperCssProperties = {
    "--swiper-pagination-color": "white",
  };
  const [showCaption, setShowCaption] = useState(false);

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      style={swiperCssProperties}
      speed={1000}
      centeredSlides={true}
      onSlideChangeTransitionEnd={() => {
        setShowCaption(true);
      }}
      >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className="text-center">
            <Image {...slide.image} className={slide.image?.className ?? "" + " inline"} />
            {slide.caption && <SlideCaption showCaption={showCaption} caption={slide.caption}/>}
          </SwiperSlide>
        )
      })}
      {slides.length > 1 && <SwiperNavigationAsArrows />}
    </Swiper>
  );
};

export default Carousel;

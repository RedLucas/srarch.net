import React, { useState } from "react";
import Image from "next/image";
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

const HomeCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const slides: { image: JSX.Element; caption: React.ReactNode }[] = [
    {
      image: (
        <Image
          alt=""
          src="/carousel/sunshine-coast.jpg"
          width={1800}
          height={1200}
          placeholder="blur"
          blurDataURL="L7F$2{:401LN00~Tsk9c009^~9-P"
          className="inline"
        />
      ),
      caption: "Award winning architecture studio",
    },
    {
      image: (
        <Image
          src="/carousel/sobre.jpg"
          alt=""
          width={1800}
          height={1200}
          placeholder="blur"
          blurDataURL="LdHB}LS*ozoc?wt6j]WVKm-:xZWC"
          className="inline"
        />
      ),
      caption: "Architectural, planning & interior design",
    },
    {
      image: (
        <Image
          src="/carousel/waterfront.jpg"
          alt=""
          width={1800}
          height={1200}
          placeholder="blur"
          blurDataURL="LbG+XVtR%MkW~qoft7t8?bV@jsxb"
          className="inline"
        />
      ),
      caption: "Internationally recognized for creativity & originality",
    },
  ];

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
    maxWidth: "1800px",
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
          <SwiperSlide key={index} className="text-center relative">
            {slide.image}
            <SlideCaption caption={slide.caption}/>
          </SwiperSlide>
        )
      })}
      <SwiperNavigationAsArrows />
    </Swiper>
  );
};

export default HomeCarousel;

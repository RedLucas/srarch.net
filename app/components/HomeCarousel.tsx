"use client"
import React from "react"
import Carousel from "react-multi-carousel"
import { ButtonGroupProps, ArrowProps } from "react-multi-carousel/lib/types"
import "react-multi-carousel/lib/styles.css"
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string
}

interface CarouselArrowProps extends ArrowProps {
  className?: string
  arrowSize?: FontAwesomeIconProps["size"]
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
  }

  const slides: { image: JSX.Element; caption: React.ReactNode }[] = [
    {
      image: (
        <Image src="/carousel/sobre.jpg" alt="" width={1800} height={1200} />
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
        />
      ),
      caption: "Internationally recognized for creativity & originality",
    },
  ]

  const CustomLeftArrow = ({
    onClick,
    className,
    arrowSize,
  }: CarouselArrowProps) => {
    return (
      <button className={className} onClick={() => onClick && onClick()}>
        <FontAwesomeIcon icon={faArrowLeft} size={arrowSize} />
      </button>
    )
  }

  const CustomRightArrow = ({
    onClick,
    className,
    arrowSize,
  }: CarouselArrowProps) => {
    return (
      <button className={className} onClick={() => onClick && onClick()}>
        <FontAwesomeIcon icon={faArrowRight} size={arrowSize} />
      </button>
    )
  }

  const CustomButtonGroupAsArrows = ({
    next,
    previous,
  }: CarouselButtonGroupProps) => {
    const buttonClassName =
      "text-white border-white border-2 rounded-full w-10 h-10 hover:text-zinc-200 hover:border-zinc-200"
    return (
      <div className="absolute right-3 bottom-3 ">
        <CustomLeftArrow
          className={`${buttonClassName} mr-3`}
          onClick={previous}
          arrowSize="lg"
        />
        <CustomRightArrow
          className={buttonClassName}
          onClick={next}
          arrowSize="lg"
        />
      </div>
    )
  }

  return (
    <Carousel
      // customLeftArrow={<CustomLeftArrow />}
      // customRightArrow={<CustomRightArrow />}
      responsive={responsive}
      customButtonGroup={<CustomButtonGroupAsArrows />}
      arrows={false}
      infinite={true}
      // customDot={<CustomDots />}
    >
      {slides.map((slide, index) => (
        <div className="relative" key={index}>
          {slide.image}
          <p className="legend absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-4xl text-center min-w-full">
            {slide.caption}
          </p>
        </div>
      ))}
    </Carousel>
  )
}

export default HomeCarousel

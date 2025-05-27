import { ReactNode } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";

interface SlideCaptionProps {
  caption: ReactNode;
  showCaption: boolean;
}

export default function SlideCaption({
  caption,
  showCaption = false,
}: SlideCaptionProps) {
  const swiperSlide = useSwiperSlide();
  const opacityClass = showCaption && swiperSlide.isActive ? "opacity-100" : "opacity-0";
  return (
    <p className={`legend absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl md:text-3xl lg:text-4xl text-center min-w-full uppercase drop-shadow-[1px_1px_5px_black] transition-opacity duration-2000 ${opacityClass}`}>
      {caption}
    </p>
  );
};

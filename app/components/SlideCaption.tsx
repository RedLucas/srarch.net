import { ReactNode } from "react";

interface SlideCaptionProps {
  caption: ReactNode;
}

export default function SlideCaption({
  caption,
}: SlideCaptionProps) {
  return (
    <p className={`legend absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl md:text-3xl lg:text-4xl text-center min-w-full uppercase drop-shadow-[1px_1px_5px_black] duration-2000 animate-fade-in-up`}>
      {caption}
    </p>
  );
};

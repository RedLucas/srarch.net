import React from "react";
import Carousel from "../../components/Carousel";

export async function generateStaticParams() {
  return [
    { slug: "sobre-los-cerros" },
  ];
}

export default async function Project({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const manifest = await import(`./${slug}/manifest.json`);
  return (
    <div>
      <Carousel slides={manifest.slides} />
    </div>
  );
}

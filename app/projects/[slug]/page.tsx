import React from "react";
import Carousel from "../../components/Carousel";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [
    { slug: "sobre-los-cerros" },
  ];
}

export default async function Project({ params }: PageProps) {
  const { slug } = await params;
  const manifest = await import(`./${slug}/manifest.json`);
  return (
    <div>
      <Carousel slides={manifest.slides} />
    </div>
  );
}

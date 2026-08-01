import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Carousel from "../../components/Carousel";
import { findProject, projects } from "../projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  return {
    title: `${project?.title ?? "Project"} | SRA Architect Inc.`,
    description: project?.summary,
    robots: project?.hidden ? { index: false, follow: false } : undefined,
  };
}

export default async function Project({ params }: PageProps) {
  const { slug } = await params;
  const project = findProject(slug);
  const manifest = await import(`./${slug}/manifest.json`);
  const details = [
    project?.location && { label: "Location", value: project.location },
    project?.type && { label: "Type", value: project.type },
    project?.year && { label: "Year", value: project.year },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div>
      {manifest.slides.length > 0 && <Carousel slides={manifest.slides} />}
      <div className="container px-3 pb-10">
        <h1 className="pt-5">{project?.title}</h1>
        {details.length > 0 && (
          <p className="pt-1 text-sm text-zinc-500">
            {details.map(({ label, value }) => `${label}: ${value}`).join(" · ")}
          </p>
        )}
        <div className="max-w-prose pt-4">
          {(manifest.description ?? []).map(
            (paragraph: string, index: number) => (
              <p key={index} className="pb-4">
                {paragraph}
              </p>
            ),
          )}
          {manifest.note && (
            <p className="pb-4 text-sm text-zinc-500 italic">{manifest.note}</p>
          )}
        </div>
        <Link href="/projects">← All projects</Link>
      </div>
    </div>
  );
}

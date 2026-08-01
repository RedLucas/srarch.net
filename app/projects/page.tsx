import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { visibleProjects } from "./projects";

export const metadata: Metadata = {
  title: "Projects | SRA Architect Inc.",
  description:
    "Selected projects by Soren Rasmussen Architects Inc. — architectural, planning & interior design.",
};

export default function Projects() {
  const projects = visibleProjects();
  return (
    <div className="container px-3">
      <h1 className="py-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block hover:no-underline"
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-zinc-100">
              {project.cover ? (
                <Image
                  src={project.cover.src}
                  alt={project.title}
                  width={project.cover.width}
                  height={project.cover.height}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex size-full items-center justify-center">
                  <Image
                    src="/sralogo.svg"
                    alt=""
                    width={120}
                    height={120}
                    className="opacity-20"
                  />
                </div>
              )}
            </div>
            <h2 className="pt-3 text-black">{project.title}</h2>
            <p className="text-sm text-zinc-500">
              {[project.location, project.type].filter(Boolean).join(" · ")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

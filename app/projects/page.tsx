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
                  className={`size-full transition-transform duration-700 group-hover:scale-105 ${
                    project.cover.width / project.cover.height > 2.2
                      ? "object-contain p-4"
                      : "object-cover"
                  }`}
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
      <div className="max-w-4xl pb-10">
        <h2 className="pb-2">Further selected projects</h2>
        <p className="pb-4 text-sm text-zinc-500">
          From the firm&apos;s Portfolio of Selected Projects, 2005.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 text-sm">
          {furtherProjects.map(({ category, items }) => (
            <div key={category} className="pb-4">
              <h3 className="pb-1">{category}</h3>
              <ul className="text-zinc-600">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const furtherProjects = [
  {
    category: "Hotels",
    items: [
      "Arlington Hotel, Vancouver",
      "The Executive House Hotel, Victoria",
      "The Landing Hotel, Vancouver",
      "Douglas Fir Resort Renovations, Banff",
      "Recreation Hotel and Convention Facilities, Green Lake, Whistler",
    ],
  },
  {
    category: "Restaurants",
    items: [
      "Kingston Taphouse and Grille, Vancouver",
      "Pravda Pub & Restaurant, Vancouver",
      "Al Porto, Vancouver",
      "Chardonnays, Vancouver",
      "The Landing Restaurant, Vancouver",
      "Il Caminetto di Umberto & La Trattoria, Whistler",
      "Umberto's Restaurant, Vancouver",
    ],
  },
  {
    category: "Renovation & Restoration",
    items: [
      "Hudson House, Vancouver",
      "329 Railway Street, Vancouver",
      "Chinese Times Building, 1 East Pender Street, Vancouver",
    ],
  },
  {
    category: "Offices",
    items: [
      "CN Headquarters, Montreal",
      "McLean Group Offices, The Landing, Vancouver",
      "Seaboard–Fidelity Life Insurance, Vancouver",
      "Reamsbottom & Associates, The Landing, Vancouver",
    ],
  },
  {
    category: "Residential",
    items: [
      "Goldspring Heights, Chilliwack",
      "Yurik Residence, Vancouver",
      "Farquar Summer Residence, Gulf Islands",
    ],
  },
  {
    category: "Care Facilities",
    items: [
      "Crescent Gardens, White Rock",
      "Harrison Landing, Langley",
    ],
  },
  {
    category: "Commercial",
    items: [
      "Longwood Station, Nanaimo",
      "Cascade Parkade, Banff",
    ],
  },
  {
    category: "Institutional",
    items: [
      "Alberta Treasury Branch, Banff",
      "Provincial Courthouse, Banff",
    ],
  },
  {
    category: "Leisure",
    items: [
      "Gloucester Golf & Country Club, Langley",
      "Summerland Golf & Country Club, Summerland",
      "Pacific Lagoons Golf & Country Club, Delta",
    ],
  },
];

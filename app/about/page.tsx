import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

export const metadata: Metadata = {
  title: "About | SRA Architect Inc.",
  description:
    "Soren Rasmussen Architects Inc. — an award-winning Vancouver architecture studio for architectural design, planning and interior design.",
};

const values = [
  {
    icon: faLeaf,
    title: "LEED Certified",
    text: "Fully certified to design buildings for a green future.",
  },
  {
    icon: faSquare,
    title: "Simplicity",
    text: "A simple ideology: focusing on better design without unnecessary frills.",
  },
  {
    icon: faEarthAmericas,
    title: "Worldwide",
    text: "Projects all around the world, adapting to different geographies.",
  },
];

export default function About() {
  return (
    <div className="container px-3 pb-10">
      <h1 className="py-5">About</h1>

      <div className="max-w-prose">
        <p className="pb-4">
          <strong>SRA Architect Inc.</strong> — Soren Rasmussen Architects —
          was an award-winning architecture studio recognized internationally
          for its creativity and originality in architectural design, planning
          and interior design.
        </p>
        <p className="pb-4">
          Founded and led by Søren Rasmussen, the Vancouver studio produced
          unique, client-based designs ranging from the traditional to the
          modern, for commercial and residential projects across British
          Columbia, Alberta and the western United States.
        </p>
        <p className="pb-4">
          The practice left a lasting mark on Vancouver&apos;s heritage fabric.
          In 1986 Søren designed the rehabilitation of the{" "}
          <Link href="/projects/sam-kee-building">Sam Kee Building</Link> — the
          narrowest commercial building in the world — for Jack Chow in
          Chinatown. In 1988 he converted the landmark Kelly Douglas warehouse
          in Gastown into{" "}
          <Link href="/projects/the-landing">The Landing</Link>, and in 1995 he
          returned to its foot as architect and co-founder of{" "}
          <Link href="/projects/steamworks-brew-pub">Steamworks Brew Pub</Link>.
          In the early 1990s he designed the interior of{" "}
          <Link href="/projects/mclean-hall">McLean Hall</Link> at St.
          George&apos;s School. Alongside this civic work ran a lifetime of
          houses — retreats and waterfront residences shaped by the coast&apos;s
          geography of rock, forest and water — and the studio remained active
          until Søren&apos;s passing in December 2022.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 max-w-4xl">
        {values.map(({ icon, title, text }) => (
          <div key={title} className="text-center">
            <div className="mx-auto flex size-24 items-center justify-center bg-[#1b96be]">
              <FontAwesomeIcon icon={icon} className="size-12 text-white" />
            </div>
            <h2 className="pt-3">{title}</h2>
            <p className="pt-1 text-sm text-zinc-600">{text}</p>
          </div>
        ))}
      </div>

      <div className="max-w-prose">
        <h2 className="pb-3">The Studio</h2>
        <ul className="pb-4">
          <li>Søren Rasmussen — Principal</li>
          <li>Malcolm Candler — Associate</li>
          <li>Lisa Kwan — Intern Architect</li>
        </ul>
        <p className="pb-4 text-sm text-zinc-600">
          Over the years the studio worked from #450 – 375 Water Street in
          Gastown (inside The Landing), #120 – 1412 W 7th Avenue in Fairview,
          and finally 1550 Rand Avenue.
        </p>
        <p className="pb-4">
          The office is now closed following the{" "}
          <Link href="/memory">
            passing of Søren Rasmussen on December 13th, 2022
          </Link>
          . This site is maintained by his family as a record of his work.
        </p>
      </div>

      <div className="pt-6">
        <Image
          src="/carousel/sidney-cannery/elevation.png"
          alt="Hand-coloured street elevation drawing of the Sidney Cannery by Soren Rasmussen Architects"
          width={746}
          height={208}
          className="w-full max-w-4xl"
        />
      </div>
    </div>
  );
}

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

const awards = [
  {
    project: "The Landing",
    honours:
      "BC Heritage Award 1989 · Interior Design Institute of BC Silver Award 1989 · Vancouver Heritage Award 1988",
    href: "/projects/the-landing",
  },
  {
    project: "Sam Kee Building",
    honours: "BC Heritage Award 1988 · Vancouver Heritage Award 1988",
    href: "/projects/sam-kee-building",
  },
  {
    project: "Soren Rasmussen Architects Office",
    honours: "Interior Design Institute of BC Award 1989",
    href: "/projects/sra-office",
  },
  {
    project: "Tsatsu Shores",
    honours: "Georgie Award 1997",
    href: "/projects/tsatsu-shores",
  },
  {
    project: "Rasmussen Residence",
    honours: "Georgie Award 1999",
    href: "/projects/collingwood-street-residence",
  },
  {
    project: "Longwood Pub",
    honours: "City of Nanaimo Design Award 2000",
    href: "/projects/longwood-pub",
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
          Founded and led by Søren Rasmussen — MAIBC, MAAA, MRAIC — the
          Vancouver practice provided comprehensive architectural, planning
          and interior design services on office, residential and commercial
          developments throughout British Columbia and Alberta, particularly
          in Vancouver and on Vancouver Island, with work reaching into the
          western United States. In the firm&apos;s own words, its projects
          were &quot;often unique in nature and highly demanding throughout
          the design and approvals process&quot; — met with creativity and
          originality, cost-effective solutions, and strict attention to
          detail.
        </p>
        <p className="pb-4">
          The practice left a lasting mark on Vancouver&apos;s heritage
          fabric. In 1986 Søren designed the rehabilitation of the{" "}
          <Link href="/projects/sam-kee-building">Sam Kee Building</Link> — the
          narrowest commercial building in the world — for Jack Chow in
          Chinatown. In 1988–89 he converted the landmark Gastown warehouse at
          375 Water Street into{" "}
          <Link href="/projects/the-landing">The Landing</Link>, kept his own{" "}
          <Link href="/projects/sra-office">award-winning studio</Link> inside
          it, and in 1995 returned to its foot as architect and co-founder of{" "}
          <Link href="/projects/steamworks-brew-pub">Steamworks Brew Pub</Link>
          . Alongside this civic work ran schools and colleges, hotels in the
          Rockies, seniors&apos; communities, film studios — and a lifetime of
          houses, from{" "}
          <Link href="/projects/sunshine-coast-retreat">
            a family retreat on the Sunshine Coast
          </Link>{" "}
          to{" "}
          <Link href="/projects/sobre-los-cerros">
            a Spanish Revival villa in San Diego
          </Link>
          . The studio remained active until Søren&apos;s passing in December
          2022.
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
        <h2 className="pb-3">Awards</h2>
        <ul className="pb-4">
          {awards.map(({ project, honours, href }) => (
            <li key={project} className="pb-2">
              <Link href={href}>{project}</Link>
              <br />
              <span className="text-sm text-zinc-600">{honours}</span>
            </li>
          ))}
        </ul>

        <h2 className="pb-3">The Studio</h2>
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
          src="/carousel/sidney-waterfront/elevation.png"
          alt="Hand-coloured street elevation drawing of the Sidney Waterfront project by Soren Rasmussen Architects"
          width={746}
          height={208}
          className="w-full max-w-4xl"
        />
      </div>
    </div>
  );
}

export interface ProjectMeta {
  slug: string;
  title: string;
  location?: string;
  type?: string;
  year?: string;
  summary?: string;
  cover?: {
    src: string;
    width: number;
    height: number;
  };
  /**
   * Hidden projects are built and reachable by direct URL so the family can
   * review them, but they are excluded from the Projects index and marked
   * noindex until enough material is recovered to present them properly.
   */
  hidden?: boolean;
}

export const projects: ProjectMeta[] = [
  {
    slug: "sunshine-coast-retreat",
    title: "Sunshine Coast Retreat",
    location: "Sunshine Coast, BC",
    type: "Private Residence",
    summary:
      "A timber, stone and glass retreat on British Columbia's Sunshine Coast.",
    cover: {
      src: "/carousel/sunshine-coast.jpg",
      width: 1800,
      height: 1200,
    },
  },
  {
    slug: "sobre-los-cerros",
    title: "Sobre Los Cerros",
    type: "Private Residence",
    summary:
      "A courtyard villa arranged around a long reflecting pool, from the studio's photographic archive.",
    cover: {
      src: "/carousel/sobre-los-cerros/Sobre-01.jpg",
      width: 1800,
      height: 1200,
    },
  },
  {
    slug: "sam-kee-building",
    title: "Sam Kee Building",
    location: "8 West Pender Street, Vancouver",
    type: "Heritage Rehabilitation",
    year: "1986",
    summary:
      "Rehabilitation of the world's narrowest commercial building, a Chinatown landmark.",
  },
  {
    slug: "the-landing",
    title: "The Landing",
    location: "375 Water Street, Vancouver",
    type: "Heritage Conversion",
    year: "1988",
    summary:
      "Conversion of the landmark 1905 Kelly Douglas warehouse in Gastown into office, retail and restaurant use.",
  },
  {
    slug: "mclean-hall",
    title: "McLean Hall, St. George's School",
    location: "Vancouver, BC",
    type: "Institutional Interior",
    year: "Early 1990s",
    summary:
      "Interior of the gathering and dining hall at St. George's School, commissioned by David McLean.",
  },
  {
    slug: "steamworks-brew-pub",
    title: "Steamworks Brew Pub",
    location: "375 Water Street, Vancouver",
    type: "Heritage Retrofit · Hospitality",
    year: "1995",
    summary:
      "Retrofit of a heritage Gastown building into Vancouver's landmark steam-powered brewpub — as architect and co-founder.",
  },
  {
    slug: "parker-island-residence",
    title: "Parker Island Residence",
    location: "Southern Gulf Islands, BC",
    type: "Private Residence",
    summary:
      "A boat-access waterfront residence in the Southern Gulf Islands, featured on the studio's original website.",
  },
  {
    slug: "waterfront-house",
    title: "Waterfront House",
    location: "Coastal British Columbia",
    type: "Private Residence",
    summary:
      "A secluded waterfront house of glass, concrete, bluestone and white oak, published internationally by Trends.",
    hidden: true,
  },
  {
    slug: "sidney-cannery",
    title: "Sidney Cannery",
    location: "Sidney, BC",
    type: "Commercial",
    summary:
      "A cannery-inspired commercial street elevation for Sidney's waterfront high street.",
    cover: {
      src: "/carousel/sidney-cannery/elevation.png",
      width: 746,
      height: 208,
    },
    hidden: true,
  },
  {
    slug: "garden-residence",
    title: "Garden Residence",
    type: "Private Residence",
    summary:
      "A West Coast modern house and garden with timber pergola and koi pond, from the studio's archive.",
    cover: {
      src: "/carousel/back-yard/back-yard.jpg",
      width: 1800,
      height: 1350,
    },
    hidden: true,
  },
  {
    slug: "mathers-avenue-residence",
    title: "Mathers Avenue Residence",
    location: "West Vancouver, BC",
    type: "Residential Accessory Building",
    year: "2020",
    summary:
      "An accessory building in Altamont, West Vancouver — one of the studio's final projects.",
    hidden: true,
  },
  {
    slug: "wilmar-residence",
    title: "Wilmar Residence",
    location: "2050 SW Marine Drive, Vancouver",
    type: "Heritage Rehabilitation Proposal",
    year: "2013",
    summary:
      "A proposal for the rehabilitation of the 1925 Wilmar heritage estate.",
    hidden: true,
  },
];

export const visibleProjects = (): ProjectMeta[] =>
  projects.filter((project) => !project.hidden);

export const findProject = (slug: string): ProjectMeta | undefined =>
  projects.find((project) => project.slug === slug);

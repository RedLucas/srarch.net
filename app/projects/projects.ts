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
      "A family retreat of timber, stone, concrete and glass on a remote wooded shore — published internationally by Trends.",
    cover: {
      src: "/carousel/sunshine-coast.jpg",
      width: 1800,
      height: 1200,
    },
  },
  {
    slug: "sobre-los-cerros",
    title: "Sobre Los Cerros",
    location: "San Diego, California",
    type: "Private Residence",
    summary:
      "A Spanish Revival courtyard villa arranged around a long reflecting pool.",
    cover: {
      src: "/carousel/sobre-los-cerros/Sobre-01.jpg",
      width: 1800,
      height: 1200,
    },
  },
  {
    slug: "rosie-bay-residence",
    title: "Rosie Bay Residence",
    location: "Tofino, BC",
    type: "Private Residence",
    summary:
      "A waterfront house of cast concrete and clear fir on Vancouver Island's outer coast.",
    cover: {
      src: "/carousel/rosie-bay-residence/Rosie-05.jpg",
      width: 1800,
      height: 1200,
    },
  },
  {
    slug: "langley-residence",
    title: "Langley Residence",
    location: "Langley, BC",
    type: "Private Residence",
    summary:
      "A timber-and-stone country house opening onto lawns and a curved pool in the Fraser Valley.",
    cover: {
      src: "/carousel/langley-residence/Fahy-01.jpg",
      width: 1800,
      height: 1200,
    },
  },
  {
    slug: "collingwood-street-residence",
    title: "Collingwood Residence",
    location: "Vancouver, BC",
    type: "Private Residence",
    year: "Georgie Award 1999",
    summary:
      "The architect's own family home — Arts and Crafts craftsmanship under a great enveloping roof.",
    cover: {
      src: "/carousel/collingwood-street/back-yard.jpg",
      width: 1800,
      height: 1350,
    },
  },
  {
    slug: "sam-kee-building",
    title: "Sam Kee Building",
    location: "8 West Pender Street, Vancouver",
    type: "Heritage Rehabilitation",
    year: "1986",
    summary:
      "Rehabilitation of the world's narrowest commercial building — BC Heritage and Vancouver Heritage Awards, 1988.",
    cover: {
      src: "/carousel/sam-kee-building/sam-kee-side.jpg",
      width: 1402,
      height: 1800,
    },
  },
  {
    slug: "the-landing",
    title: "The Landing",
    location: "375 Water Street, Vancouver",
    type: "Heritage Conversion",
    year: "1988–89",
    summary:
      "Conversion of the landmark 1905 Gastown warehouse — BC Heritage Award and IDIBC Silver Award, 1989.",
  },
  {
    slug: "waterfront-station-renovation",
    title: "Waterfront Station Renovation",
    location: "601 West Cordova Street, Vancouver",
    type: "Heritage Renovation",
    summary:
      "Restoration and accessibility work at the 1914 Canadian Pacific Railway terminal.",
    cover: {
      src: "/carousel/waterfront.jpg",
      width: 1800,
      height: 1200,
    },
  },
  {
    slug: "steamworks-brew-pub",
    title: "Steamworks Brew Pub",
    location: "375 Water Street, Vancouver",
    type: "Heritage Retrofit · Hospitality",
    year: "1995",
    summary:
      "Vancouver's landmark steam-powered brewpub — as architect and co-founder.",
  },
  {
    slug: "sra-office",
    title: "Soren Rasmussen Architects Office",
    location: "The Landing, Vancouver",
    type: "Office Interior",
    year: "IDIBC Award 1989",
    summary:
      "The studio's own award-winning rooms in the warehouse it converted.",
    cover: {
      src: "/carousel/sra-office/office-01.jpg",
      width: 630,
      height: 497,
    },
  },
  {
    slug: "mclean-hall",
    title: "McLean Hall, St. George's School",
    location: "Vancouver, BC",
    type: "Institutional Interior",
    year: "Early 1990s",
    summary:
      "The school's gathering and dining hall, centred on a great wood-burning fireplace.",
  },
  {
    slug: "tsatsu-shores",
    title: "Tsatsu Shores",
    location: "Tsawwassen, BC",
    type: "Multi-unit Residential",
    year: "Georgie Award 1997",
    summary:
      "Oceanfront condominiums and marina on Tsawwassen First Nation lands.",
  },
  {
    slug: "the-edge",
    title: "The Edge",
    location: "Vancouver, BC",
    type: "Multi-unit Residential",
    summary:
      "165 live-work condominiums with terraced decks facing the Lions Gate Bridge.",
    cover: {
      src: "/carousel/the-edge/edge-street.jpg",
      width: 624,
      height: 570,
    },
  },
  {
    slug: "mainspace",
    title: "Mainspace",
    location: "Vancouver, BC",
    type: "Multi-unit Residential",
    summary:
      "124 artist live-work condominiums of a deliberately industrial character.",
  },
  {
    slug: "longwood-pub",
    title: "Longwood Pub",
    location: "Nanaimo, BC",
    type: "Hospitality",
    year: "City of Nanaimo Design Award 2000",
    summary:
      "An award-winning neighbourhood pub anchoring the Longwood Station master plan.",
  },
  {
    slug: "storm-mountain-lodge",
    title: "Storm Mountain Lodge",
    location: "Banff National Park, Alberta",
    type: "Hotel",
    summary:
      "Renewal of an early-1900s bungalow camp around a new central lodge.",
  },
  {
    slug: "post-hotel",
    title: "Post Hotel",
    location: "Lake Louise, Alberta",
    type: "Hotel · Renovations",
    summary:
      "Additions, suites and spa for the historic lodge in Banff National Park.",
  },
  {
    slug: "cascade-plaza",
    title: "Cascade Plaza",
    location: "Banff, Alberta",
    type: "Commercial",
    summary:
      "Retail and offices around a skylit circular atrium in the mountain resort town.",
  },
  {
    slug: "waterfront-pearl",
    title: "Waterfront Pearl",
    location: "Portland, Oregon",
    type: "Multi-unit Residential",
    summary:
      "A 500,000 sq ft waterfront residential development in the Pearl District, as design architect.",
    cover: {
      src: "/carousel/waterfront-pearl/pearl-tower.jpg",
      width: 600,
      height: 393,
    },
  },
  {
    slug: "vancouver-film-studios",
    title: "Vancouver Film Studios",
    location: "Vancouver, BC",
    type: "Industrial · Master Plan",
    summary:
      "A 23-acre studio campus grown to ten sound stages over six years.",
  },
  {
    slug: "emily-carr-institute",
    title: "Emily Carr Institute",
    location: "Granville Island, Vancouver",
    type: "Institutional",
    summary:
      "Renovations, the Intersections Digital Studio, and The Gathering Place.",
    cover: {
      src: "/carousel/emily-carr-institute/rendering.png",
      width: 1000,
      height: 775,
    },
  },
  {
    slug: "york-house-school",
    title: "York House School",
    location: "Vancouver, BC",
    type: "Institutional",
    summary:
      "Rebuilding the Junior School and expanding the Senior School.",
  },
  {
    slug: "langley-gardens",
    title: "Langley Gardens",
    location: "Langley, BC",
    type: "Care Facility",
    summary:
      "A fifteen-acre seniors' community built around a courtyard garden and aging in place.",
  },
  {
    slug: "sidney-waterfront",
    title: "Sidney Waterfront",
    location: "Sidney, BC",
    type: "Commercial · Mixed Use",
    year: "2004",
    summary:
      "A cannery-inspired pub, shops and hotel along Sidney's seaside high street.",
    cover: {
      src: "/carousel/sidney-waterfront/elevation.png",
      width: 746,
      height: 208,
    },
  },
  {
    slug: "parker-island-residence",
    title: "Parker Island Residence",
    location: "Southern Gulf Islands, BC",
    type: "Private Residence",
    summary:
      "A boat-access waterfront residence in the Southern Gulf Islands.",
  },
  {
    slug: "bowen-island",
    title: "Bowen Island",
    location: "Bowen Island, BC",
    type: "Private Residence",
    summary: "A residence in Howe Sound, from the studio's original website.",
    hidden: true,
  },
  {
    slug: "manitoba-street-office",
    title: "Manitoba Street Office",
    location: "Vancouver, BC",
    type: "Office",
    summary: "The BTY office project from the studio's original website.",
    hidden: true,
  },
  {
    slug: "hepworth-residence",
    title: "Hepworth Residence",
    type: "Private Residence",
    summary: "A private residence from the studio's original website.",
    hidden: true,
  },
  {
    slug: "kerrisdale-residence",
    title: "Kerrisdale Residence",
    location: "Vancouver, BC",
    type: "Private Residence",
    summary: "A Kerrisdale residence from the studio's original website.",
    hidden: true,
  },
  {
    slug: "park-homes",
    title: "Park Homes",
    type: "Residential",
    summary: "A residential project from the studio's original website.",
    hidden: true,
  },
  {
    slug: "point-grey-renovation",
    title: "Point Grey Residence Renovation",
    location: "Vancouver, BC",
    type: "Renovation",
    summary: "A Point Grey renovation from the studio's original website.",
    hidden: true,
  },
  {
    slug: "rail-cars",
    title: "Rail Cars",
    summary: "A heritage rail-car project from the studio's original website.",
    hidden: true,
  },
  {
    slug: "whistler-cabin",
    title: "Whistler Cabin",
    location: "Whistler, BC",
    type: "Private Residence",
    summary: "A private cabin listed in the firm's portfolio.",
    hidden: true,
  },
  {
    slug: "waterfront-hotel-and-restaurant",
    title: "Waterfront Hotel and Restaurant",
    type: "Hospitality",
    summary: "A waterfront hotel and restaurant, identity to be confirmed.",
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

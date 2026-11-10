import {
  profileSolutions,
  profileServiceStages,
  profileSectorIntro,
} from "./profile-content";
import { manufacturers } from "./official-sites";
import { projectPhotography } from "./project-photography";
export const brochure = "/downloads/felix-company-profile.pdf";
export const solutionGroups = [
  ["Building & industrial systems", "Buildings & industry"],
  ["Connected spaces", "Homes & connected spaces"],
  ["Safety & security", "Fire & security"],
  ["HVAC & field products", "HVAC & field products"],
] as const;
// Context photography is illustrative. Documentary products, logos and named
// project references resolve to verified photographs of the named sites.
const photography: Record<string, { file: string; alt: string }> = {
  "solution-bms": {
    file: "solution-bms",
    alt: "Honeywell building controllers in an installed HVAC control cabinet",
  },
  "solution-entry": {
    file: "solution-entry",
    alt: "An access-controlled office entrance",
  },
  "technology-bms": {
    file: "technology-bms",
    alt: "Building-management operators monitoring control-room displays",
  },
  "technology-lighting": {
    file: "technology-lighting",
    alt: "A Lutron wall keypad beside automated window shades",
  },
  "technology-fire": {
    file: "technology-fire",
    alt: "Fike suppression cylinders beside an automated storage system",
  },
  "technology-security": {
    file: "technology-security",
    alt: "An RBH access-control keypad reader",
  },
  "technology-drives": {
    file: "technology-drives",
    alt: "Danfoss drives inside a control cabinet",
  },
  "technology-hvac": {
    file: "technology-hvac",
    alt: "Belimo actuators on building-services pipework",
  },
  "technology-sensors": {
    file: "technology-sensors",
    alt: "S+S humidity and temperature sensors in a pool environment",
  },
  "technology-valves": {
    file: "technology-valves",
    alt: "Installation of industrial pipeline valves",
  },
  "technology-parking": {
    file: "technology-parking",
    alt: "Parking guidance sensors and availability lights",
  },
  "control4-touchscreen": {
    file: "control4-touchscreen",
    alt: "A person operating a wall-mounted Control4 touchscreen",
  },
  architecture: {
    file: "architecture",
    alt: "Glass office buildings surrounding a courtyard",
  },
  industry: {
    file: "industry",
    alt: "Automated production equipment on a factory floor",
  },
  living: {
    file: "living",
    alt: "Contemporary living room with integrated lighting and an open staircase",
  },
  controls: {
    file: "controls",
    alt: "Industrial electrical control cabinet with controllers, wiring and relays",
  },
  laboratory: {
    file: "laboratory",
    alt: "Engineer working at a laboratory workstation",
  },
  "data-center": {
    file: "data-center",
    alt: "Server cabinets and structured network cabling",
  },
  retail: {
    file: "retail",
    alt: "Shopping centre beneath a geometric glass roof",
  },
  parking: {
    file: "parking",
    alt: "Marked vehicle routes inside a parking garage",
  },
  healthcare: {
    file: "healthcare",
    alt: "Hospital corridor with clinical rooms and waiting seats",
  },
  lodging: {
    file: "lodging",
    alt: "Hotel suite with seating, lighting and a desk",
  },
  pipework: {
    file: "pipework",
    alt: "Industrial pipework and valves inside a plant",
  },
  design: { file: "design", alt: "Architectural drawings and technical plans" },
  surveillance: {
    file: "security-camera",
    alt: "Outdoor surveillance camera installation",
  },
};
const photoAliases: Record<string, string> = {
  "hero-architecture": "architecture",
  "building-management": "architecture",
  scada: "industry",
  "home-automation": "living",
  "lighting-control": "lodging",
  "fire-detection": "architecture",
  security: "surveillance",
  "variable-frequency-drives": "controls",
  "hvac-controls": "pipework",
  sensors: "laboratory",
  "valve-installation": "pipework",
  parking: "parking",
  "sector-commercial": "architecture",
  "sector-district-cooling": "pipework",
  "sector-retail": "retail",
  "sector-healthcare": "healthcare",
  "sector-life-sciences": "laboratory",
  "sector-industry": "industry",
  "sector-data-centers": "data-center",
  "sector-lodging": "lodging",
  "sector-residential": "living",
  "engineering-design": "design",

  "engineering-team": "laboratory",
};
export const photoAlt = (name: string) =>
  photography[photoAliases[name] ?? name]?.alt;
export const asset = (name: string) => {
  if (projectPhotography[name]) return projectPhotography[name].file;
  const photo = photography[photoAliases[name] ?? name];
  return photo
    ? `/assets/photography/${photo.file}.webp`
    : `/assets/brochure/${name}.webp`;
};

export type Solution = {
  slug: string;
  title: string;
  short: string;
  group: string;
  partner: string;
  page: number;
  image: string;
  intro: string;
  description: string;
};

export const solutions: Solution[] = [
  {
    slug: "building-management",
    title: "Integrated Building Management",
    short: "Building management",
    group: "Building & industrial systems",
    partner: "Honeywell, Trend, Trane",
    page: 8,
    image: "building-management",
  },
  {
    slug: "scada",
    title: "Supervisory Control & Data Acquisition",
    short: "SCADA & industrial automation",
    group: "Building & industrial systems",
    partner: "Siemens",
    page: 9,
    image: "scada",
  },
  {
    slug: "home-automation",
    title: "Home Automation",
    short: "Home automation",
    group: "Connected spaces",
    partner: "Control4",
    page: 10,
    image: "home-automation",
  },
  {
    slug: "lighting-control",
    title: "Residential & Commercial Lighting Control",
    short: "Lighting & shade control",
    group: "Connected spaces",
    partner: "Lutron",
    page: 11,
    image: "lighting-control",
  },
  {
    slug: "fire-detection",
    title: "Fire Detection & Protection",
    short: "Fire detection & protection",
    group: "Safety & security",
    partner: "Fike",
    page: 12,
    image: "fire-detection",
  },
  {
    slug: "security",
    title: "Integrated Security Management",
    short: "Security & access control",
    group: "Safety & security",
    partner: "RBH Access",
    page: 13,
    image: "security",
  },
  {
    slug: "variable-frequency-drives",
    title: "Variable Frequency Drives",
    short: "Variable frequency drives",
    group: "HVAC & field products",
    partner: "Danfoss",
    page: 14,
    image: "variable-frequency-drives",
  },
  {
    slug: "hvac-controls",
    title: "HVAC Control Products",
    short: "HVAC controls",
    group: "HVAC & field products",
    partner: "Belimo",
    page: 15,
    image: "hvac-controls",
  },
  {
    slug: "sensors",
    title: "Sensor Technology & Field Devices",
    short: "Sensors & field devices",
    group: "HVAC & field products",
    partner: "S+S Regeltechnik",
    page: 16,
    image: "sensors",
  },
  {
    slug: "manual-valves",
    title: "Manual Valves & Accessories",
    short: "Manual valves & accessories",
    group: "HVAC & field products",
    partner: "Tecofi",
    page: 17,
    image: "valve-installation",
  },
  {
    slug: "parking",
    title: "Parking Guidance & Management",
    short: "Parking guidance",
    group: "Connected spaces",
    partner: "ParkHelp",
    page: 18,
    image: "parking",
  },
].map((solution) => {
  const copy = profileSolutions[solution.slug];
  return {
    ...solution,
    title: copy.title,
    partner: copy.brands.map((id) => manufacturers[id].name).join(", "),
    intro: copy.paragraphs[0],
    description: copy.paragraphs.join("\n\n"),
  };
});

export const sectors = [
  {
    slug: "commercial",
    title: "Commercial buildings",
    image: "sector-commercial",
    intro: "Building systems that work as one.",
    text: profileSectorIntro,
    solutions: [
      "building-management",
      "lighting-control",
      "security",
      "hvac-controls",
      "parking",
    ],
  },
  {
    slug: "district-cooling",
    title: "District cooling",
    image: "sector-district-cooling",
    intro: "Control at the scale of your network.",
    text: profileSectorIntro,
    solutions: [
      "building-management",
      "scada",
      "variable-frequency-drives",
      "hvac-controls",
      "manual-valves",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    image: "sector-retail",
    intro: "Comfort from arrival to departure.",
    text: profileSectorIntro,
    solutions: [
      "parking",
      "lighting-control",
      "building-management",
      "security",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    image: "sector-healthcare",
    intro: "Support the spaces people depend on.",
    text: profileSectorIntro,
    solutions: [
      "building-management",
      "hvac-controls",
      "sensors",
      "fire-detection",
      "security",
    ],
  },
  {
    slug: "life-sciences",
    title: "Life sciences & biotechnology",
    image: "sector-life-sciences",
    intro: "Control for demanding environments.",
    text: profileSectorIntro,
    solutions: [
      "building-management",
      "scada",
      "sensors",
      "hvac-controls",
      "manual-valves",
    ],
  },
  {
    slug: "industry",
    title: "Industry",
    image: "sector-industry",
    intro: "See the process. Control the performance.",
    text: profileSectorIntro,
    solutions: [
      "scada",
      "variable-frequency-drives",
      "fire-detection",
      "manual-valves",
    ],
  },
  {
    slug: "data-centers",
    title: "Data centers",
    image: "sector-data-centers",
    intro: "Visibility for critical infrastructure.",
    text: profileSectorIntro,
    solutions: [
      "building-management",
      "hvac-controls",
      "sensors",
      "fire-detection",
      "security",
    ],
  },
  {
    slug: "lodging",
    title: "Lodging",
    image: "sector-lodging",
    intro: "Make every stay more considered.",
    text: profileSectorIntro,
    solutions: [
      "home-automation",
      "lighting-control",
      "building-management",
      "hvac-controls",
    ],
  },
  {
    slug: "residential",
    title: "Residential",
    image: "sector-residential",
    intro: "Technology that fits the way you live.",
    text: profileSectorIntro,
    solutions: ["home-automation", "lighting-control", "security"],
  },
];

export const projectCategories = [
  ["all", "All Projects"],
  ["pharmaceuticals", "Pharmaceuticals"],
  ["healthcare", "Healthcare"],
  ["commercial", "Commercial"],
  ["transport", "Transport"],
  ["institutional", "Institutions"],
] as const;

export const referenceProjects = [
  [
    "mrt-line-6",
    "Dhaka Metro Rail",
    "transport",
    "Station BMS, MRT Line 6 CP 05",
  ],
  [
    "beximco",
    "Beximco Pharmaceuticals PLC",
    "pharmaceuticals",
    "Pharmaceutical facility",
  ],
  [
    "square",
    "Square Pharmaceuticals PLC",
    "pharmaceuticals",
    "Pharmaceutical facility",
  ],
  [
    "eskayef",
    "Eskayef Pharmaceuticals Limited",
    "pharmaceuticals",
    "Pharmaceutical facility",
  ],
  [
    "dbl",
    "DBL Pharmaceuticals Limited",
    "pharmaceuticals",
    "Pharmaceutical facility",
  ],
  [
    "beacon",
    "Beacon Pharmaceuticals Limited",
    "pharmaceuticals",
    "Pharmaceutical facility",
  ],
  [
    "essential-drugs",
    "Essential Drugs Company Limited",
    "pharmaceuticals",
    "Pharmaceutical facility",
  ],
  [
    "evercare",
    "Evercare Hospital Chottogram",
    "healthcare",
    "Healthcare facility",
  ],
  [
    "ship-hospital",
    "Ship International Hospital",
    "healthcare",
    "Healthcare facility",
  ],
  [
    "liberation-war-museum",
    "Liberation War Museum",
    "institutional",
    "Cultural institution",
  ],
  ["bays-edgewater", "Bay’s Edgewater", "commercial", "Commercial development"],
  [
    "eastern-bank",
    "Eastern Bank Head Office",
    "commercial",
    "Corporate head office",
  ],
  [
    "shahjalal-bank",
    "Shahjalal Islami Bank Head Office",
    "commercial",
    "Corporate head office",
  ],
  ["shanta-forum", "Shanta Forum", "commercial", "Commercial development"],
  [
    "shanta-pinnacle",
    "Shanta Pinnacle",
    "commercial",
    "Commercial development",
  ],
].map(([slug, title, category, description]) => ({
  slug,
  title,
  category,
  description,
  image: `project-${slug}`,
}));

export const partners = [
  [
    "Honeywell",
    "honeywell",
    "Building management and integrated controls",
    "building-management",
  ],
  ["Siemens", "siemens", "SIMATIC SCADA and industrial automation", "scada"],
  [
    "Trane",
    "trane",
    "HVAC systems and building controls",
    "building-management",
  ],
  ["Control4", "control4", "Connected home automation", "home-automation"],
  [
    "Lutron",
    "lutron",
    "Lighting, shade and temperature controls",
    "lighting-control",
  ],
  ["Fike", "fike", "Fire detection and protection", "fire-detection"],
  [
    "Danfoss",
    "danfoss",
    "Variable speed drives and power converters",
    "variable-frequency-drives",
  ],
  ["RBH Access", "rbh", "Integrated security and access control", "security"],
  [
    "Belimo",
    "belimo",
    "HVAC valves, actuators and control products",
    "hvac-controls",
  ],
  [
    "S+S Regeltechnik",
    "ss",
    "Sensors and environmental measurement",
    "sensors",
  ],
  [
    "Tecofi",
    "tecofi",
    "Manual valves and fluid system accessories",
    "manual-valves",
  ],
  ["ParkHelp", "parkhelp", "Parking guidance and management", "parking"],
].map(([name, logo, description, solution]) => ({
  name,
  logo,
  description,
  solution,
}));

export const clients = [
  "Unilever",
  "UNICEF",
  "British American Tobacco",
  "Nestlé",
  "Huawei",
  "Grameenphone",
  "Telstar",
  "Radisson",
  "Evercare",
  "IDLC Finance",
  "BSMMU",
  "Bangladesh Bank",
  "Eastern Bank",
  "IFIC Bank",
  "Al-Arafah Islami Bank",
  "Shahjalal Islami Bank",
  "Beximco Pharma",
  "NIPRO JMI Pharma",
  "Orion Pharma",
  "Popular",
  "Square Pharmaceuticals",
  "Eskayef",
  "General Pharmaceuticals",
  "Aristopharma",
  "UniMed UniHealth",
  "Sunman-Birdem Pharma",
  "Drug International",
  "Beacon Pharmaceuticals",
  "SMC",
  "Incepta",
  "Navana Pharmaceuticals",
  "Synovia",
  "Client reference from Company Profile",
  "ACI Limited",
  "Genvio",
  "Globe",
  "Healthcare Pharmaceuticals",
  "Essential Drugs Company",
  "Radiant Pharmaceuticals",
  "Globex",
  "DBL Pharma",
  "Ship International Hospital",
  "East West University",
  "Citizen",
  "Client reference from Company Profile",
  "Group QA",
  "Samuda",
  "Savoy",
  "Confidence Trade",
  "Dhaka Mass Transit Company",
  "Jamuna Bank",
  "Akij Group",
  "Client reference from Company Profile",
  "Bashundhara Group",
  "Navana Real Estate",
  "Doreen Developments",
  "Standard Group",
  "Shanta Holdings",
  "Edison Group",
  "Saiham",
  "Concord",
  "Bay",
  "Volumezero / Spacezero",
  "Charuta",
];

export const serviceStages = profileServiceStages;

export const solutionGalleries: Record<
  string,
  { image: string; caption: string }[]
> = {
  "building-management": [
    {
      image: "bms-controllers",
      caption:
        "Building controllers from the profile's Honeywell, Trend and WEBs-N4 overview.",
    },
    {
      image: "bms-dashboard",
      caption: "Building monitoring and operator interfaces.",
    },
    {
      image: "bms-thermostats",
      caption: "Room temperature control interfaces.",
    },
  ],
  scada: [
    {
      image: "scada-controllers",
      caption: "SIMATIC HMI and industrial controller illustrations.",
    },
  ],
  "home-automation": [
    {
      image: "home-products",
      caption: "Control4 touchscreen, entertainment and home control products.",
    },
    {
      image: "home-keypads",
      caption: "Keypad finishes illustrated in the company profile.",
    },
  ],
  "lighting-control": [
    { image: "lighting-panel", caption: "Lutron lighting control equipment." },
    {
      image: "lighting-products",
      caption: "Lighting scene keypads and wall controls.",
    },
    {
      image: "lighting-mobile",
      caption: "Lighting interfaces and mobile controls.",
    },
  ],
  "fire-detection": [
    {
      image: "fire-equipment",
      caption:
        "Fire alarm and protection equipment illustrated in the profile.",
    },
    { image: "fire-sprinkler", caption: "Sprinkler protection illustration." },
    {
      image: "fire-suppression",
      caption: "Fire suppression equipment illustration.",
    },
  ],
  security: [
    {
      image: "security-interfaces",
      caption: "RBH security management interfaces and control equipment.",
    },
  ],
  "variable-frequency-drives": [
    {
      image: "drive-range",
      caption: "Danfoss drive families illustrated in the profile.",
    },
  ],
  "hvac-controls": [
    {
      image: "hvac-actuators",
      caption: "Valves, actuators and energy measurement products.",
    },
    { image: "hvac-control-interfaces", caption: "HVAC control interfaces." },
  ],
  sensors: [
    {
      image: "sensor-interfaces",
      caption: "S+S room controls and operating interfaces.",
    },
  ],
  "manual-valves": [
    {
      image: "manual-valves",
      caption: "Valve installation for fluid transfer and building services.",
    },
  ],
  parking: [
    {
      image: "parking-dashboard",
      caption: "ParkHelp central parking management interface.",
    },
  ],
};

export const profilePages = [
  {
    title: "Company profile",
    summary:
      "The original 2025 company profile cover and architectural brand imagery.",
  },
  {
    title: "Who we are",
    summary:
      "Company history, incorporation in December 2010, engineering capabilities, mission, vision and objective.",
  },
  {
    title: "Understanding your business needs",
    summary:
      "Nine market sectors, reliability, efficiency, environmental responsibility and individual business requirements.",
  },
  {
    title: "What we do",
    summary:
      "Design and implementation, system supply and service, operation and maintenance, resources and capabilities.",
  },
  {
    title: "Our partners",
    summary:
      "All twelve technology partners and the original partner descriptions.",
  },
  {
    title: "Major clients & reasons to choose Felix",
    summary:
      "The complete 64-logo client reference board and four reasons to work with Felix.",
  },
  {
    title: "Solutions & services",
    summary: "Introduction to the technology and solution portfolio.",
  },
  {
    title: "Integrated building management",
    summary:
      "Honeywell, Trend, WEBs-N4, building service monitoring, energy performance, controllers and interfaces.",
  },
  {
    title: "Supervisory control & data acquisition",
    summary:
      "Siemens SIMATIC SCADA, data acquisition, archives, process control and industrial integration.",
  },
  {
    title: "Home automation & lighting control",
    summary:
      "Control4 entertainment, smart lighting, comfort, convenience, safety, security and connected interfaces.",
  },
  {
    title: "Residential & commercial lighting",
    summary:
      "Lutron lighting, shades, temperature, keypads, interfaces and energy efficiency.",
  },
  {
    title: "Fire detection & protection",
    summary:
      "Fike addressable fire detection, suppression, early warning, emergency power-off and protection equipment.",
  },
  {
    title: "Integrated security management",
    summary:
      "RBH access control, alarms, video surveillance, intrusion, turnstiles, entry and IP intercoms.",
  },
  {
    title: "Variable frequency drives",
    summary:
      "Danfoss VLT and VACON, variable speed motor control, power converters and industrial applications.",
  },
  {
    title: "HVAC control products",
    summary:
      "Belimo controllers, balancing and control valves, actuators, sensors, thermostats and energy meters.",
  },
  {
    title: "Sensor technology & field devices",
    summary:
      "S+S Regeltechnik environmental sensors, field devices and room operating interfaces.",
  },
  {
    title: "Manual valves & accessories",
    summary:
      "Tecofi valves and accessories for fluid transfer, pharmaceutical, chemical and air-conditioning applications.",
  },
  {
    title: "Parking guidance & management",
    summary:
      "ParkHelp parking sensors, availability displays, central management and operating considerations.",
  },
  {
    title: "Reference projects",
    summary:
      "The original photograph board for all fifteen named project references.",
  },
  {
    title: "Company contacts & experience",
    summary:
      "Company slogan, 15+ years, 100+ customers, 400+ projects, address, email, website and phone numbers.",
  },
];

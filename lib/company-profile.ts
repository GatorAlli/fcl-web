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
  capabilities: string[];
  applications: string[];
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
    intro:
      "Monitor HVAC, lighting, utilities and energy from one building management platform.",
    description:
      "Bring HVAC, lighting, utilities and energy monitoring into a coordinated building management system. Felix works with Trend and WEBs-N4 platforms to help facilities teams understand building performance and control everyday operations.",
    capabilities: [
      "Central monitoring of building services",
      "HVAC and utility controls",
      "Energy monitoring and performance reporting",
      "Integration with lighting, fire, security and access systems",
      "Operator dashboards and building controllers",
    ],
    applications: [
      "Commercial buildings",
      "Healthcare",
      "Life sciences",
      "Data centers",
    ],
  },
  {
    slug: "scada",
    title: "Supervisory Control & Data Acquisition",
    short: "SCADA & industrial automation",
    group: "Building & industrial systems",
    partner: "Siemens",
    page: 9,
    image: "scada",
    intro:
      "Monitor industrial processes, collect production data and coordinate supervisory control.",
    description:
      "Felix offers Siemens SIMATIC SCADA for monitoring and controlling industrial processes. An open, scalable system brings together production data, long-term archives and supervisory control, with integration from the plant floor toward MES, ERP and cloud systems.",
    capabilities: [
      "Process visualization and supervisory control",
      "Production data acquisition",
      "Long-term data archiving",
      "Scalable system architecture",
      "Integration with MES and ERP environments",
    ],
    applications: [
      "Industry",
      "Life sciences",
      "District cooling",
      "Utilities",
    ],
  },
  {
    slug: "home-automation",
    title: "Home Automation",
    short: "Home automation",
    group: "Connected spaces",
    partner: "Control4",
    page: 10,
    image: "home-automation",
    intro:
      "Control lighting, entertainment, climate and security with connected home systems.",
    description:
      "Connect the systems you use every day through Control4. Felix integrates lighting, music, video, climate and security into a coordinated home experience, with controls on dedicated touchscreens, keypads, smartphones and tablets.",
    capabilities: [
      "Entertainment and multi-room audio",
      "Smart lighting and personalized scenes",
      "Comfort and climate control",
      "Connected safety and security",
      "Touchscreen, keypad and mobile control",
    ],
    applications: ["Residential", "Lodging", "Private entertainment spaces"],
  },
  {
    slug: "lighting-control",
    title: "Residential & Commercial Lighting Control",
    short: "Lighting & shade control",
    group: "Connected spaces",
    partner: "Lutron",
    page: 11,
    image: "lighting-control",
    intro:
      "Coordinate lighting scenes, dimming and shades in homes and commercial spaces.",
    description:
      "Lutron lighting, shade and temperature controls help adapt a room to how it is used. Felix brings these systems together for homes and commercial environments, balancing comfort, energy use and the requirements of each space.",
    capabilities: [
      "Residential and commercial lighting controls",
      "Dimming and lighting scenes",
      "Integrated shade control",
      "Temperature control coordination",
      "Keypad and mobile operation",
    ],
    applications: ["Residential", "Commercial buildings", "Retail", "Lodging"],
  },
  {
    slug: "fire-detection",
    title: "Fire Detection & Protection",
    short: "Fire detection & protection",
    group: "Safety & security",
    partner: "Fike",
    page: 12,
    image: "fire-detection",
    intro:
      "Detection, alarm and suppression systems selected around the use and risks of each site.",
    description:
      "Felix designs fire detection and protection systems around a building's use and risks. The company profile presents Fike detection, alarm and suppression technologies for facilities where early warning and a coordinated response are essential.",
    capabilities: [
      "Addressable and conventional fire detection",
      "Fire alarm and suppression control",
      "Linear heat and early-warning detection",
      "Emergency power-off system integration",
      "Fire protection design and coordination",
    ],
    applications: [
      "Data centers",
      "Industry",
      "Healthcare",
      "Commercial buildings",
    ],
  },
  {
    slug: "security",
    title: "Integrated Security Management",
    short: "Security & access control",
    group: "Safety & security",
    partner: "RBH Access",
    page: 13,
    image: "security",
    intro:
      "Connect access control, video surveillance and alarm monitoring across one or multiple sites.",
    description:
      "Coordinate access control, alarm monitoring and video surveillance across single or multiple sites. Felix provides integrated security management for multi-tenant and multi-site buildings, tailored to the people who use and operate them.",
    capabilities: [
      "Integrated access control",
      "IP video and alarm monitoring",
      "Intrusion system integration",
      "Turnstiles and telephone entry",
      "IP intercoms and multi-site management",
    ],
    applications: [
      "Commercial buildings",
      "Industry",
      "Residential",
      "Healthcare",
    ],
  },
  {
    slug: "variable-frequency-drives",
    title: "Variable Frequency Drives",
    short: "Variable frequency drives",
    group: "HVAC & field products",
    partner: "Danfoss",
    page: 14,
    image: "variable-frequency-drives",
    intro:
      "Variable speed motor control for HVAC, pumps and industrial equipment.",
    description:
      "Felix represents Danfoss variable speed drives and power converters. VLT and VACON drive families support motor control across HVAC, water treatment, energy and industrial applications, with selection based on the motor, system and operating requirements.",
    capabilities: [
      "Variable speed motor control",
      "VLT and VACON drive families",
      "HVAC and pump applications",
      "Industrial drive selection",
      "Application support and lifecycle services",
    ],
    applications: [
      "District cooling",
      "Industry",
      "Water treatment",
      "Commercial buildings",
    ],
  },
  {
    slug: "hvac-controls",
    title: "HVAC Control Products",
    short: "HVAC controls",
    group: "HVAC & field products",
    partner: "Belimo",
    page: 15,
    image: "hvac-controls",
    intro:
      "Valves, actuators and control devices for building air and water systems.",
    description:
      "Felix supplies HVAC controls with local application support, including Belimo valves, actuators and room control products. Components are selected around the demands of each building's air and water systems.",
    capabilities: [
      "Field-configurable standalone controllers",
      "Pressure-independent control and balancing valves",
      "Two-way and three-way valves and actuators",
      "Damper actuators and manual balancing valves",
      "Sensors, transmitters, thermostat controllers and energy meters",
    ],
    applications: [
      "Commercial buildings",
      "Healthcare",
      "District cooling",
      "Life sciences",
    ],
  },
  {
    slug: "sensors",
    title: "Sensor Technology & Field Devices",
    short: "Sensors & field devices",
    group: "HVAC & field products",
    partner: "S+S Regeltechnik",
    page: 16,
    image: "sensors",
    intro:
      "Field devices for environmental measurement, building controls and operator interfaces.",
    description:
      "S+S Regeltechnik sensor and field technology supports environmental measurement, controls and networking. Felix's profile presents devices for building automation, HVAC and environmental monitoring, including room operating interfaces.",
    capabilities: [
      "Environmental sensing and measurement",
      "Temperature and humidity monitoring",
      "Pressure measurement",
      "Room controllers and operating interfaces",
      "Building automation field devices",
    ],
    applications: [
      "Life sciences",
      "Healthcare",
      "Commercial buildings",
      "Industry",
    ],
  },
  {
    slug: "manual-valves",
    title: "Manual Valves & Accessories",
    short: "Manual valves & accessories",
    group: "HVAC & field products",
    partner: "Tecofi",
    page: 17,
    image: "valve-installation",
    intro:
      "Manual valves and accessories for fluid transfer and air-conditioning systems.",
    description:
      "Felix supplies Tecofi manual valves and accessories for fluid transfer, pharmaceutical, chemical and air-conditioning systems. Local sales and technical teams help match product selection to each project's requirements.",
    capabilities: [
      "Isolation and butterfly valves",
      "Balancing and ball valves",
      "Strainers and non-return valves",
      "Flexible connections and accessories",
      "Application-led product selection",
    ],
    applications: [
      "Industry",
      "Life sciences",
      "District cooling",
      "Air-conditioning systems",
    ],
  },
  {
    slug: "parking",
    title: "Parking Guidance & Management",
    short: "Parking guidance",
    group: "Connected spaces",
    partner: "ParkHelp",
    page: 18,
    image: "parking",
    intro: "Guide drivers to available spaces and monitor parking activity.",
    description:
      "Felix offers ParkHelp parking guidance for commercial and mixed-use properties. Expandable systems combine space monitoring, directional information and management tools to help drivers find available parking and operators understand their facilities.",
    capabilities: [
      "Parking-space monitoring",
      "Directional and availability displays",
      "Central parking management",
      "Expandable system configurations",
      "Operational visibility for property teams",
    ],
    applications: [
      "Commercial buildings",
      "Retail",
      "Mixed-use properties",
      "Lodging",
    ],
  },
];

export const sectors = [
  {
    slug: "commercial",
    title: "Commercial buildings",
    image: "sector-commercial",
    intro: "Building systems that work as one.",
    text: "Bring comfort, security, lighting and energy information together for building owners, tenants and facility teams.",
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
    text: "Coordinate cooling, motor control, field measurement and valves around the operating needs of a shared cooling system.",
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
    text: "Consider the full visitor journey, from parking and entry to comfortable, well-lit retail environments.",
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
    text: "Coordinate environmental monitoring, HVAC, security and building services around the operational demands of healthcare facilities.",
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
    text: "Bring building management, environmental sensing and HVAC controls together for pharmaceutical and biotechnology facilities.",
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
    text: "Connect process supervision, motor control, sensing and protection to support the way your industrial facility operates.",
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
    text: "Monitor building conditions and coordinate cooling, access and fire protection around the needs of data infrastructure.",
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
    text: "Bring room comfort, lighting and connected controls into a coordinated guest experience, supported by building-wide systems.",
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
    text: "Connect entertainment, lighting, climate and security with intuitive home controls tailored to everyday routines.",
    solutions: ["home-automation", "lighting-control", "security"],
  },
];

export const projectCategories = [
  ["all", "All projects"],
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

export const serviceStages = [
  {
    title: "Understand & design",
    text: "We begin with your building, its users and its operating requirements. Our engineers develop the system design and select the appropriate controls and technologies.",
  },
  {
    title: "Supply & implement",
    text: "We coordinate the supply, installation and commissioning of HVAC, fire safety, security and building control systems so the design becomes a working installation.",
  },
  {
    title: "Operate & maintain",
    text: "Our support continues through the system lifecycle, with diagnostics, maintenance and technical assistance to help your building perform as intended.",
  },
];

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

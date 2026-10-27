export const services = [
  {
    id: "building-management",
    title: "Building Management Systems",
    tagline: "MONITOR · CONTROL · OPTIMIZE",
    description:
      "Integrated monitoring and control of building services, including HVAC, energy and equipment. We design, install and commission systems that give facilities teams a clear view of their building.",
    partners: "Honeywell · Siemens · Trane",
  },
  {
    id: "hvac",
    title: "HVAC & Energy Controls",
    tagline: "COMFORT WITH EFFICIENCY",
    description:
      "HVAC control products, variable frequency drives, sensors, valves and actuators. Coordinated engineering for comfortable indoor conditions and efficient building operations.",
    partners: "Belimo · Danfoss · S+S Regeltechnik · Tecofi",
  },
  {
    id: "fire-security",
    title: "Fire Safety & Security",
    tagline: "PROTECT PEOPLE & PROPERTY",
    description:
      "Fire detection and protection, access control and integrated security management. Systems designed around the safety requirements and operational needs of your facility.",
    partners: "Fike · RBH Access",
  },
  {
    id: "automation",
    title: "Home & Lighting Automation",
    tagline: "SPACES THAT RESPOND",
    description:
      "Control lighting, entertainment and connected systems through an integrated interface. Residential and commercial lighting solutions tailored to the way each space is used.",
    partners: "Control4 · Lutron",
  },
  {
    id: "parking",
    title: "Parking Guidance Systems",
    tagline: "SMARTER ARRIVALS",
    description:
      "Parking guidance and management systems that help drivers locate available spaces and help operators manage parking facilities.",
    partners: "ParkHelp",
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceutical Solutions",
    tagline: "CONTROL CRITICAL ENVIRONMENTS",
    description:
      "Building management, environmental monitoring and HVAC controls for pharmaceutical facilities. Our reference projects include Beximco, Square, Eskayef, DBL and Beacon Pharmaceuticals.",
    partners: "Integrated building & environmental controls",
  },
];

export const projects = [
  {
    category: "transport",
    title: "Dhaka Metro Rail",
    description: "Station BMS, MRT Line 6 CP 05",
    image: "project-mrt.jpg",
    alt: "Dhaka MRT Line 6 train at a metro station",
    label: "TRANSPORT",
    system: "BUILDING MANAGEMENT",
  },
  {
    category: "pharmaceuticals industrial",
    title: "Beximco Pharmaceuticals PLC",
    description: "Pharmaceutical facility",
    image: "project-beximco.jpg",
    alt: "Beximco Pharmaceuticals facility",
    label: "PHARMACEUTICALS",
    system: "INDUSTRIAL",
  },
  {
    category: "commercial",
    title: "Bay’s Edgewater",
    description: "Commercial development",
    image: "project-edgewater.jpg",
    alt: "Bay’s Edgewater commercial building",
    label: "COMMERCIAL",
    system: "BUILDING SYSTEMS",
  },
];

export const projectFilters = [
  ["all", "All projects"],
  ["industrial", "Industrial"],
  ["commercial", "Commercial"],
  ["transport", "Transport"],
  ["pharmaceuticals", "Pharmaceuticals"],
] as const;

/** Illustrative settings complement, and never replace, the supplied product artwork. */
export const technologyContext: Record<
  string,
  { image: string; caption: string; fit?: "cover" | "contain" }
> = {
  "building-management": {
    image: "technology-bms",
    caption: "Building-management operators monitoring control-room displays.",
  },
  scada: {
    image: "controls",
    caption: "Controllers, wiring and industrial automation hardware.",
  },
  "home-automation": {
    image: "control4-touchscreen",
    caption: "A Control4 touchscreen in use.",
  },
  "lighting-control": {
    image: "technology-lighting",
    caption: "A Lutron wall keypad beside automated window shades.",
  },
  "fire-detection": {
    image: "technology-fire",
    caption: "Fike suppression cylinders beside an automated storage system.",
  },
  security: {
    image: "technology-security",
    caption: "An RBH access-control keypad reader.",
    fit: "contain",
  },
  "variable-frequency-drives": {
    image: "technology-drives",
    caption: "Danfoss variable-frequency drives inside a control cabinet.",
  },
  "hvac-controls": {
    image: "technology-hvac",
    caption: "Belimo actuators installed on building-services pipework.",
  },
  sensors: {
    image: "technology-sensors",
    caption: "S+S humidity and temperature sensing in a pool environment.",
  },
  "manual-valves": {
    image: "technology-valves",
    caption: "Installation of valves in an industrial piping network.",
  },
  parking: {
    image: "technology-parking",
    caption: "Parking guidance sensors and availability lights in a garage.",
  },
};

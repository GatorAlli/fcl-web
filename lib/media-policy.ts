export const brochureImageAliases: Record<string, string> = {
  "building-management": "bms-dashboard",
  scada: "scada-controllers",
  "home-automation": "home-products",
  "lighting-control": "lighting-products",
  "fire-detection": "fire-equipment",
  security: "security-interfaces",
  "variable-frequency-drives": "drive-range",
  "hvac-controls": "hvac-actuators",
  sensors: "sensor-interfaces",
  parking: "parking-dashboard",
  "control-room": "bms-dashboard",
  "sector-commercial": "project-bays-edgewater",
  "sector-healthcare": "project-evercare",
  "sector-life-sciences": "project-beximco",
};
const technicalAssets = new Set([
  "bms-dashboard",
  "bms-controllers",
  "bms-thermostats",
  "scada-controllers",
  "home-products",
  "home-keypads",
  "lighting-products",
  "lighting-panel",
  "lighting-mobile",
  "fire-equipment",
  "fire-sprinkler",
  "fire-suppression",
  "security-interfaces",
  "drive-range",
  "hvac-actuators",
  "hvac-control-interfaces",
  "sensor-interfaces",
  "manual-valves",
  "parking-dashboard",
]);
export const documentaryName = (name: string) =>
  brochureImageAliases[name] ?? name;
export const isDocumentaryImage = (name: string) => {
  const file = documentaryName(name);
  return technicalAssets.has(file) || /^(project-|client-|partner-)/.test(file);
};

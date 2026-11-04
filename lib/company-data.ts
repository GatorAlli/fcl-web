import { profileAbout, profilePurpose, profileResources } from "./profile-content";
export const foundingStatement = profileAbout[1];
export const companyData = [
  ["Company", "Felix Controls Limited"],
  ["Founded", "December 2010"],
  ["Incorporation", "Companies Act 1994, Certificate No. C88761/10"],
  ["Head office", "113/B, Tejgaon Industrial Area, Dhaka-1208"],
  ["Track record", "400+ projects, 100+ customers, 15+ years"],
  ["Scope", "Planning, design, installation, commissioning and maintenance"],
  [
    "Disciplines",
    "BMS, SCADA, fire detection and suppression, security and access, HVAC controls, drives, sensors, lighting and home automation, parking guidance",
  ],
  [
    "Platforms represented",
    "Honeywell Trend and WEBs-N4, Siemens SIMATIC SCADA, Control4, Lutron, Fike, RBH Access, Danfoss, Belimo, S+S Regeltechnik, Tecofi, ParkHelp",
  ],
  ["Service", "24/7 service support arrangement"],
] as const;
export const companyPurpose = profilePurpose;
export const companyResources = profileResources;

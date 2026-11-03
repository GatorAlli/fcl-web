import sources from "@/public/assets/projects/sources.json";
export const projectPhotography: Record<
  string,
  {
    file: string;
    width: number;
    height: number;
    source: string;
    credit: string;
    enhanced: boolean;
    license?: string;
    licenseUrl?: string;
  }
> = Object.fromEntries(
  sources.map((entry) => [
    entry.assetKey,
    {
      file: entry.file,
      width: entry.width,
      height: entry.height,
      source: entry.page,
      credit: entry.credit,
      enhanced: "modelSource" in entry,
      license: "license" in entry ? entry.license : undefined,
      licenseUrl: "licenseUrl" in entry ? entry.licenseUrl : undefined,
    },
  ]),
);

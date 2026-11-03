from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
def edit(relative, transform):
    path = root / relative
    text = path.read_text(encoding="utf-8")
    path.write_text(transform(text), encoding="utf-8")

for folder in ("app", "components/site"):
    for path in (root / folder).rglob("*.tsx"):
        if path.name in {"film-layer.tsx", "scroll-sheet.tsx", "text-motion.tsx", "scroll-presentation.tsx", "scroll-effects.tsx"}:
            continue
        text = path.read_text(encoding="utf-8")
        text = text.replace("@/components/site/scroll-sheet", "@/components/site/page-canvas")
        text = text.replace("@/components/site/text-motion", "@/components/site/display-text").replace('"./text-motion"', '"./display-text"').replace("RevealWords", "DisplayText")
        text = re.sub(r'^import .*from "@/lib/films";\n', '', text, flags=re.M)
        text = re.sub(r'^\s*film=(?:"[^"\n]*"|\{[^\n]*\})\s*\n', '\n', text, flags=re.M)
        path.write_text(text, encoding="utf-8")

edit("app/page.tsx", lambda t: re.sub(r'^\s*</?ScrollSheet[^>]*>\s*\n', '\n', re.sub(r'^import \{ ScrollSheet \}[^\n]*\n', '', t, flags=re.M), flags=re.M))

def media_policy(text):
    start = text.index("// Context photography")
    end = text.index("export type Solution")
    return 'import { documentaryName } from "./media-policy";\n' + text[:start] + '''export const photoAlt = (name: string) => {
  const native = documentaryName(name);
  return native.startsWith("project-") ? undefined : "Original technology illustration from Company profile 2025";
};
export const asset = (name: string) => "/assets/brochure/" + documentaryName(name) + ".webp";

''' + text[end:]
edit("lib/company-profile.ts", media_policy)

def photo_component(text):
    text = text.replace('import { FilmLayer } from "./film-layer";\n', '')
    text = text.replace('import type { FilmName } from "@/lib/films";\n', '')
    text = text.replace('import Image from "next/image";', 'import Image from "next/image";\nimport imageManifest from "@/public/assets/brochure/manifest.json";\nimport { documentaryName, isDocumentaryImage } from "@/lib/media-policy";')
    text = re.sub(r'^  film,\n|^  film\?: FilmName;\n', '', text, flags=re.M)
    start = text.index('  return (', text.index('export function Photo'))
    end = text.index('\nexport function Breadcrumbs', start)
    text = text[:start] + '''  const original = imageManifest.find(entry => entry.file === documentaryName(name) + ".webp");
  if (!isDocumentaryImage(name) || !original) return null;
  return <div className={"fcl-photo " + className} style={{ maxWidth: original.width }} data-source-page={original.pdfPage}>
    <Image src={asset(name)} alt={alt === "" ? "" : (photoAlt(name) ?? alt)} width={original.width} height={original.height} unoptimized preload={priority} />
  </div>;
}
''' + text[end:]
    text = text.replace('${image ? "has-image" : ""}', '${image && isDocumentaryImage(image) ? "has-image" : ""}')
    text = text.replace('{image && (', '{image && isDocumentaryImage(image) && (')
    return text
edit("components/site/page-parts.tsx", photo_component)

def layout(text):
    text = re.sub(r'^import "\./[^"\n]+\.css";\n', '', text, flags=re.M)
    text = 'import "./tokens.css";\nimport "./site.css";\nimport "./about-data.css";\n' + text
    return text.replace('themeColor: "#186636"', 'themeColor: "#155430"')
edit("app/layout.tsx", layout)

def shell(text):
    text = re.sub(r'^import \{ ScrollEffects \}[^\n]*\n|^import \{ ScrollPresentation \}[^\n]*\n', '', text, flags=re.M)
    text = text.replace('      <ScrollEffects />\n', '').replace('      <ScrollPresentation />\n', '')
    text = text.replace('  const [compact, setCompact] = useState(false);\n', '')
    text = text.replace('    const scroll = () => setCompact(window.scrollY > 48);\n', '')
    text = text.replace('    scroll();\n', '').replace('    window.addEventListener("scroll", scroll, { passive: true });\n', '').replace('      window.removeEventListener("scroll", scroll);\n', '')
    text = text.replace('className={`studio-header ${compact ? "is-compact" : ""} ${menu ? "is-expanded" : ""}`}', 'className={"studio-header " + (menu ? "is-expanded" : "")}')
    text = re.sub(r'import \{\n  Pill,[\s\S]*?\} from "lucide-react";\n', '', text, count=1)
    text = text.replace('  const sectorIcons = [Pill, Stethoscope, Building2, TrainFront, Landmark];\n', '')
    text = text.replace('map(([value, label], index) => {', 'map(([value, label]) => {').replace('          const Icon = sectorIcons[index];\n', '').replace('              <Icon aria-hidden="true" />\n', '')
    text = text.replace('            <a href="/video-review/index.html">Choose footage</a>\n', '')
    return text
edit("components/site/studio-shell.tsx", shell)
edit("components/site/direction-icon.tsx", lambda t: t.replace('var(--icon-cutout, #fff)', 'var(--icon-cutout, var(--surface))'))

edit("components/site/product-gallery.tsx", lambda t: t.replace('import Image from "next/image";', 'import Image from "next/image";\nimport { isDocumentaryImage } from "@/lib/media-policy";').replace('const items = solutionGalleries[slug] ?? [];', 'const items = (solutionGalleries[slug] ?? []).filter(item => isDocumentaryImage(item.image));'))
edit("app/clients/page.tsx", lambda t: t.replace('brochure, asset', 'brochure, asset, clients').replace('alt={`Original client reference logo ${i + 1} from the company profile`}', 'alt={clients[i] ?? "Client reference from company profile"}'))
edit("app/partners/page.tsx", lambda t: t.replace('import { partners }', 'import { partners, asset }').replace('src={`/assets/partner-${p.logo}.png`}', 'src={asset("partner-" + p.logo)}'))

print("Rewired pages to normal flow and documentary media; legacy files can now be retired.")

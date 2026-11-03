import { AnimatedCopy } from "@/components/site/animated-copy";
export function RouteLoading() {
  return (
    <main id="main" className="fcl-container route-loading" aria-busy="true">
      <div role="status">
        <span className="fcl-label">FELIX CONTROLS LIMITED</span>
        <p>
          <AnimatedCopy>Opening page…</AnimatedCopy>
        </p>
      </div>
    </main>
  );
}

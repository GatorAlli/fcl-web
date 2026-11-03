import { AnimatedCopy } from "@/components/site/animated-copy";
import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="fcl-container fcl-empty">
      <p className="fcl-label">
        <AnimatedCopy>PAGE NOT FOUND</AnimatedCopy>
      </p>
      <h1>
        <AnimatedCopy>
          Let’s get you
          <br />
          back on course
        </AnimatedCopy>
      </h1>
      <p>
        <AnimatedCopy>
          This page may have moved, or the address may be incomplete.
        </AnimatedCopy>
      </p>
      <div className="review-actions">
        <Link className="fcl-button" href="/">
          Back to home
        </Link>
        <Link className="fcl-link" href="/solutions">
          Explore solutions
        </Link>
      </div>
    </main>
  );
}

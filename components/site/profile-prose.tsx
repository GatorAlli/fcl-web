import { AnimatedCopy } from "./animated-copy";

export function ProfileProse({
  paragraphs,
  bullets,
}: {
  paragraphs: string[];
  bullets?: string[];
}) {
  return (
    <div className="profile-copy">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}><AnimatedCopy>{paragraph}</AnimatedCopy></p>
      ))}
      {bullets && (
        <ul>
          {bullets.map((item) => (
            <li key={item}><AnimatedCopy>{item}</AnimatedCopy></li>
          ))}
        </ul>
      )}
    </div>
  );
}

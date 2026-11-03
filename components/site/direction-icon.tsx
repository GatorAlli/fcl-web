export function DirectionIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`direction-icon ${className}`}
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" fill="currentColor" />
      <path
        d="m13 10 6 6-6 6"
        fill="none"
        stroke="var(--icon-cutout, var(--surface))"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

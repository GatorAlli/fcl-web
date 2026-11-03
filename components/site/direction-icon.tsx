export function DirectionIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`direction-icon ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" fill="currentColor" />
    </svg>
  );
}

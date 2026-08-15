export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 62"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6,52 33,10 46,30 59,10 86,52" />
      <polyline points="16,52 33,26 46,42 59,26 76,52" />
    </svg>
  );
}

export function LogoBadge() {
  return (
    <a href="#top" className="logo-badge">
      <span className="logo-badge__icon">
        <LogoMark className="logo-mark" />
      </span>
      <span className="logo-badge__text">
        <strong>MOEDEN</strong>
        <span>MEDIA CONSULT</span>
      </span>
    </a>
  );
}

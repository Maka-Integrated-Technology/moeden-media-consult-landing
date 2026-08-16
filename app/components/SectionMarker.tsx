export function SectionMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-marker">
      <span className="section-marker__num">{number}</span>
      <span className="section-marker__label">{label}</span>
      <span className="section-marker__rule" />
      <span className="section-marker__chevron">›</span>
    </div>
  );
}

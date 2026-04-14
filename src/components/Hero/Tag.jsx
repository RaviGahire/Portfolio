export default function HeroTag({ label = "Frontend Developer" }) {
  return (
    <div
      className="flex items-center gap-2.5 mb-2"
      style={{ animation: "fadeInUp 0.8s cubic-bezier(.16,1,.3,1) 0.1s both" }}
    >
      {/* Accent line */}
      <span className="block w-8 h-px bg-[#00e96a]" />
 
      {/* Label */}
      <span
        className="text-[#00e96a] text-[11px] font-bold tracking-[0.22em] uppercase"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        &lt; {label} /&gt;
      </span>
    </div>
  );
}
export default function HeroBio({ children }) {
  return (
    <div
      className="mt-9 pl-4 border-l-2 border-white/15 max-w-[480px]"
      style={{ animation: "fadeInUp 0.9s cubic-bezier(.16,1,.3,1) 0.5s both" }}
    >
      <p
        className="leading-[1.7] text-white/45 [&_strong]:text-white/75 [&_strong]:font-semibold [&_em]:not-italic [&_em]:text-[#00e96a]"
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize:   "clamp(14px, 1.5vw, 17px)",
        }}
      >
        {children}
      </p>
    </div>
  );
}
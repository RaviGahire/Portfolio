import { GhostNumber } from "./GhostNumber";
import GridBackground from "./GridBackground";
import HeroBio from "./HeroBio";
import HeroCTAs from "./HeroCTAs";
import HeroName from "./HeroName";
import { ScrollIndicator } from "./ScrollIndicator";
import HeroTag from "./Tag";

const KEYFRAMES = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translate(40px, -52%); }
    to   { opacity: 1; transform: translate(0,    -52%); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes scrollLine {
    0%   { top: -100%; }
    50%  { top:  100%; }
    100% { top:  100%; }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
`;

export const HeroSection = () => {
  return (
    <>
      {/* Global keyframes */}
      <style>{KEYFRAMES}</style>

      <section className="relative w-full min-h-screen bg-[#f9f9f9] overflow-hidden flex items-center">

        {/* SVG grid background */}
        <GridBackground
          cellColor="#0a0c0b"
          lineColor="rgba(255, 255, 255, 0.35)"
          lineWidth={0.5}
          colWidth={60}
          rowHeight={60}
        />

        {/* Ghost section number */}
        <GhostNumber number="01" />

        {/* Scroll indicator */}
        <ScrollIndicator label="Scroll Down" />

        {/* Main content column */}
        <div
          className="relative z-2 w-full max-w-[900px]"
          style={{ padding: "0 8% 0 14%" }}
        >
          {/* 4a. Tag */}
          <HeroTag label="Frontend Developer" />

          {/* 4b. Name block */}
          <HeroName
            greeting="Hi"
            lines={["I'M", "RAVI", "GAHIRE"]}
          />

          {/* 4c. Bio paragraph */}
          <HeroBio>
            I write <strong>maintainable code</strong> with a minimalist design
            approach while continuously learning and improving to deliver better{" "}
            <em>software solutions.</em>
          </HeroBio>

          {/* 4d. CTA buttons */}
          <HeroCTAs
           
            secondaryLabel="View Work"
            secondaryHref="#work"
          />
        </div>

      </section>
    </>
  )
}

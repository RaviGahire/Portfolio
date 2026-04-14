// HeroName.jsx
// Ghost "Hi" outline text above the large bold name with a blinking green cursor dot.

export default function HeroName({
    greeting ,
    lines
}) {
    return (
        <div>
            {/* Ghost greeting */}
            <div
                aria-hidden="true"
                className="font-black leading-none select-none text-amber-200/20"
                style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(60px, 8vw, 110px)",
                    lineHeight: 0.85,
                    WebkitTextStroke: "1.5px rgba(255,255,255,0.12)",
                    letterSpacing: "-2px",
                    animation: "fadeInUp 0.8s cubic-bezier(.16,1,.3,1) 0.2s both",
                }}
            >
                {greeting}
            </div>

            {/* Main name */}
            <h1
                className="font-black uppercase text-white"
                style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(72px, 10vw, 140px)",
                    lineHeight: 0.88,
                    letterSpacing: "-3px",
                    animation: "fadeInUp 0.9s cubic-bezier(.16,1,.3,1) 0.25s both",
                }}
            >
                {lines.map((line, i) => (
                    <span key={i} className="block">
                        {line}
                    </span>
                ))}
                {/* Blinking green cursor dot */}
                {/* <span
                    aria-hidden="true"
                    className="flex bg-[#00e96a] align-bottom ml-1 mb-1"
                    style={{
                        width: "clamp(10px, 1.2vw, 18px)",
                        height: "clamp(10px, 1.2vw, 18px)",
                        animation: "blink 1.1s step-end 2s infinite",
                    }}
                /> */}
            </h1>
        </div>
    );
}
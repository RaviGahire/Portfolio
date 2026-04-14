

export const GhostNumber = ({ number }) => {
    return (
        <div
            aria-hidden="true"
            className="absolute right-[8%] top-1/2 select-none z-1 leading-none text-amber-200/50"
            style={{
                transform: "translateY(-52%)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(180px, 18vw, 280px)",
                WebkitTextStroke: "1px rgba(255,255,255,0.07)",
                letterSpacing: "-4px",
                animation: "fadeInRight 1.2s cubic-bezier(.16,1,.3,1) 0.4s both",
            }}
        >
            {number}
        </div>
    );
}
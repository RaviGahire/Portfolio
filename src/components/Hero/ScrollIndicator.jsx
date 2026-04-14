
export const ScrollIndicator = ({ label = "Scroll Down" }) => {
    
    return (
        <div
            aria-hidden="true"
            className="absolute right-7 bottom-20 flex flex-col items-center gap-3 z-3"
            style={{ animation: "fadeIn 1s ease 1.4s both" }}
        >
            {/* Vertical text */}
            <span
                className="text-white/20 font-bold text-[10px] tracking-[0.25em] uppercase"
                style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                }}
            >
                {label}
            </span>

            {/* Animated line */}
            <span className="relative w-px h-12 bg-white/15 overflow-hidden">
                <span
                    className="absolute left-0 w-full h-full bg-[#00e96a]"
                    style={{ animation: "scrollLine 2s ease-in-out 1.6s infinite", top: "-100%" }}
                />
            </span>
        </div>
    )
}

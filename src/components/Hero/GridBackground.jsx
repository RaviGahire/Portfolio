import { useId } from "react";  // React 18+

export default function GridBackground({cellColor ,  lineColor ,lineWidth ,colWidth ,rowHeight }) {
  const id = useId()                        
  const patternId = `hero-grid-pat-${id}`

  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <defs>
        <pattern id={patternId} patternUnits="userSpaceOnUse" width={colWidth} height={rowHeight}>

          <rect width={colWidth} height={rowHeight} fill={cellColor} />

          <line x1={0} y1={0} x2={colWidth} y2={0} stroke={lineColor} strokeWidth={lineWidth} />
          
          <line x1={0} y1={0} x2={0} y2={rowHeight} stroke={lineColor} strokeWidth={lineWidth} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
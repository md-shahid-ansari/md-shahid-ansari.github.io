
export default function BackgroundDecor() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Warm ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(125,75,35,0.18)_0%,rgba(80,48,25,0.09)_30%,transparent_65%)]" />

      {/* Left honeycomb cluster */}
      <svg
        className="absolute left-[-65px] top-[14%] h-auto w-[clamp(150px,22vw,280px)] opacity-[0.26] max-[900px]:left-[-90px] max-[900px]:w-[190px] max-[900px]:opacity-[0.19] max-[600px]:left-[-105px] max-[600px]:top-[10%] max-[600px]:w-[150px] max-[600px]:opacity-[0.13] [&_polygon]:fill-[#171719] [&_polygon]:fill-opacity-[0.25] [&_polygon]:stroke-white/[0.07] [&_polygon]:stroke-[1px]"
        viewBox="0 0 260 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <polygon points="65,5 98,24 98,62 65,81 32,62 32,24" />
          <polygon points="131,43 164,62 164,100 131,119 98,100 98,62" />
          <polygon points="65,81 98,100 98,138 65,157 32,138 32,100" />
          <polygon points="197,81 230,100 230,138 197,157 164,138 164,100" />
          <polygon points="131,119 164,138 164,176 131,195 98,176 98,138" />
          <polygon points="65,157 98,176 98,214 65,233 32,214 32,176" />
        </g>
      </svg>

      {/* Upper-right honeycomb cluster */}
      <svg
        className="absolute right-[-65px] top-[4%] h-auto w-[clamp(150px,22vw,280px)] opacity-[0.26] max-[900px]:right-[-90px] max-[900px]:w-[190px] max-[900px]:opacity-[0.19] max-[600px]:right-[-110px] max-[600px]:top-[2%] max-[600px]:w-[150px] max-[600px]:opacity-[0.13] [&_polygon]:fill-[#171719] [&_polygon]:fill-opacity-[0.25] [&_polygon]:stroke-white/[0.07] [&_polygon]:stroke-[1px]"
        viewBox="0 0 260 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <polygon points="65,5 98,24 98,62 65,81 32,62 32,24" />
          <polygon points="131,43 164,62 164,100 131,119 98,100 98,62" />
          <polygon points="197,5 230,24 230,62 197,81 164,62 164,24" />
          <polygon points="65,81 98,100 98,138 65,157 32,138 32,100" />
          <polygon points="197,81 230,100 230,138 197,157 164,138 164,100" />
          <polygon points="131,119 164,138 164,176 131,195 98,176 98,138" />
        </g>
      </svg>
    </div>
  );
}

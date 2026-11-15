
export default function BackgroundDecor() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Natural golden light from the upper-right */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_55%_65%_at_90%_5%,rgba(214,166,105,0.13)_0%,rgba(180,126,76,0.075)_30%,rgba(125,83,49,0.025)_58%,transparent_100%)]
        "
      />

      {/* Soft diagonal light diffusion */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_70%_45%_at_68%_45%,rgba(190,143,91,0.055)_0%,rgba(145,105,70,0.025)_48%,transparent_100%)]
        "
      />

      {/* Gentle reflected light toward the lower-left */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(225deg,transparent_35%,rgba(180,137,91,0.018)_58%,rgba(180,137,91,0.035)_72%,transparent_92%)]
        "
      />
    </div>
  );
}

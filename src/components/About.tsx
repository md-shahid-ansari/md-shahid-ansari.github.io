
import { Code2, Cpu, Workflow } from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
  },
  {
    icon: Cpu,
    title: "AI Engineering",
  },
  {
    icon: Workflow,
    title: "Infrastructure & Deployment",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Centered heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">

          <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight text-[#f5f5f5] sm:text-6xl lg:text-7xl">
            I build products
            <br />
            from <span className="text-accent">idea to deployment.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#a1a1aa] sm:text-lg">
            I'm a Full-Stack & AI Developer who independently builds
            products, delivers client solutions and tackles complex
            engineering problems — from application architecture to
            deployment and infrastructure.
          </p>
        </div>

        {/* What I work on */}
        <div className="mx-auto mt-16 max-w-5xl">
          <p className="mb-5 text-center font-mono text-[11px] tracking-[0.2em] text-[#71717a]">
            WHAT I WORK ON
          </p>

          <div className="grid grid-cols-1 divide-y divide-white/[0.08] border-y border-white/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="flex items-center justify-center gap-3 px-4 py-6"
                >
                  <Icon size={19} className="shrink-0 text-accent" />

                  <span className="text-sm font-medium text-[#e4e4e7]">
                    {area.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

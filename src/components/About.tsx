
import { ArrowUpRight, Code2, Cpu, Workflow } from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building modern applications with thoughtful interfaces and reliable backend systems.",
  },
  {
    icon: Workflow,
    title: "DevOps & Infrastructure",
    description:
      "Exploring automation, deployment workflows and scalable infrastructure.",
  },
  {
    icon: Cpu,
    title: "AI Engineering",
    description:
      "Developing practical AI-powered solutions that address real business problems.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" />
            ABOUT ME
          </p>

          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-[#f5f5f5] sm:text-5xl lg:text-6xl">
            Engineering ideas
            <br />
            into <span className="text-accent">reality.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

          {/* Introduction */}
          <div>
            <p className="text-lg leading-9 text-[#d4d4d8]">
              I'm a developer interested in building useful digital
              products through software engineering, automation and
              artificial intelligence.
            </p>

            <p className="mt-6 text-base leading-8 text-[#a1a1aa]">
              My work spans full-stack development, DevOps and AI
              engineering. I enjoy understanding problems, designing
              practical solutions and bringing them to life through code.
            </p>

            <p className="mt-6 text-base leading-8 text-[#a1a1aa]">
              I believe good engineering is about more than writing
              code. It's about creating reliable, maintainable and
              meaningful products that solve real-world problems.
            </p>

            <a
              href="#projects"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-[#d0ff9c]"
            >
              Explore what I'm building
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Focus areas */}
          <div className="space-y-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group rounded-2xl border border-white/[0.08] bg-[#111111]/70 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-[#171719]/80"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.07] text-accent">
                      <Icon size={21} />
                    </div>

                    <div>
                      <p className="mb-2 font-mono text-[11px] tracking-widest text-[#71717a]">
                        0{index + 1}
                      </p>

                      <h3 className="font-display text-lg font-semibold text-[#f5f5f5]">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#a1a1aa]">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

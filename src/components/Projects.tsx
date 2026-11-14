
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "BusiDuck",
    category: "AI-POWERED SAAS",
    status: "Working product",
    description:
      "An AI-powered business automation platform designed to automate customer conversations, qualify leads and help small businesses manage their sales pipeline.",
    highlights: [
      "Automated Replies",
      "Lead Qualification",
      "Sales Pipeline",
      "Instagram Automation",
    ],
    link: "https://busiduck.com",
    linkLabel: "Visit Website",
    visual: "duck",
  },
  {
    number: "02",
    name: "Halal Stock Intelligence",
    category: "FINANCIAL RESEARCH",
    status: "Research project",
    description:
      "An India-focused stock research platform exploring Shariah-compliant screening and data-driven market analysis to support informed investment research.",
    highlights: [
      "Indian Stock Market",
      "Shariah Screening",
      "Market Research",
      "Data-driven Analysis",
    ],
    link: "",
    linkLabel: "Research Project",
    visual: "chart",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" />
            FEATURED PROJECTS
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-[#f5f5f5] sm:text-5xl lg:text-6xl">
              Things I've
              <br />
              <span className="text-accent">built & explored.</span>
            </h2>

            <p className="max-w-md text-base leading-8 text-[#a1a1aa]">
              A selection of products and ideas driven by my interest
              in software, automation and intelligent systems.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111]/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
            >
              {/* Visual panel */}
              <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#171719] p-8">

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(125,75,35,0.16),transparent_70%)]" />

                {project.visual === "duck" ? (
                  <div className="relative text-center">
                    <div className="font-display text-6xl font-bold tracking-[-0.07em] text-[#f5f5f5] sm:text-7xl">
                      Busi<span className="text-accent">Duck</span>
                    </div>
                    <p className="mt-3 font-mono text-[10px] tracking-[0.25em] text-[#71717a]">
                      BUSINESS AUTOMATION
                    </p>
                  </div>
                ) : (
                  <div className="relative text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/[0.08] text-accent">
                        <span className="font-display text-3xl font-bold">H</span>
                      </div>
                      <div className="text-left">
                        <p className="font-display text-2xl font-semibold text-[#f5f5f5]">
                          Halal Stock
                        </p>
                        <p className="font-display text-2xl font-semibold text-accent">
                          Intelligence
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 font-mono text-[10px] tracking-[0.25em] text-[#71717a]">
                      RESEARCH · SCREENING · ANALYSIS
                    </p>
                  </div>
                )}

                <span className="absolute left-6 top-6 font-mono text-xs tracking-widest text-[#71717a]">
                  / {project.number}
                </span>

                <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-[10px] tracking-wider text-[#c4c4cc]">
                  {project.status}
                </span>
              </div>

              {/* Project information */}
              <div className="p-7 sm:p-9">
                <p className="font-mono text-[10px] tracking-[0.22em] text-accent">
                  {project.category}
                </p>

                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#f5f5f5] sm:text-3xl">
                  {project.name}
                </h3>

                <p className="mt-4 min-h-[105px] text-sm leading-7 text-[#a1a1aa]">
                  {project.description}
                </p>

                <div className="my-7 h-px bg-white/[0.08]" />

                <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#71717a]">
                  KEY AREAS
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/[0.08] px-3 py-2 text-xs text-[#c4c4cc]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-[#d0ff9c]"
                    >
                      {project.linkLabel}
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#71717a]">
                      {project.linkLabel}
                      <ArrowUpRight size={16} />
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


import {
  Code2,
  Server,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building end-to-end web applications, from user interfaces to backend services and data systems.",
    icon: Code2,
    capabilities: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Database Design",
      "Web Applications",
    ],
  },
  {
    number: "02",
    title: "DevOps & Infrastructure",
    description:
      "Creating reliable development and deployment workflows with an emphasis on automation and maintainability.",
    icon: Server,
    capabilities: [
      "Deployment Workflows",
      "CI/CD",
      "Infrastructure",
      "Automation",
      "System Reliability",
    ],
  },
  {
    number: "03",
    title: "AI Engineering",
    description:
      "Exploring practical applications of artificial intelligence, intelligent automation and AI-powered products.",
    icon: BrainCircuit,
    capabilities: [
      "AI Integration",
      "LLM Applications",
      "Workflow Automation",
      "Intelligent Systems",
      "AI-powered Products",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">

        <div className="mb-14">
          <p className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" />
            SKILLS & EXPERTISE
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-[#f5f5f5] sm:text-5xl lg:text-6xl">
              What I bring
              <br />
              to the <span className="text-accent">table.</span>
            </h2>

            <p className="max-w-md text-base leading-8 text-[#a1a1aa]">
              A multidisciplinary approach to building modern software,
              reliable systems and intelligent digital products.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.number}
                className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#111111]/75 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-[#171719]/90 sm:p-8"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-[#71717a]">
                    / {group.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.07] text-accent transition-colors group-hover:bg-accent/15">
                    <Icon size={23} />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-semibold tracking-tight text-[#f5f5f5]">
                  {group.title}
                </h3>

                <p className="mt-4 min-h-[100px] text-sm leading-7 text-[#a1a1aa]">
                  {group.description}
                </p>

                <div className="my-7 h-px bg-white/[0.08]" />

                <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#71717a]">
                  CORE CAPABILITIES
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs text-[#c4c4cc] transition-colors group-hover:border-white/[0.12]"
                    >
                      {capability}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex justify-end pt-8 text-[#71717a] transition-colors group-hover:text-accent">
                  <ArrowUpRight size={19} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden px-5 py-24 md:px-7"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-wide text-[#A1A1AA]">
              FULL STACK · DEVOPS · AI ENGINEERING
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.08] tracking-[-2px] text-[#F5F5F5] sm:text-6xl md:text-7xl lg:text-[88px]">
            I build digital products that{" "}
            <span className="text-accent">make an impact.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#A1A1AA] md:text-lg">
            I work across full-stack development, DevOps, and artificial
            intelligence to turn ideas into useful digital products and
            practical software solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-[#0B0B0C] transition-transform duration-200 hover:-translate-y-1"
            >
              Explore my work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-[#F5F5F5] transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/[0.08] pt-7">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#71717A]">
            Areas of focus
          </span>
          <span className="text-sm text-[#A1A1AA]">Full Stack Development</span>
          <span className="hidden text-[#52525B] sm:inline">/</span>
          <span className="text-sm text-[#A1A1AA]">DevOps & Infrastructure</span>
          <span className="hidden text-[#52525B] sm:inline">/</span>
          <span className="text-sm text-[#A1A1AA]">AI Engineering</span>
        </div>
      </div>
    </section>
  );
}

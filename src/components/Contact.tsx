
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111111]/80 px-7 py-14 sm:px-12 sm:py-20 lg:px-16">

          {/* Ambient glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/[0.08] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#7d4b23]/[0.12] blur-3xl" />

          <div className="relative">
            <p className="mb-7 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent" />
              GET IN TOUCH
            </p>

            <h2 className="max-w-4xl font-display text-5xl font-semibold leading-[1.1] tracking-tight text-[#f5f5f5] sm:text-6xl lg:text-7xl">
              Have an idea?
              <br />
              Let's build
              <span className="text-accent"> something.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#a1a1aa] sm:text-lg">
              I'm open to conversations about interesting projects,
              software engineering, AI and opportunities to build
              meaningful digital products.
            </p>

            <a
              href="mailto:sajarsadaf2000@example.com"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-[#0b0b0c] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c8ff82]"
            >
              <Mail size={18} />
              Say Hello
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[11px] tracking-wider text-[#71717a]">
                HAVE A PROJECT IN MIND? LET'S TALK.
              </p>

              <p className="text-sm text-[#a1a1aa]">
                Building ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

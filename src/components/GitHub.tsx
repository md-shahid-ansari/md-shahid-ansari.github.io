
import { ArrowUpRight } from "lucide-react";

function GitHubMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.8 2.18 3.33 1.57.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function GitHub() {
  return (
    <section
      id="github"
      className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111111]/80 px-7 py-12 sm:px-12 sm:py-16 lg:px-16">

          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-accent/[0.07] blur-3xl" />

          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">

            <div className="max-w-2xl">
              <p className="mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-accent">
                <span className="h-px w-8 bg-accent" />
                FIND ME ON GITHUB
              </p>

              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[#f5f5f5] sm:text-5xl">
                Let's connect
                <br />
                through <span className="text-accent">code.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#a1a1aa]">
                Explore my GitHub profile to follow my development
                journey, discover my work and connect with me.
              </p>

              <a
                href="https://github.com/md_shahid_ansari"
                target="_blank"
                rel="noreferrer"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[#0b0b0c] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c8ff82]"
              >
                <GitHubMark size={18} />
                Visit GitHub Profile
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-[#171719] text-[#f5f5f5] sm:h-40 sm:w-40">
              <GitHubMark size={76} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

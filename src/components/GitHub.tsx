import { ArrowUpRight } from "lucide-react";
import { siGithub } from "simple-icons";

export default function GitHub() {
  return (
    <section
      id="github"
      className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">

        <div className="border-y border-white/[0.09] py-12 sm:py-16">

          <div className="flex items-center justify-between">
            <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent">
              <span className="h-px w-7 bg-accent" />
              CONNECT & EXPLORE
            </p>

            <svg
              role="img"
              viewBox="0 0 24 24"
              width="21"
              height="21"
              fill="currentColor"
              className="text-white/50"
              aria-label="GitHub"
            >
              <path d={siGithub.path} />
            </svg>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">

            <div>
              <h2 className="font-display text-4xl font-medium leading-[1.15] tracking-tight text-[#f5f5f5] sm:text-5xl lg:text-6xl">
                Open source is where
                <br />
                ideas meet <span className="text-accent">engineering.</span>
              </h2>
            </div>

            <div className="max-w-sm md:justify-self-end">
              <p className="text-sm leading-7 text-[#a1a1aa] sm:text-base">
                Explore my GitHub for projects, experiments and
                the work behind what I build.
              </p>

              <a
                href="https://github.com/md-shahid-ansari"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 border-b border-accent/40 pb-2 text-sm font-medium text-accent transition-colors duration-300 hover:border-accent hover:text-[#c8ff82]"
              >
                Explore my GitHub
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

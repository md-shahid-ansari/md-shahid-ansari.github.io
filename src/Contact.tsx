
import { ArrowUpRight, Mail } from "lucide-react";
import {
  siUpwork,
  siFreelancer,
  siGithub,
  siDiscord,
  siX,
  siReddit,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

function BrandMark({
  icon,
  size = 18,
}: {
  icon: SimpleIcon;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

function Linkedin({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.97V9.02h2.96v9.32ZM6.45 7.75a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm11.89 10.59h-2.96V13.8c0-1.08-.02-2.47-1.51-2.47-1.52 0-1.75 1.18-1.75 2.39v4.62H9.16V9.02h2.84v1.27h.04c.4-.73 1.36-1.5 2.8-1.5 3 0 3.55 1.97 3.55 4.53v5.02Z" />
    </svg>
  );
}

const freelanceProfiles = [
  {
    name: "Upwork",
    description: "Hire me for your next project",
    url: "https://www.upwork.com/freelancers/~01bbd60304badc1f69",
    icon: siUpwork,
  },
  {
    name: "Freelancer",
    description: "View my freelance profile",
    url: "https://www.freelancer.com/u/shahid91616",
    icon: siFreelancer,
  },
];

const socialProfiles = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/md-shahid-ansari-au",
    icon: null,
  },
  {
    name: "Discord",
    url: "https://discord.com/users/1179309453846261814",
    icon: siDiscord,
  },
  {
    name: "X",
    url: "https://x.com/md_shahid_ai",
    icon: siX,
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/user/fullstack_shahid",
    icon: siReddit,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-14 px-6 pt-14 pb-7 sm:px-10 lg:px-16 lg:pt-22 lg:pb-11"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Main invitation */}
        <div>
          <p className="mb-8 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent">
            <span className="h-px w-7 bg-accent" />
            GET IN TOUCH
          </p>

          <h2 className="max-w-4xl font-display text-4xl font-medium leading-[1.12] tracking-tight text-[#f5f5f5] sm:text-5xl lg:text-7xl">
            Have an idea?
            <br />
            Let's build something{" "}
            <span className="text-accent">meaningful.</span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#a1a1aa]">
            Whether it's an interesting project, a technical challenge
            or an opportunity to collaborate, I'd love to hear from you.
          </p>
        </div>

        {/* Direct contact */}
        <div className="mt-14 border-y border-white/[0.09] py-7 sm:mt-16 sm:py-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-[11px] tracking-[0.18em] text-[#71717a]">
                DIRECT CONTACT
              </p>

              <a
                href="mailto:sajarsadaf2000@gmail.com"
                className="group inline-flex items-center gap-2 text-lg font-medium text-[#f5f5f5] transition-colors hover:text-accent sm:text-xl"
              >
                sajarsadaf2000@gmail.com
                <ArrowUpRight
                  size={17}
                  className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <a
              href="mailto:sajarsadaf2000@gmail.com"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.12] px-5 py-3 text-sm font-medium text-[#f5f5f5] transition-all duration-300 hover:border-accent/50 hover:text-accent"
            >
              <Mail size={16} />
              Send an email
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Freelance opportunities */}
        <div className="mt-16">
          <p className="mb-6 font-mono text-[11px] tracking-[0.18em] text-[#71717a]">
            FREELANCE OPPORTUNITIES
          </p>

          <div className="grid gap-x-12 sm:grid-cols-2">
            {freelanceProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t border-white/[0.09] py-6 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#a1a1aa] transition-colors group-hover:text-accent">
                    <BrandMark icon={profile.icon} size={25} />
                  </span>

                  <div>
                    <p className="text-base font-medium text-[#f5f5f5] transition-colors group-hover:text-accent">
                      {profile.name}
                    </p>
                    <p className="mt-1 text-xs text-[#71717a]">
                      {profile.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-[#71717a] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </a>
            ))}
          </div>
        </div>

        {/* GitHub */}
        <div id="github" className="mt-14 scroll-mt-18 border-t border-white/[0.09] pt-8">
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

        {/* Elsewhere */}
        <div className="pt-20">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
            {socialProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${profile.name} profile`}
                className="group inline-flex items-center gap-2 text-sm text-[#a1a1aa] transition-colors hover:text-accent"
              >
                <span className="transition-transform group-hover:-translate-y-0.5">
                  {profile.name === "LinkedIn" ? (
                    <Linkedin size={17} />
                  ) : (
                    <BrandMark icon={profile.icon!} size={17} />
                  )}
                </span>

                <span>{profile.name}</span>

                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

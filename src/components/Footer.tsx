
import { ArrowUp, Mail } from "lucide-react";

function Github({ size = 18 }: { size?: number }) {
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

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] px-6 pb-8 pt-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1200px]">

        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Identity */}
          <div className="max-w-sm">
            <a
              href="#home"
              className="font-display text-2xl font-bold tracking-[-1.5px] text-[#f5f5f5]"
            >
              MD SHAHID ANSARI<span className="text-accent">.</span>
            </a>

            <p className="mt-4 text-sm leading-7 text-[#a1a1aa]">
              Building digital products through full-stack development,
              DevOps and artificial intelligence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 font-mono text-[10px] tracking-[0.2em] text-[#71717a]">
              QUICK LINKS
            </p>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-6 gap-y-4"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#a1a1aa] transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div>
            <p className="mb-5 font-mono text-[10px] tracking-[0.2em] text-[#71717a]">
              CONNECT
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/md_shahid_ansari"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] text-[#a1a1aa] transition-all hover:border-accent/40 hover:text-accent"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/in/md-shahid-ansari-au"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] text-[#a1a1aa] transition-all hover:border-accent/40 hover:text-accent"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:sajarsadaf2000@example.com"
                aria-label="Send email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] text-[#a1a1aa] transition-all hover:border-accent/40 hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-[#71717a]">
            © {currentYear} MD SHAHID ANSARI. All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs text-[#a1a1aa] transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-1"
            />
          </a>
        </div>

      </div>
    </footer>
  );
}

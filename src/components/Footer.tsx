
const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] px-6 pb-7 pt-10 sm:px-10 sm:pt-12 lg:px-16">
      <div className="mx-auto max-w-[1200px]">

        {/* Identity */}
        <div className="flex items-center justify-between">
          <a
            href="#about"
            className="font-display text-lg font-bold tracking-[-1.2px] text-[#f5f5f5] transition-colors hover:text-accent"
          >
            MD SHAHID ANSARI<span className="text-accent">.</span>
          </a>

          <span className="font-mono text-[9px] tracking-[0.18em] text-[#71717a] sm:text-[10px]">
            PORTFOLIO · {currentYear}
          </span>
        </div>

        {/* Closing note & navigation */}
        <div className="flex flex-col justify-between gap-6 py-8 sm:py-10 md:flex-row md:items-start md:gap-10">
          {/* Closing note */}
          <div>
            <h2 className="font-display text-2xl font-medium tracking-[-0.04em] text-[#f5f5f5] sm:text-3xl">
              Thanks for stopping by.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-[#a1a1aa]">
              Have something interesting in mind? I'd be happy to hear about it.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-7 gap-y-3 md:pt-2"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#a1a1aa] transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between gap-3 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center">
          <p className="text-[11px] text-[#71717a]">
            © {currentYear} MD SHAHID ANSARI.
          </p>

          <a
            href="#about"
            className="group inline-flex w-fit items-center gap-2 text-xs text-[#a1a1aa] transition-colors hover:text-accent"
          >
            <span className="transition-transform duration-200 group-hover:-translate-y-1">
              ↑
            </span>
            Back to top
          </a>
        </div>

      </div>
    </footer>
  );
}


import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#0b0b0c]/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-[1200px] items-center justify-between px-5 md:px-7">

        {/* Brand */}
        <a
          href="#about"
          onClick={closeMenu}
          aria-label="Go to home"
          className="font-display text-[25px] font-bold tracking-[-1.5px] text-[#f5f5f5]"
        >
          MD SHAHID ANSARI<span className="text-accent">.</span>
        </a>

        {/* Navigation */}
        <nav
          id="mobile-navigation"
          aria-label="Main navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-6 border-b border-white/[0.08] bg-[#0b0b0c]/[0.98] px-5 py-6 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-sm font-medium text-[#a1a1aa] transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex items-center justify-center text-[#f5f5f5] transition-colors hover:text-accent md:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>
    </header>
  );
}

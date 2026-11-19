
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  Monitor,
} from "lucide-react";

type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  links?: { label: string; url: string }[];
};

const products: Project[] = [
  {
    name: "BusiDuck",
    category: "AI-POWERED SAAS",
    description:
      "An AI-powered business automation platform designed to automate customer conversations, qualify leads and help small businesses manage their sales pipeline.",
    technologies: [
      "Node.js",
      "Meta Graph API",
      "BullMQ",
      "Redis",
      "AI Integration",
    ],
    image: "/mockup/busiduck.png",
    link: "https://busiduck.com",
  },
  {
    name: "Bid Agent",
    category: "GENAI BROWSER EXTENSION",
    description:
      "A browser extension that generates tailored freelance bid proposals from project descriptions using AI, helping freelancers create relevant proposals faster.",
    technologies: [
      "JavaScript",
      "FastAPI",
      "Groq",
      "DeepSeek",
      "Manifest V3",
    ],
    image: "/mockup/bid-agent.png",
    links: [
      {
        label: "Chrome Web Store",
        url: "https://chromewebstore.google.com/detail/bid-agent/dlojompjfplommagmoijaeiggemmigck",
      },
      {
        label: "Microsoft Edge Add-ons",
        url: "https://microsoftedge.microsoft.com/addons/detail/bid-agent/cjlofhbjgkljmofifldjnppmjbaflgpm",
      },
    ],
  },
  {
    name: "Sana E Muhammad ﷺ",
    category: "DYNAMIC ISLAMIC CONTENT PLATFORM",
    description:
      "A lightweight Islamic devotional platform featuring Naat Shareef, Durood Shareef, Salat o Salam, Hamd, Manqabat and Dua, powered by a JSON-based content management system that automatically generates static pages, navigation and SEO metadata.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP 8.1+",
      "JSON",
      "Static Site Generation",
      "JSON-LD",
    ],
    image: "/mockup/sana-e-muhammad.png",
    link: "https://sanaemuhammad.com",
  },
  {
    name: "SeeFile",
    category: "OPEN-SOURCE DOCUMENT VIEWER",
    description:
      "A privacy-first, browser-based document viewer that lets users read PDFs, Word documents, spreadsheets, presentations and code files locally without uploading them to a server.",
    technologies: [
      "JavaScript ES Modules",
      "HTML",
      "CSS",
      "PDF.js",
      "SheetJS",
      "JSZip",
      "docx-preview",
    ],
    image: "/mockup/see-file.png",
    links: [
      {
        label: "Live Demo",
        url: "https://md-shahid-ansari.github.io/see-file/",
      },
      {
        label: "GitHub",
        url: "https://github.com/md-shahid-ansari/see-file",
      },
    ],
  },
];

const freelance: Project[] = [

  {
    name: "Business Book",
    category: "DESKTOP BUSINESS MANAGEMENT SOFTWARE",
    description:
      "A custom offline business management application built for handling daily accounting and business operations. It brings invoicing, purchases, expenses, payments, party ledgers, GST reports and PDF document generation into one desktop application, with local data storage and backup management.",
    technologies: [
      "Electron",
      "React",
      "TypeScript",
      "Node.js",
      "SQLite",
      "Drizzle ORM",
      "Tailwind CSS",
      "ExcelJS",
    ],
    image: "/mockup/business-book.png",
  },
  {
    name: "Biziffy",
    category: "BUSINESS LISTING & LOCAL SEO",
    description:
      "A full-stack platform revamp involving authentication, role-based access, admin tools, infrastructure deployment, server hardening and SEO improvements.",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Nginx",
      "PM2",
      "CI/CD",
    ],
    image: "/mockup/biziffy.png",
    link: "https://biziffy.com",
  },
  {
    name: "MediaMan Advertising",
    category: "ADVERTISING & DIGITAL EXPERIENCE",
    description:
      "Designed and developed a complete portfolio website for an outdoor and cinema advertising company, with performance-focused rendering and lazy loading.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Hostinger VPS",
    ],
    image: "/mockup/mediaman.png",
    link: "https://mediaman.in",
  },
  {
    name: "iC Kashmir",
    category: "TOUR & TRAVEL PLATFORM",
    description:
      "A complete redesign for a Kashmir travel company, featuring content management, incremental static regeneration and CRM integration.",
    technologies: [
      "Next.js 16",
      "Sanity v4",
      "Tailwind CSS v4",
      "Vercel",
    ],
    image: "/mockup/ickashmir.png",
    link: "https://ickashmir.in",
  },
  {
    name: "EasyClaw",
    category: "OPENCLAW DEPLOYMENT PLATFORM",
    description:
      "Built an orchestration platform that provisions isolated OpenClaw instances in under 90 seconds using independently managed Docker containers.",
    technologies: [
      "Node.js",
      "Docker",
      "Oracle Cloud",
      "OpenClaw",
    ],
    image: "/mockup/easyclaw.png",
  },
  {
    name: "LLM Fine-Tuning",
    category: "AI / MACHINE LEARNING",
    description:
      "Fine-tuned open-source language models for natural-language-to-MongoDB query translation in the finance domain, including dataset preparation and model optimization.",
    technologies: [
      "Python",
      "Hugging Face",
      "LLaMA",
      "Mistral",
      "MongoDB",
    ],
    image: "/mockup/llm-finetuning.png",
  },
];

function ProjectTile({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full text-left cursor-pointer"
      aria-label={`View ${project.name} project details`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#151517]">
        <img
          src={project.image}
          alt={`${project.name} project mockup`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />

        <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <h4 className="font-display text-base font-medium text-[#f5f5f5] transition-colors group-hover:text-accent sm:text-lg">
          {project.name}
        </h4>
        <span className="font-mono text-[9px] tracking-wider text-[#71717a]">
          VIEW PROJECT
        </span>
      </div>
    </button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (showPreview) {
          setShowPreview(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPreview, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} details`}
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden border border-white/[0.1] bg-[#101012] shadow-2xl"
      >
        {/* Modal header */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#a1a1aa]">
            PROJECT DETAILS
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project popup"
            className="flex h-9 w-9 items-center justify-center text-[#a1a1aa] transition hover:bg-white/[0.06] hover:text-white"
          >
            <X size={19} />
          </button>
        </div>

        {/* Project content */}
        <div className="overflow-y-auto">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            {/* Image / live preview area */}
            <div className="relative aspect-[4/3] bg-[#171719] md:aspect-auto md:min-h-[440px]">
              {showPreview && project.link ? (
                <iframe
                  src={project.link}
                  title={`${project.name} live preview`}
                  className="absolute inset-0 h-full w-full border-0 bg-white"
                  allow="fullscreen"
                />
              ) : (
                <img
                  src={project.image}
                  alt={`${project.name} showcase`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>

            {/* Project information */}
            <div className="flex flex-col justify-center p-6 sm:p-9">
              <p className="font-mono text-[10px] tracking-[0.2em] text-accent">
                {project.category}
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#f5f5f5] sm:text-4xl">
                {project.name}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#a1a1aa]">
                {project.description}
              </p>

              <div className="mt-7">
                <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#71717a]">
                  TECHNOLOGIES
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs text-[#c4c4cc]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live preview toggle */}
              {project.link && (
                <button
                  type="button"
                  onClick={() => setShowPreview((current) => !current)}
                  aria-pressed={showPreview}
                  className="mt-8 inline-flex w-fit items-center gap-2 bg-accent px-5 py-3 text-xs font-semibold text-[#101012] transition hover:bg-[#d0ff9c]"
                >
                  <Monitor size={15} />
                  {showPreview ? "Close Live Preview" : "Live Preview"}
                </button>
              )}

              {/* External links */}
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#d4d4d8] transition hover:text-accent"
                  >
                    Visit Website
                    <ExternalLink size={14} />
                  </a>
                )}

                {project.links?.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#d4d4d8] transition hover:text-accent"
                  >
                    {item.label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact footer */}
          <div className="flex flex-col justify-between gap-4 border-t border-white/[0.08] px-6 py-5 sm:flex-row sm:items-center sm:px-9">
            <p className="text-xs text-[#85858d]">
              Have a similar project in mind?
            </p>

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-[#d0ff9c]"
            >
              Contact Me
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative scroll-mt-14 px-6 py-14 sm:px-10 lg:px-16 lg:py-22"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" />
            SELECTED WORK
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[#f5f5f5] sm:text-5xl lg:text-6xl">
              Things I've
              <br />
              <span className="text-accent">built & delivered.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#a1a1aa]">
              A selection of independent products and engineering work.
            </p>
          </div>
        </div>

        {/* Products */}
        <div>
          <div className="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-4">
            <h3 className="font-display text-xl font-semibold text-[#f5f5f5]">
              Products
            </h3>

            <span className="font-mono text-[10px] tracking-wider text-[#71717a]">
              01 — 02
            </span>
          </div>

          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
            {products.map((project) => (
              <ProjectTile
                key={project.name}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* Freelance & engineering work */}
        <div className="mt-24">
          <div className="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-4">
            <h3 className="font-display text-xl font-semibold text-[#f5f5f5]">
              Freelance & Engineering Work
            </h3>

            <span className="font-mono text-[10px] tracking-wider text-[#71717a]">
              03 — 07
            </span>
          </div>

          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {freelance.map((project) => (
              <ProjectTile
                key={project.name}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Selected project popup */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

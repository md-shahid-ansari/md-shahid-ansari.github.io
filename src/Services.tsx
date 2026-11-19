
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    category: "DEVELOPMENT",
    title: "Full-Stack Web Development",
    description: "Turn your ideas into functional, user-friendly web products.",
    outcomes: [
      "Custom websites and web applications",
      "SaaS platforms and business dashboards",
      "End-to-end frontend and backend development",
      "Browser extensions and custom integrations",
    ],
  },
  {
    number: "02",
    category: "INTELLIGENCE",
    title: "AI Integration & Automation",
    description: "Bring AI into your products and automate repetitive tasks.",
    outcomes: [
      "AI-powered features and applications",
      "LLM integrations and intelligent AI agents",
      "Automated business workflows",
      "Chatbots, lead qualification and smart replies",
    ],
  },
  {
    number: "03",
    category: "ENGINEERING",
    title: "Backend & API Development",
    description: "Build reliable backend systems that power your applications.",
    outcomes: [
      "Scalable backend architecture",
      "REST API development and integration",
      "Database design and optimization",
      "Third-party services and system integrations",
    ],
  },
  {
    number: "04",
    category: "INFRASTRUCTURE",
    title: "DevOps & Cloud Infrastructure",
    description: "Deploy, manage and scale applications with confidence.",
    outcomes: [
      "Cloud deployment and server configuration",
      "Docker-based application environments",
      "CI/CD pipeline setup and automation",
      "Infrastructure management and optimization",
    ],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto w-full max-w-4xl scroll-mt-14 px-6 py-14 sm:px-8 lg:px-12"
    >
      <div className="mb-12 flex justify-center text-center">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#f5f5f5] sm:text-4xl lg:text-5xl">
          What I can <span className="text-accent">help you build.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.number}
            className="border-t border-white/[0.08] py-8 sm:py-10"
          >
            <div className="mb-5">
              <span className="font-mono text-xs tracking-wide text-accent">
                {service.number} / {service.category}
              </span>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-[#f5f5f5] sm:text-2xl">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#A1A1AA]">
              {service.description}
            </p>

            <ul className="mt-6 space-y-3">
              {service.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 text-sm leading-6 text-[#D4D4D8]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {outcome}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      
        <div className="mt-8 border-t border-white/[0.08] pt-8">
            <a
                href="#contact"
                className="group flex items-center justify-between text-sm text-[#A1A1AA] transition-colors hover:text-accent sm:text-base"
            >
                <p className="font-medium text-[#f5f5f5] transition-colors group-hover:text-accent">
                Have something in mind? Let's build it.
                </p>

                <ArrowUpRight
                size={18}
                className="text-[#71717a] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
            </a>
        </div>
    </section>
  );
}

export default Services;

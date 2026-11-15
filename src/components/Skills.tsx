
import * as SimpleIcons from "simple-icons";

type BrandIcon = {
  path: string;
  hex: string;
};

const iconLibrary = SimpleIcons as unknown as Record<
  string,
  BrandIcon | undefined
>;

const skillGroups = [
  {
    title: "LANGUAGES",
    technologies: [
      { name: "JavaScript", icon: "siJavascript" },
      { name: "Python", icon: "siPython" },
      { name: "Java", icon: "siJava" },
      { name: "C", icon: "siC" },
      { name: "PHP", icon: "siPhp" },
      { name: "SQL", icon: "siMysql" },
    ],
  },
  {
    title: "FRAMEWORKS & LIBRARIES",
    technologies: [
      { name: "Next.js", icon: "siNextdotjs" },
      { name: "React", icon: "siReact" },
      { name: "Electron", icon: "siElectron" },
      { name: "Tailwind CSS", icon: "siTailwindcss" },
      { name: "ShadCN UI", icon: "siShadcnui" },
      { name: "Express", icon: "siExpress" },
      { name: "FastAPI", icon: "siFastapi" },
      { name: "Flask", icon: "siFlask" },
    ],
  },
  {
    title: "RUNTIME, APIs & QUEUES",
    technologies: [
      { name: "Node.js", icon: "siNodedotjs" },
      { name: "REST APIs", icon: null },
      { name: "WebSockets", icon: null },
      { name: "BullMQ", icon: null },
    ],
  },
  {
    title: "AI & MACHINE LEARNING",
    technologies: [
      { name: "OpenAI", icon: "siOpenai" },
      { name: "Groq", icon: "siGroq" },
      { name: "DeepSeek", icon: "siDeepseek" },
      { name: "Hugging Face", icon: "siHuggingface" },
      { name: "YOLOv8", icon: "siUltralytics" },
      { name: "OpenCV", icon: "siOpencv" },
    ],
  },
  {
    title: "DATABASES",
    technologies: [
      { name: "MongoDB", icon: "siMongodb" },
      { name: "MySQL", icon: "siMysql" },
      { name: "Sanity", icon: "siSanity" },
      { name: "Redis", icon: "siRedis" },
    ],
  },
  {
    title: "INFRASTRUCTURE & CLOUD",
    technologies: [
      { name: "Docker", icon: "siDocker" },
      { name: "Nginx", icon: "siNginx" },
      { name: "PM2", icon: null },
      { name: "GitHub Actions", icon: "siGithubactions" },
      { name: "Hostinger", icon: "siHostinger" },
      { name: "Oracle Cloud", icon: "siOracle" },
      { name: "AWS", icon: "siAmazonaws" },
      { name: "Vercel", icon: "siVercel" },
      { name: "Render", icon: "siRender" },
    ],
  },
  {
    title: "AUTHENTICATION & INTEGRATIONS",
    technologies: [
      { name: "JWT", icon: null },
      { name: "OAuth", icon: null },
      { name: "Firebase", icon: "siFirebase" },
      { name: "Meta Graph API", icon: "siMeta" },
      { name: "Cloudflare Workers", icon: "siCloudflare" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-5 font-mono text-xs tracking-[0.25em] text-accent">
            MY TOOLKIT
          </p>

          <h2 className="font-display text-5xl font-semibold tracking-tight text-[#f5f5f5] sm:text-6xl lg:text-7xl">
            Tools & <span className="text-accent">Technologies.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#a1a1aa]">
            Technologies I use to build, integrate and deploy products.
          </p>
        </div>

        {/* Technology grid */}
        <div className="mx-auto max-w-5xl space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#71717a]">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.technologies.map((technology) => {
                  const brand = technology.icon
                    ? iconLibrary[technology.icon]
                    : undefined;

                  return (
                    <div
                      key={technology.name}
                      className="group flex min-h-[68px] items-center gap-3 rounded-xl border border-white/[0.07] bg-[#111111]/60 px-3 py-3 transition-all duration-200 hover:border-accent/30 hover:bg-[#171719]"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                        {brand ? (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-[21px] w-[21px] text-[#a1a1aa] transition-colors duration-200 group-hover:text-accent"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d={brand.path} />
                          </svg>
                        ) : (
                          <span className="font-mono text-sm text-[#a1a1aa] transition-colors group-hover:text-accent">
                            {technology.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-medium text-[#c4c4cc] transition-colors group-hover:text-[#f5f5f5]">
                        {technology.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

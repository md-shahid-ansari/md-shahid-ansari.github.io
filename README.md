# Personal Portfolio — Technical Documentation

**Project:** MD Shahid Ansari — Personal Portfolio  
**Live URL:** [https://md-shahid-ansari.github.io/](https://md-shahid-ansari.github.io/)  
**Repository:** [https://github.com/md-shahid-ansari/md-shahid-ansari.github.io](https://github.com/md-shahid-ansari/md-shahid-ansari.github.io)  
**Documentation version:** 1.0.0
**Last updated:** November 2026

---

## 1. Project Overview

This repository contains a single-page personal portfolio website presenting professional experience, technical skills, products, freelance projects, and contact information.

The portfolio supports:

- Freelance opportunities.
- Full-time employment opportunities.
- Startup collaborations and partnerships.
- Professional credibility and personal branding.

### Design philosophy

The website follows a minimal, premium, dark editorial design direction.

Its principles include:

- Content-first layout.
- Restrained use of accent colors.
- Strong typography and whitespace.
- Subtle borders instead of excessive cards.
- Responsive layouts.
- Minimal decorative elements.
- Consistent spacing and visual hierarchy.

The portfolio intentionally does not use a traditional Hero section.

---

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| React | UI component architecture |
| Vite | Development server and build tool |
| TypeScript | Type safety |
| Tailwind CSS v4 | Layout and component styling |
| Custom CSS | Global styles and design tokens |
| Lucide React | Interface icons |
| Simple Icons | Technology and brand logos |
| GitHub | Source code hosting |
| GitHub Actions | Automated deployment |
| GitHub Pages | Website hosting |

Refer to `package.json` for exact installed dependency versions.

---

## 3. Project Architecture

The project uses a flat source structure. React components are stored directly inside `src/`, rather than in a separate `components/` directory.

### Current source structure

```text
portfolio/
│
├── public/
│   └── mockup/
│       ├── busiduck.png
│       ├── bid-agent.png
│       ├── biziffy.png
│       ├── mediaman.png
│       ├── ickashmir.png
│       ├── easyclaw.png
│       └── llm-finetuning.png
│
├── src/
│   ├── About.tsx
│   ├── App.tsx
│   ├── BackgroundDecor.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── .github/
    └── workflows/
        └── deployment workflow
```

The source structure above reflects the directory listing provided on November 15, 2026. The deployment workflow's exact filename and any other root-level configuration files should be checked in the repository.

### Source file responsibilities

| File | Responsibility |
|---|---|
| `Navbar.tsx` | Brand identity and primary navigation |
| `BackgroundDecor.tsx` | Decorative background component |
| `About.tsx` | Professional introduction and focus areas |
| `Skills.tsx` | Technical skills and technology logos |
| `Projects.tsx` | Product and freelance project showcases |
| `Contact.tsx` | Contact invitation, freelance profiles, GitHub and social links |
| `Footer.tsx` | Closing note, navigation and copyright |
| `App.tsx` | Main page composition |
| `index.css` | Global styles, fonts and design tokens |
| `main.tsx` | React application entry point |

**Important:** All component paths in this documentation refer directly to `src/`. Do not use the old `src/components/` paths.

---

## 4. Application Composition

The application is a single-page React website.

`src/App.tsx` controls the composition and order of the page sections.

The main sections are:

1. Navbar
2. About
3. Skills
4. Projects
5. Contact
6. Footer

`BackgroundDecor.tsx` provides the background decoration and is included wherever the current application composition places it.

When changing the page composition, inspect the existing `App.tsx` and preserve its wrappers, background component and other application-level elements.

### Section navigation

Navigation uses HTML anchor links rather than separate routes.

Examples:

```tsx
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
```

Each destination section must have its corresponding ID:

```tsx
<section id="about">
```

When adding a navigable section, update the navigation links and ensure the destination ID exists.

---

## 5. Design System

### 5.1 Color palette

| Token | Value | Usage |
|---|---|---|
| Background | `#0B0B0C` | Main background |
| Primary text | `#F5F5F5` | Headings and important text |
| Secondary text | `#A1A1AA` | Descriptions |
| Muted text | `#71717A` | Metadata and labels |
| Accent | `#B6F36B` | Highlights and hover states |
| Subtle border | `rgba(255,255,255,0.08)` | Separators and borders |

### 5.2 Typography

- **Space Grotesk:** Display typography and identity.
- **Inter:** General interface and body text.
- **JetBrains Mono:** Small technical labels and metadata.

Use the existing font definitions and classes.

### 5.3 Styling conventions

Global styles and design tokens are maintained in:

`src/index.css`

Prefer existing Tailwind utilities and CSS variables.

Examples:

```tsx
className="text-[#f5f5f5]"
className="text-[#a1a1aa]"
className="text-accent"
className="border-white/[0.08]"
```

Avoid:

- Unnecessary card backgrounds.
- Excessive shadows and gradients.
- Large decorative icons.
- Arbitrary accent colors.
- Inconsistent border opacity.
- Unnecessary animations.
- Inconsistent spacing conventions.

---

# 6. Content Management Guide

Most portfolio updates can be made by editing the relevant component directly inside `src/`.

## 6.1 Editing About

**File:** `src/About.tsx`

The About section contains:

- Section label.
- Main headline.
- Professional introduction.
- Three focus areas.

To edit the headline, locate the heading element and change its text.

To edit the introduction, update the paragraph.

To change the focus areas, locate the corresponding rendered labels.

Current focus areas:

1. Full-Stack Engineering
2. AI Engineering
3. Infrastructure & Deployment

Keep the introduction concise. Avoid repeating the complete Skills or Projects content.

## 6.2 Adding, editing and removing skills

**File:** `src/Skills.tsx`

The Skills section uses a minimal technology-logo grid.

Its categories include:

- Languages
- Frameworks & Libraries
- Runtime, APIs & Queues
- AI & ML
- Databases
- Infrastructure & Cloud
- Authentication & Integrations

### Adding a skill

1. Open `src/Skills.tsx`.
2. Find the relevant category.
3. Add a new entry using the same structure as the existing entries.
4. Provide its display name and corresponding icon.
5. Save and run the production build.

Conceptual example:

```tsx
{
  name: "TypeScript",
  icon: siTypescript,
}
```

Use the actual object structure already defined in the component. The example illustrates the fields, not a replacement for the implementation.

### Adding a skill to a new category

1. Find the category/group definitions.
2. Add a category using the existing structure.
3. Add its skills.
4. Verify the responsive grid.

Keep category names short and consistent.

### Adding a technology logo

The project uses the `simple-icons` package.

If an icon is available:

```tsx
import { siTypescript } from "simple-icons";
```

Then reference it in the relevant skill entry.

If an icon is unavailable:

- Check the actual exports of the installed package.
- Do not assume an icon exists based on its expected name.
- Use the existing text-based fallback mechanism if supported.

Generic technologies and concepts such as REST APIs, WebSockets, JWT and OAuth may need text abbreviations instead of brand logos.

### Editing a skill

Change the existing skill's display name or icon reference.

### Removing a skill

Remove its entry from the corresponding category.

Do not remove an icon import if another skill still uses it.

### Adding Electron

Electron is already part of the portfolio's skills list. Avoid adding a duplicate.

### Skills maintenance rules

- Use recognizable technology names.
- Keep categories logically organized.
- Avoid proficiency percentages and progress bars.
- Avoid lengthy descriptions.
- Do not add technologies that are not part of actual experience.

---

## 6.3 Adding, editing and removing projects

**File:** `src/Projects.tsx`

The Projects section has two groups.

### Products I've Built

- BusiDuck
- Bid Agent

### Freelance & Engineering Work

- Biziffy
- MediaMan
- iC Kashmir
- EasyClaw
- LLM Fine-Tuning

The presentation is image-led and editorial rather than a conventional card grid.

Selecting a project opens its details popup.

The popup can contain:

- Project image.
- Project title.
- Project description.
- Technology stack.
- External links.
- Live preview where supported.
- Contact link.

### Adding a new project

1. Open `src/Projects.tsx`.
2. Locate the project data definitions.
3. Identify the correct project group.
4. Add a project using the existing data structure.
5. Add its mockup image to `public/mockup/`.
6. Reference the image using its public path.
7. Add the project description and technologies.
8. Add valid external links where applicable.
9. Verify the project showcase and popup.

Example:

```tsx
image: "/mockup/new-project.png"
```

Follow the exact existing property names and structure in `Projects.tsx`.

### Adding a project image

Store project mockups in:

```text
public/mockup/
```

Example:

```text
public/mockup/
├── busiduck.png
├── bid-agent.png
└── new-project.png
```

Reference public assets with a root-relative path:

```tsx
"/mockup/new-project.png"
```

Do not use:

```tsx
"public/mockup/new-project.png"
```

The `public` directory is served from the website root.

### Replacing an existing project image

1. Prepare the replacement image.
2. Replace the corresponding file or add a new one.
3. If the filename changes, update the image reference in `src/Projects.tsx`.
4. Check the image dimensions and crop.
5. Verify the showcase and popup.

Use consistent image proportions and good-quality mockups.

### Editing project information

Find the relevant project entry and update:

- Title.
- Description.
- Technologies.
- Image.
- External links.

Preserve the existing property names and data structure.

### Adding external project links

For a project with one website, an existing data structure might use:

```tsx
link: "https://example.com"
```

For multiple destinations, follow the existing `links` structure.

Bid Agent is an example of a project with separate Chrome Web Store and Microsoft Edge Add-ons links.

### Adding a live preview

The current implementation uses an iframe preview for projects with supported website URLs.

The user manually toggles between the image and live preview.

Important:

- A project needs a valid preview URL.
- Some websites block iframe embedding through security headers.
- An iframe failure does not necessarily mean the website is offline.
- Keep an external website link available even when a live preview exists.
- Bid Agent uses external store links rather than an iframe preview.

Do not introduce automatic preview fallback or timeout behavior without deliberately changing the existing interaction design.

### Removing a project

1. Remove its entry from the correct project collection.
2. Check whether its image is still used elsewhere.
3. Remove unused assets only after confirming they are no longer referenced.
4. Check the remaining project order and responsive layout.

### Project maintenance rules

- Keep descriptions concise and factual.
- Distinguish products from freelance/client work.
- Use accurate technology stacks.
- Do not invent project metrics or URLs.
- Do not provide a live preview for a destination that does not support it.

---

## 6.4 Editing Contact information and links

**File:** `src/Contact.tsx`

The Contact section contains:

1. Main contact invitation.
2. Email contact.
3. Freelance profiles.
4. GitHub subsection.
5. Elsewhere/social links.

This section has an approved implementation. Preserve its structure and styling unless a change is intentionally requested.

### Editing the email address

Find the existing email address and update both the displayed address and the `mailto:` destination.

Example:

```tsx
href="mailto:your-email@example.com"
```

Keep the visible email and destination consistent.

### Editing freelance profiles

The existing freelance profile data includes:

- Upwork.
- Freelancer.

Find the `freelanceProfiles` array.

Update the relevant URL or description without changing the existing data structure.

To add another freelance platform:

1. Add its entry to the existing collection.
2. Follow the same object structure.
3. Use the existing rendering logic.
4. Verify its link and icon.

### Editing GitHub

Current profile:

```text
https://github.com/md-shahid-ansari
```

Update the destination if the GitHub username changes.

### Editing social links

The `socialProfiles` collection contains:

- LinkedIn
- Discord
- X
- Reddit

Update the matching URL to change a social destination.

To add a new social profile:

1. Add its icon import if available.
2. Add an entry to the existing collection.
3. Follow the existing icon rendering convention.
4. Verify the link and accessibility label.

### Important Contact rule

Do not duplicate social links in the Footer. Contact is the central location for external profiles and contact methods.

---

## 6.5 Editing Footer

**File:** `src/Footer.tsx`

The Footer contains:

- Name and brand signature.
- Portfolio year.
- Closing message.
- Internal navigation.
- Copyright.
- Back to top.

### Editing the closing message

Find the closing heading and supporting paragraph.

Keep both short and natural.

### Editing footer navigation

Find the `footerLinks` array.

Current structure:

```tsx
const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
```

To rename a link, update `label`.

To change its destination, update `href`.

To add another section, add an entry with its corresponding section ID.

### Editing copyright

The year is generated automatically:

```tsx
const currentYear = new Date().getFullYear();
```

There is no need to update the year manually.

---

## 6.6 Editing Navbar

**File:** `src/Navbar.tsx`

The Navbar contains the site's brand identity and section navigation.

To update navigation:

1. Locate the navigation link definitions or JSX.
2. Update the visible label.
3. Update the corresponding anchor destination.
4. Verify that the destination section ID exists.

Keep Navbar and Footer navigation consistent.

---

## 6.7 Editing Background Decoration

**File:** `src/BackgroundDecor.tsx`

This component controls the decorative background elements used by the application.

When editing it:

- Preserve the existing background design direction.
- Keep decoration subtle.
- Avoid introducing unnecessary visual effects.
- Ensure decorative elements do not interfere with interaction.
- Preserve any existing `aria-hidden` behavior for purely decorative content.

If changing its appearance, verify it against the dark background and across mobile and desktop layouts.

---

# 7. Adding a New Section or Component

The project uses a flat source structure. New components should be created directly inside `src/`.

For example, to add an Experience section:

1. Create `src/Experience.tsx`.
2. Implement its responsive layout using the existing design system.
3. Assign a unique section ID.
4. Import it into `src/App.tsx`.
5. Place it in the intended page order.
6. Add its navigation link to Navbar and/or Footer if needed.
7. Verify spacing and mobile behavior.

Example:

```tsx
export default function Experience() {
  return (
    <section id="experience">
      {/* Section content */}
    </section>
  );
}
```

Then import it into `App.tsx`:

```tsx
import Experience from "./Experience";
```

And render it in the intended position:

```tsx
<Experience />
```

Do not create a `components/` directory unless the project architecture is deliberately changed.

Do not introduce a new section merely to repeat information already covered elsewhere.

---

# 8. Spacing and Responsive Layout

Spacing has two important levels.

### 8.1 Between sections

Controls vertical distance between major page sections:

- About → Skills
- Skills → Projects
- Projects → Contact
- Contact → Footer

Inspect the relevant section wrappers and their vertical padding or margin utilities.

### 8.2 Within sections

Controls distance between:

- Section label and heading.
- Heading and description.
- Description and content.
- Project groups and images.
- Contact blocks.
- Footer content.

Use consistent spacing utilities instead of arbitrary values.

### Responsive breakpoints

Tailwind responsive prefixes adapt layouts.

Examples:

```tsx
className="text-2xl sm:text-3xl"
className="flex flex-col md:flex-row"
className="px-6 sm:px-10 lg:px-16"
```

Always verify:

- Mobile layout.
- Tablet layout.
- Desktop layout.

Avoid horizontal overflow, cramped navigation, clipped project images and awkward line breaks.

---

# 9. Favicon and Site Metadata

### Favicon

The portfolio uses a custom monogram:

- Dark background: `#0B0B0C`.
- White letter S.
- Separate lime dot: `#B6F36B`.
- Minimal geometry.
- Recognizable at small sizes.

If replacing the favicon:

1. Update the relevant file in `public/`.
2. Update its reference in `index.html` if the filename changes.
3. Verify it in the browser tab.

For reliable font rendering, consider converting the letter into a vector path rather than relying on an external font inside SVG text.

### Page metadata

**File:** `index.html`

Review:

- Page title.
- Meta description.
- Favicon reference.
- Theme color.
- Other SEO metadata.

Keep metadata accurate and concise.

---

# 10. Local Development

### Prerequisites

- Node.js.
- npm.
- Git.
- A local copy of the repository.

### Clone the repository

```bash
git clone https://github.com/md-shahid-ansari/md-shahid-ansari.github.io.git

cd md-shahid-ansari.github.io
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Vite normally provides a local development URL:

```text
http://localhost:5173/
```

### Production build

```bash
npm run build
```

Vite generates production output in:

```text
dist/
```

### Preview production build

```bash
npm run preview
```

Use this to inspect the production build locally before deployment.

---

# 11. Deployment — GitHub Pages

The portfolio is hosted through GitHub Pages and deployed using GitHub Actions.

### Repository

```text
md-shahid-ansari/md-shahid-ansari.github.io
```

### Live website

```text
https://md-shahid-ansari.github.io/
```

### Deployment process

1. Make changes locally.
2. Run the production build.
3. Verify the website.
4. Commit the changes.
5. Push to the `main` branch.
6. GitHub Actions builds and deploys the website.
7. Verify the deployment.

### Git commands

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### GitHub Pages configuration

In the repository:

1. Open Settings.
2. Open Pages.
3. Confirm the source is configured for GitHub Actions.
4. Check the Actions tab for deployment status.

The deployment workflow should build the Vite project and publish the generated `dist/` directory.

### Vite base path

The website uses a GitHub Pages user-site repository, so the Vite base path should remain:

```ts
base: "/"
```

Do not change it to a repository subpath unless the hosting arrangement changes.

### Deployment verification

After pushing:

- Check that the GitHub Actions workflow succeeds.
- Open the live website.
- Verify images load.
- Verify navigation anchors.
- Test external links.
- Test project popups and live previews.
- Check mobile and desktop layouts.

---

# 12. Troubleshooting

### Build fails

Run:

```bash
npm install
npm run build
```

Read the first TypeScript or Vite error and resolve it before addressing subsequent errors.

### Simple Icons import error

An icon may not be exported by the installed version of `simple-icons`.

Check the actual installed package exports. Do not assume every brand icon uses a particular export name.

Use the existing fallback approach where an icon is unavailable.

### Project image not loading

Check:

1. The file exists in `public/mockup/`.
2. The filename matches exactly, including capitalization.
3. The component uses a root-relative path such as `/mockup/example.png`.
4. The image format is supported by the browser.

### Live preview not loading

Some websites block iframe embedding.

Try opening the project's external link directly. An iframe error does not necessarily indicate that the website is unavailable.

### Anchor link not working

Check that the navigation target matches the section ID exactly.

For example:

```tsx
href="#projects"
```

must correspond to:

```tsx
id="projects"
```

### Changes not visible after deployment

Check the latest GitHub Actions run and confirm deployment completed successfully.

Hard-refresh the browser if the page appears cached.

---

# 13. Maintenance Checklist

Before publishing an update:

- [ ] Content is accurate.
- [ ] Project links are valid.
- [ ] Contact details are correct.
- [ ] Images load correctly.
- [ ] No duplicate skills or projects exist.
- [ ] Navigation anchors work.
- [ ] Project popups work.
- [ ] Live preview behavior is correct.
- [ ] Mobile layout is clean.
- [ ] Desktop layout is clean.
- [ ] No horizontal overflow exists.
- [ ] Production build succeeds.
- [ ] GitHub Actions deployment succeeds.

---

# 14. Important Design and Maintenance Rules

1. Do not reintroduce the removed Hero section without an explicit design decision.
2. Keep the minimal dark editorial design.
3. Avoid excessive cards, gradients, glows and decorative elements.
4. Preserve the approved Contact structure unless changes are explicitly requested.
5. Preserve the approved Footer layout.
6. Keep social profiles centralized in Contact.
7. Prefer concise, factual project descriptions.
8. Maintain the existing project popup and manual live-preview interaction.
9. Keep Skills focused on technology logos and names.
10. Preserve responsive behavior and consistent section spacing.
11. Keep components directly inside `src/` unless the project architecture is deliberately changed.
12. Do not recreate deleted `assets/`, `styles/` or `components/` directories just to match older documentation.

---

# 15. Future Maintenance Reference

| What needs updating | File or directory |
|---|---|
| Professional introduction | `src/About.tsx` |
| Skills and technology logos | `src/Skills.tsx` |
| Project details and ordering | `src/Projects.tsx` |
| Project mockup images | `public/mockup/` |
| Email and contact details | `src/Contact.tsx` |
| Upwork and Freelancer links | `src/Contact.tsx` |
| GitHub and social links | `src/Contact.tsx` |
| Footer text and navigation | `src/Footer.tsx` |
| Main navigation | `src/Navbar.tsx` |
| Background decoration | `src/BackgroundDecor.tsx` |
| Section ordering | `src/App.tsx` |
| Global styles and design tokens | `src/index.css` |
| React entry point | `src/main.tsx` |
| Page title and metadata | `index.html` |
| Dependencies and scripts | `package.json` |
| GitHub Pages build configuration | `vite.config.ts` and `.github/workflows/` |

---

## Final Note

The portfolio is intended to be maintained through small, focused component-level changes.

For ordinary content updates, edit the relevant component or asset rather than restructuring the application.

For visual updates, preserve the established design system and verify the result at mobile, tablet and desktop sizes.

**The guiding principle: improve the portfolio without making it visually heavier or technically more complicated.**
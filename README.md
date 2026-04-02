# Tim Hsiao — Portfolio

[繁體中文](./README.zh-TW.md)

Personal portfolio website with a dark sci-fi inspired design, featuring particle backgrounds, typewriter effects, and scroll-triggered animations.

## Preview

- 🎨 Dark theme with cyan accent
- ✨ Three.js particle background
- ⌨️ Typewriter effect
- 📜 GSAP ScrollTrigger scroll animations
- 📱 Responsive design
- 🌐 i18n support (English / 繁體中文)

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [Astro](https://astro.build/) (SSG) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Animation | [GSAP](https://gsap.com/) + [Three.js](https://threejs.org/) + [Lenis](https://lenis.darkroom.engineering/) |
| Language | TypeScript |
| Deploy | Vercel |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build static site
npm run build

# Preview build output
npm run preview
```

## Project Structure

```
src/
├── layouts/Layout.astro        # HTML shell, meta tags, font loading
├── pages/index.astro           # Single page entry
├── components/                 # Page section components
│   ├── Navbar.astro            # Frosted glass navigation bar
│   ├── Hero.astro              # Particle background + typewriter
│   ├── Experience.astro        # Work experience timeline
│   ├── Projects.astro          # Project cards
│   ├── Skills.astro            # Skill progress bars
│   ├── Education.astro         # Education info
│   ├── Publications.astro      # Papers & awards
│   ├── GitHub.astro            # Side projects
│   ├── Contact.astro           # Contact info
│   └── Footer.astro            # Back to top button
├── scripts/                    # Animation & i18n
│   ├── animations.ts           # GSAP ScrollTrigger animations
│   ├── particles.ts            # Three.js particle background
│   ├── typewriter.ts           # Typewriter effect
│   └── i18n-client.ts          # Client-side language switching
├── styles/global.css           # Tailwind + CSS custom properties
└── data/
    ├── resume.ts               # Profile (contact) + skills
    └── i18n.ts                 # All translations (en/zh-TW)
```

## Sections

1. **Hero** — Name, title, summary, particle background
2. **Experience** — Work history timeline
3. **Projects** — Project card showcase
4. **Skills** — Animated skill progress bars
5. **Education** — Academic background
6. **Publications & Awards** — Papers & awards
7. **Side Projects** — Personal project links
8. **Contact** — Contact information

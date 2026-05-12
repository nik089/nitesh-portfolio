# Portfolio Website Design — Nitesh Yadav (Nik)

**Date**: 2026-05-12
**Project**: Premium Modern Personal Portfolio

---

## 1. Concept & Vision

A premium, minimal-futuristic developer portfolio for "Nitesh Yadav (Nik)" — Senior Frontend Developer with 4+ years experience. The site conveys technical excellence, professionalism, and attention to detail through polished animations, glassmorphism surfaces, and a dark Linear-inspired aesthetic. Every interaction should feel intentional, smooth, and premium.

---

## 2. Design Language

### Color Palette
- **Background**: `#0a0a0f` (deep near-black)
- **Surface**: `#0f0f14` (card backgrounds)
- **Glass**: `rgba(255,255,255,0.03)` with backdrop blur
- **Primary Accent**: `#7c3aed` → `#a855f7` (purple/violet gradient)
- **Secondary Accent**: `#6366f1` (indigo for variety)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a1a1aa` (muted zinc)
- **Text Muted**: `#52525b`
- **Border**: `rgba(255,255,255,0.08)`
- **Glow**: `rgba(124,58,237,0.3)` (purple glow on hover)

### Typography
- **Display/Headings**: Inter, 700 weight
- **Body**: Inter, 400 weight
- **Code/Terminal**: JetBrains Mono
- **Scale**: 14/16/18/24/32/48/64px

### Motion Philosophy
- Framer Motion for orchestrated reveals
- Stagger: 100ms between list items
- Duration: 400-600ms for major transitions
- Easing: [0.25, 0.1, 0.25, 1] (ease-out)
- Hover: subtle scale (1.02) + glow

### Visual Assets
- Animated grid lines background
- Gradient dividers between sections
- Glassmorphism cards with backdrop blur
- Purple glow halos on hover states

---

## 3. Layout & Structure

### Page Sections (scroll order)
1. **Loading Screen** — Terminal-style splash animation (~2.5s)
2. **Hero** — Full viewport, terminal intro → hero reveal
3. **About** — Split layout (text left, decorative right)
4. **Skills** — Masonry-style categorized cards
5. **Experience** — Vertical timeline, alternating cards
6. **Projects** — Large showcase cards with spotlights
7. **Tech Stack** — Floating animated icons
8. **Achievements** — Icon cards with gradient borders
9. **Contact** — Glassmorphism form + contact info
10. **Footer** — Minimal, centered

### Navigation
- **Desktop**: Fixed minimal top bar — logo left, nav links center, theme toggle right
- **Mobile**: Hamburger menu → slide-out drawer
- **Command Palette**: CMD+K overlay (Raycast-style) for quick navigation

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## 4. Features & Interactions

### Loading Screen
- **Terminal typing**: "Nik" logo types in character by character with cursor blink
- **Fade out**: Entire screen fades, reveals main site
- **Duration**: ~2.5 seconds total

### Terminal Intro Animation (Hero)
- Terminal window frame (dark with glow border)
- Types: `> nik --init` → Enter → `> nik --status` → Enter → `> nik --ready`
- Each line reveals the hero content progressively
- **Duration**: ~3 seconds

### Hero Section
- Name with gradient text effect
- "Nik" nickname badge (pill)
- Role: Senior Frontend Developer
- Tagline quote
- **3 CTA Buttons**: View Projects, Contact Me, Download Resume (glassmorphism style)
- **Social Icons**: GitHub, LinkedIn, Email (floating pill with hover glow)
- Scroll indicator arrow at bottom

### Command Palette (CMD+K)
- Opens Raycast-style overlay
- Search all sections for quick navigation
- Recent items, keyboard shortcuts
- Backdrop blur + glassmorphism

### Skills Section
- **Categories**: Frontend, Styling/UI, Architecture, State Management, Tools & DevOps, Testing
- Each skill card: icon + name + hover tilt effect
- Staggered reveal animation on scroll

### Experience Timeline
- Vertical timeline with center line
- Alternating left/right cards (desktop), stacked (mobile)
- Each card: Company, Role, Duration, Highlights bullets
- Scroll-triggered reveal animations

### Projects Section
- Large showcase cards (aspect ratio ~16:9)
- **Card content**: Preview image, title, description, tech stack badges
- **Buttons**: GitHub link, Live Demo
- **Spotlight hover effect**: Image zooms slightly, overlay with glow
- Filter by category (optional)

### Tech Stack Floating Icons
- Subtle floating animation (translate + rotate)
- Icons for: Angular, React, Next.js, TypeScript, Tailwind, Node.js, Git, Docker
- Very subtle, ambient motion

### Achievements Section
- Icon cards with gradient borders
- Cards: WCAG 2.1, GovTech, Design System, Performance, CI/CD
- Hover: border glow intensifies

### Contact Section
- **Glassmorphism card** with form:
  - Name input
  - Email input
  - Message textarea
  - Submit button (loading state)
- **Contact Info**: GitHub, LinkedIn, Email, Location: Noida, India
- Form validation with error states

### Footer
- "Designed & Developed by Nik"
- Dynamic current year: `{new Date().getFullYear()}`
- Social links with hover effects

---

## 5. Component Inventory

### `<LoadingScreen />`
- Terminal-style typing animation
- States: typing → complete → fade out
- Triggers `onComplete` callback

### `<Navbar />`
- Fixed position, backdrop blur
- States: transparent (top), opaque (scrolled)
- Mobile: hamburger + drawer

### `<CommandPalette />`
- CMD+K triggered overlay
- Search input + results list
- States: closed, open, searching

### `<HeroSection />`
- Full viewport height
- Contains: TerminalIntro, CTAs, SocialIcons

### `<TerminalIntro />`
- Animated terminal window
- Typing effect with cursor

### `<CTAButtons />`
- 3 glassmorphism buttons
- States: default, hover (glow + scale), active, disabled

### `<SocialIcons />`
- Floating pill container
- Icon states: default, hover (glow + lift)

### `<AboutSection />`
- Split layout
- Scroll reveal animation

### `<SkillsSection />`
- Category grid
- SkillCard subcomponent with hover tilt

### `<TimelineSection />`
- Vertical timeline with alternating cards
- TimelineItem subcomponent

### `<ProjectsSection />`
- Grid of ProjectCard
- ProjectCard with spotlight hover

### `<TechStackSection />`
- Floating icon grid
- Ambient floating animation

### `<AchievementsSection />`
- Gradient border cards
- AchievementCard subcomponent

### `<ContactSection />`
- Glassmorphism card with form
- Form inputs with validation

### `<Footer />`
- Minimal centered layout
- Dynamic year

### `<AnimatedBackground />`
- Grid lines animation
- Responsive visibility

### `<ScrollReveal />`
- Wrapper component for scroll-triggered animations

---

## 6. Technical Approach

### Stack
- **Framework**: Next.js 15 (App Router)
- **UI**: React 18+
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Components**: Shadcn UI (customized)
- **Language**: TypeScript

### Architecture
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/           # Shadcn components
│   ├── loading/
│   ├── navbar/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── timeline/
│   ├── projects/
│   ├── tech-stack/
│   ├── achievements/
│   ├── contact/
│   └── footer/
├── lib/
│   └── utils.ts
└── hooks/
    └── useScrollReveal.ts
```

### Performance
- Lazy loading for heavy components
- Image optimization with Next.js Image
- Code splitting per section
- Reduced motion support (@media prefers-reduced-motion)

### Accessibility
- Semantic HTML throughout
- ARIA labels on interactive elements
- Focus visible states
- Keyboard navigation support
- Reduced motion preference respected

---

## 7. Content Details

### Hero
- **Name**: Nitesh Yadav
- **Nickname**: Nik
- **Role**: Senior Frontend Developer
- **Tagline**: "Building scalable, accessible, and high-performance web experiences."

### About
> With 4+ years of frontend development experience, I specialize in building scalable, accessible, and high-performance web applications. My expertise spans Angular, React, and TypeScript, with a strong foundation in designing component-driven architectures and design systems.
>
> I've led projects across GovTech, fintech, and e-commerce domains, focusing on accessibility (WCAG 2.1), performance optimization, and creating seamless user experiences. At Netoyed, I'm architecting the UX4G Design System for NeGD, while previously at Antino Labs and Oodles Technologies, I built complex admin panels, merchant portals, and payment integrations.

### Experience
1. **Netoyed (Grapes Telecom Pvt Ltd)** — Senior Frontend Developer (SDE-II), June 2025 – Present
2. **Antino Labs** — Frontend Software Developer, May 2023 – April 2025
3. **Oodles Technologies** — Associate Frontend Developer, Jan 2022 – Mar 2023

### Skills (all categories per spec)

### Projects (5 placeholder projects)
1. Accessibility Widget — WCAG 2.1 compliant widget
2. Audit360 — Government audit platform
3. Fintech Dashboard — Analytics and reporting
4. Merchant Portal — E-commerce vendor management
5. Design System Platform — UX4G Design System

### Achievements
1. WCAG 2.1 Accessibility Expertise
2. GovTech Platform Development
3. Design System Architecture
4. Performance Optimization
5. CI/CD & Frontend Scalability

### Contact
- GitHub: github.com/niteshyadavnik
- LinkedIn: linkedin.com/in/niteshyadavnik
- Email: nitesh@nik.dev
- Location: Noida, India

---

## 8. Placeholder Data

All project images use high-quality placeholder gradients (CSS-generated). Links point to placeholder URLs until real data is available. Resume link points to a placeholder PDF.

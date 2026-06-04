"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "UX4G Design System",
    description: "Enterprise design system for Government of India (NeGD) with 50+ accessible components, design tokens, semantic tokens, Storybook documentation, and npm package ecosystem for multi-ministry platforms.",
    impact: "Adopted across 10+ government ministry platforms",
    tags: ["Design System", "JavaScript", "Storybook", "npm", "Design Tokens", "WCAG"],
    accent: "from-[var(--primary)] to-[#7dd3fc]",
    domain: "Government",
    url: "https://ux4g-storybook.vercel.app/",
  },
  {
    title: "Audit360 Platform",
    description: "Government accessibility audit platform with real-time WCAG compliance scanning, automated reporting, ministry-level dashboards, and scalable auditing infrastructure.",
    impact: "100+ government sites audited for accessibility",
    tags: ["Angular", "RxJS", "Charts", "GovTech", "Accessibility"],
    accent: "from-[var(--secondary)] to-[#c4b5fd]",
    domain: "Government",
  },
  {
    title: "JNARDDC Portal",
    description: "Enterprise government web portal and administration platform supporting organizational workflows, user management, reporting, and operational processes for rural development.",
    impact: "Multi-department workflow automation",
    tags: ["Angular", "Frontend Architecture", "Admin Panel", "Accessibility", "Performance"],
    accent: "from-[var(--accent)] to-[#6ee7b7]",
    domain: "Government",
    url: "https://staging.jnarddc.netoyed.co.in/",
  },
  {
    title: "UX4G Accessibility Widget",
    description: "Accessibility overlay widget with screen reader support, high contrast modes, text scaling, font adjustments, and inclusive interaction patterns for government portals.",
    impact: "WCAG AA compliance across all integrated portals",
    tags: ["Angular", "WCAG", "ARIA", "Accessibility", "Widget"],
    accent: "from-[#EC4899] to-[#f472b6]",
    domain: "Accessibility",
  },
  {
    title: "BranchX Fintech Suite",
    description: "Complete admin, merchant, and vendor panels with analytics dashboards, transaction monitoring, multi-role access control, and real-time financial reporting.",
    impact: "50K+ monthly transactions processed",
    tags: ["React", "TypeScript", "Redux", "Dashboards", "FinTech"],
    accent: "from-[#f59e0b] to-[#fbbf24]",
    domain: "FinTech",
  },
  {
    title: "Hatrik Marketplace",
    description: "E-commerce marketplace with inventory tracking, real-time analytics dashboards, vendor management, and business-critical user flows.",
    impact: "10K+ active users, end-to-end commerce",
    tags: ["NgRx", "PrimeNG", "Node.js", "E-Commerce"],
    accent: "from-[#f97316] to-[#fb923c]",
    domain: "Commerce",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// Projects</span>
          <h2 className="mt-6 font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--text-secondary)]">
            GovTech platforms, accessibility systems, enterprise design systems, and fintech products built for scale.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(index)}
              className="glass group cursor-pointer rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(0,212,255,0.2)] hover:shadow-[0_0_40px_rgba(0,212,255,0.08)]"
            >
              <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${project.accent}`} />

              <div className="mt-4 flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">{project.domain}</span>
                <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--primary)]" />
              </div>

              <h3 className="mt-3 font-heading text-xl font-semibold text-[var(--text-primary)]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {project.description}
              </p>

              <p className="mt-3 font-mono text-xs text-[var(--primary)]">
                ↗ {project.impact}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="terminal-chip text-[10px]">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Terminal Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="terminal-window w-full max-w-lg"
              >
                <div className="terminal-header justify-between">
                  <div className="flex items-center gap-2">
                    <span className="terminal-dot bg-[#ff5f57]" />
                    <span className="terminal-dot bg-[#febc2e]" />
                    <span className="terminal-dot bg-[#28c840]" />
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted)]">project_details.sh</span>
                  <button onClick={() => setSelectedProject(null)} className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative z-10 px-5 py-5 font-mono text-sm space-y-3">
                  <p className="text-[var(--accent)]">$ open {projects[selectedProject].title.toLowerCase().replace(/\s+/g, "-")}</p>
                  <p className="text-[var(--text-muted)]">Loading...</p>
                  <p className="text-[var(--primary)]">██████████████████ 100%</p>
                  <p className="text-[var(--accent)]">Project Loaded Successfully</p>
                  <div className="border-t border-[var(--border)] pt-3 mt-3 space-y-2">
                    <p className="text-[var(--text-primary)] font-heading font-semibold text-lg" style={{ fontFamily: "Sora" }}>{projects[selectedProject].title}</p>
                    <p className="text-[var(--text-secondary)] text-xs leading-5">{projects[selectedProject].description}</p>
                    <p className="text-[var(--primary)] text-xs">Impact: {projects[selectedProject].impact}</p>
                    {projects[selectedProject].url && (
                      <a href={projects[selectedProject].url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[var(--accent)] hover:underline">
                        <ExternalLink className="h-3 w-3" />
                        Visit Live
                      </a>
                    )}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {projects[selectedProject].tags.map((t) => (
                        <span key={t} className="terminal-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Sparkles } from "lucide-react";

interface Project {
  title: string;
  role?: string;
  org?: string;
  description: string;
  impact: string;
  tags: string[];
  accent: string;
  domain: string;
  url?: string;
  highlights?: string[];
}

const projects: Project[] = [
  {
    title: "JNARDDC National Stakeholders Portal",
    role: "Senior Angular Developer",
    org: "Ministry of Mines, Govt. of India",
    description: "Architected an Angular 17 enterprise platform integrating 3 portals: Citizen, Admin, and CMS Portal in a single codebase for national non-ferrous metal recycling workflows.",
    impact: "Unified 3 portals into 1 codebase | 80%+ test coverage | -40% bundle load time",
    tags: ["Angular 17", "TypeScript 5.4", "RxJS", "Angular Material", "Chart.js", "Jasmine", "Karma", "Bootstrap 5", "Docker"],
    accent: "from-[var(--accent)] to-[#6ee7b7]",
    domain: "GovTech",
    url: "https://nfmrecycling.jnarddc.gov.in/",
    highlights: [
      "Unified Multi-Portal Architecture: Architected an Angular 17 platform integrating 3 portals: Citizen, Admin, and CMS Portal all in a single codebase.",
      "Dynamic Reactive Forms: Built dynamic multi-step onboarding & NCMM incentive forms with Reactive FormArrays and reusable component architecture.",
      "Green Rating Audits & CMS: Engineered Green Rating audits, Admin approval dashboards, and CMS Portals.",
      "Testing & Performance Optimization: Wrote Jasmine/Karma unit test suites (80%+ coverage) and optimized 20+ lazy-loaded modules, slashing bundle load times by 40%.",
    ],
  },
  {
    title: "UX4G Design System",
    role: "Frontend Lead",
    org: "NeGD, Ministry of Electronics & IT (MeitY)",
    description: "India's national design system standardizing accessible, citizen-first UI across public digital platforms, delivering a 100% GIGW 3.0 & WCAG 2.1 AA UI foundation.",
    impact: "100% GIGW 3.0 & WCAG 2.1 AA | 57 Components | 66 Patterns | MCP Server",
    tags: ["Design System", "Storybook", "React", "Angular", "Web Components", "MCP Server", "Claude Code", "Gemini CLI", "WCAG 2.1 AA", "GIGW 3.0"],
    accent: "from-[var(--primary)] to-[#7dd3fc]",
    domain: "GovTech",
    url: "https://doc.ux4g.gov.in/",
    highlights: [
      "National Rollout & Foundation: Spearheaded UX4G (v3.0+), delivering a 100% GIGW 3.0 & WCAG 2.1 AA UI foundation adopted across central ministries, state portals, and public infrastructure.",
      "Storybook & Pattern Architecture: Authored comprehensive Storybook documentation covering 57 UI components, 66 citizen patterns across 9 domains, and 8 service pattern flows with code for HTML, React, and Angular.",
      "AI-Driven Development: Built UX4G Model Context Protocol (MCP) server & agent skills for Claude Code and Gemini CLI for automated, zero-hallucination UI generation.",
      "Multi-Framework Architecture: Engineered tree-shakeable packages and design token engine with native theming, dark mode, and enterprise-grade accessibility compliance.",
    ],
  },
  {
    title: "UX4G Accessibility Tool",
    role: "Frontend Developer",
    org: "NeGD, Ministry of Electronics & IT (MeitY), Govt. of India",
    description: "India's plug-and-play Accessibility Widget (v1.0–v3.26), distributed via CDN (cdn.ux4g.gov.in), delivering instant assistive capabilities across government portals.",
    impact: "National Assistive Widget on cdn.ux4g.gov.in | GIGW 3.0 & WCAG 2.1 AA",
    tags: ["JavaScript (ES6+)", "Web Speech API", "Assistive Tech", "WCAG 2.1 AA", "GIGW 3.0", "CDN Distribution", "React", "Angular"],
    accent: "from-[#EC4899] to-[#f472b6]",
    domain: "Accessibility",
    url: "https://www.ux4g.gov.in/",
    highlights: [
      "National CDN Distribution: Developed India's plug-and-play Accessibility Widget (v1.0–v3.26), distributed via CDN (cdn.ux4g.gov.in), supporting accessibility across government portals.",
      "Floating Launcher & Components: Engineered floating accessibility launcher, modal drawer, customizable Grid/List views, and reusable UI components.",
      "Screen Reader & Cognitive Reading: Implemented Screen Reader using Web Speech API (Text-to-Speech), Reading Guide, Reading Mask, and Focus Mode.",
      "Visual & Contrast Controls: Developed visual accessibility controls including Dark Mode, Invert Colors, Monochrome, High/Low Saturation, and Contrast Adjustment.",
      "Typography & Cursor Controls: Implemented Text Resizing, Line Height, Letter Spacing, Dyslexia-Friendly Fonts, and Big Cursor functionality.",
      "Universal Navigation & Support: Integrated Highlight Links, Hide Images, Pause Animations, Voice Support, and keyboard navigation across HTML, JavaScript, React, and Angular platforms aligned with WCAG 2.1 AA and GIGW 3.0.",
    ],
  },
  {
    title: "UX4G Automated UX",
    role: "Frontend Developer",
    org: "NeGD, Ministry of Electronics & IT (MeitY), Govt. of India",
    description: "Web platform to automate UX, web performance, and compliance audits for government portals against GIGW (Guidelines for Indian Government Websites) and WCAG accessibility standards.",
    impact: "Automated GIGW & WCAG Audits | Interactive Visual Analytics | Dynamic PDF Exports",
    tags: ["Angular 16", "TypeScript", "RxJS", "Node.js", "Express", "Angular Material", "Bootstrap 5", "ApexCharts", "jsPDF", "html2canvas", "Karma/Jasmine", "Docker", "SonarQube"],
    accent: "from-[var(--secondary)] to-[#c4b5fd]",
    domain: "GovTech",
    url: "https://audit360.ux4g.gov.in/onboarding",
    highlights: [
      "Automated Auditing Platform: Engineered a web platform to automate UX, web performance, and compliance audits for government portals against GIGW (Guidelines for Indian Government Websites) and WCAG accessibility standards.",
      "Dashboards & Visual Analytics: Architected responsive dashboards and audit workflows using Angular 16, RxJS state management, and ApexCharts for interactive visual analytics and scoring.",
      "Real-Time Audits & Viewport Capture: Integrated RESTful APIs and real-time sockets to orchestrate single/multi-URL Lighthouse audits, compliance evaluations, and automated viewport screenshots.",
      "Dynamic PDF Export Engine: Implemented client-side PDF export engines using jsPDF, pdf-lib, and html2canvas for dynamic, multi-page audit report downloads.",
      "Enterprise Security & Quality Gates: Maintained enterprise-grade code quality and security using SonarQube gates, Karma/Jasmine unit tests, and Docker containerization.",
    ],
  },
  {
    title: "BranchX Fintech",
    role: "Frontend Software Developer",
    org: "Antino Labs",
    description: "Complete admin, merchant, and vendor panels with analytics dashboards, transaction monitoring, multi-role access control, and real-time financial reporting.",
    impact: "50K+ monthly transactions processed | -40% bundle size",
    tags: ["React", "TypeScript", "Redux", "Dashboards", "FinTech"],
    accent: "from-[#f59e0b] to-[#fbbf24]",
    domain: "FinTech",
    highlights: [
      "Built comprehensive multi-role admin, merchant, and vendor interfaces with real-time analytics dashboards.",
      "Engineered live transaction monitoring pipelines and automated financial settlement reporting.",
      "Implemented strict role-based access control (RBAC) and performance optimizations reducing bundle size by 40%.",
    ],
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
            GovTech platforms, national accessibility systems, enterprise design systems, and fintech products built for scale.
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
              className="glass group cursor-pointer rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(0,212,255,0.2)] hover:shadow-[0_0_40px_rgba(0,212,255,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${project.accent}`} />

                <div className="mt-4 flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    {project.domain}
                  </span>
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors">
                    <span className="text-[10px] font-mono hidden sm:inline">Details</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <h3 className="mt-3 font-heading text-xl font-semibold text-[var(--text-primary)] leading-snug">
                  {project.title}
                </h3>
                {project.org && (
                  <p className="mt-1 font-mono text-[11px] text-[var(--text-muted)] line-clamp-1">
                    {project.org}
                  </p>
                )}
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border)]">
                <p className="font-mono text-xs text-[var(--primary)] line-clamp-1">
                  ↗ {project.impact}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="terminal-chip text-[10px]">{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="terminal-chip text-[10px] text-[var(--text-muted)]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
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
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="terminal-window w-full max-w-2xl max-h-[88vh] flex flex-col shadow-2xl"
              >
                <div className="terminal-header justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="terminal-dot bg-[#ff5f57]" />
                    <span className="terminal-dot bg-[#febc2e]" />
                    <span className="terminal-dot bg-[#28c840]" />
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {projects[selectedProject].title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.sh
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close project details"
                    className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative z-10 px-5 sm:px-6 py-5 font-mono text-sm space-y-4 overflow-y-auto">
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <p className="text-[var(--accent)]">
                      $ cat /projects/{projects[selectedProject].title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/manifest.json
                    </p>
                    <span className="text-[var(--primary)] font-mono shrink-0">STATUS: 200 OK</span>
                  </div>

                  <div className="border-t border-[var(--border)] pt-3 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <p className="text-[var(--text-primary)] font-heading font-bold text-xl" style={{ fontFamily: "Sora" }}>
                        {projects[selectedProject].title}
                      </p>
                      {projects[selectedProject].role && (
                        <span className="text-xs text-[var(--secondary)] font-mono">
                          {projects[selectedProject].role}
                        </span>
                      )}
                    </div>

                    {projects[selectedProject].org && (
                      <p className="text-xs text-[var(--text-muted)] font-mono">
                        // {projects[selectedProject].org}
                      </p>
                    )}

                    <p className="text-[var(--text-secondary)] text-xs leading-relaxed font-sans">
                      {projects[selectedProject].description}
                    </p>

                    <div className="rounded-lg bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.2)] px-3 py-2 text-xs text-[var(--primary)] flex flex-wrap items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
                        Impact: {projects[selectedProject].impact}
                      </span>
                      {projects[selectedProject].url && (
                        <a
                          href={projects[selectedProject].url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[var(--accent)] hover:underline shrink-0 font-medium ml-auto"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Visit Live
                        </a>
                      )}
                    </div>

                    {projects[selectedProject].highlights && projects[selectedProject].highlights!.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <p className="text-xs text-[var(--text-primary)] font-semibold uppercase tracking-wider font-mono">
                          Key Architecture & Impact Highlights:
                        </p>
                        <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-sans">
                          {projects[selectedProject].highlights!.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 leading-relaxed">
                              <span className="text-[var(--accent)] font-mono shrink-0 mt-0.5">▹</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-2">
                      <p className="text-xs text-[var(--text-muted)] font-mono mb-2">// Tech Stack & Ecosystem</p>
                      <div className="flex flex-wrap gap-1.5">
                        {projects[selectedProject].tags.map((tag) => (
                          <span key={tag} className="terminal-chip text-xs">{tag}</span>
                        ))}
                      </div>
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
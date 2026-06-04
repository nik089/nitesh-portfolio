"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, MapPin, ChevronDown } from "lucide-react";

const journey = [
  {
    period: "Jun 2025 - Present",
    title: "Senior Frontend Engineer (SDE-II)",
    org: "Netoyed",
    location: "India",
    summary: "Leading UX4G Design System development for Government of India initiatives. Architecting accessibility-first platforms, design token infrastructure, and enterprise-grade component ecosystems for multi-ministry digital products.",
    responsibilities: [
      "Leading UX4G Design System development for Government of India initiatives",
      "Architected Design Token and Semantic Token infrastructure",
      "Developed 50+ reusable accessible components for government platforms",
      "Built enterprise-grade npm package ecosystem",
      "Implemented accessibility-first architecture across ministry products",
      "Contributing to Audit360 accessibility auditing platform",
      "Developed scalable Angular and React applications",
      "Mentoring developers on architecture, accessibility and design systems",
      "Driving WCAG 2.1 AA compliance initiatives across government portals",
    ],
    tech: ["Angular", "React.js", "Next.js", "JavaScript", "TypeScript", "RxJS", "Accessibility", "WCAG", "Design Systems", "Frontend Architecture", "Unit Testing"],
  },
  {
    period: "May 2023 - Apr 2025",
    title: "Frontend Software Developer",
    org: "Antino Labs",
    location: "India",
    domain: "FinTech",
    summary: "Built scalable frontend applications for fintech products and customer-facing experiences. Collaborated with product and design teams using Angular, React.js, JavaScript, TypeScript, and Figma.",
    responsibilities: [
      "Built scalable frontend applications for fintech products",
      "Developed reusable UI components and shared libraries",
      "Collaborated closely with product and design teams",
      "Worked on fintech products and customer-facing experiences",
      "Improved performance and maintainability across applications",
      "Built BranchX fintech suite — admin, merchant, and vendor panels with analytics",
      "Developed Hatrik e-commerce marketplace with inventory tracking",
      "Implemented role-based access control across 5+ frontend applications",
      "Optimized bundle sizes by 40% through code splitting and lazy loading",
    ],
    tech: ["Angular", "React.js", "JavaScript", "TypeScript", "Figma", "Redux", "PrimeNG"],
  },
  {
    period: "Jan 2022 - Mar 2023",
    title: "Associate Frontend Developer",
    org: "Oodles Technologies",
    location: "India",
    summary: "Built mobile-first applications, integrated payment systems, and strengthened Angular fundamentals across production products.",
    responsibilities: [
      "Developed responsive web applications with Angular and Bootstrap",
      "Integrated payment gateways and third-party APIs",
      "Implemented real-time data visualizations with Chart.js",
      "Contributed to CI/CD pipeline setup with Jenkins",
      "Built mobile-first responsive interfaces",
    ],
    tech: ["Angular", "Bootstrap", "JavaScript", "Chart.js", "Jenkins"],
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// Experience</span>
          <h2 className="mt-6 font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
            Career Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--text-secondary)]">
            From implementation-heavy frontend work to leading design systems, accessibility architecture, and multi-ministry government digital platforms.
          </p>
        </motion.div>

        <div className="terminal-window mx-auto w-full max-w-4xl">
          <div className="terminal-header justify-between">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-[#ff5f57]" />
              <span className="terminal-dot bg-[#febc2e]" />
              <span className="terminal-dot bg-[#28c840]" />
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">career_history.sh</span>
            <span className="w-16" />
          </div>

          <div className="relative z-10 px-5 py-5">
            <p className="font-mono text-xs text-[var(--accent)] mb-5">$ history --career</p>

            <div className="space-y-3">
              {journey.map((item, index) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] overflow-hidden"
                >
                  <button
                    onClick={() => setExpanded(expanded === index ? null : index)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-mono text-xs text-[var(--primary)] whitespace-nowrap">{item.period.split(" - ")[0].slice(0, 3)} {item.period.split(" - ")[0].slice(-4)}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-sm font-semibold text-[var(--text-primary)] truncate">{item.title}</p>
                      <p className="flex items-center gap-2 mt-0.5 text-xs text-[var(--text-muted)]">
                        <Building2 className="h-3 w-3" />{item.org}
                        <MapPin className="h-3 w-3 ml-2" />{item.location}
                      </p>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-[var(--text-muted)] transition-transform ${expanded === index ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {expanded === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[var(--border)] px-5 py-4 space-y-4">
                          <p className="text-sm text-[var(--text-secondary)] leading-6">{item.summary}</p>

                          <div className="space-y-2">
                            {item.responsibilities.map((r) => (
                              <div key={r} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                                <span className="text-[var(--accent)] mt-0.5">▸</span>
                                <span>{r}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {item.tech.map((t) => (
                              <span key={t} className="terminal-chip">{t}</span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

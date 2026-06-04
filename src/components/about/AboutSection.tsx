"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, Shield, Gauge, Users } from "lucide-react";

const expertise = [
  { icon: Code2, title: "Frontend Engineering", desc: "Angular, React, Next.js, TypeScript — building production-grade SPAs and SSR apps." },
  { icon: Shield, title: "Accessibility & Design Systems", desc: "WCAG 2.1 compliance, reusable component libraries, and inclusive interaction patterns." },
  { icon: Gauge, title: "Performance Optimization", desc: "Lighthouse 95+, code splitting, lazy loading, and bundle optimization at scale." },
  { icon: Users, title: "Product Collaboration", desc: "Cross-functional team work with designers, PMs, and backend engineers to ship fast." },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// About</span>
          <h2 className="mt-6 font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
            Building Digital Experiences That Matter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg">
            Frontend engineer specializing in scalable products, accessibility, and design systems for enterprise teams.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-7"
          >
            <div className="flex items-center gap-5">
              {/* NY Avatar */}
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] font-heading text-2xl font-bold text-[#0a0a0f]">
                NY
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)]">Nitesh Yadav</h3>
                <p className="mt-1 font-mono text-sm text-[var(--primary)]">Senior Frontend Developer</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <MapPin className="h-3.5 w-3.5" />
                  Delhi, India
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-mono text-xs text-[var(--accent)]">Open to impactful frontend opportunities</span>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--text-secondary)]">
              <p>
                With 4+ years of frontend development experience, I specialize in building scalable, accessible, and high-performance web applications using Angular, React, Next.js, and TypeScript.
              </p>
              <p>
                I have delivered products across govtech, fintech, and e-commerce, with a strong focus on component-driven architecture, clean UX systems, accessibility, and long-term maintainability.
              </p>
              <p>
                At Netoyed, I am helping shape accessibility-first platforms and design systems for government-scale digital products.
              </p>
            </div>
          </motion.div>

          {/* Terminal expertise */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="terminal-window"
          >
            <div className="terminal-header justify-between">
              <div className="flex items-center gap-2">
                <span className="terminal-dot bg-[#ff5f57]" />
                <span className="terminal-dot bg-[#febc2e]" />
                <span className="terminal-dot bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-[var(--text-muted)]">expertise.sh</span>
              <span className="w-12" />
            </div>

            <div className="relative z-10 space-y-5 px-5 py-6">
              <div>
                <p className="font-mono text-xs text-[var(--accent)]">$ cat core_stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Angular", "React", "Next.js", "TypeScript", "TailwindCSS"].map((t) => (
                    <span key={t} className="terminal-chip">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--accent)]">$ cat systems</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Design Systems", "Component Libraries", "Accessibility", "Micro-Frontends"].map((t) => (
                    <span key={t} className="terminal-chip">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--accent)]">$ cat delivery</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Performance Optimization", "Admin Dashboards", "Government Platforms", "CI/CD"].map((t) => (
                    <span key={t} className="terminal-chip">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--accent)]">$ cat domains</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["GovTech", "Fintech", "E-Commerce"].map((t) => (
                    <span key={t} className="terminal-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Cards */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {expertise.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass group rounded-2xl p-5 transition-all hover:border-[rgba(0,212,255,0.15)]"
              >
                <Icon className="h-5 w-5 text-[var(--primary)]" />
                <h4 className="mt-3 font-heading text-base font-semibold text-[var(--text-primary)]">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

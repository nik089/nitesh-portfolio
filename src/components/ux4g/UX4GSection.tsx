"use client";

import { motion } from "framer-motion";
import { ExternalLink, Package, Layers, Palette, Shield, BookOpen, Code2, Boxes, Server, CheckCircle2 } from "lucide-react";

const achievements = [
  { icon: Layers, text: "Designed and architected UX4G Design System", color: "#00d4ff" },
  { icon: Package, text: "Built reusable government-grade component library", color: "#a78bfa" },
  { icon: Palette, text: "Created Design Tokens architecture", color: "#f59e0b" },
  { icon: Code2, text: "Implemented Semantic Token system", color: "#34d399" },
  { icon: Boxes, text: "Developed 50+ production-ready components", color: "#ec4899" },
  { icon: Shield, text: "Defined accessibility patterns (WCAG 2.1 AA)", color: "#00d4ff" },
  { icon: Layers, text: "Created reusable design patterns for government", color: "#a78bfa" },
  { icon: Package, text: "Published npm packages for enterprise adoption", color: "#f97316" },
  { icon: Server, text: "Integrated MCP Server workflows", color: "#7dd3fc" },
  { icon: BookOpen, text: "Created comprehensive Storybook documentation", color: "#34d399" },
  { icon: CheckCircle2, text: "Enterprise-scale adoption across ministries", color: "#f59e0b" },
];

const components = [
  "Button", "Input", "Modal", "Dropdown", "Tabs", "Accordion",
  "Breadcrumb", "Pagination", "Alert", "Badge", "Card", "Table",
  "Tooltip", "Toast", "Sidebar", "Navbar", "Footer", "Form",
  "Checkbox", "Radio", "Switch", "Progress", "Spinner", "Avatar",
];

export default function UX4GSection() {
  return (
    <section id="ux4g" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// UX4G Design System</span>
          <div className="mt-6 flex items-center justify-center gap-4">
            {/* UX4G Logo */}
            <img
              src="https://www.ux4g.gov.in/assets/img/logo/ux4g-logo.svg"
              alt="UX4G Design System"
              className="h-12 w-auto"
            />
            <h2 className="font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
              UX4G
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-base text-[var(--text-secondary)]">
            Enterprise Design System for Government of India — Accessibility-first, scalable, production-ready component library powering multi-ministry digital platforms.
          </p>
          <a
            href="https://ux4g-storybook.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-[var(--primary)] hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            View Storybook Documentation
          </a>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid gap-3 sm:grid-cols-2">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-4 py-3 hover:border-[rgba(0,212,255,0.15)] transition-all"
              >
                <Icon className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                <span className="text-sm text-[var(--text-secondary)] leading-5">{item.text}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Component Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="terminal-window"
        >
          <div className="terminal-header justify-between">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-[#ff5f57]" />
              <span className="terminal-dot bg-[#febc2e]" />
              <span className="terminal-dot bg-[#28c840]" />
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">ux4g-components.sh</span>
            <span className="w-16" />
          </div>

          <div className="relative z-10 px-5 py-5">
            <p className="font-mono text-xs text-[var(--accent)] mb-4">$ ux4g list --components</p>
            <p className="font-mono text-xs text-[var(--text-muted)] mb-4">Found {components.length} production-ready components:</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {components.map((comp, i) => (
                <motion.div
                  key={comp}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[rgba(0,212,255,0.02)] px-3 py-2 hover:border-[rgba(0,212,255,0.2)] hover:bg-[rgba(0,212,255,0.05)] transition-all cursor-default"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span className="font-mono text-xs text-[var(--text-primary)]">{comp}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="terminal-chip">Design Tokens</span>
              <span className="terminal-chip">Semantic Tokens</span>
              <span className="terminal-chip">WCAG 2.1 AA</span>
              <span className="terminal-chip">Storybook</span>
              <span className="terminal-chip">npm Packages</span>
              <span className="terminal-chip">MCP Server</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

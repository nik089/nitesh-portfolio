"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Shield, Gauge, Layers, Code2, Accessibility } from "lucide-react";

const achievements = [
  { icon: Layers, text: "Built UX4G Design System — enterprise-grade component library for government platforms", color: "text-[var(--primary)]" },
  { icon: Shield, text: "Achieved WCAG 2.1 AA compliance across 10+ government portals", color: "text-[var(--accent)]" },
  { icon: Gauge, text: "Optimized Lighthouse scores to 95+ across production applications", color: "text-[var(--secondary)]" },
  { icon: Code2, text: "Architected micro-frontend systems handling 100K+ monthly users", color: "text-[#f59e0b]" },
  { icon: Accessibility, text: "Pioneered accessibility-first development culture at Netoyed", color: "text-[#ec4899]" },
  { icon: Award, text: "Delivered 20+ production projects across GovTech, Fintech, and E-Commerce", color: "text-[#f97316]" },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// Achievements</span>
          <h2 className="mt-6 font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
            Key Milestones
          </h2>
        </motion.div>

        <div className="terminal-window mx-auto w-full max-w-4xl">
          <div className="terminal-header justify-between">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-[#ff5f57]" />
              <span className="terminal-dot bg-[#febc2e]" />
              <span className="terminal-dot bg-[#28c840]" />
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">achievements.sh</span>
            <span className="w-16" />
          </div>

          <div className="relative z-10 px-5 py-5">
            <p className="font-mono text-xs text-[var(--accent)] mb-5">$ cat achievements.log</p>

            <div className="space-y-3">
              {achievements.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-4 py-3"
                  >
                    <Icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${item.color}`} />
                    <span className="text-sm text-[var(--text-secondary)] leading-5">{item.text}</span>
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent)] ml-auto flex-shrink-0 mt-0.5" />
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-4 font-mono text-xs text-[var(--text-muted)]">$ _</p>
          </div>
        </div>
      </div>
    </section>
  );
}

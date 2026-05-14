"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  MapPin,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { about } from "@/lib/portfolio-content";

const strengthIconMap = {
  lightbulb: Lightbulb,
  zap: Zap,
  target: Target,
  users: Users,
};

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// {about.kicker}</span>
          <h2 className="terminal-title mt-7 text-4xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            {about.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            {about.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-[32px] p-7 sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[rgba(125,226,255,0.22)] bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.34),rgba(18,27,42,0.96))] font-mono text-3xl font-semibold text-[var(--text-primary)] shadow-[0_0_50px_-20px_rgba(125,226,255,0.42)]">
                NY
              </div>
              <div>
                <h3 className="terminal-title text-3xl font-semibold text-[var(--text-primary)]">
                  {about.profile.name}
                </h3>
                <p className="mt-2 font-mono text-base text-[var(--primary)]">
                  {about.profile.role}
                </p>
                <p className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-[var(--text-secondary)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                  {about.profile.status}
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <MapPin className="h-4 w-4" />
                  {about.profile.location}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-[var(--text-secondary)]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="terminal-window rounded-[32px]"
          >
            <div className="terminal-header justify-between">
              <div className="flex items-center gap-2">
                <span className="terminal-dot bg-[#ff6057]" />
                <span className="terminal-dot bg-[#ffbd2f]" />
                <span className="terminal-dot bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                expertise.sh
              </span>
              <span className="w-12" />
            </div>

            <div className="space-y-7 px-6 py-7 sm:px-8">
              {about.expertise.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-sm text-[var(--primary)]">$ {group.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span key={item} className="terminal-chip terminal-chip-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {about.strengths.map((item, index) => {
            const Icon = strengthIconMap[item.icon as keyof typeof strengthIconMap];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="glass rounded-[28px] px-6 py-7 text-center"
              >
                <Icon className="mx-auto h-5 w-5 text-[var(--primary)]" />
                <h3 className="terminal-title mt-4 text-2xl font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

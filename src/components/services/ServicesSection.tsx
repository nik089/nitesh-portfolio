"use client";

import { motion } from "framer-motion";
import { Gauge, LayoutGrid, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { services } from "@/lib/portfolio-content";

const iconMap = {
  gauge: Gauge,
  "layout-grid": LayoutGrid,
  "monitor-smartphone": MonitorSmartphone,
  "shield-check": ShieldCheck,
};

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// Services</span>
          <h2 className="terminal-title mt-7 text-4xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            What I Offer
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            Frontend services tailored for product teams that care about quality, speed, accessibility, and scale.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="glass rounded-[30px] p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(125,226,255,0.14)] bg-[rgba(46,88,155,0.08)]">
                    <Icon className="h-5 w-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="terminal-title text-2xl font-semibold text-[var(--text-primary)]">
                      {service.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      Service Area
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="terminal-chip terminal-chip-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Building2, Clock3, Rocket, Zap } from "lucide-react";
import { stats } from "@/lib/portfolio-content";

const iconMap = {
  clock: Clock3,
  rocket: Rocket,
  building: Building2,
  zap: Zap,
};

export default function StatsSection() {
  return (
    <section className="relative px-6 pb-6">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="glass rounded-[28px] px-6 py-8 text-center"
            >
              <Icon className="mx-auto h-5 w-5 text-[var(--primary)]" />
              <div className="terminal-title mt-5 text-4xl font-semibold text-[var(--text-primary)]">
                {item.value}
              </div>
              <p className="mt-2 font-mono text-sm text-[var(--text-secondary)]">
                {item.label}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

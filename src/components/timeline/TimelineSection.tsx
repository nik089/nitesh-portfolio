"use client";

import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import { journey } from "@/lib/portfolio-content";

export default function TimelineSection() {
  return (
    <section id="timeline" className="px-6 py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// Timeline</span>
          <h2 className="terminal-title mt-7 text-4xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            My Journey
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            From implementation-heavy frontend work to scalable product systems, accessibility, and design architecture.
          </p>
        </motion.div>

        <div className="relative mx-auto w-full max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[rgba(125,226,255,0.35)] to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-8">
            {journey.map((item, index) => {
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={`${item.period}-${item.title}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06, duration: 0.55 }}
                  className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-6"
                >
                  <div className="hidden md:block">
                    {!isRight ? <TimelineCard item={item} align="right" /> : null}
                  </div>

                  <div className="relative flex justify-start md:justify-center">
                    <div className="absolute left-4 top-0 -translate-x-1/2 md:left-1/2">
                      <span className="section-tag whitespace-nowrap px-3 py-1.5 text-[11px]">
                        {item.period}
                      </span>
                    </div>
                    <span className="absolute left-4 top-12 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[rgba(125,226,255,0.4)] bg-[var(--primary)] shadow-[0_0_22px_rgba(125,226,255,0.4)] md:left-1/2" />
                  </div>

                  <div className="pl-10 md:pl-0">
                    {isRight ? (
                      <TimelineCard item={item} align="left" />
                    ) : (
                      <div className="md:hidden">
                        <TimelineCard item={item} align="left" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  item,
  align,
}: {
  item: (typeof journey)[number];
  align: "left" | "right";
}) {
  return (
    <article
      className={`glass mt-12 rounded-[30px] p-6 sm:p-7 ${
        align === "right" ? "md:text-right" : ""
      }`}
    >
      <h3 className="terminal-title text-2xl font-semibold text-[var(--text-primary)]">
        {item.title}
      </h3>

      <div
        className={`mt-4 flex flex-wrap gap-4 text-sm text-[var(--text-secondary)] ${
          align === "right" ? "md:justify-end" : ""
        }`}
      >
        <span className="inline-flex items-center gap-2">
          <Building2 className="h-4 w-4 text-[var(--primary)]" />
          {item.organization}
        </span>
        <span className="inline-flex items-center gap-2 text-[var(--text-muted)]">
          <MapPin className="h-4 w-4" />
          {item.location}
        </span>
      </div>

      <p className="mt-5 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
        {item.summary}
      </p>

      <div
        className={`mt-6 flex flex-wrap gap-2.5 ${
          align === "right" ? "md:justify-end" : ""
        }`}
      >
        {item.tags.map((tag) => (
          <span key={tag} className="terminal-chip terminal-chip-muted">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio-content";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// Projects</span>
          <h2 className="terminal-title mt-7 text-4xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            Product, platform, and accessibility work shaped by real requirements and long-term maintainability.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              whileHover={{ y: -4 }}
              className="glass rounded-[30px] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="section-tag px-3 py-1.5">{project.accent}</span>
                <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)]" />
              </div>

              <h3 className="terminal-title mt-5 text-2xl font-semibold text-[var(--text-primary)]">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="terminal-chip terminal-chip-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

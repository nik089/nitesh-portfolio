"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import {
  Activity,
  BadgeCheck,
  Blocks,
  CheckCheck,
  FlaskConical,
  GitBranch,
  GitMerge,
  Hammer,
  Layers3,
  LayoutTemplate,
  Package2,
  RefreshCw,
  ScanSearch,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { skillGroups } from "@/lib/portfolio-content";

const lucideIconMap = {
  activity: Activity,
  "badge-check": BadgeCheck,
  blocks: Blocks,
  "check-check": CheckCheck,
  "flask-conical": FlaskConical,
  "git-branch": GitBranch,
  "git-merge": GitMerge,
  hammer: Hammer,
  layers3: Layers3,
  "layout-template": LayoutTemplate,
  "package-2": Package2,
  "refresh-cw": RefreshCw,
  "scan-search": ScanSearch,
  "shield-check": ShieldCheck,
  workflow: Workflow,
};

function SkillIcon({ icon }: { icon: string }) {
  const LucideIcon = lucideIconMap[icon as keyof typeof lucideIconMap];

  if (LucideIcon) {
    return <LucideIcon className="h-5 w-5 text-[#B3CFE5]" />;
  }

  return (
    <StackIcon
      name={icon as never}
      className="h-5 w-5"
    />
  );
}

export default function SkillsSection() {
  const [activeKey, setActiveKey] = useState(skillGroups[0].key);
  const activeGroup = skillGroups.find((group) => group.key === activeKey) ?? skillGroups[0];

  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// Skills</span>
          <h2 className="terminal-title mt-7 text-4xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Technologies I Master
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            A frontend-focused toolkit for building scalable interfaces, maintainable systems, and reliable delivery pipelines.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {skillGroups.map((group) => (
            <button
              key={group.key}
              type="button"
              className={`rounded-full border px-4 py-2 font-mono text-sm transition-all duration-200 ${
                activeKey === group.key
                  ? "border-[rgba(179,207,229,0.28)] bg-[var(--primary)] text-[#0A1931]"
                  : "border-[var(--border)] bg-[rgba(26,61,99,0.08)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
              onClick={() => setActiveKey(group.key)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="glass rounded-[32px] p-4 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            >
              {activeGroup.items.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[rgba(19,28,18,0.88)] px-4 py-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(179,207,229,0.14)] bg-gradient-to-br from-[rgba(74,127,167,0.2)] to-[rgba(26,61,99,0.4)]">
                    <SkillIcon icon={item.icon} />
                  </div>
                  <div>
                    <p className="terminal-title text-lg font-semibold text-[var(--text-primary)]">
                      {item.name}
                    </p>
                    <p className="font-mono text-xs text-[var(--text-muted)]">
                      {activeGroup.label}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering (CSE)",
    institution: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    location: "Uttar Pradesh, India",
    period: "Jul 2015 - Jul 2019",
    grade: "Completed",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// Education</span>
          <h2 className="mt-6 font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
            Academic Background
          </h2>
        </motion.div>

        <div className="terminal-window mx-auto w-full max-w-4xl">
          <div className="terminal-header justify-between">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-[#ff5f57]" />
              <span className="terminal-dot bg-[#febc2e]" />
              <span className="terminal-dot bg-[#28c840]" />
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">education.sh</span>
            <span className="w-16" />
          </div>

          <div className="relative z-10 px-5 py-5">
            <p className="font-mono text-xs text-[var(--accent)] mb-5">$ cat /etc/education.conf</p>

            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-5 hover:border-[rgba(0,212,255,0.15)] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[rgba(0,212,255,0.15)] flex-shrink-0 overflow-hidden p-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="https://aktu.ac.in/images/logo.png" alt="AKTU Logo" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>'; }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
                        {item.degree}
                      </h3>
                      <p className="mt-1 font-mono text-sm text-[var(--primary)]">{item.field}</p>
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
                        <span className="flex items-center gap-1.5">
                          <Award className="h-3.5 w-3.5 text-[var(--accent)]" />
                          {item.institution}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-[var(--text-muted)]" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-[var(--text-muted)]" />
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

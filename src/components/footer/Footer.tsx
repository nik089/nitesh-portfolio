"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { contact, navLinks } from "@/lib/portfolio-content";

const currentYear = new Date().getFullYear();

const socialButtons = [
  { label: "GitHub", href: "https://github.com/nik089", icon: Github, color: "hover:text-[#f05032]", iconColor: "#f05032" },
  { label: "LinkedIn", href: "https://linkedin.com/in/niteshydv7", icon: Linkedin, color: "hover:text-[#0077b5]", iconColor: "#0077b5" },
  { label: "WhatsApp", href: "https://wa.me/919457181747", icon: MessageCircle, color: "hover:text-[#25D366]", iconColor: "#25D366" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[linear-gradient(180deg,rgba(9,16,30,0.85),rgba(7,11,20,0.98))] px-6 py-16 sm:px-8 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(125,226,255,0.32)] to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]"
        >
          <div>
            <span className="section-tag">// Final Section</span>
            <h2 className="terminal-title mt-7 max-w-4xl text-2xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
              Building thoughtful frontend systems with speed, clarity, and long-term quality.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              If you are working on a product that needs strong UI architecture, accessible experiences, or a cleaner frontend foundation, let&apos;s talk.
            </p>
          </div>

          <div className="glass flex flex-col justify-between rounded-[32px] p-7">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Reach Out
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-4 inline-flex items-center gap-3 terminal-title text-2xl font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--primary)]"
              >
                {contact.email}
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
                Based in {contact.location}. Available for product teams, platform work, and frontend system design.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialButtons.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={link.label}
                    className={`inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(34,54,88,0.36)] px-4 py-2 font-mono text-sm text-[var(--text-secondary)] transition-colors ${link.color}`}
                  >
                    <Icon className="h-4 w-4" style={{ color: link.iconColor }} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid gap-8 border-t border-[var(--border)] pt-10 md:grid-cols-[1fr_1fr_auto]"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Navigation
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-[var(--border)] px-4 py-2 font-mono text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Contact Snapshot
            </p>
            <div className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
              <a href={`mailto:${contact.email}`} className="block hover:text-[var(--primary)]">{contact.email}</a>
              <a href={`https://${contact.github}`} target="_blank" rel="noreferrer" className="block hover:text-[#f05032]">{contact.github}</a>
              <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer" className="block hover:text-[#0077b5]">{contact.linkedin}</a>
            </div>
          </div>

          <div className="flex items-end md:justify-end">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(179,207,229,0.1)] px-5 py-3 font-mono text-sm text-[var(--text-primary)] transition-transform hover:-translate-y-0.5"
            >
              Back to top
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <div className="border-t border-[var(--border)] pt-6 text-sm text-[var(--text-muted)]">
          Designed and developed by Nitesh Yadav. {currentYear}
        </div>
      </div>
    </footer>
  );
}

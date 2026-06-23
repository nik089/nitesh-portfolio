"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Heart, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[rgba(10,10,15,0.95)] px-6 py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.2)] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[1.5fr_1fr]"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-3.5 font-mono text-sm font-bold backdrop-blur-md shadow-[0_0_15px_rgba(0,212,255,0.05)]">
                <span className="text-[var(--text-muted)]">&lt;/</span>
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent tracking-wide">NY</span>
                <span className="text-[var(--text-muted)]">&gt;</span>
              </div>
              <span className="font-heading text-lg font-semibold text-[var(--text-primary)]">Nitesh Yadav</span>
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              Results-driven Frontend Developer with 4+ years building scalable Angular and React applications. Specialized in Micro-Frontends, WCAG accessibility, and performance optimization for e-Governance, fintech, and e-commerce platforms.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/919457181747?text=Hi%20Nitesh%2C%20I%20visited%20your%20portfolio!" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-all hover:text-[#25D366] hover:border-[rgba(37,211,102,0.4)]">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="https://github.com/nik089" target="_blank" rel="noreferrer" aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-all hover:text-[var(--primary)] hover:border-[rgba(0,212,255,0.3)]">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/in/niteshydv7" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-all hover:text-[#0077b5] hover:border-[rgba(0,119,181,0.3)]">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:nikyadav085@gmail.com" aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-all hover:text-[var(--accent)] hover:border-[rgba(52,211,153,0.3)]">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3">Quick Links</p>
              <div className="grid grid-cols-2 gap-2">
                {["Home", "About", "Skills", "Experience", "UX4G", "Projects", "Contact"].map((l) => (
                  <a key={l} href={`#${l.toLowerCase() === "home" ? "top" : l.toLowerCase()}`}
                    className="font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <a href="#top" className="magnetic-btn mt-6 inline-flex items-center gap-2 self-start rounded-lg border border-[var(--border)] px-4 py-2 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[rgba(0,212,255,0.3)]">
              Back to top <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-[var(--border)] pt-6 flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span>© 2026 Nitesh Yadav. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/portfolio-content";

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition-all duration-300 sm:px-6 ${
          isScrolled ? "glass-strong soft-glow" : "bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-3 font-mono text-sm text-[var(--text-primary)]"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(46,88,155,0.12)] text-[var(--primary)]">
            NY
          </span>
          <span className="hidden text-base font-semibold sm:block">Nitesh Yadav</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`https://github.com/nik089`}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(46,88,155,0.08)] text-[#f05032] transition-all duration-200 hover:border-[rgba(240,80,50,0.4)] hover:bg-[rgba(240,80,50,0.1)]"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`https://linkedin.com/in/niteshydv7`}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(46,88,155,0.08)] text-[#0077b5] transition-all duration-200 hover:border-[rgba(0,119,181,0.4)] hover:bg-[rgba(0,119,181,0.1)]"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:Nikyadav085@gmail.com`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(46,88,155,0.08)] text-[#B3CFE5] transition-all duration-200 hover:border-[rgba(179,207,229,0.4)] hover:bg-[rgba(179,207,229,0.1)]"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(46,88,155,0.08)] text-[var(--text-primary)] md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass-strong mx-auto mt-3 max-w-6xl rounded-3xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-transparent px-4 py-3 font-mono text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--border)] hover:text-[var(--text-primary)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={`https://github.com/nik089`}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(46,88,155,0.08)] text-[#f05032] transition-all duration-200 hover:border-[rgba(240,80,50,0.4)] hover:bg-[rgba(240,80,50,0.1)]"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`https://linkedin.com/in/niteshydv7`}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(46,88,155,0.08)] text-[#0077b5] transition-all duration-200 hover:border-[rgba(0,119,181,0.4)] hover:bg-[rgba(0,119,181,0.1)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:Nikyadav085@gmail.com`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(46,88,155,0.08)] text-[#B3CFE5] transition-all duration-200 hover:border-[rgba(179,207,229,0.4)] hover:bg-[rgba(179,207,229,0.1)]"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

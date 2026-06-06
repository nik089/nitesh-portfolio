"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

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
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-3"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          isScrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[#a78bfa] font-heading text-sm font-bold text-[#0a0a0f]">
            NY
          </span>
          <span className="hidden font-heading text-sm font-semibold text-[var(--text-primary)] sm:block">
            Nitesh Yadav
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 font-mono text-xs text-[var(--text-secondary)] transition-all duration-200 hover:bg-[rgba(255,255,255,0.04)] hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden items-center gap-2 md:flex">
          <a href="https://wa.me/919457181747?text=Hi%20Nitesh%2C%20I%20visited%20your%20portfolio!" target="_blank" rel="noreferrer" aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-all hover:border-[rgba(37,211,102,0.4)] hover:text-[#25D366]">
            <MessageCircle className="h-4 w-4" />
          </a>
          <a href="https://github.com/nik089" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-all hover:border-[rgba(0,212,255,0.3)] hover:text-[var(--primary)]">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/niteshydv7" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-all hover:border-[rgba(0,119,181,0.3)] hover:text-[#0077b5]">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:Nikyadav085@gmail.com" aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-all hover:border-[rgba(52,211,153,0.3)] hover:text-[var(--accent)]">
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-primary)] md:hidden"
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass-strong mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <a key={item.label} href={item.href}
                  className="rounded-xl px-4 py-3 font-mono text-sm text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.04)] hover:text-[var(--text-primary)]"
                  onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

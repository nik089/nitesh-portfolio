"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

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
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${isScrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="flex h-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--glass-panel)] px-3 font-mono text-sm font-bold backdrop-blur-md transition-all group-hover:border-[rgba(0,212,255,0.3)] group-hover:bg-[var(--glass-panel-hover)] shadow-[0_0_15px_rgba(0,212,255,0.05)]">
            <span className="text-[var(--text-muted)]">&lt;/</span>
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent tracking-wide">NY</span>
            <span className="text-[var(--text-muted)]">&gt;</span>
          </div>
          <span className="hidden font-heading text-sm font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--primary)] sm:block">
            Nitesh Yadav
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 font-mono text-xs text-[var(--text-secondary)] transition-all duration-200 hover:bg-[var(--glass-panel-hover)] hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <div className="mx-1 h-4 w-[1px] bg-[var(--border)]" />
          <a href="https://wa.me/919457181747?text=Hi%20Nitesh%2C%20I%20visited%20your%20portfolio!" target="_blank" rel="noreferrer" aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[#25D366] transition-all hover:bg-[rgba(37,211,102,0.1)] hover:border-[rgba(37,211,102,0.4)]">
            <MessageCircle className="h-4 w-4" />
          </a>
          <a href="https://github.com/nik089" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-primary)] transition-all hover:bg-[rgba(150,150,150,0.1)] hover:border-[rgba(150,150,150,0.3)]">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/niteshydv7" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[#0077b5] transition-all hover:bg-[rgba(0,119,181,0.1)] hover:border-[rgba(0,119,181,0.4)]">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:nikyadav085@gmail.com" aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[#ea4335] transition-all hover:bg-[rgba(234,67,53,0.1)] hover:border-[rgba(234,67,53,0.4)]">
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-primary)]"
            onClick={() => setIsOpen((o) => !o)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
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
                  className="rounded-xl px-4 py-3 font-mono text-sm text-[var(--text-secondary)] hover:bg-[var(--glass-panel-hover)] hover:text-[var(--text-primary)]"
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

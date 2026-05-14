"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { hero } from "@/lib/portfolio-content";

export default function HeroSection() {
  const [terminalIndex, setTerminalIndex] = useState(0);
  const [terminalText, setTerminalText] = useState("");
  const [isDeletingTerminal, setIsDeletingTerminal] = useState(false);
  const [visibleCharCount, setVisibleCharCount] = useState(0);

  const activeMessage = hero.terminalMessages[terminalIndex];
  const heroNameCharacters = useMemo(() => hero.name.split(""), []);

  useEffect(() => {
    if (visibleCharCount >= heroNameCharacters.length) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setVisibleCharCount((currentCount) => currentCount + 1);
    }, visibleCharCount === 0 ? 700 : 105);

    return () => window.clearTimeout(timeout);
  }, [heroNameCharacters.length, visibleCharCount]);

  useEffect(() => {
    let timeout: number;

    if (!isDeletingTerminal && terminalText !== activeMessage) {
      timeout = window.setTimeout(() => {
        setTerminalText(activeMessage.slice(0, terminalText.length + 1));
      }, terminalText.length === 0 ? 300 : 38);
    } else if (!isDeletingTerminal && terminalText === activeMessage) {
      timeout = window.setTimeout(() => {
        setIsDeletingTerminal(true);
      }, 1400);
    } else if (isDeletingTerminal && terminalText.length > 0) {
      timeout = window.setTimeout(() => {
        setTerminalText(activeMessage.slice(0, terminalText.length - 1));
      }, 18);
    } else {
      setIsDeletingTerminal(false);
      setTerminalIndex((currentIndex) => (currentIndex + 1) % hero.terminalMessages.length);
    }

    return () => window.clearTimeout(timeout);
  }, [activeMessage, isDeletingTerminal, terminalText]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center px-6 pb-20 pt-32"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="terminal-window faint-terminal-noise soft-glow w-full max-w-[31rem] rounded-[26px] sm:max-w-3xl"
        >
          <div className="terminal-header justify-between">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-[#ff6057]" />
              <span className="terminal-dot bg-[#ffbd2f]" />
              <span className="terminal-dot bg-[#28c840]" />
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {hero.terminalTitle}
            </span>
            <span className="w-12" />
          </div>
          <div className="px-6 py-6 text-left sm:px-8 sm:py-7">
            <p className="min-h-[2.1rem] font-mono text-[15px] text-[var(--text-secondary)] sm:text-xl">
              &gt; {terminalText}
              <span className="caret-blink text-[var(--primary)]">_</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-9 max-w-4xl"
        >
          <h1 className="terminal-title phosphor-text min-h-[4.5rem] text-5xl font-semibold tracking-[-0.08em] text-[var(--text-primary)] sm:min-h-[5.75rem] sm:text-6xl lg:min-h-[7rem] lg:text-7xl">
            <span className="typing-mask">
              {heroNameCharacters.map((character, index) =>
                index < visibleCharCount ? (
                  <span key={`${character}-${index}`}>
                    {character === " " ? "\u00A0" : character}
                  </span>
                ) : null
              )}
            </span>
            <span className="caret-blink text-[var(--primary)]">_</span>
          </h1>
          <p className="mt-4 font-mono text-[1.8rem] text-[var(--primary)] sm:text-3xl">
            {hero.role}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            {hero.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {hero.stack.map((item) => (
            <span key={item} className="terminal-chip terminal-chip-muted">
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={hero.primaryCta.href}
            className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-[var(--primary)] px-7 py-4 font-mono text-sm font-semibold text-[#0A1931] shadow-[0_18px_45px_-28px_rgba(179,207,229,0.75)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl border border-[rgba(179,207,229,0.22)] bg-[rgba(26,61,99,0.84)] px-7 py-4 font-mono text-sm font-semibold text-[var(--text-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(179,207,229,0.34)]"
          >
            {hero.secondaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-14 flex flex-col items-center gap-3 text-[var(--text-muted)]"
        >
          <span className="font-mono text-xs uppercase tracking-[0.18em]">Scroll</span>
          <span className="flex h-11 w-6 items-start justify-center rounded-full border border-[rgba(125,226,255,0.16)] p-1.5">
            <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--primary)]" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}

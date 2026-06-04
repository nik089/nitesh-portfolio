"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, MessageCircle } from "lucide-react";

const terminalCommands = [
  { cmd: "whoami", output: "Nitesh Yadav" },
  { cmd: "role", output: "Senior Frontend Engineer" },
  { cmd: "experience", output: "4+ Years" },
  { cmd: "cat core_stack", output: "Angular • React.js • Next.js • JavaScript • TypeScript" },
  { cmd: "cat domains", output: "GovTech • HealthTech • FinTech • Accessibility Tools • Design Systems" },
];

export default function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [completedLines, setCompletedLines] = useState<number[]>([]);

  useEffect(() => {
    if (currentLine >= terminalCommands.length) return;

    const cmd = terminalCommands[currentLine].cmd;

    if (!showOutput && displayedText.length < cmd.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(cmd.slice(0, displayedText.length + 1));
      }, 40);
      return () => clearTimeout(timeout);
    }

    if (!showOutput && displayedText.length === cmd.length) {
      const timeout = setTimeout(() => setShowOutput(true), 250);
      return () => clearTimeout(timeout);
    }

    if (showOutput) {
      const timeout = setTimeout(() => {
        setCompletedLines((prev) => [...prev, currentLine]);
        setCurrentLine((prev) => prev + 1);
        setDisplayedText("");
        setShowOutput(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, displayedText, showOutput]);

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: NY Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          {/* Orbital ring */}
          <div className="absolute inset-[-20px] animate-spin-slow rounded-full border border-dashed border-[rgba(0,212,255,0.15)]" />
          <div className="absolute inset-[-35px] animate-spin-slow rounded-full border border-dashed border-[rgba(167,139,250,0.08)]" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
              style={{
                top: `${20 + Math.sin(i * 1.2) * 40}%`,
                left: `${20 + Math.cos(i * 1.2) * 40}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
                y: [0, -8, 0],
              }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}

          {/* Main circle with glassmorphism */}
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full sm:h-48 sm:w-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] p-[2px] animate-spin-slow" style={{ animationDuration: "8s" }}>
              <div className="h-full w-full rounded-full bg-[var(--bg)]" />
            </div>
            <div className="absolute inset-[3px] rounded-full bg-[rgba(17,17,24,0.9)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)]" />
            <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(0,212,255,0.2),0_0_120px_rgba(0,212,255,0.1)]" />
            <span className="relative z-10 font-heading text-5xl font-bold bg-gradient-to-br from-[var(--primary)] via-white to-[var(--secondary)] bg-clip-text text-transparent sm:text-6xl">
              NY
            </span>
          </div>
        </motion.div>

        {/* Right: Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          <div className="terminal-window">
            <div className="terminal-header justify-between">
              <div className="flex items-center gap-2">
                <span className="terminal-dot bg-[#ff5f57]" />
                <span className="terminal-dot bg-[#febc2e]" />
                <span className="terminal-dot bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="h-3 w-3 text-[var(--text-muted)]" />
                <span className="font-mono text-xs text-[var(--text-muted)]">nitesh@gov-dev ~ portfolio</span>
              </div>
              <span className="w-16" />
            </div>

            <div className="relative z-10 px-5 py-4 font-mono text-xs sm:text-sm sm:px-6 sm:py-5 max-h-[360px] overflow-y-auto">
              {completedLines.map((lineIdx) => (
                <div key={lineIdx} className="mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent)]">$</span>
                    <span className="text-[var(--text-secondary)]">{terminalCommands[lineIdx].cmd}</span>
                  </div>
                  <div className="ml-4 mt-0.5 text-[var(--primary)] leading-5">{terminalCommands[lineIdx].output}</div>
                </div>
              ))}

              {currentLine < terminalCommands.length && (
                <div className="mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent)]">$</span>
                    <span className="text-[var(--text-secondary)]">{displayedText}</span>
                    <span className="caret-blink text-[var(--primary)]">▊</span>
                  </div>
                  {showOutput && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ml-4 mt-0.5 text-[var(--primary)] leading-5">
                      {terminalCommands[currentLine].output}
                    </motion.div>
                  )}
                </div>
              )}

              {currentLine >= terminalCommands.length && (
                <div className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">$</span>
                  <span className="caret-blink text-[var(--primary)]">▊</span>
                </div>
              )}
            </div>
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="mt-5 text-center text-sm text-[var(--text-secondary)] lg:text-left sm:text-base">
            Architecting Government Digital Platforms, Accessibility-First Products & Enterprise Design Systems
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
            className="mt-5 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a href="mailto:Nikyadav085@gmail.com?subject=Resume%20Request"
              className="magnetic-btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[#7dd3fc] px-6 py-3 font-mono text-sm font-semibold text-[#0a0a0f] shadow-[0_0_30px_rgba(0,212,255,0.3)]">
              <Download className="h-4 w-4" />
              Request Resume
            </a>
            <a href="#projects"
              className="magnetic-btn inline-flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-6 py-3 font-mono text-sm text-[var(--text-primary)] hover:border-[rgba(0,212,255,0.3)]">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

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
  { cmd: "cat gen_ai", output: "Claude • Codex • ChatGPT • AI-Driven Architecture" },
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
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12 justify-center">
        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full"
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
            <a href="/nitesh_resume.pdf"
              download="Nitesh_Yadav_Resume.pdf"
              className="magnetic-btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] px-6 py-3 font-mono text-sm font-semibold text-[var(--bg)] shadow-[0_0_30px_var(--glow)]">
              <Download className="h-4 w-4" />
              Request Resume
            </a>
            <a href="#projects"
              className="magnetic-btn inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--glass-panel)] px-6 py-3 font-mono text-sm text-[var(--text-primary)] hover:border-[rgba(0,212,255,0.3)]">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, FolderOpen, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaAngular, FaReact, FaJs, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs } from "react-icons/si";
import { cn } from "@/lib/utils";

const terminalCommands = [
  [{ text: "> nitesh --init", delay: 0 }, { text: "Initializing profile...", delay: 300, isStatus: true }],
  [{ text: "> nitesh --status", delay: 0 }, { text: "Senior Frontend Developer | 4+ years", delay: 200, isStatus: true }],
  [{ text: "> nitesh --skills", delay: 0 }, { text: "Angular • React • Next.js • TypeScript", delay: 200, isStatus: true }],
  [{ text: "> nitesh --ready", delay: 0 }, { text: "✅ Available for opportunities", delay: 200, isStatus: true }],
  [{ text: "> nitesh --contact", delay: 0 }, { text: "Email: nikyadav085@gmail.com", delay: 200, isStatus: true }],
];

const floatingIcons = [
  { Icon: FaAngular, delay: 0, x: "10%", y: "20%", color: "#dd0031" },
  { Icon: FaReact, delay: 0.5, x: "85%", y: "15%", color: "#61dafb" },
  { Icon: SiTypescript, delay: 1, x: "5%", y: "70%", color: "#3178c6" },
  { Icon: FaJs, delay: 1.5, x: "90%", y: "65%", color: "#f7df1e" },
  { Icon: SiNextdotjs, delay: 2, x: "15%", y: "80%", color: "#ffffff" },
  { Icon: SiTailwindcss, delay: 2.5, x: "80%", y: "80%", color: "#38bdf8" },
  { Icon: SiNodedotjs, delay: 3, x: "75%", y: "25%", color: "#339933" },
  { Icon: FaDocker, delay: 3.5, x: "20%", y: "30%", color: "#2496ed" },
];

const codeSnippets = [
  { code: "const developer = new Nitesh();", delay: 0.5 },
  { code: "developer.buildBeautifulUI();", delay: 1.5 },
  { code: "return scalableSolutions;", delay: 2.5 },
];

export default function HeroSection() {
  const [terminalStep, setTerminalStep] = useState(0);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showHero, setShowHero] = useState(false);
  const [typedText, setTypedText] = useState("");
  const currentCommandSet = terminalCommands[currentCommandIndex];

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (terminalStep < currentCommandSet.length) {
      const currentLine = currentCommandSet[terminalStep];
      if (!currentLine.isStatus) {
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          if (charIndex <= currentLine.text.length) {
            setTypedText(currentLine.text.slice(0, charIndex));
            charIndex++;
          } else {
            clearInterval(typeInterval);
            setTimeout(() => {
              setTerminalStep((prev) => prev + 1);
            }, 100);
          }
        }, 30);
        return () => clearInterval(typeInterval);
      } else {
        const timer = setTimeout(() => {
          setTerminalStep((prev) => prev + 1);
        }, currentLine.delay);
        return () => clearTimeout(timer);
      }
    } else {
      // Show hero content after first command cycle and then loop
      if (!showHero) {
        setTimeout(() => setShowHero(true), 300);
      }
      const resetTimer = setTimeout(() => {
        setTerminalStep(0);
        setTypedText("");
        setCurrentCommandIndex((prev) => (prev + 1) % terminalCommands.length);
      }, 1500);
      return () => clearTimeout(resetTimer);
    }
  }, [terminalStep, currentCommandIndex, showHero]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Floating Tech Icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:flex items-center justify-center w-12 h-12 rounded-xl glass"
          style={{ left: icon.x, top: icon.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            delay: icon.delay + 1,
            duration: 4 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2, boxShadow: `0 0 30px ${icon.color}40` }}
        >
          <icon.Icon className="w-6 h-6" style={{ color: icon.color }} />
        </motion.div>
      ))}

      {/* Animated Code Lines (Left Side) */}
      <div className="absolute left-4 md:left-12 top-1/4 hidden lg:block">
        <motion.div
          className="font-mono text-xs text-[#52525b] space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {codeSnippets.map((snippet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: snippet.delay + 1.5 }}
              className="flex items-center gap-2"
            >
              <span className="text-[#7c3aed]">›</span>
              <span className="text-[#a1a1aa]">{snippet.code}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Terminal Window */}
        <motion.div
          className="glass rounded-2xl p-6 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs text-[#52525b] font-mono">terminal</span>
          </div>

          {/* Terminal Content */}
          <div className="font-mono text-sm space-y-2 text-left">
            {currentCommandSet.slice(0, terminalStep + 1).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn("flex items-center gap-2", line.isStatus && "text-[#7c3aed]")}
              >
                {i < terminalStep && <span className="text-[#52525b] mr-2">✓</span>}
                <span className={line.isStatus ? "text-[#7c3aed]" : "text-white"}>
                  {i === terminalStep && !line.isStatus ? typedText : line.text}
                </span>
                {i === terminalStep && !line.isStatus && (
                  <span className={cn("text-[#7c3aed]", showCursor ? "opacity-100" : "opacity-0")}>|</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hero Content */}
        <AnimatePresence>
          {showHero && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Name */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-white">Nitesh </span>
                <span className="gradient-text">Yadav</span>
              </motion.h1>

              {/* Nickname Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-[#a1a1aa]">Nitesh Yadav</span>
              </motion.div>

              {/* Role */}
              <motion.p
                className="text-xl md:text-2xl text-[#a1a1aa] mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Senior Frontend Developer
              </motion.p>

              {/* Tagline */}
              <motion.p
                className="text-base text-[#52525b] mb-10 max-w-xl mx-auto italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                "Building scalable, accessible, and high-performance frontend experiences with Angular & React."
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <CTAButton icon={<FolderOpen className="w-4 h-4" />} label="View Projects" primary />
                <CTAButton icon={<MessageSquare className="w-4 h-4" />} label="Contact Me" />
                <CTAButton icon={<Download className="w-4 h-4" />} label="Download Resume" />
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <SocialIcon icon={<FaGithub className="w-5 h-5" />} href="https://github.com/nik089" label="GitHub" />
                <SocialIcon icon={<FaLinkedin className="w-5 h-5" />} href="https://www.linkedin.com/in/niteshydv7/" label="LinkedIn" />
                <SocialIcon icon={<FaEnvelope className="w-5 h-5" />} href="mailto:nikyadav085@gmail.com" label="Email" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Indicator */}
        <AnimatePresence>
          {showHero && (
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-[#52525b]"
              >
                <span className="text-xs">Scroll</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function CTAButton({ icon, label, primary }: { icon: React.ReactNode; label: string; primary?: boolean }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      className={cn(
        "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",
        primary
          ? "bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white glow hover:scale-105"
          : "glass text-[#a1a1aa] hover:text-white hover:glow"
      )}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => label === "View Projects" ? scrollToSection("projects") : label === "Contact Me" ? scrollToSection("contact") : window.open("/resume.pdf", "_blank")}
    >
      {icon}
      <span>{label}</span>
    </motion.button>
  );
}

function SocialIcon({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 glass rounded-xl text-[#a1a1aa] hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const codeSnippets = [
  { text: "const component = () => {}", delay: 0, x: "10%", y: "15%", fontSize: "text-xs" },
  { text: "@Component({...})", delay: 2, x: "80%", y: "20%", fontSize: "text-xs" },
  { text: "ngOnInit()", delay: 4, x: "5%", y: "60%", fontSize: "text-xs" },
  { text: "useEffect(() => {})", delay: 1, x: "75%", y: "70%", fontSize: "text-xs" },
  { text: "import { useState }", delay: 3, x: "20%", y: "40%", fontSize: "text-xs" },
  { text: "<ng-container>", delay: 5, x: "60%", y: "35%", fontSize: "text-xs" },
  { text: "interface Props {}", delay: 2.5, x: "35%", y: "80%", fontSize: "text-xs" },
  { text: "<app-component>", delay: 4.5, x: "85%", y: "50%", fontSize: "text-xs" },
  { text: "export default function", delay: 1.5, x: "15%", y: "25%", fontSize: "text-xs" },
  { text: "const routes: Routes", delay: 3.5, x: "55%", y: "85%", fontSize: "text-xs" },
  { text: "useContext()", delay: 0.5, x: "45%", y: "10%", fontSize: "text-xs" },
  { text: "this.http.get()", delay: 6, x: "25%", y: "55%", fontSize: "text-xs" },
  { text: "React.FC<Props>", delay: 7, x: "70%", y: "45%", fontSize: "text-xs" },
  { text: "@Injectable()", delay: 8, x: "40%", y: "30%", fontSize: "text-xs" },
  { text: "npm install", delay: 9, x: "90%", y: "75%", fontSize: "text-xs" },
];

interface AnimatedBackgroundProps {
  className?: string;
}

export default function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("fixed inset-0 z-0 overflow-hidden pointer-events-none", className)}>
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-[40%] -right-[20%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#7c3aed]/20 to-transparent blur-[100px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-[20%] -left-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#6366f1]/15 to-transparent blur-[80px]"
        animate={{ x: [0, -40, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[30%] left-[50%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#8b5cf6]/10 to-transparent blur-[60px]"
        animate={{ x: [0, 30, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2, ease: "easeInOut" }}
        />
      ))}

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className={`absolute font-mono text-[#7c3aed]/20 ${snippet.fontSize}`}
          style={{ left: snippet.x, top: snippet.y }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, 0],
            y: [0, 20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 12 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: snippet.delay,
          }}
        >
          {snippet.text}
        </motion.div>
      ))}
    </div>
  );
}
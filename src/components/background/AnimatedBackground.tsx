"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const snippets = [
  { text: "const developer = 'nitesh'", x: "7%", y: "9%", size: "text-[9px] sm:text-[10px]" },
  { text: "React.createElement(UI)", x: "24%", y: "12%", size: "text-[9px] sm:text-[10px]" },
  { text: "Angular.module('portfolio')", x: "63%", y: "10%", size: "text-[9px] sm:text-[10px]" },
  { text: "<div class='hero-section'>", x: "82%", y: "17%", size: "text-[9px] sm:text-[10px]" },

  { text: "HTML + CSS + JavaScript", x: "6%", y: "24%", size: "text-[10px] sm:text-xs" },
  { text: "TailwindCSS.flex.items-center()", x: "39%", y: "21%", size: "text-[9px] sm:text-[10px]" },
  { text: "Bootstrap.container-fluid", x: "72%", y: "28%", size: "text-[9px] sm:text-[10px]" },

  { text: "Next.js.optimizeImages()", x: "12%", y: "36%", size: "text-[9px] sm:text-[10px]" },
  { text: "useState(activeSection)", x: "56%", y: "34%", size: "text-[9px] sm:text-[10px]" },
  { text: "frontend.performance >= 95", x: "84%", y: "41%", size: "text-[9px] sm:text-[10px]" },

  { text: "responsiveDesign === true", x: "7%", y: "48%", size: "text-[10px] sm:text-xs" },
  { text: "TypeScript.strictMode()", x: "31%", y: "46%", size: "text-[9px] sm:text-[10px]" },
  { text: "npm install next react", x: "63%", y: "51%", size: "text-[9px] sm:text-[10px]" },
  { text: "styled-components.theme()", x: "81%", y: "57%", size: "text-[9px] sm:text-[10px]" },

  { text: "SASS.compile(styles)", x: "11%", y: "63%", size: "text-[9px] sm:text-[10px]" },
  { text: "WCAG.accessibility('pass')", x: "44%", y: "60%", size: "text-[9px] sm:text-[10px]" },
  { text: "React + Angular + Next.js", x: "68%", y: "68%", size: "text-[10px] sm:text-xs" },

  { text: "FramerMotion.animate()", x: "5%", y: "76%", size: "text-[9px] sm:text-[10px]" },
  { text: "Tailwind.config.extend()", x: "27%", y: "82%", size: "text-[9px] sm:text-[10px]" },
  { text: "ReduxToolkit.store()", x: "56%", y: "80%", size: "text-[9px] sm:text-[10px]" },
  { text: "performance_budget < 160kb", x: "78%", y: "87%", size: "text-[9px] sm:text-[10px]" },

  { text: "animate(ui)", x: "45%", y: "92%", size: "text-[9px] sm:text-[10px]" },
];

export default function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed inset-0 z-0 overflow-hidden pointer-events-none will-change-transform", className)}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(86,182,255,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(31,76,153,0.14),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,18,0.16),transparent_38%,rgba(6,10,18,0.2)_100%)]" />

      <svg className="absolute inset-0 h-full w-full opacity-[0.12] grid-fade">
        <defs>
          <pattern id="portfolio-grid-main" width="72" height="72" patternUnits="userSpaceOnUse">
            <path
              d="M 72 0 L 0 0 0 72"
              fill="none"
              stroke="rgba(125,226,255,0.16)"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern id="portfolio-grid-sub" width="18" height="18" patternUnits="userSpaceOnUse">
            <path
              d="M 18 0 L 0 0 0 18"
              fill="none"
              stroke="rgba(96,165,250,0.06)"
              strokeWidth="0.35"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#portfolio-grid-main)" />
        <rect width="100%" height="100%" fill="url(#portfolio-grid-sub)" />
      </svg>

      <div className="absolute inset-x-0 top-[22%] h-px bg-gradient-to-r from-transparent via-[rgba(125,226,255,0.06)] to-transparent" />
      <div className="absolute inset-x-0 top-[56%] h-px bg-gradient-to-r from-transparent via-[rgba(125,226,255,0.05)] to-transparent" />
      <div className="absolute inset-x-0 top-[84%] h-px bg-gradient-to-r from-transparent via-[rgba(125,226,255,0.04)] to-transparent" />

      <motion.div
        className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-[rgba(125,226,255,0.08)] blur-[130px]"
        animate={{ x: [0, 30, 0], y: [0, 22, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-7rem] top-[24%] h-[26rem] w-[26rem] rounded-full bg-[rgba(59,130,246,0.08)] blur-[155px]"
        animate={{ x: [0, -34, 0], y: [0, -26, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-[18%] h-[30rem] w-[30rem] rounded-full bg-[rgba(205,244,255,0.04)] blur-[170px]"
        animate={{ x: [0, 28, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {snippets.map((snippet, index) => (
        <motion.span
          key={snippet.text}
          className={cn(
            "absolute font-mono tracking-[0.03em] text-[rgba(113,168,255,0.22)] pointer-events-none",
            snippet.size
          )}
          style={{ left: snippet.x, top: snippet.y }}
          animate={{
            opacity: [0.12, 0.35, 0.12],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 7 + (index % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        >
          {snippet.text}
        </motion.span>
      ))}
    </div>
  );
}

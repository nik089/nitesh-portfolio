"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Aurora gradients */}
      <div className="aurora absolute inset-0" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Floating orbs */}
      <motion.div
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[rgba(0,212,255,0.05)] blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8rem] top-[30%] h-[28rem] w-[28rem] rounded-full bg-[rgba(167,139,250,0.04)] blur-[140px]"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8rem] left-[20%] h-[32rem] w-[32rem] rounded-full bg-[rgba(52,211,153,0.03)] blur-[160px]"
        animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating code snippets */}
      {[
        { text: "const developer = 'nitesh'", x: "8%", y: "12%" },
        { text: "React.createElement(UI)", x: "75%", y: "8%" },
        { text: "export default App", x: "85%", y: "45%" },
        { text: "npm run build", x: "5%", y: "55%" },
        { text: "git push origin main", x: "70%", y: "75%" },
        { text: "tailwind.config.ts", x: "15%", y: "80%" },
        { text: "interface Props {}", x: "50%", y: "90%" },
        { text: "useEffect(() => {})", x: "40%", y: "15%" },
      ].map((snippet, i) => (
        <motion.span
          key={snippet.text}
          className="absolute font-mono text-[10px] text-[rgba(0,212,255,0.12)] pointer-events-none"
          style={{ left: snippet.x, top: snippet.y }}
          animate={{ opacity: [0.05, 0.15, 0.05], y: [0, -10, 0] }}
          transition={{ duration: 8 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
        >
          {snippet.text}
        </motion.span>
      ))}

      {/* Gradient lines */}
      <div className="absolute inset-x-0 top-[25%] h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.06)] to-transparent" />
      <div className="absolute inset-x-0 top-[60%] h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.04)] to-transparent" />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiDocker,
} from "react-icons/si";

const techStack = [
  { Icon: SiAngular, name: "Angular", color: "#dd0031", floatDelay: 0 },
  { Icon: SiReact, name: "React", color: "#61dafb", floatDelay: 0.5 },
  { Icon: SiNextdotjs, name: "Next.js", color: "#ffffff", floatDelay: 1 },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178c6", floatDelay: 1.5 },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#38bdf8", floatDelay: 2 },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933", floatDelay: 2.5 },
  { Icon: SiGit, name: "Git", color: "#f05032", floatDelay: 3 },
  { Icon: SiDocker, name: "Docker", color: "#2496ed", floatDelay: 3.5 },
];

export default function TechStackSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto">
            Technologies I work with daily
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-full" />
        </motion.div>

        {/* Floating Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="glass rounded-xl p-4 flex flex-col items-center gap-1 cursor-default"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: tech.floatDelay * 0.2, duration: 0.5 }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              whileHover={{ scale: 1.15, boxShadow: `0 0 30px ${tech.color}40` }}
            >
              <tech.Icon
                className="w-8 h-8"
                style={{ color: tech.color }}
              />
              <span className="text-xs text-[#a1a1aa] font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
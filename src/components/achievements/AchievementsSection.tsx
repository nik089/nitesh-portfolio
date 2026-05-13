"use client";

import { motion } from "framer-motion";
import { Accessibility, Building, Layers, Zap, GitBranch } from "lucide-react";

const achievements = [
  {
    icon: <Accessibility className="w-8 h-8" />,
    title: "WCAG 2.1 Expertise",
    description: "Built comprehensive accessibility widgets ensuring compliance with international standards",
    gradient: "from-[#7c3aed] to-[#6366f1]",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "GovTech Platform Development",
    description: "Led development of government-scale applications serving millions of citizens",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Design System Architecture",
    description: "Architected enterprise design systems with 100+ accessible components",
    gradient: "from-[#8b5cf6] to-[#a855f7]",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Achieved 95+ Lighthouse scores through strategic optimization techniques",
    gradient: "from-[#a855f7] to-[#ec4899]",
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: "CI/CD & Frontend Scalability",
    description: "Implemented automated pipelines enabling rapid deployment and scaling",
    gradient: "from-[#ec4899] to-[#f43f5e]",
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-24 px-6 relative z-10">
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
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto">
            Milestones that define my professional journey
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br ${achievement.gradient}`}
                >
                  <div className="text-white">{achievement.icon}</div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white">{achievement.title}</h3>
                <p className="text-[#a1a1aa] text-sm">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
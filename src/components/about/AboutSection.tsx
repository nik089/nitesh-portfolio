"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Globe, Zap } from "lucide-react";

const aboutContent = {
  title: "About Me",
  paragraphs: [
    "With 4+ years of frontend development experience, I specialize in building scalable, accessible, and high-performance web applications. My expertise spans Angular, React, and TypeScript, with a strong foundation in designing component-driven architectures and design systems.",
    "I've led projects across GovTech, fintech, and e-commerce domains, focusing on accessibility (WCAG 2.1), performance optimization, and creating seamless user experiences. At Netoyed, I'm architecting the UX4G Design System for NeGD, while previously at Antino Labs and Oodles Technologies, I built complex admin panels, merchant portals, and payment integrations.",
  ],
  highlights: [
    { icon: <Code2 className="w-5 h-5" />, text: "4+ Years Experience" },
    { icon: <Globe className="w-5 h-5" />, text: "Multi-domain Expertise" },
    { icon: <Sparkles className="w-5 h-5" />, text: "WCAG 2.1 Certified" },
    { icon: <Zap className="w-5 h-5" />, text: "Performance Focused" },
  ],
};

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative">
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
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {aboutContent.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                className="text-[#a1a1aa] leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                {para}
              </motion.p>
            ))}

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {aboutContent.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-xl p-4 flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(124, 58, 237, 0.5)" }}
                >
                  <div className="p-2 rounded-lg bg-[#7c3aed]/20 text-[#7c3aed]">{item.icon}</div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 to-[#6366f1]/20 rounded-3xl blur-3xl" />

              {/* Cards */}
              <motion.div
                className="absolute top-0 right-0 glass rounded-2xl p-6 w-48"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">4+</div>
                <div className="text-sm text-[#a1a1aa]">Years of Experience</div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 glass rounded-2xl p-6 w-48"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">20+</div>
                <div className="text-sm text-[#a1a1aa]">Projects Completed</div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-2xl p-6 w-56"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-sm text-[#a1a1aa]">Happy Clients</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "UX4G Accessibility Widget",
    description: "Accessibility Widget / Bar is a user interface component designed to provide users with enhanced accessibility options while visiting any website. Provides screen reader support, high contrast, font scaling, and more.",
    tech: ["Angular", "TypeScript", "WCAG", "ARIA", "CSS"],
    demo: "https://ux4g.dl6.in/",
    colors: ["#f59e0b", "#d97706", "#fbbf24"],
  },
  {
    title: "UX4G Design System",
    description: "Enterprise design system for NeGD with 30+ accessible components and comprehensive documentation.",
    tech: ["Html", "CSS", "Storybook", "JavaScript", "WCAG 2.0", "GIGW"],
    demo: "https://ux4g.dl6.in/",
    colors: ["#8b5cf6", "#a855f7", "#c084fc"],
  },
  {
    title: "Audit360 Accessibility Platform",
    description: "Government-grade UX audit platform ensuring WCAG 2.1 compliance. Comprehensive accessibility widget for digital touchpoints.",
    tech: ["Angular", "TypeScript", "ARIA", "RxJS", "Chart.js"],
    demo: "#",
    colors: ["#6366f1", "#8b5cf6", "#a78bfa"],
  },
  {
    title: "JNARDDC Admin & Web Portal",
    description: "Government water resources management system with Admin Panel and Web Portal using Microfrontend architecture.",
    tech: ["Angular", "HTML", "CSS", "Bootstrap", "Microfrontend"],
    demo: "https://staging.jnarddc.netoyed.co.in/",
    colors: ["#0ea5e9", "#0284c7", "#38bdf8"],
  },
  {
    title: "BranchX Fintech Platform",
    description: "Enterprise fintech platform with separate Admin, Merchant, and Vendor panels. Real-time analytics dashboards.",
    tech: ["React", "Angular", "TypeScript", "ApexCharts", "NgRx"],
    demo: "#",
    colors: ["#7c3aed", "#6366f1", "#818cf8"],
  },
  {
    title: "Hatrik Marketplace",
    description: "Full-featured e-commerce marketplace with inventory tracking, order management, and advanced analytics.",
    tech: ["Angular", "NgRx", "PrimeNG", "Node.js", "Stripe"],
    demo: "#",
    colors: ["#a855f7", "#ec4899", "#f472b6"],
  },
  {
    title: "Punchin Insurance Platform",
    description: "Insurance management platform with policy tracking, claims processing, and customer portals.",
    tech: ["React", "TypeScript", "Redux", "Tailwind CSS", "Node.js"],
    demo: "#",
    colors: ["#ec4899", "#f43f5e", "#fb7185"],
  },
  {
    title: "Pandostore E-Commerce",
    description: "Full-featured e-commerce platform with payment gateway integrations, mobile-first responsive design.",
    tech: ["Angular", "Bootstrap", "Payment Gateways", "RxJS", "Node.js"],
    demo: "#",
    colors: ["#10b981", "#059669", "#34d399"],
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Card Container */}
      <div className="relative h-72 rounded-3xl overflow-hidden">
        {/* Animated Blob Background */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `linear-gradient(135deg, ${project.colors[0]}15, ${project.colors[1]}10, ${project.colors[2]}20)`,
          }}
        >
          {/* Floating Blobs */}
          <motion.div
            className="absolute w-32 h-32 rounded-full blur-3xl"
            style={{ background: project.colors[0], left: "10%", top: "10%" }}
            animate={{
              x: isHovered ? [0, 30, -20, 0] : [0, 10, -10, 0],
              y: isHovered ? [0, -20, 30, 0] : [0, -10, 10, 0],
              scale: isHovered ? [1, 1.2, 0.9, 1] : [1, 1.1, 1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-40 h-40 rounded-full blur-3xl"
            style={{ background: project.colors[1], right: "5%", bottom: "10%" }}
            animate={{
              x: isHovered ? [0, -25, 15, 0] : [0, -8, 8, 0],
              y: isHovered ? [0, 25, -15, 0] : [0, 12, -12, 0],
              scale: isHovered ? [1, 0.8, 1.1, 1] : [1, 0.95, 1.05, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute w-24 h-24 rounded-full blur-2xl"
            style={{ background: project.colors[2], left: "40%", top: "60%" }}
            animate={{
              x: isHovered ? [0, 20, -15, 0] : [0, 5, -5, 0],
              y: isHovered ? [0, -30, 20, 0] : [0, -8, 8, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Abstract Liquid Shapes */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
            <motion.path
              d="M50,200 Q100,100 200,150 T350,200 Q300,300 200,250 T50,200"
              fill="none"
              stroke={project.colors[0]}
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: isHovered ? [0, 1, 0.8, 1] : 1,
                d: isHovered
                  ? "M50,180 Q120,80 200,140 T380,180 Q320,320 200,280 T50,180"
                  : "M50,200 Q100,100 200,150 T350,200 Q300,300 200,250 T50,200",
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M80,220 Q150,150 220,200 T320,250"
              fill="none"
              stroke={project.colors[1]}
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                d: isHovered
                  ? "M70,200 Q140,120 210,180 T340,220"
                  : "M80,220 Q150,150 220,200 T320,250",
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        </div>

        {/* Glass Overlay */}
        <div className="absolute inset-0 glass backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Project Number with Blob */}
          <motion.div
            className="relative w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
            style={{ background: `${project.colors[0]}30` }}
            whileHover={{ scale: 1.1 }}
          >
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${project.colors[0]}40, transparent)`,
              }}
            />
            <motion.span
              className="text-xl font-bold"
              style={{ color: project.colors[0] }}
            >
              {String(index + 1).padStart(2, '0')}
            </motion.span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-xl font-semibold text-white mb-2"
            animate={{ x: isHovered ? 5 : 0 }}
          >
            {project.title}
          </motion.h3>

          {/* Description - Show on hover */}
          <motion.p
            className="text-sm text-[#a1a1aa] leading-relaxed flex-grow"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.6 }}
          >
            {project.tech.slice(0, 3).map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: `${project.colors[i % 3]}20`,
                  color: project.colors[i % 3],
                  border: `1px solid ${project.colors[i % 3]}40`,
                }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-3 py-1 rounded-full text-xs text-[#71717a]">
                +{project.tech.length - 3}
              </span>
            )}
          </motion.div>

          {/* Demo Button */}
          <motion.a
            href={project.demo}
            className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-white transition-all"
            style={{
              background: `linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]})`,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            whileHover={{ scale: 1.02, boxShadow: `0 10px 30px ${project.colors[0]}40` }}
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </motion.a>
        </div>

        {/* Border Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            border: `1px solid transparent`,
          }}
          animate={{
            borderColor: isHovered
              ? `${project.colors[0]}50`
              : "transparent",
            boxShadow: isHovered
              ? `inset 0 0 30px ${project.colors[0]}10, 0 0 40px ${project.colors[0]}20`
              : "none",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full blur-[150px]" style={{ background: "#7c3aed10", top: "20%", left: "-10%" }} />
        <div className="absolute w-80 h-80 rounded-full blur-[120px]" style={{ background: "#a855f710", bottom: "10%", right: "-5%" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ background: "#7c3aed20", color: "#a855f7" }}
          >
            My Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto text-lg">
            A collection of projects showcasing frontend excellence
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
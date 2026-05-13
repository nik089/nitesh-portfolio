"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import StackIcon from "tech-stack-icons";

// Custom SVG Icons for icons not available in tech-stack-icons
const CustomIcons = {
  AngularMaterial: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#e91e63">
      <path d="M12 2L4 5v14l8 3 8-3V5l-8-3zm0 2.5l5.5 1.7L12 7.5 6.5 6.2 12 4.5zM6 8.5l5 2.1v7.7l-5-1.7V8.5zm12 7.7V10.6l5-2.1v7.7l-5 1.7z" />
    </svg>
  ),
  PrimeNG: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#dd0031">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  NgRx: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#ba2bd2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  MicroFrontend: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#7c3aed">
      <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm8-2h8v8h-8v-8zm2 2v4h4v-4h-4z" />
    </svg>
  ),
  ComponentDesign: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#6366f1">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
      <path d="M7 7h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z" />
    </svg>
  ),
  DesignSystems: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#8b5cf6">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
  SPA: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#a855f7">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" fill="#0a0a0f" />
    </svg>
  ),
  AngularSignals: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#dd0031">
      <path d="M12 2L2 12l10 10 10-10L12 2zm0 3l7 7-7 7-7-7 7-7z" />
    </svg>
  ),
  GitHubActions: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2088ff">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" fill="#fff" />
    </svg>
  ),
  CI: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#7c3aed">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Jasmine: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#8a418e">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Karma: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#32c0a4">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 15l-5-2.5-5 2.5L12 17z" />
    </svg>
  ),
  SonarQube: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4e9bca">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" fill="#0a0a0f" />
    </svg>
  ),
  UnitTesting: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#6366f1">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
};

// Map tech names to icon names from tech-stack-icons
const iconMap: Record<string, string> = {
  Angular: "angular",
  React: "reactjs",
  "Next.js": "nextjs",
  TypeScript: "typescript",
  JavaScript: "js",
  "Tailwind CSS": "tailwindcss",
  Bootstrap: "bootstrap",
  Git: "git",
  Docker: "docker",
  Jenkins: "jenkins",
  Redux: "redux",
  RxJS: "rxjs",
};

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Angular", iconName: "angular", color: "#dd0031" },
      { name: "React", iconName: "reactjs", color: "#61dafb" },
      { name: "Next.js", iconName: "nextjs", color: "#ffffff" },
      { name: "TypeScript", iconName: "typescript", color: "#3178c6" },
      { name: "JavaScript", iconName: "js", color: "#f7df1e" },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", iconName: "tailwindcss", color: "#38bdf8" },
      { name: "Angular Material", iconName: "angularmaterial", color: "#e91e63" },
      { name: "Bootstrap", iconName: "bootstrap5", color: "#7952b3" },
      { name: "PrimeNG", iconName: "primeng", color: "#dd0031" },
    ],
  },
  {
    title: "Architecture",
    skills: [
      { name: "Micro-Frontend", iconName: "microfrontend", color: "#7c3aed" },
      { name: "Component Design", iconName: "componentdesign", color: "#6366f1" },
      { name: "Design Systems", iconName: "designsystems", color: "#8b5cf6" },
      { name: "SPA", iconName: "spa", color: "#a855f7" },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "RxJS", iconName: "rxjs", color: "#b7178c" },
      { name: "NgRx", iconName: "ngrx", color: "#ba2bd2" },
      { name: "Redux", iconName: "redux", color: "#764abc" },
      { name: "Angular Signals", iconName: "angularsignals", color: "#dd0031" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", iconName: "git", color: "#f05032" },
      { name: "GitHub Actions", iconName: "githubactions", color: "#2088ff" },
      { name: "Jenkins", iconName: "jenkins", color: "#d33833" },
      { name: "Docker", iconName: "docker", color: "#2496ed" },
      { name: "CI/CD", iconName: "cicd", color: "#7c3aed" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Jasmine", iconName: "jasmine", color: "#8a418e" },
      { name: "Karma", iconName: "karma", color: "#32c0a4" },
      { name: "SonarQube", iconName: "sonarqube", color: "#4e9bca" },
      { name: "Unit Testing", iconName: "unittesting", color: "#6366f1" },
    ],
  },
];

// Map for custom icons
const customIconMap: Record<string, () => JSX.Element> = {
  angularmaterial: CustomIcons.AngularMaterial,
  // primeng: CustomIcons.PrimeNG,
  ngrx: CustomIcons.NgRx,
  microfrontend: CustomIcons.MicroFrontend,
  componentdesign: CustomIcons.ComponentDesign,
  designsystems: CustomIcons.DesignSystems,
  // spa: CustomIcons.SPA,
  angularsignals: CustomIcons.AngularSignals,
  githubactions: CustomIcons.GitHubActions,
  cicd: CustomIcons.CI,
  jasmine: CustomIcons.Jasmine,
  karma: CustomIcons.Karma,
  sonarqube: CustomIcons.SonarQube,
  unittesting: CustomIcons.UnitTesting,
};

function SkillBadge({ name, iconName, color }: { name: string; iconName: string; color: string }) {
  // Check if it's a custom icon
  const CustomIcon = customIconMap[iconName];

  return (
    <motion.span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 cursor-default",
        "bg-[#0f0f14] border border-white/10 hover:border-[#7c3aed]/50"
      )}
      style={{ borderColor: color + "40" } as React.CSSProperties}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <span className="flex-shrink-0" style={{ color }}>
        {CustomIcon ? (
          <CustomIcon />
        ) : (
          <StackIcon name={iconName as any} className="w-4 h-4" variant="dark" />
        )}
      </span>
      <span className="relative z-10">{name}</span>
    </motion.span>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tech <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto text-sm">
            A comprehensive toolkit built over 4+ years of frontend development
          </p>
          <div className="w-16 h-0.5 mx-auto mt-4 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-xl p-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="text-sm font-semibold mb-3 text-[#a1a1aa]">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    iconName={skill.iconName}
                    color={skill.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
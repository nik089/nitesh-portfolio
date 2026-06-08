"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import StackIcon from "tech-stack-icons";
import {
  SiAngular, SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiRedux, SiRxdb, SiWebpack, SiVite, SiBabel,
  SiJest, SiTestinglibrary, SiJasmine,
  SiFigma, SiNpm, SiGit, SiGithubcopilot, SiOpenai,
  SiDocker, SiStorybook,
  SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiPrimeng,
  SiJenkins, SiJira, SiBitbucket, SiGitlab, SiGithub,
} from "react-icons/si";
import { VscVscode, VscTerminalBash } from "react-icons/vsc";
import { TbBrandGoogle, TbAccessible, TbPalette, TbComponents, TbBrandFramerMotion, TbGitBranch, TbRefresh } from "react-icons/tb";

type SkillItem = {
  name: string;
  icon: React.ReactNode;
};

const skillCategories: { key: string; label: string; items: SkillItem[] }[] = [
  {
    key: "frontend",
    label: "Frontend",
    items: [
      { name: "Angular", icon: <SiAngular color="#DD0031" className="h-5 w-5" /> },
      { name: "React.js", icon: <SiReact color="#61DAFB" className="h-5 w-5" /> },
      { name: "Next.js", icon: <SiNextdotjs color="#ffffff" className="h-5 w-5" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" className="h-5 w-5" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" className="h-5 w-5" /> },
    ],
  },
  {
    key: "webdesign",
    label: "Web Design",
    items: [
      { name: "HTML5", icon: <SiHtml5 color="#E34F26" className="h-5 w-5" /> },
      { name: "CSS3", icon: <SiCss color="#1572B6" className="h-5 w-5" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" className="h-5 w-5" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" className="h-5 w-5" /> },
      { name: "UX4G", icon: <TbComponents color="#00d4ff" className="h-5 w-5" /> },
      { name: "Angular Material", icon: <SiAngular color="#3F51B5" className="h-5 w-5" /> },
      { name: "PrimeNG", icon: <SiPrimeng color="#DD0031" className="h-5 w-5" /> },
    ],
  },
  {
    key: "state",
    label: "State Management",
    items: [
      { name: "Redux Toolkit", icon: <SiRedux color="#764ABC" className="h-5 w-5" /> },
      { name: "Context API", icon: <SiReact color="#61DAFB" className="h-5 w-5" /> },
      { name: "RxJS", icon: <SiRxdb color="#B7178C" className="h-5 w-5" /> },
      { name: "NgRx", icon: <SiAngular color="#BA2BD2" className="h-5 w-5" /> },
    ],
  },
  {
    key: "build",
    label: "Build Tools",
    items: [
      { name: "Webpack", icon: <SiWebpack color="#8DD6F9" className="h-5 w-5" /> },
      { name: "Vite", icon: <SiVite color="#646CFF" className="h-5 w-5" /> },
      { name: "Babel", icon: <SiBabel color="#F9DC3E" className="h-5 w-5" /> },
      { name: "ESBuild", icon: <SiVite color="#FFCF00" className="h-5 w-5" /> },
    ],
  },
  {
    key: "testing",
    label: "Testing",
    items: [
      { name: "Unit Testing", icon: <Check color="#34D399" className="h-5 w-5" /> },
      { name: "Jasmine", icon: <SiJasmine color="#8A4182" className="h-5 w-5" /> },
      { name: "Karma", icon: <SiAngular color="#56C5A0" className="h-5 w-5" /> },
      { name: "SonarQube", icon: <TbBrandFramerMotion color="#f37021" className="h-5 w-5" /> },
    ],
  },
  {
    key: "tools",
    label: "Tools",
    items: [
      { name: "VS Code", icon: <VscVscode color="#007ACC" className="h-5 w-5" /> },
      { name: "Figma", icon: <SiFigma color="#F24E1E" className="h-5 w-5" /> },
      { name: "npm", icon: <SiNpm color="#CB3837" className="h-5 w-5" /> },
      { name: "MCP Servers", icon: <VscTerminalBash color="#00d4ff" className="h-5 w-5" /> },
    ],
  },
  {
    key: "ai",
    label: "AI Tools",
    items: [
      { name: "GitHub Copilot", icon: <SiGithubcopilot color="#ffffff" className="h-5 w-5" /> },
      { name: "Claude", icon: <VscTerminalBash color="#D97757" className="h-5 w-5" /> },
      { name: "OpenAI Codex", icon: <SiOpenai color="#412991" className="h-5 w-5" /> },
      { name: "Gemini", icon: <TbBrandGoogle color="#4285F4" className="h-5 w-5" /> },
    ],
  },
  {
    key: "devops",
    label: "DevOps & Workflow",
    items: [
      { name: "Jenkins", icon: <SiJenkins color="#D24939" className="h-5 w-5" /> },
      { name: "Docker", icon: <SiDocker color="#2496ED" className="h-5 w-5" /> },
      { name: "Jira", icon: <SiJira color="#0052CC" className="h-5 w-5" /> },
      { name: "Agile Methodology", icon: <TbRefresh color="#34D399" className="h-5 w-5" /> },
      { name: "SDLC", icon: <TbGitBranch color="#A78BFA" className="h-5 w-5" /> },
      { name: "Git", icon: <SiGit color="#F05032" className="h-5 w-5" /> },
      { name: "GitHub", icon: <SiGithub color="#ffffff" className="h-5 w-5" /> },
      { name: "Bitbucket", icon: <SiBitbucket color="#0052CC" className="h-5 w-5" /> },
      { name: "GitLab", icon: <SiGitlab color="#FC6D26" className="h-5 w-5" /> },
    ],
  },
];

export default function SkillsSection() {
  const [activeKey, setActiveKey] = useState(skillCategories[0].key);
  const active = skillCategories.find((c) => c.key === activeKey) ?? skillCategories[0];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag">// Skills</span>
          <h2 className="mt-6 font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
            Technologies I Master
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--text-secondary)]">
            Government Design Systems • Accessibility Engineering • Enterprise UX • Component Libraries • Design Tokens • Frontend Architecture
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="terminal-window mx-auto w-full max-w-4xl"
        >
          <div className="terminal-header justify-between">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-[#ff5f57]" />
              <span className="terminal-dot bg-[#febc2e]" />
              <span className="terminal-dot bg-[#28c840]" />
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">nitesh@dev ~ skills</span>
            <span className="w-16" />
          </div>

          <div className="relative z-10 px-5 py-5">
            {/* Category tabs */}
            <div className="mb-5 flex flex-wrap gap-2">
              {skillCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveKey(cat.key)}
                  className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-all ${activeKey === cat.key
                    ? "bg-[var(--primary)] text-[#0a0a0f] font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-secondary)] border border-[var(--border)]"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <p className="font-mono text-xs text-[var(--accent)] mb-4">
              $ apt list --installed | grep {active.label.toLowerCase().replace(/\s+/g, "-")}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-2"
              >
                {active.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-4 py-3 group hover:border-[rgba(0,212,255,0.15)] transition-all"
                  >
                    {/* Colorful icon */}
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="font-mono text-sm text-[var(--text-primary)]">{item.name}</span>
                    <Check className="h-4 w-4 text-[var(--accent)] ml-auto" />
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">installed</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

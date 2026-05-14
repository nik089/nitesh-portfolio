# Terminal-Style Project Cards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the project section cards in ProjectsSection.tsx from glassmorphism with animated blobs to a classic CRT terminal aesthetic with purple phosphor accents.

**Architecture:** Modify the existing ProjectCard component structure - remove animated blob backgrounds and glass overlay, add terminal header bar with project numbering, scan line effects, and monospace typography. Use CSS utilities for CRT effects.

**Tech Stack:** React, Next.js, Framer Motion, Tailwind CSS, JetBrains Mono (already loaded)

---

### Task 1: Add Terminal CSS Utilities

**Files:**
- Modify: `src/app/globals.css:104-114`

- [ ] **Step 1: Add terminal CRT utilities to globals.css**

Add these utilities after the existing custom scrollbar styles:

```css
/* CRT Terminal Effects */
.terminal-scanlines {
  position: relative;
}

.terminal-scanlines::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  opacity: 0.3;
}

.phosphor-glow {
  text-shadow: 0 0 8px rgba(124, 58, 237, 0.6), 0 0 16px rgba(124, 58, 237, 0.3);
}

.phosphor-glow-subtle {
  text-shadow: 0 0 4px rgba(124, 58, 237, 0.4);
}

.terminal-cursor-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.terminal-flicker {
  animation: flicker 0.15s infinite;
}

@keyframes flicker {
  0% { opacity: 0.97; }
  50% { opacity: 1; }
  100% { opacity: 0.98; }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add CRT terminal CSS utilities"
```

---

### Task 2: Transform ProjectCard Component

**Files:**
- Modify: `src/components/projects/ProjectsSection.tsx:66-261`

- [ ] **Step 1: Replace ProjectCard component structure**

Replace the entire ProjectCard function (lines 71-261) with this terminal-style version:

```tsx
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
      className="relative group font-mono"
    >
      {/* Terminal Window Container */}
      <div className="relative h-72 rounded-lg overflow-hidden border border-[#7c3aed30] bg-[#0a0a0f] terminal-scanlines terminal-flicker">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#0f0f14] border-b border-[#7c3aed20]">
          <div className="flex items-center gap-2">
            {/* Terminal dots */}
            <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
          </div>
          <div className="text-xs text-[#7c3aed] phosphor-glow-subtle">
            PROJECT_{String(index + 1).padStart(2, '0')}
          </div>
          <div className="w-12" /> {/* Spacer for alignment */}
        </div>

        {/* Terminal Content Area */}
        <div className="p-4 h-[calc(100%-40px)] flex flex-col">
          {/* Prompt Line */}
          <div className="text-xs text-[#71717a] mb-2">
            <span className="text-[#7c3aed]">$</span> ./project-info.sh
          </div>

          {/* Project Title */}
          <motion.h3
            className={`text-lg font-semibold mb-2 ${isHovered ? 'phosphor-glow text-[#a855f7]' : 'text-white'}`}
            animate={{ x: isHovered ? 5 : 0 }}
          >
            {project.title}
          </motion.h3>

          {/* Description - Terminal output style */}
          <motion.p
            className="text-sm text-[#71717a] leading-relaxed flex-grow font-mono"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            <span className="text-[#7c3aed] mr-2">></span>
            {project.description}
          </motion.p>

          {/* Tech Stack - Terminal flag style */}
          <motion.div
            className="flex flex-wrap gap-2 mt-3"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.6 }}
          >
            {project.tech.slice(0, 3).map((tech, i) => (
              <motion.span
                key={tech}
                className="px-2 py-1 rounded text-xs font-mono border"
                style={{
                  background: `${project.colors[i % 3]}10`,
                  color: project.colors[i % 3],
                  borderColor: `${project.colors[i % 3]}40`,
                }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 rounded text-xs font-mono text-[#52525b] border border-[#52525b]">
                +{project.tech.length - 3}
              </span>
            )}
          </motion.div>

          {/* Demo Button - Terminal command style */}
          <motion.a
            href={project.demo}
            className="mt-3 flex items-center justify-center gap-2 py-2 rounded text-sm font-mono transition-all border"
            style={{
              borderColor: isHovered ? '#7c3aed' : '#7c3aed40',
              color: isHovered ? '#a855f7' : '#7c3aed',
              background: isHovered ? '#7c3aed10' : 'transparent',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 5 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="terminal-cursor-blink">{'>'}</span>
            <span>VIEW</span>
            <span className="text-[#7c3aed]">project</span>
          </motion.a>
        </div>

        {/* Border Glow Effect - Terminal active state */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ border: '1px solid transparent' }}
          animate={{
            borderColor: isHovered ? '#7c3aed60' : '#7c3aed20',
            boxShadow: isHovered ? 'inset 0 0 20px #7c3aed15, 0 0 30px #7c3aed10' : 'none',
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/projects/ProjectsSection.tsx
git commit -m "feat: transform project cards to terminal CRT aesthetic"
```

---

### Task 3: Verify Implementation

**Files:**
- Verify: `src/components/projects/ProjectsSection.tsx`
- Verify: `src/app/globals.css`

- [ ] **Step 1: Check component renders without errors**

Run the development server and verify no console errors:
```bash
npm run dev
```

- [ ] **Step 2: Verify visual elements**

In the running app, check:
- Terminal header bar with project numbers (PROJECT_01, etc.)
- Purple phosphor glow on hover
- Scan line effect visible
- Monospace font applied (JetBrains Mono)
- Terminal-style button with `> VIEW project`

- [ ] **Step 3: Commit verification**

```bash
git commit --allow-empty -m "chore: verify terminal project cards implementation"
```

---

**Plan complete.** 

The implementation covers:
1. CRT terminal CSS utilities (scanlines, phosphor glow, cursor blink, flicker)
2. Complete ProjectCard transformation with terminal window structure
3. Verification steps

Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
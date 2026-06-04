"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Rocket, Building2, Zap } from "lucide-react";

const stats = [
  { icon: Clock, value: 4, suffix: "+", label: "Years Experience", color: "text-[var(--primary)]" },
  { icon: Rocket, value: 20, suffix: "+", label: "Projects Completed", color: "text-[var(--secondary)]" },
  { icon: Building2, value: 5, suffix: "+", label: "Government Projects", color: "text-[var(--accent)]" },
  { icon: Zap, value: 10, suffix: "+", label: "Technologies", color: "text-[#f59e0b]" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative px-6 py-8">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass group rounded-2xl px-6 py-8 text-center transition-all duration-300 hover:border-[rgba(0,212,255,0.15)]"
            >
              <Icon className={`mx-auto h-5 w-5 ${item.color}`} />
              <div className="mt-4">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </div>
              <p className="mt-2 font-mono text-xs text-[var(--text-muted)]">{item.label}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

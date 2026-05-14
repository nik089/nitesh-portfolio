"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { contact } from "@/lib/portfolio-content";

const quickLinks = [
  {
    label: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/919457181747`,
    icon: MessageCircle,
  },
  {
    label: contact.location,
    href: undefined,
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: `https://${contact.github}`,
    icon: Github,
    color: "hover:text-[#f05032]",
  },
  {
    label: "LinkedIn",
    href: `https://${contact.linkedin}`,
    icon: Linkedin,
    color: "hover:text-[#0077b5]",
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      window.setTimeout(() => setIsSubmitted(false), 2800);
    }, 1200);
  };

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">// Contact</span>
          <h2 className="terminal-title mt-7 text-4xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            {contact.subheading}
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {quickLinks.map((item) => (
            <QuickChip key={item.label} {...item} />
          ))}
          {socialLinks.map((item) => (
            <QuickChip key={item.label} {...item} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="terminal-window w-full rounded-[32px] text-left"
        >
          <div className="terminal-header justify-between">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-[#ff6057]" />
              <span className="terminal-dot bg-[#ffbd2f]" />
              <span className="terminal-dot bg-[#28c840]" />
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              contact_form.sh
            </span>
            <span className="w-12" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 px-6 py-7 sm:px-8 sm:py-8">
            <Field
              id="name"
              label="$ name"
              placeholder="your_name"
              value={formState.name}
              onChange={(value) => setFormState((current) => ({ ...current, name: value }))}
            />
            <Field
              id="email"
              label="$ email"
              placeholder="your@email.com"
              value={formState.email}
              onChange={(value) => setFormState((current) => ({ ...current, email: value }))}
              type="email"
            />
            <Field
              id="message"
              label="$ message"
              placeholder="Tell me about your project..."
              value={formState.message}
              onChange={(value) => setFormState((current) => ({ ...current, message: value }))}
              textarea
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[var(--primary)] px-6 py-4 font-mono text-sm font-semibold text-[#0A1931] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitted ? (
                <>
                  <Check className="h-4 w-4" />
                  Message queued
                </>
              ) : isSubmitting ? (
                <>
                  <Send className="h-4 w-4 animate-pulse" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  $ ./submit
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function QuickChip({
  label,
  href,
  icon: Icon,
  color,
}: {
  label: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  color?: string;
}) {
  const content = (
    <span className={`terminal-chip terminal-chip-muted transition-colors ${color || ""}`}>
      <Icon className="h-4 w-4 text-[var(--primary)]" />
      {label}
    </span>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  textarea,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
  type?: "text" | "email";
}) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-3 block font-mono text-sm text-[var(--text-secondary)]">
        {label}
      </span>
      {textarea ? (
        <textarea
          id={id}
          rows={6}
          required
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="min-h-[180px] w-full rounded-2xl border border-[var(--border)] bg-[rgba(26,61,99,0.9)] px-4 py-4 text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[rgba(179,207,229,0.28)]"
        />
      ) : (
        <input
          id={id}
          type={type}
          required
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-[var(--border)] bg-[rgba(26,61,99,0.9)] px-4 py-4 text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[rgba(179,207,229,0.28)]"
        />
      )}
    </label>
  );
}

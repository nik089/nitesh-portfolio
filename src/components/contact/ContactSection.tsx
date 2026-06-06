"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Github, Linkedin, Mail, MapPin, Send, Download, MessageCircle, AlertCircle } from "lucide-react";

// Web3Forms access key — get yours free at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Portfolio Contact: ${formState.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      // Fallback to mailto if Web3Forms API fails
      const mailtoUrl = `mailto:Nikyadav085@gmail.com?subject=${encodeURIComponent(`Portfolio Contact from ${formState.name}`)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
      window.location.href = mailtoUrl;
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 4000);
    }

    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = formState.message
      ? `Hi Nitesh, I'm ${formState.name || "someone"}. ${formState.message}`
      : "Hi Nitesh, I visited your portfolio and would like to connect!";
    window.open(`https://wa.me/919457181747?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="section-tag">// Contact</span>
          <h2 className="mt-6 font-heading text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-base text-[var(--text-secondary)]">
            Have a project in mind? Let&apos;s build something scalable and meaningful together.
          </p>
        </motion.div>

        {/* Quick links */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="https://wa.me/919457181747?text=Hi%20Nitesh%2C%20I%20visited%20your%20portfolio!" target="_blank" rel="noreferrer"
            className="terminal-chip hover:border-[rgba(37,211,102,0.4)] hover:bg-[rgba(37,211,102,0.05)]">
            <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />WhatsApp
          </a>
          <a href="mailto:Nikyadav085@gmail.com" className="terminal-chip hover:border-[rgba(0,212,255,0.3)]">
            <Mail className="h-3.5 w-3.5 text-[var(--primary)]" />Nikyadav085@gmail.com
          </a>
          <a href="https://github.com/nik089" target="_blank" rel="noreferrer" className="terminal-chip hover:border-[rgba(0,212,255,0.3)]">
            <Github className="h-3.5 w-3.5 text-[var(--text-secondary)]" />GitHub
          </a>
          <a href="https://linkedin.com/in/niteshydv7" target="_blank" rel="noreferrer" className="terminal-chip hover:border-[rgba(0,119,181,0.3)]">
            <Linkedin className="h-3.5 w-3.5 text-[#0077b5]" />LinkedIn
          </a>
          <span className="terminal-chip">
            <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />Delhi, India
          </span>
          <a href="mailto:Nikyadav085@gmail.com?subject=Resume%20Request" className="terminal-chip hover:border-[rgba(52,211,153,0.3)]">
            <Download className="h-3.5 w-3.5 text-[var(--accent)]" />Resume
          </a>
        </div>

        {/* Terminal Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="terminal-window w-full"
        >
          <div className="terminal-header justify-between">
            <div className="flex items-center gap-2">
              <span className="terminal-dot bg-[#ff5f57]" />
              <span className="terminal-dot bg-[#febc2e]" />
              <span className="terminal-dot bg-[#28c840]" />
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">send_message.sh</span>
            <span className="w-12" />
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-5 px-5 py-6">
            <p className="font-mono text-xs text-[var(--accent)]">$ send-message --to nitesh@nikyadav085@gmail.com</p>

            <div>
              <label className="block font-mono text-xs text-[var(--text-muted)] mb-2">$ name:</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                placeholder="your_name"
                className="w-full rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-4 py-3 font-mono text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[rgba(0,212,255,0.3)]"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-[var(--text-muted)] mb-2">$ email:</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-4 py-3 font-mono text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[rgba(0,212,255,0.3)]"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-[var(--text-muted)] mb-2">$ message:</label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                placeholder="Tell me about your project..."
                className="w-full rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-4 py-3 font-mono text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[rgba(0,212,255,0.3)] resize-none"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-xs text-red-400">
                <AlertCircle className="h-3.5 w-3.5" />{error}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="magnetic-btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[#7dd3fc] px-6 py-3.5 font-mono text-sm font-semibold text-[#0a0a0f] disabled:opacity-60"
              >
                {isSubmitted ? (
                  <><Check className="h-4 w-4" />Message Sent Successfully!</>
                ) : isSubmitting ? (
                  <><Send className="h-4 w-4 animate-pulse" />Sending...</>
                ) : (
                  <><Send className="h-4 w-4" />$ ./send-email</>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="magnetic-btn flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-mono text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,211,102,0.2)]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

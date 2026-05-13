"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = {
  github: "github.com/nik089",
  linkedin: "linkedin.com/in/niteshydv7",
  email: "Nikyadav085@gmail.com",
  location: "Noida, India",
};

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s create something amazing together.
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#a1a1aa] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-[#0f0f14] border border-white/10 focus:border-[#7c3aed] outline-none transition-colors text-white placeholder:text-[#52525b]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[#a1a1aa] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0f0f14] border border-white/10 focus:border-[#7c3aed] outline-none transition-colors text-white placeholder:text-[#52525b]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#a1a1aa] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f0f14] border border-white/10 focus:border-[#7c3aed] outline-none transition-colors text-white placeholder:text-[#52525b] resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>

              <div className="space-y-6">
                <ContactItem
                  icon={<Mail className="w-5 h-5" />}
                  label="Email"
                  value={contactInfo.email}
                  href={`mailto:${contactInfo.email}`}
                />
                <ContactItem
                  icon={<FaGithub className="w-5 h-5" />}
                  label="GitHub"
                  value={contactInfo.github}
                  href={`https://${contactInfo.github}`}
                />
                <ContactItem
                  icon={<FaLinkedin className="w-5 h-5" />}
                  label="LinkedIn"
                  value={contactInfo.linkedin}
                  href={`https://${contactInfo.linkedin}`}
                />
                <ContactItem
                  icon={<FaMapMarkerAlt className="w-5 h-5" />}
                  label="Location"
                  value={contactInfo.location}
                />
                <motion.a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#7c3aed]/20 to-[#a855f7]/20 border border-[#7c3aed]/30 hover:border-[#7c3aed]/60 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-lg bg-[#7c3aed]/30 text-[#a855f7]">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#52525b] block">Download</span>
                    <span className="text-white font-medium">Resume</span>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              className="glass rounded-2xl p-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white">Available for Projects</h4>
                <p className="text-sm text-[#a1a1aa]">Typically responds within 24 hours</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0f0f14] border border-white/5 hover:border-[#7c3aed]/30 transition-colors">
      <div className="p-3 rounded-lg bg-[#7c3aed]/20 text-[#7c3aed]">{icon}</div>
      <div>
        <span className="text-xs text-[#52525b] block">{label}</span>
        <span className="text-white font-medium">{value}</span>
      </div>
    </div>
  );

  return href ? (
    <motion.a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </motion.a>
  ) : (
    content
  );
}
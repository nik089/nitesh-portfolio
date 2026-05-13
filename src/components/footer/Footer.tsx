"use client";

import { motion } from "framer-motion";
import { Heart, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const socialLinks = [
  { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/nik089", label: "GitHub", color: "#fafafa" },
  { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/niteshydv7/", label: "LinkedIn", color: "#0a66c2" },
  { icon: <FaEnvelope className="w-5 h-5" />, href: "mailto:nikyadav085@gmail.com", label: "Email", color: "#ea4335" },
  { icon: <FaWhatsapp className="w-5 h-5" />, href: "https://wa.me/919457181747", label: "WhatsApp", color: "#25D366" },
];

const contactInfo = [
  { icon: <Phone className="w-4 h-4" />, text: "+91 9457181747", href: "tel:+919457181747" },
  { icon: <MapPin className="w-4 h-4" />, text: "Greater Noida, India", href: null },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-b from-transparent to-[#7c3aed]/5 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.a
              href="#"
              className="text-3xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Nitesh Yadav
            </motion.a>
            <p className="text-[#a1a1aa] text-sm text-center md:text-left max-w-xs">
Senior Frontend Developer crafting modern web experiences with Angular, React & Next.js.            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-[#a1a1aa] text-sm"
                whileHover={{ x: 5 }}
              >
                <span className="text-[#7c3aed]">{info.icon}</span>
                {info.href ? (
                  <a href={info.href} className="hover:text-[#7c3aed] transition-colors">
                    {info.text}
                  </a>
                ) : (
                  <span>{info.text}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white font-semibold">Connect</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 glass rounded-xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${link.color}20 0%, ${link.color}10 100%)`,
                    border: `1px solid ${link.color}30`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    boxShadow: `0 0 20px ${link.color}40`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span style={{ color: link.color }}>{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-[#52525b] flex items-center gap-1">
            Designed & Developed with
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            by
            <span className="text-[#7c3aed] font-medium">Nitesh</span>
            © {currentYear}
          </p>

          {/* Back to top */}
          <motion.a
            href="#"
            className="text-sm text-[#52525b] hover:text-[#7c3aed] transition-colors flex items-center gap-1"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            whileHover={{ y: -2 }}
          >
            Back to top ↑
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
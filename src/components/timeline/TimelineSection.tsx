"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "Netoyed (Grapes Telecom Pvt Ltd)",
    role: "Senior Frontend Developer (SDE-II)",
    duration: "June 2025 – Present",
    location: "India",
    highlights: [
      "Built WCAG 2.1 accessibility widget for government applications",
      "Developed Audit360 platform for government audits",
      "Architecting UX4G Design System for NeGD (National e-Governance Division)",
      "Leading accessibility-first government-scale UI systems",
    ],
    color: "#7c3aed",
  },
  {
    company: "Antino Labs",
    role: "Frontend Software Developer",
    duration: "May 2023 – April 2025",
    location: "India",
    highlights: [
      "Built comprehensive Admin Panel in Angular",
      "Developed Vendor & Merchant portals in React",
      "Created analytics dashboards with Chart.js and ApexCharts",
      "Implemented multi-role authentication systems",
    ],
    color: "#6366f1",
  },
  {
    company: "Oodles Technologies",
    role: "Associate Frontend Developer",
    duration: "Jan 2022 – Mar 2023",
    location: "India",
    highlights: [
      "Built mobile-first web applications",
      "Integrated payment systems (Stripe, MetaMask)",
      "Developed Angular ecosystem applications",
      "Optimized application performance and SEO",
    ],
    color: "#8b5cf6",
  },
];

export default function TimelineSection() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto">
            4+ years of building impactful web solutions
          </p>
          <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7c3aed] via-[#6366f1] to-transparent" />

          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div
                className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2"
                style={{ backgroundColor: exp.color, boxShadow: `0 0 20px ${exp.color}` }}
              />

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <motion.div
                  className="glass rounded-2xl p-6 h-full"
                  whileHover={{ scale: 1.02, borderColor: exp.color + "60" }}
                  style={{ borderColor: exp.color + "30" }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: exp.color + "20" }}
                    >
                      <Briefcase className="w-5 h-5" style={{ color: exp.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                      <p className="text-[#7c3aed] font-medium">{exp.role}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#52525b]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#a1a1aa] text-sm">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: exp.color }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Atomity GmbH",
      role: "SDE Intern",
      period: "March 2026 – Present",
      location: "Remote, Germany",
      stack: ["Java", "Spring Boot", "Kubernetes", "Redis", "NATS", "CI/CD", "Multi-Cloud"],
      highlights: [
        "Building a multi-cloud orchestration engine to automate deployments across providers.",
        "Achieved a 30% reduction in cloud infrastructure costs through optimized resource scheduling.",
        "Cut deployment effort by 70% while maintaining 99% uptime.",
      ],
      current: true,
    },
    {
      id: 2,
      company: "NeoMegaOne",
      role: "SDE Intern",
      period: "Jan 2026 – Feb 2026",
      location: "Remote, Pune",
      stack: ["Python", "Node.js", "React", "PostgreSQL", "AWS"],
      highlights: [
        "Developed a scalable fundraising platform for the ASAP Kerala Government initiative.",
        "Managed end-to-end deployment and configuration on AWS infrastructure.",
      ],
      current: false,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            Work Experience
          </h2>
          <div className="mt-4 h-1 w-20 bg-zinc-900 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-zinc-100"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-12 md:pl-24 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[11px] md:left-[27px] top-8 h-3.5 w-3.5 rounded-full border-2 border-white shadow-sm ${
                  exp.current ? "bg-zinc-900 ring-4 ring-zinc-200" : "bg-zinc-300"
                }`}
              ></div>

              {/* Card */}
              <div
                className={`p-6 md:p-8 rounded-3xl transition-all duration-300 ${
                  exp.current
                    ? "bg-white border border-zinc-200 shadow-xl shadow-zinc-900/5 ring-1 ring-zinc-900/5"
                    : "bg-white/50 border border-zinc-100 shadow-sm hover:shadow-md hover:bg-white"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 flex flex-wrap items-center gap-3">
                      {exp.company}
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 text-zinc-800">
                        {exp.role}
                      </span>
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">{exp.location}</p>
                  </div>
                  <div className="text-sm font-medium text-zinc-500 whitespace-nowrap bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100 w-fit shrink-0">
                    {exp.period}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800 text-white shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 text-zinc-600">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-zinc-400 mt-1.5 leading-none shrink-0 text-sm">✦</span>
                      <span className="text-sm md:text-base leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

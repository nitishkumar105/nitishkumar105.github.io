"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Zap, Gauge, ArrowDownToLine, Box, ArrowRight } from "lucide-react";
import Image from "next/image";

const Github = ({ size = 24 }: { size?: number }) => (
  <div style={{ width: size, height: size }} className="relative opacity-80 hover:opacity-100 transition-opacity">
    <Image src="/github.png" alt="GitHub" fill sizes={`${size}px`} className="object-contain" />
  </div>
);

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Multi-Tenant Cost Tracking API",
      tagline: "Scalable backend architecture for multitenant cost management and reporting.",
      stack: [
        { name: "Java", color: "bg-orange-500/10 text-orange-400 border border-orange-500/20" },
        { name: "Spring Boot", color: "bg-green-500/10 text-green-400 border border-green-500/20" },
        { name: "PostgreSQL", color: "bg-blue-500/10 text-blue-400 border border-blue-500/20" },
        { name: "Docker", color: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" },
        { name: "Jenkins", color: "bg-red-500/10 text-red-400 border border-red-500/20" },
        { name: "AWS", color: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" },
      ],
      metrics: [
        { icon: <Server size={18} />, label: "15+ REST endpoints with RBAC" },
        { icon: <ShieldCheck size={18} />, label: "Robust JWT Security" },
        { icon: <Zap size={18} />, label: "35% Query Optimization" },
        { icon: <Gauge size={18} />, label: "60% Faster CI/CD Pipeline" },
      ],
      github: "https://github.com/nitishkumar105",
    },
    {
      id: 2,
      name: "Production CI/CD Pipeline",
      tagline: "Automated cloud deployment system with zero-downtime release strategy.",
      stack: [
        { name: "Spring Boot", color: "bg-green-500/10 text-green-400 border border-green-500/20" },
        { name: "Docker", color: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" },
        { name: "Jenkins", color: "bg-red-500/10 text-red-400 border border-red-500/20" },
        { name: "NGINX", color: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" },
        { name: "AWS EC2", color: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" },
      ],
      metrics: [
        { icon: <ArrowDownToLine size={18} />, label: "Deploy Time cut 45min → 8min" },
        { icon: <Zap size={18} />, label: "Blue-Green Zero-Downtime" },
        { icon: <Box size={18} />, label: "60% Smaller Docker Images" },
        { icon: <Gauge size={18} />, label: "1000+ req/min via NGINX" },
      ],
      github: "https://github.com/nitishkumaryadav105", // placeholder
    },
  ];

  return (
    <section className="py-24 bg-[#fafafa]" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mt-4 h-1 w-20 bg-zinc-900 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-xl hover:shadow-2xl hover:shadow-zinc-400/20 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
            >
              {/* Subtle ambient glow effect */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Top: Name & Tagline */}
              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Middle: Metrics */}
              <div className="space-y-4 mb-10 flex-grow relative z-10">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-4 text-zinc-300">
                    <div className="p-2 rounded-lg bg-zinc-800 text-zinc-400 shadow-inner">
                      {metric.icon}
                    </div>
                    <span className="text-[15px] font-medium tracking-wide text-zinc-200">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Bottom: Stack & GitHub */}
              <div className="mt-auto pt-6 border-t border-zinc-800 flex flex-col gap-6 relative z-10">
                <div className="flex flex-wrap gap-2.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech.name}
                      className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between w-full md:w-auto self-start px-5 py-2.5 rounded-full bg-zinc-800 text-white hover:bg-white hover:text-zinc-900 transition-all duration-300 text-sm font-semibold shadow-sm group/btn"
                >
                  <span className="flex items-center gap-2">
                    <Github size={18} />
                    View Source
                  </span>
                  <ArrowRight size={16} className="opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-2 transition-all duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

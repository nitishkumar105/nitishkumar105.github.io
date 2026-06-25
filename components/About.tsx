"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Cloud, Activity } from "lucide-react";

export default function About() {
  const stats = [
    {
      id: 1,
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      number: "10/10",
      label: "SGPA",
    },
    {
      id: 2,
      icon: <Code2 className="w-6 h-6 text-emerald-500" />,
      number: "1000+",
      label: "LeetCode Solved (Rank 1836)",
    },
    {
      id: 3,
      icon: <Cloud className="w-6 h-6 text-indigo-500" />,
      number: "30%",
      label: "Cloud Cost Reduction",
    },
    {
      id: 4,
      icon: <Activity className="w-6 h-6 text-rose-500" />,
      number: "99%",
      label: "Uptime Maintained",
    },
  ];

  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-zinc-900 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Bio & Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="prose prose-lg text-zinc-600 leading-relaxed text-lg">
              <p>
                I am passionate about backend systems, cloud-native architecture, and DevOps automation. Currently, I am building multi-cloud orchestration at <strong>Atomity GmbH</strong> (Germany, Remote). I thrive on solving complex engineering challenges, ensuring system reliability, and building highly scalable architectures.
              </p>
            </div>

            <div className="bg-white/80 p-8 rounded-3xl shadow-sm border border-zinc-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-zinc-900 transition-colors"></div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                Indian Institute of Information Technology, Bhagalpur
              </h3>
              <p className="text-zinc-600 font-medium mb-1">
                B.Tech in Computer Science and Engineering
              </p>
              <p className="text-zinc-500 text-sm mb-5">
                Nov 2022 – May 2026
              </p>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-900 font-semibold text-sm border border-zinc-200">
                SGPA: 10/10
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-4 bg-zinc-50 rounded-2xl mb-5 shadow-inner">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-extrabold text-zinc-900 mb-2">
                  {stat.number}
                </h4>
                <p className="text-sm text-zinc-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

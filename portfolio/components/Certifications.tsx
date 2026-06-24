"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Trophy } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      name: "AWS DevOps Professional",
      issuer: "Coursera",
      date: "Oct 2025",
    },
    {
      id: 2,
      name: "Oracle Cloud Infrastructure DevOps 2025",
      issuer: "Oracle",
      date: "Nov 2025",
      score: "Score: 88%",
    },
  ];

  const achievements = [
    {
      id: 1,
      highlight: "1000+",
      text: "problems solved on LeetCode & GeeksForGeeks",
    },
    {
      id: 2,
      highlight: "Rank 1836",
      text: "globally — LeetCode Biweekly Contest 161",
    },
    {
      id: 3,
      highlight: "1600+",
      text: "rating on LeetCode and CodeChef",
    },
  ];

  return (
    <section className="py-24 bg-[#fafafa]" id="certifications">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            Certifications & Achievements
          </h2>
          <div className="mt-4 h-1 w-20 bg-zinc-900 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
              <Award className="text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
                >
                  <div className="p-3 bg-zinc-50 rounded-xl shrink-0 border border-zinc-100 shadow-inner">
                    <Award size={24} className="text-zinc-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-1.5 leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-sm font-medium text-zinc-500 mb-4">
                      {cert.issuer}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-zinc-100 text-zinc-700">
                        {cert.date}
                      </span>
                      {cert.score && (
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                          {cert.score}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
              <Trophy className="text-emerald-500" />
              Achievements
            </h3>
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm">
              <ul className="space-y-8">
                {achievements.map((item) => (
                  <li key={item.id} className="flex items-start gap-5 group">
                    <div className="mt-1 bg-emerald-100 rounded-full p-1.5 shrink-0 group-hover:scale-110 group-hover:bg-emerald-200 transition-all duration-300 shadow-sm">
                      <CheckCircle size={18} className="text-emerald-600" />
                    </div>
                    <p className="text-zinc-600 leading-relaxed text-[17px]">
                      <span className="font-extrabold text-zinc-900 mr-2 text-lg">
                        {item.highlight}
                      </span>
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

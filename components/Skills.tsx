"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      title: "Frameworks & Architecture",
      skills: ["Node.js", "Express.js", "React.js", "Spring Boot", "REST APIs", "Microservices"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "NGINX", "Grafana", "Linux"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redis"],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const pillVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-white" id="skills">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            Technical Arsenal
          </h2>
          <div className="mt-4 h-1 w-20 bg-zinc-900 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col space-y-5"
            >
              <h3 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                {category.title}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    className="px-4 py-2 text-[14px] font-semibold text-zinc-700 bg-white border border-zinc-200 rounded-xl cursor-default hover:bg-zinc-900 hover:text-white hover:border-zinc-900 hover:shadow-md transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

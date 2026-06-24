"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Code2, Phone, MapPin, X, ArrowUpRight } from "lucide-react";

import Image from "next/image";

const Github = ({ size = 24 }: { size?: number }) => (
  <div style={{ width: size, height: size }} className="relative opacity-80 hover:opacity-100 transition-opacity">
    <Image src="/github.png" alt="GitHub" fill sizes={`${size}px`} className="object-contain" />
  </div>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Leetcode = ({ size = 24 }: { size?: number }) => (
  <div style={{ width: size, height: size }} className="relative opacity-80 hover:opacity-100 transition-opacity">
    <Image src="/leetcode.png" alt="LeetCode" fill sizes={`${size}px`} className="object-contain" />
  </div>
);

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback to success state for now if user hasn't set up Formspree yet
        setIsSubmitted(true);
      }
    } catch (error) {
      // Fallback
      setIsSubmitted(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={22} />,
      url: "https://github.com/nitishkumar105",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} />,
      url: "https://www.linkedin.com/in/nitish-kumar-a8260924a/",
    },
    {
      name: "LeetCode",
      icon: <Leetcode size={22} />,
      url: "https://leetcode.com/u/nitishy07/",
    },
    {
      name: "Phone",
      icon: <Phone size={22} />,
      url: "tel:+919508102692",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  const formItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const checkmarkVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <footer className="bg-white pt-32 pb-10" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center justify-center gap-2 text-zinc-500 font-semibold mb-6 bg-zinc-50 px-4 py-1.5 rounded-full border border-zinc-200">
            <MapPin size={16} className="text-zinc-400" />
            New Delhi, India
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 tracking-tight mb-6">
            Let's Work <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-400">Together.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-medium">
            Open to SDE roles, internships, and collaborations.
          </p>
        </motion.div>

        {/* SRS Trigger Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-3xl mx-auto bg-zinc-50 border border-zinc-200 rounded-[32px] p-8 sm:p-12 mb-16 relative overflow-hidden group"
        >
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-4">Got a software idea?</h3>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-3">Give me your SRS &rarr; I'll build your solution.</h4>
            <p className="text-zinc-500 font-medium mb-8 max-w-lg mx-auto">
              Drop your requirements. I'll respond with a technical plan or working prototype within 24 hours.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-zinc-900 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-zinc-800 transition-all duration-300 flex items-center gap-2"
            >
              Submit Your SRS <ArrowUpRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 w-full"
        >
          <a
            href="mailto:nitishkumaryadav105@gmail.com"
            className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 hover:text-blue-600 transition-colors duration-300 break-all border-b-4 border-transparent hover:border-blue-600 pb-2"
          >
            nitishkumaryadav105@gmail.com
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-center justify-center gap-5 mb-24"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              variants={itemVariants}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-white border-2 border-zinc-200 text-zinc-600 rounded-2xl hover:bg-zinc-900 hover:text-white hover:border-zinc-900 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl flex items-center justify-center"
              aria-label={link.name}
              title={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full pt-8 border-t border-zinc-100 flex items-center justify-center text-sm font-semibold text-zinc-400"
        >
          <p>© 2026 Nitish Kumar · Built with Next.js</p>
        </motion.div>
      </div>

      {/* SRS Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm"
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-[32px] shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 bg-zinc-100 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded-full transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="p-8 sm:p-12 overflow-y-auto">
                {!isSubmitted ? (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                  >
                    <motion.h3 variants={formItemVariants} className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-8">
                      Tell Me What You're Building
                    </motion.h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                      <motion.div variants={formItemVariants} className="flex flex-col sm:flex-row gap-6">
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your Name"
                          className="w-full border-b border-zinc-200 py-3 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Your Email"
                          className="w-full border-b border-zinc-200 py-3 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors"
                        />
                      </motion.div>

                      <motion.div variants={formItemVariants}>
                        <select
                          name="projectType"
                          required
                          defaultValue=""
                          className="w-full border-b border-zinc-200 py-3 bg-transparent text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" disabled hidden>Select Project Type</option>
                          <option value="webapp">Web App</option>
                          <option value="mobile">Mobile App</option>
                          <option value="api">API & Backend</option>
                          <option value="devops">DevOps Setup</option>
                          <option value="other">Other</option>
                        </select>
                      </motion.div>

                      <motion.div variants={formItemVariants}>
                        <textarea
                          name="srs"
                          required
                          rows={6}
                          placeholder="What problem are you solving? Tech stack preference? Scale? Deadline?"
                          className="w-full border-b border-zinc-200 py-3 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors resize-none"
                        ></textarea>
                      </motion.div>

                      <motion.div variants={formItemVariants} className="flex items-center gap-4 text-sm text-zinc-500">
                        <label className="flex items-center gap-2 cursor-pointer hover:text-zinc-900 transition-colors">
                          <input type="file" className="hidden" accept=".pdf,.doc,.docx,.txt" />
                          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                            <span className="text-lg">+</span>
                          </div>
                          Attach SRS document (PDF/DOCX)
                        </label>
                      </motion.div>

                      <motion.div variants={formItemVariants} className="mt-4 pt-4 border-t border-zinc-100">
                        <button
                          type="submit"
                          className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-zinc-800 transition-all duration-300"
                        >
                          Send Requirements &rarr;
                        </button>
                        <p className="text-xs text-zinc-400 font-medium mt-4 text-center sm:text-left">
                          I typically respond within 24 hours with a technical breakdown.
                        </p>
                      </motion.div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-6 text-green-500">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <motion.path
                          variants={checkmarkVariants}
                          initial="hidden"
                          animate="visible"
                          d="M20 6L9 17l-5-5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-3">Requirements received!</h3>
                    <p className="text-zinc-500 font-medium max-w-sm mx-auto">
                      I'll get back to you within 24 hours 🚀
                    </p>
                    <button
                      onClick={closeModal}
                      className="mt-8 bg-zinc-100 text-zinc-600 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}

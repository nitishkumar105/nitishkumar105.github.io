"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import FloatingMascot from "../components/FloatingMascot";
import Terminal from "../components/Terminal";
import { Code2 } from "lucide-react";

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
  <div style={{ width: size, height: size }} className="relative grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
    <Image src="/leetcode.png" alt="LeetCode" fill sizes={`${size}px`} className="object-contain" />
  </div>
);

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [cliOpen, setCliOpen] = useState(false);
  const [inputBuffer, setInputBuffer] = useState("");

  const SECRET_TRIGGER = "hire nitish";

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Don't capture typing in inputs or textareas
      if (!cliOpen && (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        return;
      }

      if (!cliOpen) {
        const newBuffer = (inputBuffer + e.key).slice(-SECRET_TRIGGER.length).toLowerCase();
        setInputBuffer(newBuffer);
        
        if (newBuffer === SECRET_TRIGGER) {
          setCliOpen(true);
          setInputBuffer("");
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [inputBuffer, cliOpen]);

  // Reset buffer after 2 seconds of inactivity
  useEffect(() => {
    if (inputBuffer.length > 0) {
      const timeout = setTimeout(() => setInputBuffer(""), 2000);
      return () => clearTimeout(timeout);
    }
  }, [inputBuffer]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("nitishkumaryadav105@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-[#fafafa] font-sans text-zinc-900 scroll-smooth">
        {/* Sticky Navbar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="#home" className="text-xl font-bold text-zinc-900 flex items-center gap-1">
                NK<span className="text-blue-600">.</span>
              </a>
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        <main>
          {/* Hero Section */}
          <section id="home" className="flex items-center justify-center min-h-[calc(100vh-64px)] pt-12 pb-24">
            <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
              <motion.header
                initial="hidden"
                animate="visible"
                variants={container}
                className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6"
              >
                <motion.div variants={item} className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <span className="text-sm font-medium text-zinc-500 hidden sm:inline-block">nitishkumaryadav105@gmail.com</span>
                  <button
                    onClick={handleCopy}
                    className="rounded-full bg-white border border-zinc-200 px-5 py-2 text-sm font-semibold shadow-sm hover:shadow-md hover:bg-zinc-50 transition-all"
                  >
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                  <a
                    href="https://drive.google.com/file/d/1r7urVE3eWxA9hXmn234THKzZ_QwM30XZ/view?usp=sharing"
                    className="rounded-full bg-zinc-900 border border-zinc-900 text-white px-6 py-2 text-sm font-semibold shadow-md hover:bg-zinc-800 transition-all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View CV
                  </a>
                </motion.div>

                <motion.nav variants={item} className="flex flex-wrap items-center justify-center gap-6 text-zinc-500">
                  <a className="hover:text-zinc-900 transition-transform hover:scale-110" href="https://github.com/nitishkumar105" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github size={22} />
                  </a>
                  <a className="hover:text-zinc-900 transition-transform hover:scale-110" href="https://www.linkedin.com/in/nitish-kumar-a8260924a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin size={22} />
                  </a>
                  <a className="hover:text-zinc-900 transition-transform hover:scale-110" href="https://leetcode.com/u/nitishy07/" target="_blank" rel="noreferrer" aria-label="LeetCode">
                    <Leetcode size={22} />
                  </a>
                </motion.nav>
              </motion.header>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="relative rounded-3xl md:rounded-[48px] bg-white p-8 sm:p-12 md:p-20 shadow-xl shadow-zinc-200/50 border border-zinc-100"
              >
                <div className="flex flex-col items-center text-center gap-6 md:gap-8">
                  <motion.div variants={item} className="relative z-10">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg border border-zinc-100">
                      <Image src="/avatar.png" alt="avatar" width={128} height={128} priority className="object-cover w-full h-full" />
                    </div>
                    <div className="absolute left-[65%] sm:left-[75%] -bottom-2 bg-white px-4 py-1.5 rounded-full text-xs sm:text-sm shadow-md font-bold text-zinc-700 border border-zinc-100 whitespace-nowrap">Nitish Kumar 👋</div>
                  </motion.div>

                  <motion.h1 variants={item} className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] text-zinc-900 tracking-tight">
                    Building scalable systems, cloud infrastructure,
                    <br className="hidden md:block" /> and developer experiences.
                  </motion.h1>

                  <motion.p variants={item} className="text-base sm:text-lg text-zinc-500 font-medium max-w-2xl">
                    SDE Intern @ Atomity GmbH · IIIT Bhagalpur
                  </motion.p>

                  <motion.div variants={item} className="mt-4 flex flex-col items-center gap-4">
                    <a
                      href="#about"
                      className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-white font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300"
                    >
                      Explore My Work
                      <span className="inline-block transform rotate-45 text-lg leading-none">↗</span>
                    </a>

                    <div className="flex flex-col items-center gap-2">
                      <button
                        onClick={() => setCliOpen(true)}
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-400 px-8 py-4 text-zinc-900 font-mono font-medium hover:bg-zinc-900 hover:text-white transition-all duration-300"
                      >
                        {">"} <span className="animate-pulse">_</span> Start CLI Mode
                      </button>

                      <p className="text-xs text-zinc-400 font-mono">
                        or just type 'hire nitish' anywhere on the page
                      </p>
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            </div>
          </section>

          {/* Ordered Sections */}
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <FloatingMascot />
        <Terminal isOpen={cliOpen} onClose={() => setCliOpen(false)} />
      </div>
    </AnimatePresence>
  );
}

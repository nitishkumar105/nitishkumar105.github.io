"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type OutputLine = {
  text: string;
  color?: string;
  isHTML?: boolean;
};

const COMMANDS: Record<string, OutputLine[]> = {
  "hire nitish": [
    { text: "Fetching candidate profile...", color: "text-zinc-400" },
    { text: "----------------------------------------", color: "text-zinc-600" },
    { text: "Name: Nitish Kumar", color: "text-green-400" },
    { text: "Role: Software Development Engineer", color: "text-green-400" },
    { text: "Education: IIIT Bhagalpur (SGPA: 10/10)", color: "text-green-400" },
    { text: "Location: New Delhi, India", color: "text-green-400" },
    { text: "----------------------------------------", color: "text-zinc-600" },
    { text: "Achievements:", color: "text-yellow-400" },
    { text: "  > 1000+ problems solved on LeetCode & GFG", color: "text-zinc-300" },
    { text: "  > Rank 1836 globally (LeetCode Biweekly 161)", color: "text-zinc-300" },
    { text: "  > 1600+ rating on LeetCode & CodeChef", color: "text-zinc-300" },
    { text: "Status: READY TO HIRE 🚀", color: "text-yellow-400" }
  ],
  "skills": [
    { text: "Loading technical arsenal...", color: "text-zinc-400" },
    { text: "Languages : Java, Python, JavaScript", color: "text-green-400" },
    { text: "Frameworks: Node.js, Express, React, Spring Boot", color: "text-green-400" },
    { text: "Cloud     : AWS, Docker, Kubernetes, Jenkins, Linux", color: "text-green-400" },
    { text: "Databases : PostgreSQL, MySQL, Redis", color: "text-green-400" }
  ],
  "projects": [
    { text: "Accessing project database...", color: "text-zinc-400" },
    { text: "[1] Multi-Tenant Cost Tracking API", color: "text-yellow-400" },
    { text: "    - Java, Spring Boot, PostgreSQL, Docker", color: "text-green-400" },
    { text: "    - 15+ REST endpoints with RBAC", color: "text-zinc-300" },
    { text: "    - 35% Query Optimization", color: "text-zinc-300" },
    { text: "[2] Production CI/CD Pipeline", color: "text-yellow-400" },
    { text: "    - Docker, Jenkins, NGINX, AWS EC2", color: "text-green-400" },
    { text: "    - Deploy Time cut 45min -> 8min", color: "text-zinc-300" },
    { text: "    - Blue-Green Zero-Downtime", color: "text-zinc-300" }
  ],
  "contact": [
    { text: "Initiating communication protocols...", color: "text-zinc-400" },
    { text: "Email   : nitishkumaryadav105@gmail.com", color: "text-green-400" },
    { text: "Phone   : +91 9508102692", color: "text-green-400" },
    { text: "GitHub  : github.com/nitishkumar105", color: "text-green-400" },
    { text: "LinkedIn: linkedin.com/in/nitish-kumar-a8260924a", color: "text-green-400" }
  ],
  "help": [
    { text: "Available commands:", color: "text-yellow-400" },
    { text: "  hire nitish  - View full candidate profile", color: "text-green-400" },
    { text: "  skills       - List technical skills", color: "text-green-400" },
    { text: "  projects     - View featured projects", color: "text-green-400" },
    { text: "  contact      - Display contact information", color: "text-green-400" },
    { text: "  clear        - Clear the terminal", color: "text-green-400" },
    { text: "  help         - Show this menu", color: "text-green-400" }
  ]
};

const SECRET_TRIGGER = "hire nitish";

type TerminalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [output, setOutput] = useState<OutputLine[]>([
    { text: "Welcome to Nitish OS v1.0", color: "text-yellow-400" },
    { text: "Type 'help' to see available commands.", color: "text-zinc-400" }
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom whenever output changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output, isTyping]);

  // Focus input when terminal opens or finishes typing
  useEffect(() => {
    if (isOpen && !isTyping) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, isTyping]);

  const processCommand = async (cmd: string) => {
    const normalizedCmd = cmd.trim().toLowerCase();

    // Add user input to output immediately
    setOutput((prev) => [...prev, { text: `nitish@portfolio ~ $ ${cmd}`, color: "text-zinc-100" }]);
    setCurrentInput("");

    if (normalizedCmd === "clear") {
      setOutput([]);
      return;
    }

    if (normalizedCmd === "") return;

    const responseLines = COMMANDS[normalizedCmd] || [
      { text: `command not found: ${normalizedCmd}`, color: "text-red-400" },
      { text: "Type 'help' to see available commands.", color: "text-zinc-400" }
    ];

    setIsTyping(true);

    // Staggered line reveal
    for (let i = 0; i < responseLines.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 150));
      setOutput((prev) => [...prev, responseLines[i]]);
    }

    setIsTyping(false);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isTyping) return;
    processCommand(currentInput);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0f0f0f] rounded-2xl shadow-2xl border border-zinc-800 overflow-hidden font-mono text-sm sm:text-base flex flex-col max-h-[80vh]"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
          >
            {/* Top Bar */}
            <div className="flex items-center px-4 py-3 bg-[#1a1a1a] border-b border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose}></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-zinc-500 text-xs font-semibold mr-12">
                nitish@portfolio ~ zsh
              </div>
            </div>

            {/* Terminal Body */}
            <div
              className="p-4 sm:p-6 flex-1 overflow-y-auto"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex flex-col gap-1.5">
                {output.map((line, i) => (
                  <div key={i} className={`${line.color || "text-zinc-300"} whitespace-pre-wrap`}>
                    {line.text}
                  </div>
                ))}

                {!isTyping && (
                  <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 mt-2">
                    <span className="text-green-400 shrink-0">nitish@portfolio ~ $</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      className="flex-1 bg-transparent text-zinc-100 outline-none border-none focus:ring-0 p-0 m-0"
                      autoFocus
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </form>
                )}
                <div ref={bottomRef} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

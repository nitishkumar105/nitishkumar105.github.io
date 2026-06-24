"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

export default function FloatingMascot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map mouse position to slight 3D rotation (parallax)
  const rotateX = useTransform(mouseY, [-50, 50], [15, 5]);
  const rotateY = useTransform(mouseX, [-50, 50], [-25, -5]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate offset from center, limit to +/- 50px for the transform
    const offsetX = Math.max(-50, Math.min(50, e.clientX - centerX));
    const offsetY = Math.max(-50, Math.min(50, e.clientY - centerY));
    
    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end cursor-pointer select-none"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onClick={scrollToContact}
          style={{ perspective: 1000 }} // Enable 3D space for the bubble
        >
          {/* Speech Bubble */}
          <motion.div
            style={{ rotateX, rotateY }}
            animate={isHovered ? { scale: 1.1 } : { scale: [1, 1.05, 1] }}
            transition={isHovered ? { duration: 0.2 } : { repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="relative bg-white text-zinc-900 font-bold px-4 py-2 rounded-2xl text-sm mb-4 origin-bottom-right"
            // CSS 3D shadow trick
            css={`
              box-shadow: 
                0px 2px 0px 0px #e4e4e7,
                0px 4px 0px 0px #d4d4d8,
                0px 8px 15px rgba(0,0,0,0.1);
            `}
          >
            <div 
              className="bg-white rounded-2xl px-3 py-1 border-2 border-zinc-100"
              style={{
                boxShadow: "0px 3px 0px 0px #e4e4e7, 0px 6px 0px 0px #d4d4d8, 0px 10px 20px rgba(0,0,0,0.15)"
              }}
            >
              Contact Me 👋
            </div>
            {/* Bubble Tail */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r-2 border-b-2 border-zinc-100 transform rotate-45 z-[-1]"></div>
          </motion.div>

          {/* Mascot SVG */}
          <motion.div
            animate={
              isHovered 
                ? { y: -15, scale: 1.05 } 
                : { y: [0, -10, 0] }
            }
            transition={
              isHovered
                ? { type: "spring", stiffness: 400, damping: 10 }
                : { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
            }
            className="relative drop-shadow-xl"
          >
            <svg width="80" height="90" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Body / Hoodie */}
              <path d="M20 110C20 80 30 65 50 65C70 65 80 80 80 110H20Z" fill="#18181b" />
              <path d="M25 65C25 40 40 25 50 25C60 25 75 40 75 65" fill="#18181b" stroke="#18181b" strokeWidth="10" strokeLinecap="round" />
              
              {/* Head */}
              <circle cx="50" cy="45" r="22" fill="#f4f4f5" />
              
              {/* Hair/Hood Shadow */}
              <path d="M28 45C28 30 38 23 50 23C62 23 72 30 72 45" fill="#18181b" />
              <path d="M28 45C35 40 45 42 50 35C55 42 65 40 72 45" fill="#f4f4f5" />

              {/* Eyes */}
              <circle cx="42" cy="48" r="3" fill="#18181b" />
              <circle cx="58" cy="48" r="3" fill="#18181b" />
              
              {/* Blush */}
              <circle cx="36" cy="52" r="4" fill="#fca5a5" opacity="0.6" />
              <circle cx="64" cy="52" r="4" fill="#fca5a5" opacity="0.6" />

              {/* Smile */}
              <path d="M46 54Q50 58 54 54" stroke="#18181b" strokeWidth="2" strokeLinecap="round" />

              {/* Waving Hand */}
              <motion.g
                animate={{ rotate: [-10, 15, -10] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                style={{ originX: "20px", originY: "80px" }}
              >
                {/* Arm */}
                <path d="M25 75C15 70 10 85 5 80" stroke="#18181b" strokeWidth="8" strokeLinecap="round" />
                {/* Hand */}
                <circle cx="5" cy="80" r="6" fill="#f4f4f5" />
              </motion.g>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

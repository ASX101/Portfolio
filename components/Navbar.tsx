"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      style={{
        fontFamily: '"ClashDisplay", sans-serif',
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: isMobile ? "1.5rem" : "8rem",
        paddingRight: isMobile ? "1.5rem" : "8rem",
        paddingTop: isMobile ? "7rem" : "6rem",
        paddingBottom: isMobile ? "3rem" : "0",
        boxSizing: "border-box",
      }}
    >
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "12px",
          color: "#6b7280",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}
      >
        Hello, This is
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
        style={{
          fontSize: isMobile ? "2.5rem" : "4.5rem",
          fontWeight: 700,
          color: "white",
          marginBottom: "1rem",
          letterSpacing: "-1px",
          lineHeight: 1.1,
        }}
      >
        Asrar Azim
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
        style={{
          fontSize: isMobile ? "1.5rem" : "3rem",
          fontWeight: 700,
          color: "#4b5563",
          marginBottom: "1.5rem",
          letterSpacing: "-0.5px",
          lineHeight: 1.2,
        }}
      >
        I build intelligent systems.
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.7}
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: isMobile ? "12px" : "15px",
          color: "#9ca3af",
          lineHeight: 1.8,
          marginBottom: "2.5rem",
          maxWidth: "520px",
        }}
      >
        CS Graduate specialized in AI/ML & Software Engineering.
        I design and build things that live on the web and sometimes teach
        machines to think.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.9}
        style={{
          display: "flex",
          gap: isMobile ? "10px" : "16px",
          flexWrap: "wrap",
        }}
      >
        
        <a  href="/New_resume.pdf"
          style={{
            fontFamily: "var(--font-mono, monospace)",
            textDecoration: "none",
            padding: isMobile ? "10px 16px" : "12px 24px",
            border: "1px solid #374151",
            color: "#9ca3af",
            fontSize: isMobile ? "11px" : "14px",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            (e.target as HTMLAnchorElement).style.borderColor = "white";
            (e.target as HTMLAnchorElement).style.color = "white";
          }}
          onMouseLeave={e => {
            (e.target as HTMLAnchorElement).style.borderColor = "#374151";
            (e.target as HTMLAnchorElement).style.color = "#9ca3af";
          }}
        >
          View Resume
        </a>

        
        <a  href="https://github.com/ASX101"
          style={{
            fontFamily: "var(--font-mono, monospace)",
            textDecoration: "none",
            padding: isMobile ? "10px 16px" : "12px 24px",
            border: "1px solid #374151",
            color: "#9ca3af",
            fontSize: isMobile ? "11px" : "14px",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            (e.target as HTMLAnchorElement).style.borderColor = "white";
            (e.target as HTMLAnchorElement).style.color = "white";
          }}
          onMouseLeave={e => {
            (e.target as HTMLAnchorElement).style.borderColor = "#374151";
            (e.target as HTMLAnchorElement).style.color = "#9ca3af";
          }}
        >
          GitHub
        </a>

        
        <a  href="https://linkedin.com/in/asrar-azim/"
          style={{
            fontFamily: "var(--font-mono, monospace)",
            textDecoration: "none",
            padding: isMobile ? "10px 16px" : "12px 24px",
            border: "1px solid #374151",
            color: "#9ca3af",
            fontSize: isMobile ? "11px" : "14px",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            (e.target as HTMLAnchorElement).style.borderColor = "white";
            (e.target as HTMLAnchorElement).style.color = "white";
          }}
          onMouseLeave={e => {
            (e.target as HTMLAnchorElement).style.borderColor = "#374151";
            (e.target as HTMLAnchorElement).style.color = "#9ca3af";
          }}
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
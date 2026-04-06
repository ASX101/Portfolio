"use client";

import { motion, Variants } from "framer-motion";

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
  return (
    <section
      style={{
        fontFamily: '"ClashDisplay", sans-serif',
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "8rem",
        paddingRight: "8rem",
        paddingTop: "6rem",
        boxSizing: "border-box",
      }}
    >
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        style={{ fontFamily: "var(--font-mono, monospace)" }}
        className="text-sm text-gray-500 mb-3 tracking-widest uppercase"
      >
        Hello, This is
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
        className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
      >
        Asrar Azim
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
        className="text-3xl md:text-5xl font-bold text-gray-600 mb-6 tracking-tight"
      >
        I build intelligent systems.
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.7}
        style={{ fontFamily: "var(--font-mono, monospace)" }}
        className="max-w-xl text-gray-400 text-lg mb-10 leading-relaxed"
      >
        CS Graduate specialized in AI/ML & Software Engineering.
        I design and build things that live on the web — and sometimes teach
        machines to think.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.9}
        style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
      >
        
        <a  href="/New_resume.pdf"
          style={{
            fontFamily: "var(--font-mono, monospace)",
            textDecoration: "none",
            padding: "12px 24px",
            border: "1px solid #374151",
            color: "#9ca3af",
            fontSize: "14px",
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
            padding: "12px 24px",
            border: "1px solid #374151",
            color: "#9ca3af",
            fontSize: "14px",
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
            padding: "12px 24px",
            border: "1px solid #374151",
            color: "#9ca3af",
            fontSize: "14px",
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
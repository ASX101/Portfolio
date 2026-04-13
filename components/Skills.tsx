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

const skillCategories = [
  {
    category: "Frontend (Core)",
    skills: [
      "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design",
      "Cross-browser Testing", "React.js", "Next.js", "Tailwind CSS",
      "Component-based Architecture",
    ],
  },
  {
    category: "Backend & Databases",
    skills: ["PHP", "Laravel", "MySQL", "REST API Design"],
  },
  {
    category: "Dev Tools",
    skills: ["Git", "GitHub", "GitHub Actions", "VS Code", "Linux", "Vercel"],
  },
  {
    category: "Testing & QA",
    skills: [
      "Manual Testing", "Bug Tracking", "Performance Monitoring",
      "Edge-case Validation",
    ],
  },
  {
    category: "Project Management",
    skills: ["Notion", "Trello", "Asana", "GitHub Projects"],
  },
  {
    category: "Data Science & Analytics",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn"],
  },
  {
    category: "AI / ML & Research",
    skills: ["Python", "PyTorch", "TensorFlow", "CNN", "SNN", "YOLO"],
  },
];

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="skills"
      style={{
        fontFamily: '"ClashDisplay", sans-serif',
        minHeight: "100dvh",
        paddingLeft: isMobile ? "1.5rem" : "8rem",
        paddingRight: isMobile ? "1.5rem" : "8rem",
        paddingTop: "10rem",
        paddingBottom: "6rem",
        boxSizing: "border-box",
      }}
    >
      {/* Section Header */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.1}
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "13px",
          color: "#6b7280",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        Skills
      </motion.p>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
        style={{
          fontSize: isMobile ? "2rem" : "3rem",
          fontWeight: 650,
          color: "white",
          marginBottom: "4rem",
          lineHeight: 1.1,
          letterSpacing: "-1px",
        }}
      >
        What I work with.
      </motion.h2>

      {/* Skills List */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {skillCategories.map((group, index) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1 * (index + 1)}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
              gap: isMobile ? "0.75rem" : "2rem",
              padding: "2rem 0",
              borderTop: "1px solid #1f2937",
              alignItems: "start",
            }}
          >
            {/* Category Name */}
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "11px",
                color: isMobile ? "#4b5563" : "#6b7280",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                paddingTop: "4px",
              }}
            >
              {group.category}
            </span>

            {/* Skills Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: isMobile ? "11px" : "12px",
                    color: "#9ca3af",
                    border: "1px solid #1f2937",
                    padding: isMobile ? "3px 8px" : "4px 12px",
                    letterSpacing: "0.05em",
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLSpanElement).style.color = "white";
                    (e.target as HTMLSpanElement).style.borderColor = "#374151";
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLSpanElement).style.color = "#9ca3af";
                    (e.target as HTMLSpanElement).style.borderColor = "#1f2937";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Bottom border */}
        <div style={{ borderTop: "1px solid #1f2937" }} />
      </div>
    </section>
  );
}
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

const projects = [
  {
    number: "01",
    title: "Faster R-SNN",
    description:
      "An undergraduate thesis project proposing a Hybrid Spiking Deep Neural Network combining SNNs with Faster R-CNN architecture for energy efficient object detection. Evaluated on the KITTI autonomous driving dataset, achieving mAP@0.5 of 0.7395 with improved power efficiency.",
    stack: ["Python", "PyTorch", "SNN", "Faster R-CNN", "KITTI"],
    github: "https://github.com/ASX101/Design-and-Analysis-of-a-Hybrid-Spiking-Deep-Neural-Network-for-Energy-Efficient-Object-Detection",
  },
  {
    number: "02",
    title: "Community Skill Exchange Platform",
    description:
      "A fullstack web platform where users can list their skills and request services from others in the community enabling a barter style skill exchange system without monetary transactions.",
    stack: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ASX101/Community-Skill-Exchange-Platform",
  },
  {
    number: "03",
    title: "Velocity Dash 3D",
    description:
      "A 3D arcade racing game where players navigate through dynamic procedurally generated race tracks, competing against opponents while dodging obstacles, collecting power ups, and mastering challenging terrain. Features multiple race modes and a comprehensive progression system rendered using basic OpenGL primitives.",
    stack: ["C++", "OpenGL", "GLUT"],
    github: "https://github.com/ASX101/Velocity-Dash-3D---Extreme-Circuit-Racing",
  },
  {
    number: "04",
    title: "T20 Cricket Match Score Prediction",
    description:
      "A machine learning project that predicts T20 cricket match scores using categorical match data. Trained on historical match statistics to forecast final scores based on teams, venue, and match conditions.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/ASX101/T20-Cricket-Match-Score-Prediction",
  },
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="projects"
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
        Projects
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
          letterSpacing: isMobile ? "0px" : "2px",
        }}
      >
        Things I have built.
      </motion.h2>

      {/* Project List */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.number}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1 * (index + 1)}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "80px 1fr auto",
              alignItems: "start",
              gap: isMobile ? "1rem" : "2rem",
              padding: "2.5rem 0",
              borderTop: "1px solid #1f2937",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              if (!isMobile)
                (e.currentTarget as HTMLDivElement).style.paddingLeft = "1rem";
            }}
            onMouseLeave={e => {
              if (!isMobile)
                (e.currentTarget as HTMLDivElement).style.paddingLeft = "0";
            }}
          >
            {/* Number */}
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                color: "#374151",
                paddingTop: isMobile ? "0" : "4px",
              }}
            >
              {project.number}
            </span>

            {/* Content */}
            <div>
              <h3
                style={{
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.5px",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "12px",
                  color: "#9ca3af",
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                  maxWidth: "640px",
                }}
              >
                {project.description}
              </p>

              {/* Tech Stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "11px",
                      color: "#6b7280",
                      border: "1px solid #1f2937",
                      padding: "3px 10px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Link */}
            
            <a  href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "12px",
                color: "#6b7280",
                textDecoration: "none",
                border: "1px solid #1f2937",
                padding: "8px 16px",
                letterSpacing: "0.05em",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                display: "inline-block",
                alignSelf: "flex-start",
              }}
              onMouseEnter={e => {
                (e.target as HTMLAnchorElement).style.color = "white";
                (e.target as HTMLAnchorElement).style.borderColor = "white";
              }}
              onMouseLeave={e => {
                (e.target as HTMLAnchorElement).style.color = "#6b7280";
                (e.target as HTMLAnchorElement).style.borderColor = "#1f2937";
              }}
            >
              GitHub ↗
            </a>
          </motion.div>
        ))}

        {/* Bottom border */}
        <div style={{ borderTop: "1px solid #1f2937" }} />
      </div>
    </section>
  );
}
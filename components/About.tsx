"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
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

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="about"
      style={{
        fontFamily: '"ClashDisplay", sans-serif',
        minHeight: "100dvh",
        display: "flex",
        alignItems: "flex-start",
        paddingLeft: isMobile ? "1.5rem" : "8rem",
        paddingRight: isMobile ? "1.5rem" : "8rem",
        paddingTop: "10rem",
        paddingBottom: "4rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "3fr 2fr",
          gap: isMobile ? "3rem" : "4rem",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {/* Left — Text */}
        <div>
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
            About Me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            style={{
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: 700,
              color: "white",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Passionate about building at the edge of AI & Engineering.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "13px",
              color: "#9ca3af",
              lineHeight: 2,
              marginBottom: "1.25rem",
              maxWidth: "100%",
            }}
          >
            I am Asrar Azim, a Computer Science graduate from BRAC University
            with a deep interest in AI/ML and software engineering. My
            undergraduate thesis focused on a Hybrid Spiking Deep Neural
            Network (Faster R-SNN) for autonomous driving combining
            biological efficiency with deep learning accuracy.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "13px",
              color: "#9ca3af",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "100%",
            }}
          >
            Beyond research, I love building fullstack web applications and
            exploring how AI can be embedded into realworld products.
          </motion.p>

          {/* Skills Summary */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {[
              "Python", "PyTorch", "TensorFlow",
              "React", "Next.js", "TypeScript",
              "JavaScript", "Express.js", "MongoDB",
              "Node.js", "Laravel", "MySQL",
              "Scikit-learn", "Pandas", "NumPy",
              "Seaborn", "Matplotlib", "YOLO",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "12px",
                  color: "#9ca3af",
                  border: "1px solid #374151",
                  padding: "4px 12px",
                  letterSpacing: "0.05em",
                }}
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* Accent border behind photo */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              right: isMobile ? "0px" : "-16px",
              bottom: isMobile ? "0px" : "-16px",
              border: "1px solid #374151",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: isMobile ? "100%" : "100%",
              maxWidth: isMobile ? "280px" : "380px",
              height: isMobile ? "360px" : undefined,
              aspectRatio: isMobile ? undefined : "3/4",
              overflow: "hidden",

            }}
          >
            <Image
              src="/profile.webp"
              alt="Asrar Azim"
              fill
              priority
              loading="eager"
              sizes="(max-width: 768px) 280px, 380px"
              className="object-cover"
              style={{ filter: "grayscale(20%)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
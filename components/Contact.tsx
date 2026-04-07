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

const socials = [
  {
    label: "Email",
    value: "asrarazim15@gmail.com",
    href: "mailto:asrarazim15@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/ASX101",
    href: "https://github.com/ASX101",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/asrarazim",
    href: "https://linkedin.com/in/asrar-azim/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        fontFamily: '"ClashDisplay", sans-serif',
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "8rem",
        paddingRight: "8rem",
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
        Contact
      </motion.p>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
        style={{
          fontSize: "3.5rem",
          fontWeight: 650,
          color: "white",
          marginBottom: "1.5rem",
          lineHeight: 1.1,
          letterSpacing: "-1px",
          maxWidth: "600px",
        }}
      >
        Lets build something together.
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.3}
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "14px",
          color: "#9ca3af",
          lineHeight: 1.8,
          marginBottom: "3rem",
          maxWidth: "480px",
        }}
      >
        I am currently open to new opportunities. Whether you have a question,
        a project in mind, or just want to say hi, my inbox is always open.
      </motion.p>

      {/* Main CTA Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.4}
        style={{ marginBottom: "4rem" }}
      >
        
        <a  href="mailto:asrarazim15@gmail.com"
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "14px",
            color: "white",
            textDecoration: "none",
            border: "1px solid white",
            padding: "14px 32px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            transition: "all 0.2s",
            display: "inline-block",
          }}
          onMouseEnter={e => {
            (e.target as HTMLAnchorElement).style.backgroundColor = "white";
            (e.target as HTMLAnchorElement).style.color = "black";
          }}
          onMouseLeave={e => {
            (e.target as HTMLAnchorElement).style.backgroundColor = "transparent";
            (e.target as HTMLAnchorElement).style.color = "white";
          }}
        >
          Say Hello ↗
        </a>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.5}
        style={{
          borderTop: "1px solid #1f2937",
          marginBottom: "2rem",
        }}
      />

      {/* Social Links */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.6}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        {socials.map((social) => (
          <div
            key={social.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "11px",
                color: "#374151",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                minWidth: "80px",
              }}
            >
              {social.label}
            </span>
            
            <a  href={social.href}
              target={social.label === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                color: "#9ca3af",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e =>
                ((e.target as HTMLAnchorElement).style.color = "white")
              }
              onMouseLeave={e =>
                ((e.target as HTMLAnchorElement).style.color = "#9ca3af")
              }
            >
              {social.value}
            </a>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        paddingLeft: "2rem",
        paddingRight: "8rem",
        fontFamily: "var(--font-mono, monospace)",
      }}
    >
      {/* Logo */}
      
      <a  href="#"
        style={{
          color: "white",
          fontSize: "18px",
          fontFamily: '"ClashDisplay", sans-serif',
          fontWeight: 350,
          letterSpacing: "-0.5px",
        }}
      >
        As . Az
      </a>

      {/* Nav Links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "2.5rem",
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map((link, index) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index, ease: "easeOut" }}
          >
            
            <a href={link.href}
              style={{
                color: "#9ca3af",
                fontSize: "13px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={e =>
                ((e.target as HTMLAnchorElement).style.color = "white")
              }
              onMouseLeave={e =>
                ((e.target as HTMLAnchorElement).style.color = "#9ca3af")
              }
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
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
          paddingRight: isMobile ? "1.5rem" : "8rem",
          fontFamily: "var(--font-mono, monospace)",
          backgroundColor: menuOpen ? "#0a0a0a" : "transparent",
          transition: "background-color 0.2s",
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
            textDecoration: "none",
          }}
        >
          As . Az
        </a>

        {/* Desktop Nav Links */}
        {!isMobile && (
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
                transition={{
                  duration: 0.4,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
              >
                
                <a  href={link.href}
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
        )}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: "white",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: "white",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: "white",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        )}
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: "#0a0a0a",
              borderBottom: "1px solid #1f2937",
              display: "flex",
              flexDirection: "column",
              padding: "1rem 2rem 2rem",
              gap: "1.5rem",
            }}
          >
            {navLinks.map((link) => (
              
              <a  key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  color: "#9ca3af",
                  fontSize: "14px",
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
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
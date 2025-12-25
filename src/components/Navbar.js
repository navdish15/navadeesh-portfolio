import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.logo}>Navadeesh</div>

        {/* Desktop Menu */}
        <ul style={styles.menu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div style={styles.hamburger} onClick={() => setOpen(true)}>
          ☰
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {open && (
        <div style={styles.overlay}>
          <span style={styles.close} onClick={closeMenu}>✕</span>

          <ul style={styles.mobileMenu}>
            {["Home","About","Skills","Projects","Education","Contact"].map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  style={styles.mobileLink}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "var(--white)",
    padding: "14px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  logo: {
    fontSize: "20px",
    fontWeight: "700",
    color: "var(--primary)",
  },

  menu: {
    listStyle: "none",
    display: "flex",
    gap: "22px",
  },

  hamburger: {
    display: "none",
    fontSize: "26px",
    cursor: "pointer",
    color: "var(--primary)",
  },

  /* ===== MOBILE OVERLAY ===== */
  overlay: {
    position: "fixed",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(108,99,255,0.92), rgba(79,70,229,0.92))",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    zIndex: 2000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadeUp 0.35s ease",
  },

  close: {
    position: "absolute",
    top: "22px",
    right: "26px",
    fontSize: "30px",
    color: "#ffffff",
    cursor: "pointer",
  },

  mobileMenu: {
    listStyle: "none",
    textAlign: "center",
  },

  mobileLink: {
    display: "block",
    fontSize: "28px",
    fontWeight: "600",
    color: "#ffffff",
    padding: "14px 0",
    textDecoration: "none",
  },
};

/* Responsive rule */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@media (max-width: 768px) {
  nav ul { display: none !important; }
  nav div:last-child { display: block !important; }
}
`, styleSheet.cssRules.length);

export default Navbar;

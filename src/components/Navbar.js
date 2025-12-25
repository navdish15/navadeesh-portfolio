import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      {/* Logo / Name */}
      <h2 style={styles.logo}>Navadeesh</h2>

      {/* Desktop Menu */}
      <ul style={styles.menu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div style={styles.hamburger} onClick={() => setOpen(true)}>
        ☰
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={styles.mobileMenu}>
          <span style={styles.close} onClick={() => setOpen(false)}>✕</span>

          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "var(--white)",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  logo: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
    color: "var(--primary)",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  hamburger: {
    display: "none",
    fontSize: "26px",
    cursor: "pointer",
    color: "var(--primary)",
  },
  mobileMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
    color: "#fff",
  },
  close: {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "26px",
    cursor: "pointer",
  },
};

/* Responsive CSS */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@media (max-width: 768px) {
  nav ul {
    display: none !important;
  }
  nav div {
    display: block !important;
  }
}
`;
document.head.appendChild(styleSheet);

export default Navbar;

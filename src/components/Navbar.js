import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav style={styles.nav}>
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

        {/* Mobile Icon */}
        <div style={styles.mobileIcon} onClick={() => setOpen(true)}>
          <FaBars />
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {open && (
        <div style={styles.overlay}>
          <FaTimes style={styles.close} onClick={closeMenu} />

          <ul style={styles.mobileMenu}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#education" onClick={closeMenu}>Education</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
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
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  logo: {
    margin: 0,
    fontSize: "20px",
    color: "var(--primary)",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  mobileIcon: {
    display: "none",
    fontSize: "22px",
    color: "var(--primary)",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
    zIndex: 2000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  close: {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "28px",
    color: "#fff",
    cursor: "pointer",
  },
  mobileMenu: {
    listStyle: "none",
    textAlign: "center",
    fontSize: "26px",
    lineHeight: "2.5",
  },
};

export default Navbar;

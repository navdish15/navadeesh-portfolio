import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

      {/* Mobile Icon */}
      <div style={styles.mobileIcon} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul style={styles.mobileMenu}>
          <li onClick={() => setOpen(false)}><a href="#home">Home</a></li>
          <li onClick={() => setOpen(false)}><a href="#about">About</a></li>
          <li onClick={() => setOpen(false)}><a href="#skills">Skills</a></li>
          <li onClick={() => setOpen(false)}><a href="#projects">Projects</a></li>
          <li onClick={() => setOpen(false)}><a href="#education">Education</a></li>
          <li onClick={() => setOpen(false)}><a href="#contact">Contact</a></li>
        </ul>
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
    padding: "15px 10%",
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
  mobileIcon: {
    display: "none",
    fontSize: "22px",
    color: "var(--primary)",
    cursor: "pointer",
  },
  mobileMenu: {
    position: "absolute",
    top: "65px",
    left: 0,
    width: "100%",
    backgroundColor: "var(--white)",
    listStyle: "none",
    padding: "20px 0",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
};

export default Navbar;

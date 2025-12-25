function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Navadeesh</h2>

      <ul style={styles.menu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "var(--white)",
    padding: "15px 40px",
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
};

export default Navbar;

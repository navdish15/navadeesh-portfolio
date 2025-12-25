function Skills() {
  return (
    <section id="skills" style={styles.skills}>
      <h2 style={styles.title}>Skills</h2>

      <div style={styles.grid}>
        <div style={styles.card} className="skill-card">
          <span style={styles.accent}></span>
          <h4 style={styles.heading}>Languages</h4>
          <p>Python • JavaScript • PHP</p>
        </div>

        <div style={styles.card} className="skill-card">
          <span style={styles.accent}></span>
          <h4 style={styles.heading}>Web Technologies</h4>
          <p>HTML • CSS • Bootstrap • AJAX • jQuery</p>
        </div>

        <div style={styles.card} className="skill-card">
          <span style={styles.accent}></span>
          <h4 style={styles.heading}>Frameworks</h4>
          <p>React.js • Django • Express.js</p>
        </div>

        <div style={styles.card} className="skill-card">
          <span style={styles.accent}></span>
          <h4 style={styles.heading}>Database</h4>
          <p>MySQL</p>
        </div>

        <div style={styles.card} className="skill-card">
          <span style={styles.accent}></span>
          <h4 style={styles.heading}>Tools</h4>
          <p>Git (Basic) • JWT • TCPDF • PHP Mailer</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  skills: {
    padding: "80px 10%",
    backgroundColor: "var(--white)",
    textAlign: "center",
  },
  title: {
    fontSize: "34px",
    marginBottom: "50px",
    color: "var(--primary)",
  },
  grid: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
  },
  card: {
    position: "relative",
    backgroundColor: "var(--white)",
    padding: "30px 25px",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  accent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "4px",
    backgroundColor: "var(--primary)",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  },
  heading: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "18px",
    color: "var(--primary-dark)",
  },
};

export default Skills;

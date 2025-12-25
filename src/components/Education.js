function Education() {
  return (
    <section id="education" style={styles.education}>
      <h2 style={styles.title}>Education</h2>

      <div style={styles.card} className="project-card">
        <span style={styles.accent}></span>

        <h3>B.Sc. in Computer Science</h3>
        <p style={styles.sub}>Mumbai University</p>
        <p>Year of Completion: 2025</p>
        <p>
          <strong>Overall CGPA:</strong> 8.52 / 10
        </p>
      </div>
    </section>
  );
}

const styles = {
  education: {
    padding: "80px 10%",
    backgroundColor: "var(--white)", // stays plain white
    textAlign: "center",
  },
  title: {
    fontSize: "34px",
    marginBottom: "50px",
    color: "var(--primary)",
  },
  card: {
    position: "relative",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "var(--white)",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    textAlign: "left",
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
  sub: {
    color: "var(--primary-dark)",
    fontWeight: "500",
    marginBottom: "8px",
  },
};

export default Education;

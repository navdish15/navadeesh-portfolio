function About() {
  return (
    <section id="about" style={styles.about}>
      <h2 style={styles.title}>About Me</h2>

      <div style={styles.content}>
        <p>
          I am a Computer Science graduate with a strong interest in building
          clean, scalable, and user-focused web applications.
        </p>

        <p>
          I have hands-on experience with React.js, PHP, MySQL, Node.js, and
          JavaScript through multiple academic and personal projects.
        </p>

        <p>
          I am currently seeking full-time opportunities where I can contribute
          as a developer, grow professionally, and work in a collaborative team.
        </p>
      </div>
    </section>
  );
}

const styles = {
about: {
  padding: "80px 10%",
  backgroundColor: "var(--white)",   // ✅ FIXED
  textAlign: "center",
},

  title: {
    fontSize: "34px",
    marginBottom: "30px",
    color: "var(--primary)",
  },
  content: {
    maxWidth: "850px",
    margin: "0 auto",
    fontSize: "17px",
    lineHeight: "1.8",
    color: "var(--dark)",
  },
};

export default About;

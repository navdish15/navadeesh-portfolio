function Contact() {
  return (
    <section id="contact" style={styles.contact}>
      <h2 style={styles.title}>Contact</h2>

      <div style={styles.card} className="project-card">
        <span style={styles.accent}></span>

        <p>
          I am open to full-time opportunities, internships, and collaborations.
          Feel free to reach out to me.
        </p>

        <p>
          <strong>Email:</strong> navdish15@gmail.com
        </p>

        <p>
          <strong>Phone:</strong> +91 8655015703
        </p>

        <p>
          <strong>Location:</strong> Mumbai, India
        </p>
      </div>
    </section>
  );
}

const styles = {
  contact: {
    padding: "80px 10%",
    backgroundColor: "var(--white)",
    textAlign: "center",
  },
  title: {
    fontSize: "34px",
    marginBottom: "40px",
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
    lineHeight: "1.8",
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
};

export default Contact;

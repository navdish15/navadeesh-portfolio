import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.name}>
        © 2025 Navadeesh Mallayya Gangadhari
      </p>

      <div style={styles.links}>
        <a href="mailto:navdish15@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
  href="https://github.com/navdish15"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
>
          <FaGithub />
        </a>
      </div>

      <p style={styles.tech}>Built with React.js</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
    color: "var(--white)",
    padding: "28px 10% 24px",
    textAlign: "center",
  },
  name: {
    fontSize: "15px",
    marginBottom: "16px",
    fontWeight: "500",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "26px",
    fontSize: "20px",
    marginBottom: "16px",
  },
  tech: {
    fontSize: "13px",
    color: "#e6e6ff",
  },
};

export default Footer;

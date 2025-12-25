import { useEffect, useState } from "react";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";

function Hero() {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" style={styles.hero}>
      {/* LEFT CONTENT */}
      <div style={styles.textBox}>
        <h1 style={styles.name}>Navadeesh Mallayya Gangadhari</h1>
        <h3 style={styles.role}>Full Stack Web Developer</h3>
        <p style={styles.tech}>
          React.js • PHP • MySQL • Node.js • JavaScript
        </p>

        <a href="/resume.pdf" style={styles.button} download>
          Download Resume
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div style={styles.imageBox}>
        <img
          src={images[current]}
          alt="Developer Illustration"
          style={{
            ...styles.image,
            opacity: fade ? 1 : 0,
            transform: fade ? "translateX(0)" : "translateX(20px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        />
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px 10% 20px",
    background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
    color: "var(--white)",
    flexWrap: "wrap",
  },
  textBox: {
    maxWidth: "500px",
  },
  name: {
    fontSize: "38px",
    marginBottom: "10px",
  },
  role: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  tech: {
    fontSize: "16px",
    marginBottom: "25px",
  },
  button: {
    padding: "12px 26px",
    backgroundColor: "var(--white)",
    color: "var(--primary)",
    textDecoration: "none",
    borderRadius: "25px",
    fontWeight: "bold",
  },
  imageBox: {
    maxWidth: "420px",
    width: "100%",
    marginTop: "20px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
  },
};

export default Hero;

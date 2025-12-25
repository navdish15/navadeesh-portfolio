function Projects() {
  return (
    <section id="projects" style={styles.projects}>
      <h2 style={styles.title}>Projects</h2>

      <div style={styles.grid}>
        <div style={styles.card} className="project-card">
          <span style={styles.accent}></span>
          <h3>Quantum Research Experiment Data Management System</h3>
          <p>
            Role-based laboratory management system with Admin & User dashboards,
            experiment tracking, file uploads, notifications, and internal chat.
          </p>
          <span style={styles.tech}>
            React.js • Node.js • Express.js • MySQL • JWT
          </span>
        </div>

        <div style={styles.card} className="project-card">
          <span style={styles.accent}></span>
          <h3>Workflow Management System</h3>
          <p>
            Task allocation and tracking platform with role-based access,
            deadlines, feedback workflow, and file submissions.
          </p>
          <span style={styles.tech}>
            PHP • MySQL • HTML • CSS • Bootstrap
          </span>
        </div>

        <div style={styles.card} className="project-card">
          <span style={styles.accent}></span>
          <h3>Online Diagnosis Lab Reporting System</h3>
          <p>
            Secure system for managing patient test reports with doctor & patient
            dashboards, PDF generation, and email notifications.
          </p>
          <span style={styles.tech}>
            PHP • MySQL • HTML • CSS
          </span>
        </div>

        <div style={styles.card} className="project-card">
          <span style={styles.accent}></span>
          <h3>Hostel Management System</h3>
          <p>
            System for room allocation, fee tracking, and student attendance with
            dynamic form validations.
          </p>
          <span style={styles.tech}>
            PHP • MySQL • HTML • CSS • AJAX
          </span>
        </div>

        <div style={styles.card} className="project-card">
          <span style={styles.accent}></span>
          <h3>Library Management System</h3>
          <p>
            Book issue/return system with search, member management, automated
            fine calculation, and email reminders.
          </p>
          <span style={styles.tech}>
            MySQL • HTML • CSS • jQuery
          </span>
        </div>
      </div>
    </section>
  );
}

const styles = {
  projects: {
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
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  card: {
    position: "relative",
    backgroundColor: "var(--white)",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
  tech: {
    display: "block",
    marginTop: "15px",
    fontSize: "14px",
    color: "var(--primary-dark)",
    fontWeight: "500",
  },
};

export default Projects;

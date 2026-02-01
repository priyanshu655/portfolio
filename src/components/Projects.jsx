import { motion } from "framer-motion";

const projects = [
  {
    title: "Credisure Ai",
    desc: "Loan Approval System for Bank",
    tech: "Python · Flask · MERN",
    year: "2024",
    link: "http://credisure-gtuj.onrender.com/",
  },
  {
    title: "Realtime Dashboard",
    desc: "Live metrics & analytics system",
    tech: "MERN · Redis",
    year: "2024",
    link: "https://github.com/yourusername/realtime-dashboard",
  },
  {
    title: "Analytics Platform",
    desc: "Insights, charts and reports",
    tech: "MongoDB · Express",
    year: "2023",
    link: "https://github.com/yourusername/analytics-platform",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>

      <div className="projects-list">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <motion.div
              className="project-row"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="project-left">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>

              <div className="project-right">
                <span className="project-tech">{p.tech}</span>
                <span className="project-year">{p.year}</span>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}

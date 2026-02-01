// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const skills = [
    { name: "HTML", tag: "Front-end" },
  { name: "React", tag: "Front-end" },
  { name: "Node.js", tag: "Back-end" },
  { name: "MongoDB", tag: "Database" },
  { name: "Socket.IO", tag: "Realtime" },
  { name: "WebRTC", tag: "Video" },
  { name: "Express", tag: "API" },
];

export default function Skills() {
  return (
    <section id="skills" className="section container skills">
      <h2>Skills</h2>

      <div className="skill-grid">
        {skills.map((s, i) => (
          <motion.article
            key={s.name}
            className="skill-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <Magnetic>
              <div className="skill-left">
                <div className="skill-badge" aria-hidden>{s.name[0]}</div>
              </div>
            </Magnetic>

            <div className="skill-body">
              <div className="skill-name">{s.name}</div>
              <div className="skill-tag">{s.tag}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
} 

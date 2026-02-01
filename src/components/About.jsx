// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section id="about" className="section container about" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
      <h2>About</h2>

      <p className="lead">
        I’m a 4th-year B.Tech student actively growing as a full-stack developer. I may not be an expert yet, but I’m deeply committed to learning, building, and improving every day through real projects and hands-on development.
      </p>

      <p>
        My work emphasizes strong architecture, clear code, and considerate UX. I enjoy collaborating with designers and teams that value quality, performance, and reliability.
      </p>
    </motion.section>
  );
} 

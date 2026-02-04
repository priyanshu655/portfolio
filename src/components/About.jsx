// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <motion.section id="about" className="section container about" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
//       <h2>About</h2>

//       <p className="lead">
//         I’m a 4th-year B.Tech student actively growing as a full-stack developer. I may not be an expert yet, but I’m deeply committed to learning, building, and improving every day through real projects and hands-on development.
//       </p>

//       <p>
//         My work emphasizes strong architecture, clear code, and considerate UX. I enjoy collaborating with designers and teams that value quality, performance, and reliability.
//       </p>
//     </motion.section>
//   );
// } 

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./About.css";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const skills = [
    "Full-Stack Development",
    "React & Next.js",
    "Node.js",
    "UI/UX Design",
    "Clean Architecture",
    "Performance Optimization"
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="about-section"
      style={{ opacity }}
    >
      <div className="about-container">
        {/* Large heading */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">
            <span className="title-word">ABOUT</span>
            <span className="title-word title-word-yellow">ME</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="about-content">
          <motion.div 
            className="about-text-block"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
          >
            <p className="about-lead">
              I'm a 4th-year B.Tech student actively growing as a full-stack developer. 
              I may not be an expert yet, but I'm deeply committed to <span className="highlight-text-inline">learning</span>, <span className="highlight-text-inline">building</span>, 
              and <span className="highlight-text-inline">improving</span> every day through real projects and hands-on development.
            </p>
          </motion.div>

          <motion.div 
            className="about-text-block"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
          >
            <p className="about-description">
              My work emphasizes strong architecture, clear code, and considerate UX. 
              I enjoy collaborating with designers and teams that value quality, 
              performance, and reliability.
            </p>
          </motion.div>

          {/* Skills pills */}
          <motion.div 
            className="skills-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-pill"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.7 + index * 0.1,
                    ease: [0.33, 1, 0.68, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#FFD700",
                    color: "#000000"
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA section */}
          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
          >
            <div className="cta-line"></div>
            <p className="cta-text">
              Let's build something amazing together
            </p>
          </motion.div>
        </div>
      </div>

      {/* Parallax background element */}
      <motion.div 
        className="parallax-element"
        style={{ y }}
      >
        <div className="parallax-circle" />
      </motion.div>
    </motion.section>
  );
}
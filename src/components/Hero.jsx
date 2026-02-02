import { useEffect, useState } from "react";
import TextReveal from "./TextReveal";
import Magnetic from "./Magnetic";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Run ONCE on mount — no reflow loop
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
  }, []);

  return (
    <section id="hero" className="hero container">
      <h1 className="hero-title" aria-label="MERN Stack Developer">

        {/* LINE 1 */}
        {isMobile ? (
          <TextReveal text="MERN STACK" />
        ) : (
          <Magnetic strength={28}>
            <TextReveal text="MERN STACK" />
          </Magnetic>
        )}

        <br />

        {/* LINE 2 */}
        {isMobile ? (
          <TextReveal text="DEVELOPER" />
        ) : (
          <Magnetic strength={28}>
            <TextReveal text="DEVELOPER" />
          </Magnetic>
        )}

      </h1>

      <p className="hero-sub">
        I build scalable full-stack products with focus on performance,
        design, and real-time systems.
      </p>
    </section>
  );
}

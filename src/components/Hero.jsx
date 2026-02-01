import TextReveal from "./TextReveal";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section id="hero" className="hero container">

      {/* OCHI-STYLE TEXT REVEAL - visible on load */}
      <div>
        <h1 className="hero-title" aria-label="MERN Stack Developer">
          <Magnetic strength={28}>
            <TextReveal text="MERN STACK DEVELOPER" />
          </Magnetic>
        </h1>
      </div>

      {/* SUBTEXT - immediately visible */}
      <p className="hero-sub">
        I build scalable full-stack products with focus on performance,
        design, and real-time systems.
      </p>

    </section>
  );
}

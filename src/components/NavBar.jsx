import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="nav-top">
      <div className="container nav-inner" role="navigation" aria-label="Primary navigation">
        <div className="nav-left">
          <a className="nav-logo" href="#hero" onClick={handleNavClick}>
            <strong>PatelPriyanshu</strong>
          </a>
        </div>

        <div className="nav-center">
          <ul className="nav-list" role="menubar" aria-label="Primary links">
            {SECTIONS.map((s) => (
              <li key={s.id} role="none">
                <a
                  role="menuitem"
                  className={`nav-link ${active === s.id ? "active" : ""}`}
                  href={`#${s.id}`}
                  onClick={handleNavClick}
                  aria-current={active === s.id ? 'page' : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-right">
          <a className="nav-cta" href="/priyanshu-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>

          <button
            className={`burger ${open ? "open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-overlay ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-inner container">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a className={`mobile-link ${active === s.id ? "active" : ""}`} href={`#${s.id}`} onClick={handleNavClick}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
            <a className="mobile-cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </div>
    </header>
  );
}

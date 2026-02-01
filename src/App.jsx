import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  // Lenis removed: using native scrolling for a more standard, responsive feel

 return (
    <>
      <NavBar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* subtle noise overlay for depth */}
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}

export default App;

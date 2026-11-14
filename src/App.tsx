
import BackgroundDecor from "./components/BackgroundDecor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-accent px-4 py-3 font-semibold text-[#0B0B0C] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <BackgroundDecor />
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

import BackgroundDecor from "./BackgroundDecor";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

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
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

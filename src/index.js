import React from "react"
import ReactDOM from "react-dom/client"
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const Portfolio = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

if (document.querySelector("#portfolio-root")) {
  const root = ReactDOM.createRoot(document.querySelector("#portfolio-root"))
  root.render(<Portfolio />)
}

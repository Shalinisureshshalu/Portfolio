import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    
            <>
              <Hero />
              <About />
              <Skills />
              <Certifications />
              <Projects />
              <Achievements />
              <Experience />
              <Contact />
            </>
  );
}

export default App;

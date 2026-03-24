import { useState, useEffect } from "react";

import { styles } from "../src/style/module";

import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
//import Blogs from "./components/blog";
import Contact from "./components/contact";

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <Header activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <Skills />
        <Project />
        <About />
        {/* <Blogs /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioWebsite;

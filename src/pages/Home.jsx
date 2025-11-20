import React, { useEffect } from "react";
import "../styles/home.css";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let lastScroll = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScroll = window.scrollY;
          const scrollingDown = currentScroll > lastScroll;
          lastScroll = currentScroll;

          const el = entry.target;

          // Reset all transition classes
          el.classList.remove(
            "section-enter-top",
            "section-enter-bottom",
            "section-exit-up",
            "section-exit-down"
          );

          if (entry.isIntersecting) {
            // Enter animations
            if (scrollingDown) el.classList.add("section-enter-bottom");
            else el.classList.add("section-enter-top");
          } else {
            // Exit animations
            if (scrollingDown) el.classList.add("section-exit-up");
            else el.classList.add("section-exit-down");
          }
        });
      },
      { threshold: 0.6 } // trigger when 60% visible
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">
          Hi, I AM <span className="hero-name">Moksha Odlamaani</span>
        </h1>
        <div className="scroll-down">
          <span className="arrow">⌄</span>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

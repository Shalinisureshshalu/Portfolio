import React from "react";
import "./Hero.css";
import profile from "../assets/profile/profile.jpg";
import Navbar from "./Navbar";
const Hero = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <Navbar />
      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-text">
          <p className="hero-intro">Hello, I’m</p>
          <h1 className="hero-name">Shalini Suresh</h1>

          <h2 className="hero-role">
            Full Stack Developer &  <span> AI Engineer</span>
          </h2>

            <p className="hero-specialization">
              Cyber Security Enthusiast.
            </p>

          <p className="hero-desc">
            B.Tech CSE (Honours in Cyber Security) with a strong passion for
            building secure web applications, AI-driven solutions, and scalable
            systems. Focused on clean UI, real-world problem solving, and
            impactful technology.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() =>  scrollToSection("contact")}
            >
              Hire Me
            </button>

            <button
              className="btn-outline"
              onClick={() => scrollToSection("projects")}
            >
              View Work
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={profile} alt="Shalini Suresh" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
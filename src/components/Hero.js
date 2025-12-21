import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import profile from "../assets/profile/profile.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-text">
          <p className="hero-intro">Hello, I’m</p>
          <h1 className="hero-name">Shalini Suresh</h1>

          <h2 className="hero-role">
            Full Stack Developer &  <span>AI/ML Engineer</span>
          </h2>

          <p className="hero-desc">
            B.Tech CSE (Honours in Cyber Security) with a strong passion for
            building secure web applications, AI-driven solutions, and scalable
            systems. Focused on clean UI, real-world problem solving, and
            impactful technology.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/contact")}
            >
              Hire Me
            </button>

            <button
              className="btn-outline"
              onClick={() => navigate("/projects")}
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

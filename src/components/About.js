import React from "react";
import "./About.css";
import { FaGraduationCap, FaShieldAlt, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="section">
    <section className="about-section" id="about">
      <div className="about-wrapper">

        {/* LEFT CONTENT */}
        <div className="about-left">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="about-intro">
            I’m <span>Shalini S</span>, a passionate Computer Science Engineering
            student specializing in <b>Cyber Security (Honours)</b>. I enjoy
            building secure, scalable, and intelligent applications that solve
            real-world problems.
          </p>

          <div className="about-education">
            <h3>
              <FaGraduationCap /> Education
            </h3>
            <p>
              <b>B.Tech – Computer Science & Engineering</b><br />
              Sri Manakula Vinayagar Engineering College<br />
              <span className="highlight">
                Honours in Cyber Security
              </span>
            </p>
          </div>

          <div className="about-focus">
            <h3>
              <FaLaptopCode /> Core Interests
            </h3>
            <ul>
              <li>Full Stack Web Development</li>
              <li>AI & Machine Learning Applications</li>
              <li>Cyber Security & Secure Systems</li>
              <li>Problem Solving & Continuous Learning</li>
            </ul>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">

          <div className="about-card">
            <h2>3+</h2>
            <p>Projects Built</p>
          </div>

          <div className="about-card">
            <h2>2</h2>
            <p>Virtual Internships</p>
          </div>

          <div className="about-card">
            <h2>3</h2>
            <p>Core Domains</p>
          </div>

          <div className="about-mission">
            <FaShieldAlt />
            <p>
              My goal is to grow as a software engineer who builds
              <b> intelligent, secure, and impactful digital solutions</b>
              with a strong foundation in modern technologies.
            </p>
          </div>

        </div>

      </div>
    </section>
    </section>
  );
};

export default About;

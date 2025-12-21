import React from "react";
import "./Experience.css";
import { FaBriefcase, FaShieldAlt, FaBrain } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">
        My <span>Experience</span>
      </h2>

      <div className="experience-container">

        {/* Web Development Intern */}
        <div className="experience-card">
          <div className="icon-box web">
            <FaBriefcase />
          </div>
          <div className="experience-content">
            <h3>Web Development Intern</h3>
            <h4>Twilight IT Solutions, Puducherry</h4>
            <p className="duration">Internship</p>
            <p className="description">
              Worked on developing responsive web applications using
              HTML, CSS, React and Docker, AWS, CI & CD, Git. Gained real-world experience
              in UI design, project workflows, and professional development.
            </p>
          </div>
        </div>

        {/* Cyber Security Internship */}
        <div className="experience-card">
          <div className="icon-box cyber">
            <FaShieldAlt />
          </div>
          <div className="experience-content">
            <h3>Cyber Security Virtual Internship</h3>
            <h4>EduSkills | AICTE | Palo Alto Networks</h4>
            <p className="duration">April 2025 – June 2025</p>
            <p className="description">
              Learned fundamentals of network security, ethical hacking,
              cyber threats, and secure systems through hands-on labs
              and industry-aligned training.
            </p>
          </div>
        </div>

        {/* AI ML Internship */}
        <div className="experience-card">
          <div className="icon-box ai">
            <FaBrain />
          </div>
          <div className="experience-content">
            <h3>AI & Machine Learning Virtual Internship</h3>
            <h4>EduSkills | AICTE | Google for Developers</h4>
            <p className="duration">July 2025 – September 2025</p>
            <p className="description">
              Worked on AI & ML concepts including supervised learning,
              model training, and real-world applications using Python.
              Built a strong foundation in intelligent systems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

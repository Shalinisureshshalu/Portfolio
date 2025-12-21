import React from "react";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">
        Get In <span>Touch</span>
      </h2>

      <p className="contact-subtitle">
        Have a project, internship, or opportunity? Let’s connect.
      </p>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h4>Email</h4>
            <a href="mailto:sureshshalini441@gmail.com">
              sureshshalini441@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <FaGithub className="contact-icon" />
            <h4>GitHub</h4>
            <a
              href="https://github.com/Shalinisureshshalu"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Shalinisureshshalu
            </a>
          </div>

          <div className="contact-card">
            <FaLinkedin className="contact-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/shalini-suresh-065a77300/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/shalini-suresh-065a77300/
            </a>
          </div>

        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;

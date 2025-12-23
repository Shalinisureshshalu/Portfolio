import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

// import project images
import cropImg from "../assets/projects/crop.png";
import techTroveImg from "../assets/projects/tech trove.png";

const projects = [
  {
    title: "Crop Disease Detection System",
    description:
      "An AI-powered system that detects crop diseases using deep learning and image processing techniques, helping farmers with early and accurate diagnosis.",
    tags: ["Python", "CNN", "Deep Learning", "Image Processing", "React", "Firebase"],
    github: "https://github.com/Shalinisureshshalu/Crop-Disease-Detection",
    image: cropImg,
  },
  {
    title: "Tech Trove – E-Commerce Website",
    description:
      "A full-stack e-commerce platform with product listing, shopping cart, and authentication, built with modern web technologies.",
    tags: ["React", "Material UI", "Firebase", "CSS"],
    github: "https://github.com/Shalinisureshshalu/E-commerce-TechTrove",
    image: techTroveImg,
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      {/* Section Title */}
      <div className="projects-title">
        <h1>Projects</h1>
        <p>Some of the projects I’ve built using modern technologies</p>
      </div>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          
          {/* Left Content */}
          <div className="project-content">
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.tags.map((tag, i) => (
                <span className="tech-chip" key={i}>
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>

          {/* Right Image */}
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;

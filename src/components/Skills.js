import React from "react";
import "./Skills.css";

// Import your images
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import mui from "../assets/skills/mui.png";
import firebase from "../assets/skills/firebase.png";
import aws from "../assets/skills/aws.png";
import docker from "../assets/skills/docker.png";
import n8n from "../assets/skills/n8n.png";
import git from "../assets/skills/git.png";
import python from "../assets/skills/python.png";
import c from "../assets/skills/c.png";
import cpp from "../assets/skills/cpp.png";
import mongo from "../assets/skills/mongodb.png";
import ai from "../assets/skills/ai.png";
import cyber from "../assets/skills/cyber.png";


const skills = [
  { name: "HTML", img: html, color: "#f16529" },
  { name: "CSS", img: css, color: "#2965f1" },
  { name: "React", img: react, color: "#61dafb" },
  { name: "Material UI", img: mui, color: "#007fff" },
  { name: "Firebase", img: firebase, color: "#ffca28" },
  { name: "AWS", img: aws, color: "#ff9900" },
  { name: "Docker", img: docker, color: "#0db7ed" },
  { name: "n8n", img: n8n, color: "#ff4b00" },
  { name: "Git", img: git, color: "#f05032" },
  { name: "Python", img: python, color: "#3776ab" },
  { name: "C", img: c, color: "#00599c" },
  { name: "C++", img: cpp, color: "#00599c" },
  { name: "MongoDB", img: mongo, color: "#47a248" },
  { name: "AI", img: ai, color: "#9b59b6" },
  { name: "Cyber Security", img: cyber, color: "#e74c3c" },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills & Tools</h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            style={{ backgroundColor: skill.color + "33" }} // subtle tinted background
          >
            <img src={skill.img} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

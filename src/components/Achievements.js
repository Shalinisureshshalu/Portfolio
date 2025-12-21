import React from "react";
import "./Achievements.css";
import { FaTrophy, FaShieldAlt, FaRobot, FaUsers } from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy />,
    title: "Finalist – EC Learnix Hackathon",
    description:
      "Selected as a finalist in the EC Learnix Hackathon by developing an innovative technical solution and competing with teams from multiple institutions.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Honours in Cyber Security",
    description:
      "Completed B.Tech CSE with Honours in Cyber Security, gaining strong knowledge in network security, secure systems, and cyber threat fundamentals.",
  },
  {
    icon: <FaRobot />,
    title: "AI & Machine Learning Projects",
    description:
      "Worked on AI-based projects including Crop Disease Detection using deep learning, image processing, and modern ML techniques.",
  },
  {
    icon: <FaUsers />,
    title: "Technical Competitions & Hackathons",
    description:
      "Actively participated in hackathons, coding competitions, and technical events, enhancing problem-solving and teamwork skills.",
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-header">
        <h1>
          My <span>Achievements</span>
        </h1>
        <p>Milestones that reflect my technical growth and passion</p>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="icon-box">{item.icon}</div>
            <div className="achievement-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

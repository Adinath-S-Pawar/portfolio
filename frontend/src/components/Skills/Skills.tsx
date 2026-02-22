import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillsData = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React.js", "Next.js", "Java Swing", "Zod", "Tailwind CSS", "CSS module", "Redux"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT","Socket.IO"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL", "Oracle PL/SQL", "MS SQL Server"]
    }
  ];

  const tools = ["Git/GitHub", "VS Code", "Postman", "Render", "IntelliJ IDEA","Vercel","Apache Tomcat"];

  return (
    <section id="skills">
      <div className="skills-container">
        <h2 className="skills-heading">Technical Skills</h2>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <div className="skill-icon">{category.icon}</div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3 className="tools-title">Tools & Platforms</h3>
          <div className="tools-badges">
            {tools.map((tool, index) => (
              <span className="tool-badge" key={index}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
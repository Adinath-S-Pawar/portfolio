import React from 'react';
import './Experience.css';

interface ExperienceItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  score: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    degree: 'BE Computer Engineering',
    institution: 'MES Wadia COE, SPPU',
    year: 'Expected 2027',
    score: 'Current SGPA: 8.86'
  },
  {
    id: 2,
    degree: 'HSC Science',
    institution: 'Nowrosjee Wadia College, Maharashtra Board',
    year: '2023',
    score: '80.33%'
  },
  {
    id: 3,
    degree: 'SSC',
    institution: 'Nagarvala School, Maharashtra Board',
    year: '2021',
    score: '91.80%'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-heading">Education & Experience</h2>
        <div className="heading-underline"></div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="year-badge">{item.year}</span>
                <h3 className="degree-title">{item.degree}</h3>
                <h4 className="institution-name">{item.institution}</h4>
                <p className="score-text">{item.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
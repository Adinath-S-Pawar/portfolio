import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-left">
          <div className="code-card">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
            </div>
            <div className="code-body">
              <div className="line"><span className="line-number">1</span><span className="code-content"><span className="keyword">const</span> <span className="variable">developer</span> <span className="punctuation">=</span> <span className="punctuation">&#123;</span></span></div>
              <div className="line"><span className="line-number">2</span><span className="code-content">  <span className="property">name:</span> <span className="string">'Adinath Pawar'</span><span className="punctuation">,</span></span></div>
              <div className="line"><span className="line-number">3</span><span className="code-content">  <span className="property">role:</span> <span className="string">'Full Stack Developer'</span><span className="punctuation">,</span></span></div>
              <div className="line"><span className="line-number">4</span><span className="code-content">  <span className="property">location:</span> <span className="string">'Pune, India'</span><span className="punctuation">,</span></span></div>
              <div className="line"><span className="line-number">5</span><span className="code-content">  <span className="property">education:</span> <span className="punctuation">&#123;</span></span></div>
              <div className="line"><span className="line-number">6</span><span className="code-content">    <span className="property">degree:</span> <span className="string">'BE Computer Engineering'</span><span className="punctuation">,</span></span></div>
              <div className="line"><span className="line-number">7</span><span className="code-content">    <span className="property">college:</span> <span className="string">'MES Wadia COE'</span><span className="punctuation">,</span></span></div>
              <div className="line"><span className="line-number">8</span><span className="code-content">    <span className="property">expected_graduation:</span> <span className="variable">2027</span><span className="punctuation">,</span></span></div>
              <div className="line"><span className="line-number">9</span><span className="code-content">  <span className="punctuation">&#125;,</span></span></div>
              <div className="line"><span className="line-number">10</span><span className="code-content">  <span className="property">skills:</span> <span className="punctuation">[</span></span></div>
              <div className="line"><span className="line-number">11</span><span className="code-content">    <span className="string">'React'</span><span className="punctuation">,</span> <span className="string">'JavaScript'</span><span className="punctuation">,</span> <span className="string">'Java'</span><span className="punctuation">,</span> </span></div>
              <div className="line"><span className="line-number">12</span><span className="code-content">    <span className="string">'Spring Boot'</span><span className="punctuation">,</span> <span className="string">'Node.js'</span></span></div>
              <div className="line"><span className="line-number">13</span><span className="code-content">  <span className="punctuation">],</span></span></div>
              <div className="line"><span className="line-number">15</span><span className="code-content">  <span className="property">problemSolver:</span> <span className="keyword">true</span></span></div>
              <div className="line"><span className="line-number">16</span><span className="code-content"><span className="punctuation">&#125;;</span></span></div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <h2 className="section-heading">About Me</h2>

          <div className="about-text">
            <p>
              Hello! I'm <span className="highlight">Adinath Pawar</span>, an aspiring and passionate Full Stack Developer with a strong foundation in modern web technologies and software engineering principles.
            </p>
            <p>
              Currently, I am pursuing my <span className="highlight">BE in Computer Engineering</span> at MES Wadia College of Engineering, with an expected graduation in 2027. Dedicated to academic excellence while continuously building real-world projects.
            </p>
            <p>
              I love solving complex problems and turning innovative ideas into scalable web applications. Whether it's crafting responsive frontends with React or building robust backend APIs with Java and Node.js, I thrive on continuous learning and creating efficient solutions.
            </p>
          </div>

          <div className="stats-container">
            <div className="stat-card">
              <span className="stat-number">Multiple</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">Github</span>
              <span className="stat-label">Contributor</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">DSA</span>
              <span className="stat-label">Problem Solver</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
import React, { useState, useEffect } from 'react';
import './Hero.css';

const titles = ["Full Stack Developer", "React Developer", "Java Developer"];

const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      const fullText = titles[titleIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-left">
          <span className="hero-greeting">Hi, I'm</span>
          <h1 className="hero-name">Adinath Pawar</h1>
          
          <div className="hero-titles">
            <span className="typewriter-text">{currentText}</span>
            <span className="typewriter-cursor"></span>
          </div>
          
          <p className="hero-subtitle">
            Building scalable web applications with modern technologies
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="avatar-container">
            <div className="avatar-ring"></div>
            <div className="avatar-circle">
              <span className="avatar-initials">AP</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
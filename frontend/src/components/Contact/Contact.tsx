import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Get In Touch</h2>
        <div className="heading-underline"></div>
        <p className="contact-subtext">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="contact-cards">
          <a href="mailto:adinath.s.pawar04@gmail.com" className="contact-card">
            <span className="contact-icon">📧</span>
            <span className="contact-label">Email</span>
            <span className="contact-value">adinath.s.pawar04@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/adinath-pawar-a23b662ab" target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-icon">💼</span>
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">adinath-pawar</span>
          </a>
          <a href="https://github.com/Adinath-S-Pawar" target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-icon">🐙</span>
            <span className="contact-label">GitHub</span>
            <span className="contact-value">Adinath-S-Pawar</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
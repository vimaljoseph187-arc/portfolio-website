import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer - Full-Stack & Backend Systems',
      company: 'Numero Technologies',
      location: 'Coimbatore, Tamil Nadu, India',
      period: '01/2022 - Present',
      achievements: [
        'Designed and developed scalable full-stack modules using Flask (backend) and React (frontend) for multiple business workflows',
        'Built secure RESTful APIs with JWT authentication, validation layers, and structured error handling',
        'Improved API response time by 30-40% through SQL query optimization, indexing, and refactoring inefficient joins',
        'Designed normalized MySQL schemas and optimized data pipelines, reducing data inconsistencies by 60% in production',
        'Delivered end-to-end features including UI components, backend logic, and database persistence across the full SDLC',
        'Implemented CI/CD pipelines using GitHub Actions to automate build, testing, and deployment workflows',
        'Diagnosed and resolved live production issues, reducing incident resolution time by 50% through log analysis and debugging',
        'Collaborated with cross-functional teams to translate product requirements into scalable technical solutions'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="location">{exp.location}</p>
              <p className="period">{exp.period}</p>
            </div>
            <div className="experience-content">
              <ul>
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
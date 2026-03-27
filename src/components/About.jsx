import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    'Python', 'JavaScript', 'SQL',
    'Flask', 'React.js', 'React Native',
    'MySQL', 'MongoDB', 'REST APIs',
    'JWT Authentication', 'OpenAI API', 'Speech Recognition',
    'TensorFlow', 'Docker', 'CI/CD',
    'Git', 'System Design', 'Agile SDLC'
  ];

  const education = [
    {
      degree: 'B.E - Computer Science Engineering',
      institution: 'Christian College of Engineering and Technology',
      year: '2017 - 2021',
      gpa: 'GPA: 7.28'
    },
    {
      degree: 'HSC - 12th',
      institution: 'St. John Paul Hr. Sec School',
      year: '2016 - 2017',
      gpa: '65%'
    },
    {
      degree: 'SSLC - 10th',
      institution: 'St. John Paul Hr. Sec School',
      year: '2014 - 2015',
      gpa: '87%'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Python Full-Stack Developer with 3+ years of experience in building 
              modern web applications, AI-powered solutions, and mobile apps. I specialize in Flask, React, 
              React Native, and MySQL, with a strong focus on performance optimization and secure authentication.
            </p>
            <p>
              My expertise includes designing RESTful APIs, developing AI applications like voice assistants, 
              video translators, and image generators. I've successfully built an <strong>AI Voice Assistant 
              Mobile App</strong> using React Native and advanced AI models for natural language processing.
            </p>
            <p>
              Currently working at Numero Technologies, I deliver end-to-end features across the full 
              SDLC, from UI components to backend logic and database persistence. I'm passionate about 
              leveraging AI to create innovative solutions that solve real-world problems.
            </p>
          </div>
          <div className="skills-section">
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="education">
              <h3>Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p>{edu.institution}</p>
                  <p className="year">{edu.year} | {edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="gradient-bg"></div>
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content fade-in-left">
          {/* Professional Badge */}
          <div className="hero-badge">
            <span className="badge-icon">⚡</span>
            <span>Python Full-Stack Developer</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            Crafting Digital 
            <span className="gradient-text"> Excellence</span>
            <br />
            Through Code
          </h1>

          {/* Name Highlight */}
          <div className="hero-name">
            <span className="name-tag">Vimal Joseph</span>
          </div>

          {/* Expertise Tags */}
          <div className="hero-tags">
            <span className="tag">Flask Expert</span>
            <span className="tag">React Developer</span>
            <span className="tag">System Architect</span>
            <span className="tag">AI Enthusiast</span>
            <span className="tag">API Specialist</span>
          </div>

          {/* Description */}
          <p className="hero-description">
            Transforming complex problems into elegant, scalable solutions with 3+ years of experience 
            in full-stack development. Specialized in building high-performance applications that 
            deliver exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              <span className="btn-icon">✨</span>
              Start a Project
              <span className="btn-glow"></span>
            </button>
            <button className="btn btn-secondary" onClick={scrollToProjects}>
              <span className="btn-icon">🚀</span>
              Explore Work
            </button>
          </div>

          {/* Professional Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">
                <span className="counter">3</span><span>+</span>
              </div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="counter">30</span><span>+</span>
              </div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="counter">40</span><span>%</span>
              </div>
              <div className="stat-label">Performance Boost</div>
            </div>
          </div>
        </div>

        {/* Professional Profile Card */}
        <div className="hero-image fade-in-right">
          <div className="profile-card-wrapper">
            <div className="profile-card-3d">
              <div className="profile-glow"></div>
              <div className="profile-inner-card">
                <div className="profile-avatar">
                  <div className="avatar-circle">
                    <div className="avatar-inner">
                      <span className="avatar-text">VJ</span>
                    </div>
                  </div>
                  <div className="avatar-decoration">
                    <div className="decoration-ring"></div>
                    <div className="decoration-dots"></div>
                  </div>
                </div>
                <div className="profile-info-card">
                  <h3>Vimal Joseph</h3>
                  <p>Python Full-Stack Developer</p>
                  <div className="profile-skills">
                    <span>Flask</span>
                    <span>React</span>
                    <span>MySQL</span>
                  </div>
                  <div className="profile-quote">
                    <span>"</span>
                    Building the future, one line of code at a time
                    <span>"</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="floating-icons">
              <div className="floating-icon icon-1">🐍</div>
              <div className="floating-icon icon-2">⚛️</div>
              <div className="floating-icon icon-3">🗄️</div>
              <div className="floating-icon icon-4">🚀</div>
              <div className="floating-icon icon-5">🤖</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Wave Divider */}
      {/* <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;
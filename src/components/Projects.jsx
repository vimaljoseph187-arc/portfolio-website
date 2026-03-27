import React, { useState } from 'react';
import './Projects.css';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['all', 'ai', 'fullstack'];

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'ai') return project.category === 'ai';
    if (filter === 'fullstack') return project.category === 'fullstack';
    return true;
  });

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Innovative AI solutions and full-stack applications that solve real-world problems
        </p>
        
        <div className="filter-buttons">
          {filters.map((filterName) => (
            <button
              key={filterName}
              className={`filter-btn ${filter === filterName ? 'active' : ''}`}
              onClick={() => setFilter(filterName)}
            >
              {filterName === 'ai' ? '🤖 AI Projects' : 
               filterName === 'fullstack' ? '⚡ Full-Stack' : '✨ All Projects'}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-badge">
                {project.featured && <span className="featured-badge">⭐ Featured</span>}
                {project.category === 'ai' && <span className="ai-badge">🤖 AI</span>}
                {project.title === 'AI Voice Assistant Mobile App' && (
                  <span className="mobile-badge">📱 Mobile App</span>
                )}
              </div>
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.icon || (project.category === 'ai' ? '🤖' : '💻')}</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="github-link"
                  >
                    <span>🔗</span> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setSelectedProject(null)}>&times;</span>
              <div className="modal-header">
                <div className="modal-title-wrapper">
                  <span className="modal-icon">{selectedProject.icon || (selectedProject.category === 'ai' ? '🤖' : '💻')}</span>
                  <h2>{selectedProject.title}</h2>
                </div>
                {selectedProject.category === 'ai' && <span className="modal-ai-badge">AI Project</span>}
                {selectedProject.title === 'AI Voice Assistant Mobile App' && (
                  <span className="modal-mobile-badge">📱 Mobile App</span>
                )}
              </div>
              <p className="modal-description">{selectedProject.description}</p>
              <h3>Technologies Used:</h3>
              <div className="modal-tech">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className="modal-links">
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-github-link"
                >
                  <span>🔗</span> View Full Project on GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
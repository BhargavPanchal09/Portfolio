
import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'TrendSense',
    category: 'MULTIMODAL AI',
    description: 'An AI system for analyzing content and predicting YouTube virality.',
    details:
      'A multimodal machine learning project combining text and visual features to analyze online video content.',
    tech: ['Python', 'PyTorch', 'CLIP', 'SBERT', 'Next.js'],
    github: '',
    demo: '',
  },
  {
    id: 2,
    name: 'NEXUS',
    category: 'AI APPLICATION',
    description: 'Document intelligence powered by computer vision and APIs.',
    details:
      'A document processing application built with a web frontend, Python backend, and computer vision tools.',
    tech: ['Next.js', 'FastAPI', 'OpenCV', 'SQLite'],
    github: '',
    demo: '',
  },
  {
    id: 3,
    name: 'Smart Library',
    category: 'FULL-STACK',
    description: 'A modern library management application.',
    details:
      'A full-stack application combining a web interface, database, backend APIs, and Unity WebGL.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Unity'],
    github: '',
    demo: '',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [paused, setPaused] = useState(false);

  return (
    <section className="projects-section" id="work">
      <header className="projects-heading">
        <p>SELECTED WORK</p>
        <h2>Things I've built.</h2>
        <span>Applications, experiments, and ideas brought to life.</span>
      </header>

      <div
        className={`orbit-scene ${paused ? 'orbit-paused' : ''}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="orbit-ring" />

        <div className="orbit-spinner">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className="project-orbit-card"
              style={{
                '--angle': `${index * 120}deg`,
              }}
              onClick={() => setActiveProject(project)}
            >
              <span className="project-number">
                0{index + 1} / PROJECT
              </span>

              <span className="project-category">
                {project.category}
              </span>

              <strong>{project.name}</strong>

              <span className="project-description">
                {project.description}
              </span>

              <span className="project-explore">
                EXPLORE PROJECT ↗
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="projects-hint">HOVER TO PAUSE · CLICK TO EXPLORE</p>

      {activeProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
        >
          <article
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <p className="project-category">
              {activeProject.category}
            </p>

            <h2 id="project-modal-title">
              {activeProject.name}
            </h2>

            <p>{activeProject.details}</p>

            <h3>Technology stack</h3>
            <div className="project-tech">
              {activeProject.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              )}

              {activeProject.demo && (
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo ↗
                </a>
              )}

              {!activeProject.github && !activeProject.demo && (
                <span>Project links coming soon.</span>
              )}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

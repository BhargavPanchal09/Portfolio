import { useState, useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'TrendSense',
    category: 'MULTIMODAL AI',
    description: 'An AI system for analyzing video content and predicting YouTube virality using text & visual features.',
    details:
      'A multimodal machine learning project combining text and visual features to analyze online video content. Leverages dual representations to detect emerging trends and forecast audience engagement metrics.',
    tech: ['Python', 'PyTorch', 'CLIP', 'SBERT', 'Next.js'],
    github: '',
    demo: '',
  },
  {
    id: 2,
    name: 'NEXUS',
    category: 'AI APPLICATION',
    description: 'Document intelligence platform powered by computer vision and high-performance backend APIs.',
    details:
      'An enterprise document processing application built with a modern React frontend, FastAPI Python backend, and computer vision pipelines for automated structural analysis and text extraction.',
    tech: ['Next.js', 'FastAPI', 'OpenCV', 'SQLite'],
    github: '',
    demo: '',
  },
  {
    id: 3,
    name: 'Smart Library',
    category: 'FULL-STACK',
    description: 'A modern library management application featuring interactive 3D spatial catalog navigation.',
    details:
      'A full-stack application combining responsive web interfaces, relational PostgreSQL database, RESTful APIs, and Unity WebGL for 3D spatial book browsing and catalog navigation.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Unity'],
    github: '',
    demo: '',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="work" ref={sectionRef}>
      <div className="projects-ambient-glow" aria-hidden="true" />

      <header className={`projects-heading ${inView ? 'in-view' : ''}`}>
        <p className="projects-eyebrow">SELECTED WORK</p>
        <h2 className="projects-title">Things I've built.</h2>
        <span className="projects-subtitle">
          Applications, experiments, and intelligent systems brought to life.
        </span>
      </header>

      <div className={`projects-grid ${inView ? 'in-view' : ''}`}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project-card"
            style={{ '--card-index': index }}
            onClick={() => setActiveProject(project)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveProject(project);
              }
            }}
          >
            <div className="card-ambient-highlight" />

            <div className="project-card-header">
              <span className="project-card-num">0{index + 1}</span>
              <span className="project-card-badge">{project.category}</span>
            </div>

            <h3 className="project-card-name">{project.name}</h3>

            <p className="project-card-description">{project.description}</p>

            <div className="project-card-tags">
              {project.tech.map((t) => (
                <span key={t} className="project-tag-pill">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-card-action">
              <span>EXPLORE PROJECT</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="action-arrow"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </article>
        ))}
      </div>

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

            <p className="project-modal-category">{activeProject.category}</p>

            <h2 id="project-modal-title">{activeProject.name}</h2>

            <p className="project-modal-details">{activeProject.details}</p>

            <h3>Technology Stack</h3>
            <div className="project-modal-tech">
              {activeProject.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-modal-links">
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-btn"
                >
                  GitHub ↗
                </a>
              )}

              {activeProject.demo && (
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-btn"
                >
                  Live Demo ↗
                </a>
              )}

              {!activeProject.github && !activeProject.demo && (
                <span className="modal-links-pending">
                  Project repository & live demo links coming soon.
                </span>
              )}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

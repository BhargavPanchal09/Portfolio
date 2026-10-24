import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { projects } from './data/projects';
import './Projects.css';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!activeProject) return;
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [activeProject]);

  // Update CSS variables directly, avoiding React renders during pointer movement.
  const moveGlow = (event) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty('--glow-x', `${event.clientX - bounds.left}px`);
    card.style.setProperty('--glow-y', `${event.clientY - bounds.top}px`);
  };

  return (
    <section className="projects-section" id="work" aria-labelledby="work-title">
      <div className="projects-ambient-glow" aria-hidden="true" />

      <header className="projects-heading in-view" data-reveal>
        <p className="projects-eyebrow">SELECTED WORK</p>
        <h2 id="work-title" className="projects-title">Things I've built.</h2>
        <span className="projects-subtitle">
          Applications, experiments, and intelligent systems brought to life.
        </span>
      </header>

      <div className="projects-grid in-view">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project-card"
            data-reveal
            data-reveal-delay={(index % 3) * 70}
            onPointerMove={moveGlow}
            aria-label={`Explore ${project.name}`}
            aria-haspopup="dialog"
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
            <div className="card-ambient-highlight" aria-hidden="true" />

            <div className="project-card-header">
              <span className="project-card-num">{String(index + 1).padStart(2, '0')}</span>
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

      <a className="projects-browse-link" href="https://github.com/BhargavPanchal09?tab=repositories" target="_blank" rel="noreferrer">
        More experiments on GitHub ↗
      </a>

      {activeProject && createPortal(
          <dialog
            ref={dialogRef}
            className="project-modal"
            aria-labelledby="project-modal-title"
            onCancel={() => setActiveProject(null)}
            onClick={(event) => {
              if (event.target !== event.currentTarget) return;
              const bounds = event.currentTarget.getBoundingClientRect();
              if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setActiveProject(null);
            }}
          >
            <button
              className="project-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
              autoFocus
            >
              ×
            </button>

            <p className="project-modal-category">{activeProject.category}</p>

            <h2 id="project-modal-title">{activeProject.name}</h2>

            <p className="project-modal-details">{activeProject.details}</p>

            {activeProject.summary && (
              <div className="project-case-study">
                <h3>At a glance</h3>
                <p>{activeProject.summary}</p>
                <h3>The problem</h3>
                <p>{activeProject.problem}</p>
                <h3>How it works</h3>
                <p>{activeProject.approach}</p>
                {activeProject.highlights?.length > 0 && (
                  <ul>{activeProject.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
                )}
                <h3>Project outcome</h3>
                <p>{activeProject.outcome}</p>
                {activeProject.role && <><h3>My contribution</h3><p>{activeProject.role}</p></>}
              </div>
            )}

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
            {activeProject.demoNote && <p className="project-source-note">{activeProject.demoNote}</p>}
            {activeProject.attribution && <p className="project-source-note">{activeProject.attribution}</p>}
            {activeProject.source && <a className="project-source-link" href={activeProject.source} target="_blank" rel="noreferrer">Read the project documentation ↗</a>}
          </dialog>, document.body
      )}
    </section>
  );
}

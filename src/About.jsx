import './About.css'

// Add or remove a skill group here; the layout adjusts automatically.
const skills = [
  { number: '01', title: 'Frontend', description: 'Interfaces that feel clear and responsive.', tools: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML / CSS', 'Tailwind CSS'] },
  { number: '02', title: 'Backend & data', description: 'Connecting the interface to the application.', tools: ['Python', 'FastAPI', 'REST APIs', 'WebSockets', 'MySQL', 'Git / GitHub'] },
  { number: '03', title: 'Exploring AI', description: 'Building knowledge through practical projects.', tools: ['Machine learning', 'Computer vision', 'Multimodal AI', 'AI integration'] },
]

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <header className="about-heading" data-reveal>
        <p className="about-eyebrow">BEHIND THE CODE</p>
        <h2 id="about-title">Full-stack focus.<br />A curious approach.</h2>
      </header>
      <div className="about-story" data-reveal>
        <span className="about-monogram" aria-hidden="true">BP<span>↗</span></span>
        <div>
          <p className="about-lead">I'm Bhargav Panchal, a full-stack developer interested in turning ideas into useful web applications.</p>
          <p>I work with React, Next.js, JavaScript, and Python to connect responsive interfaces with APIs and backend services. My main interest is full-stack development, with particular attention to frontend engineering and intuitive user experiences.</p>
          <p>I'm also growing my knowledge of AI and machine learning, exploring how intelligent features can fit into practical applications. My project interests span real-time interfaces, spatial library tools, and multimodal AI.</p>
          <a className="about-contact-link" href="#contact">Let's talk about your next opportunity <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="about-skills-heading" data-reveal>
        <h3>What I work with</h3>
        <p>A foundation in the web. Room to keep learning.</p>
      </div>
      <div className="about-skills-grid">
        {skills.map((group, index) => (
          <article className="about-skill-card" key={group.title} data-reveal data-reveal-delay={index * 70}>
            <span className="about-skill-number" aria-hidden="true">{group.number}</span>
            <h4>{group.title}</h4>
            <p>{group.description}</p>
            <ul>{group.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}

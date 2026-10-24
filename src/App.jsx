import './App.css'
import './components/DitherVeil.css'
import './components/GooeyNav.css'

import GlimmerBackground from './GlimmerBackground'
import DitherVeil from './components/DitherVeil'
import GooeyNav from './components/GooeyNav'
import TechText from './components/TechText'
import './components/TechText.css'
import Projects from './Projects';
import Contact from './Contact'
import About from './About'
import useScrollReveal from './useScrollReveal'
import { useState } from 'react'
import ScrollTools from './ScrollTools'
import './Responsive.css'

function App() {
  const pageRef = useScrollReveal()
  const [activeSection, setActiveSection] = useState(0)
  const items = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <main className="portfolio" id="home" ref={pageRef}>
      <GlimmerBackground />
      <ScrollTools onSectionChange={setActiveSection} />

      <header className="top-nav">
        <GooeyNav
          items={items}
          initialActiveIndex={0}
          activeIndex={activeSection}
          theme="dark"
          size="md"
          frame
          particleCount={15}
          spread={56}
          animationTime={600}
          timeVariance={300}
          gooeyness={0.5}
          wobble={0.5}
          hoverEffect
          onChange={setActiveSection}
        />
      </header>

      <div className="hero-stage">
        <header className="hero-header">
          <p className="hero-eyebrow">PORTFOLIO</p>
          <div className="hero-title-wrap">
            <TechText
              text="BHARGAV PANCHAL"
              fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
              fontWeight={800}
              fontSize={85}
              letterSpacing={-0.02}
              color="#ffffff"
              accentColor="#a78bfa"
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              draggable={true}
              sweep={true}
              selection={true}
              labels={true}
            />
          </div>
          <p className="hero-subtitle">
            FULL-STACK DEVELOPER <span>•</span> AI / MACHINE LEARNING
          </p>
        </header>

        <div className="statue-layer">
          <DitherVeil />
        </div>
      </div>
      <Projects />
      <About />
      <Contact />
      <footer className="portfolio-footer">
        <p>© {new Date().getFullYear()} Bhargav Panchal</p>
        <nav aria-label="Footer">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="https://github.com/BhargavPanchal09" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/bhargav-panchal" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </nav>
      </footer>
    </main>
  )
}

export default App

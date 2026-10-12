import './App.css'
import './components/DitherVeil.css'
import './components/GooeyNav.css'

import GlimmerBackground from './GlimmerBackground'
import DitherVeil from './components/DitherVeil'
import GooeyNav from './components/GooeyNav'

function App() {
  const items = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <main className="portfolio" id="home">
      <GlimmerBackground />

      <header className="top-nav">
        <GooeyNav
          items={items}
          initialActiveIndex={0}
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
          onChange={(index, item) =>
            console.log(index, item.label)
          }
        />
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">HELLO, I'M</p>

          <h1>
            BHARGAV
            <br />
            PANCHAL
          </h1>

          <p className="hero-intro">
            Full-stack developer and AI/ML enthusiast
            building practical applications, from
            frontend interfaces to backend APIs
            and intelligent models.
          </p>

          <p className="hero-skills">
            <span>•</span> REACT <span>•</span> NEXT.JS <span>•</span> 
             FASTAPI <span>•</span>AI/ML
          </p>

          <p className="hero-availability">
            Graduating May 2027
            <span> • </span>
            Open to internships from January 2027
          </p>
        </div>
      </section>

      <div className="statue-layer">
        <DitherVeil
          style={{
            position: 'absolute',
            top: '50px',
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </main>
  )
}

export default App

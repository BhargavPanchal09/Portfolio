import './App.css'
import './components/DitherVeil.css'
import GlimmerBackground from './GlimmerBackground'
import DitherVeil from './components/DitherVeil'

function App() {
  return (
    <main className="portfolio">
      <GlimmerBackground />

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
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import AboutWhoWeAre from './components/about-who-we-are'
import Team from './components/team'
import Contact from './components/contact'
import Realidad from './components/realidad'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Realidad />
      <AboutWhoWeAre />
      <Team />
      <Contact />
    </main>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Realidad from './components/realidad'
import AboutWhoWeAre from './components/about-who-we-are'
import Team from './components/team'
import Contact from './components/contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutWhoWeAre />
      <Team />
      <Contact />
    </main>
  )
}

export default App

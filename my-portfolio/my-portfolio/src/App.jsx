import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Education } from './components/Education'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { ColorScheme } from './components/ColorScheme'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <ColorScheme darkMode={darkMode} setDarkMode={setDarkMode} />
      <Navbar />
      <Hero />
      <Education />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
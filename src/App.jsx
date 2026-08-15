import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// Stats removed — highlights now shown in the Hero
import FeaturedProjects from './components/FeaturedProjects'
import ExperienceTimeline from './components/ExperienceTimeline'
import Skills from './components/Skills'
import Education from './components/Education'
import About from './components/About'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'

function App(){
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="app-root">
      <Navbar />

      <main>
        <Hero />
        <FeaturedProjects onOpen={(p)=> setSelectedProject(p)} />
        <ExperienceTimeline />
        <Skills />
        <Education />
        <About />
        <ContactCTA />
      </main>

      <Footer />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

export default App

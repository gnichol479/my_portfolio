import { useEffect, useRef, useState } from 'react'
import portfolioData from './data/portfolioData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import About from './components/About'
import ContactCTA from './components/ContactCTA'
import ProjectModal from './components/ProjectModal'

export default function App() {
  const [selectedId, setSelectedId] = useState(null)
  const sourceRef = useRef(null)
  const projects = portfolioData.projects.filter(project => project.title?.trim())
  const featured = portfolioData.featuredProjectIds
    .map(id => projects.find(project => project.id === id)).filter(Boolean)
  const selectedProject = projects.find(project => project.id === selectedId)

  useEffect(() => {
    document.title = portfolioData.siteTitle === portfolioData.name
      ? `${portfolioData.name} | Portfolio`
      : `${portfolioData.siteTitle} — ${portfolioData.name}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', portfolioData.intro)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', portfolioData.intro)
  }, [])

  function openProject(project, source) {
    sourceRef.current = source
    setSelectedId(project.id)
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar data={portfolioData} />
      <main id="main">
        <Hero data={portfolioData} openingProject={featured[0]} projectCount={projects.length} />
        <FeaturedProjects projects={projects} featured={featured} onOpen={openProject} />
        <About data={portfolioData} />
        <ContactCTA data={portfolioData} />
      </main>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          number={projects.indexOf(selectedProject) + 1}
          source={sourceRef.current}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import ProjectVisual from './ProjectVisual'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects({ projects, featured, onOpen }) {
  const [activeId, setActiveId] = useState(featured[0]?.id)
  const entriesRef = useRef([])
  const previewsRef = useRef([])
  const activeIndex = Math.max(0, featured.findIndex(project => project.id === activeId))
  const activeProject = featured[activeIndex]
  const archive = projects.filter(project => !featured.some(item => item.id === project.id))

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 901px)')
    let observer
    function observe() {
      observer?.disconnect()
      if (!mediaQuery.matches || !('IntersectionObserver' in window)) return
      observer = new IntersectionObserver(() => {
        const center = window.innerHeight * 0.5
        let closestIndex = 0
        let closestDistance = Infinity
        entriesRef.current.forEach((entry, index) => {
          if (!entry) return
          const rect = entry.getBoundingClientRect()
          const distance = Math.abs((rect.top + rect.bottom) / 2 - center)
          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        })
        if (featured[closestIndex]) setActiveId(featured[closestIndex].id)
      }, { rootMargin: '-25% 0px -35% 0px', threshold: 0 })
      entriesRef.current.forEach(entry => entry && observer.observe(entry))
    }
    observe()
    mediaQuery.addEventListener('change', observe)
    return () => {
      observer?.disconnect()
      mediaQuery.removeEventListener('change', observe)
    }
  }, [featured])

  function openEntry(project, index) {
    const mobileVisual = entriesRef.current[index]?.querySelector('[data-project-media]')
    const source = mobileVisual?.getBoundingClientRect().width > 0
      ? mobileVisual : previewsRef.current[index]?.querySelector('[data-project-media]')
    onOpen(project, source)
  }

  if (!projects.length) return null
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="projects-title">Projects<span className="accent-square">.</span></h2>
          </div>
          <p className="section-note">Here are a few things I’ve built, from a Unity escape game to a HoloLens research project.</p>
        </div>
        {activeProject && (
          <div className="featured-gallery">
            <div className="sticky-preview">
              <button type="button" className="preview-button" onClick={() => openEntry(activeProject, activeIndex)} aria-label={`Open ${activeProject.title} project details`} aria-haspopup="dialog">
                <span className="preview-layers">
                  {featured.map((project, index) => (
                    <span className={`preview-layer ${index === activeIndex ? 'is-active' : ''}`} key={project.id} ref={node => { previewsRef.current[index] = node }} aria-hidden={index !== activeIndex}>
                      <ProjectVisual project={project} number={index + 1} priority={index === 0} />
                    </span>
                  ))}
                </span>
                <span className="preview-open">View project <span aria-hidden="true">↗</span></span>
              </button>
              <div className="preview-caption mono">
                <span><span className="preview-counter" key={activeIndex}>{String(activeIndex + 1).padStart(2, '0')}</span><span className="muted"> / {String(featured.length).padStart(2, '0')}</span></span>
                <span>{activeProject.title}</span><span aria-hidden="true">↓</span>
              </div>
              <div className="preview-progress" aria-hidden="true">{featured.map((project, index) => <span className={index === activeIndex ? 'is-active' : ''} key={project.id} />)}</div>
            </div>
            <div className="featured-entries">
              {featured.map((project, index) => (
                <article className={`featured-entry ${index === activeIndex ? 'is-active' : ''}`} id={`project-${project.id}`} key={project.id} ref={node => { entriesRef.current[index] = node }} onFocusCapture={() => setActiveId(project.id)}>
                  <button className="mobile-project-preview" onClick={() => openEntry(project, index)} aria-label={`Open ${project.title} project details`} aria-haspopup="dialog">
                    <ProjectVisual project={project} number={index + 1} /><span className="mobile-preview-arrow" aria-hidden="true">↗</span>
                  </button>
                  <div className="entry-topline mono"><span>Entry / {String(index + 1).padStart(2, '0')}</span><span>{project.category}</span></div>
                  <h3>{project.title}</h3>
                  <p className="entry-description">{project.description}</p>
                  {project.awards?.length > 0 && <div className="awards">{project.awards.map(award => <span key={award}><span aria-hidden="true">✳</span> {award}</span>)}</div>}
                  <ul className="tag-list" aria-label={`${project.title} stack`}>{project.tags?.map(tag => <li key={tag}>{tag}</li>)}</ul>
                  <button className="text-button" onClick={() => openEntry(project, index)} aria-haspopup="dialog">View project details <span className="sr-only">for {project.title}</span><span aria-hidden="true">↗</span></button>
                </article>
              ))}
            </div>
          </div>
        )}
        {archive.length > 0 && (
          <div className="project-archive" id="all-projects">
            <div className="archive-heading"><div><p className="eyebrow">More projects</p><h2>More projects<span className="accent-square">.</span></h2></div><span className="mono">{String(archive.length).padStart(2, '0')} entries</span></div>
            <div className="projects-grid">{archive.map((project, index) => <ProjectCard key={project.id} project={project} number={featured.length + index + 1} onOpen={onOpen} />)}</div>
          </div>
        )}
      </div>
    </section>
  )
}

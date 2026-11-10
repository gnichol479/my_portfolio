import { useRef } from 'react'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project, number, onOpen }) {
  const cardRef = useRef(null)
  return (
    <article className="project-card" ref={cardRef}>
      <button className="card-open" onClick={() => onOpen(project, cardRef.current.querySelector('[data-project-media]'))} aria-label={`Open ${project.title} project details`} aria-haspopup="dialog">
        <ProjectVisual project={project} number={number} /><span className="card-arrow" aria-hidden="true">↗</span>
      </button>
      <div className="card-meta mono"><span>{String(number).padStart(2, '0')} / {project.category}</span></div>
      <h3>{project.title}</h3>
      <p className="card-description">{project.description}</p>
      {project.awards?.length > 0 && <p className="card-award">✳ {project.awards.join(' / ')}</p>}
      <div className="card-bottom"><span className="mono">{project.tags?.slice(0, 3).join(' / ')}</span><button className="card-details" onClick={() => onOpen(project, cardRef.current.querySelector('[data-project-media]'))} aria-haspopup="dialog">Details <span className="sr-only">for {project.title}</span><span aria-hidden="true">↗</span></button></div>
    </article>
  )
}

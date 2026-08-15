import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects({onOpen}){
  return (
    <section id="projects" className="section projects-section">
      <div className="site-container">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <p className="text-neutral-400 mt-1">Selected work highlighting mobile, data, and applied-AI engineering.</p>
        </div>

        <div className="projects-grid">
          {projects.filter(p=>p.id!=='more').map(p=> (
            <ProjectCard key={p.id} project={p} onOpen={onOpen} />
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium">Currently Building</h3>
          <p className="text-neutral-400 mt-1">BiteSize — in-development mobile app. Firebase auth implemented; AI features planned.</p>
        </div>
      </div>
    </section>
  )
}

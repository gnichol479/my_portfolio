export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="card project-card">
      {project.awards?.length ? (
        <div style={{display:'flex',justifyContent:'flex-end',gap:8,marginBottom:8}}>
          {project.awards.map((a, i) => (
            <span key={i} className="award">{a}</span>
          ))}
        </div>
      ) : null}

      <div>
        <div className="project-category">{project.category}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
      </div>

      <div style={{marginTop:16,display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
        <div className="tag-list">
          {project.tags?.slice(0,8).map(t=> (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <button onClick={() => onOpen && onOpen(project)} className="btn-ghost">Details</button>
      </div>
    </article>
  )
}
 

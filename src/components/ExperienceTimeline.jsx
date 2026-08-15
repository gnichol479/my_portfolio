import experience from '../data/experience'

function Item({item}){
  return (
    <article className="experience-entry">
      <div className="experience-header">
        <div>
          <h3 className="experience-title">{item.role}</h3>
          <p className="experience-company">{item.company} · {item.location}</p>
        </div>

        <div className="experience-date">{item.start} – {item.end}</div>
      </div>

      <ul className="experience-bullets">
        {item.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
      </ul>

      <div className="tag-list" style={{marginTop:16}}>
        {item.tools?.map(t=> <span key={t} className="tag">{t}</span>)}
      </div>
    </article>
  )
}

export default function ExperienceTimeline(){
  return (
    <section id="experience" className="section">
      <div className="site-container">
        <h2 className="text-2xl font-semibold">Professional Experience</h2>
        <p className="text-neutral-400 mt-1">Roles and relevant achievements.</p>

        <div className="experience-list">
          {experience.map(job=> <Item key={job.id} item={job} />)}
        </div>
      </div>
    </section>
  )
}

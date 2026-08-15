import skills from '../data/skills'

function Group({title, items}){
  return (
    <div>
      <h4 className="text-sm font-medium">{title}</h4>
      <div className="tag-list" style={{marginTop:12}}>
        {items.map(i=> <span key={i} className="tag">{i}</span>)}
      </div>
    </div>
  )
}

export default function Skills(){
  return (
    <section id="skills" className="section">
      <div className="site-container">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>
        <div className="mt-6 skills-grid">
          <Group title="Languages" items={skills.languages} />
          <Group title="Frameworks & Libraries" items={skills.frameworks} />
          <Group title="Cloud, Infrastructure & Tools" items={skills.cloud} />
          <Group title="Engineering Concepts" items={skills.concepts} />
        </div>
      </div>
    </section>
  )
}

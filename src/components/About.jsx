export default function About({ data }) {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="site-container">
        <p className="eyebrow">02 / Behind the builds</p>
        <div className="about-grid">
          <div className="about-heading">
            <h2 id="about-title">{data.aboutTitle}</h2>
            {data.portrait && <figure className="about-portrait"><img src={data.portrait} alt={data.portraitAlt} loading="lazy" width="210" height="190" /><figcaption className="mono">Gibson / Outside the editor</figcaption></figure>}
          </div>
          <div className="about-copy">
            {data.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <div className="about-highlights">{data.highlights.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
            {data.resume.available && data.resume.path && <a className="text-button" href={data.resume.path} target="_blank" rel="noreferrer">View my résumé <span aria-hidden="true">↗</span></a>}
          </div>
        </div>
        <div className="background-grid">
          <div className="experience-log" id="experience">
            <h3 className="eyebrow">Experience / Field notes</h3>
            {data.experience.map(job => <details className="experience-row" key={job.id}>
              <summary><span><strong>{job.company}</strong><span>{job.role}</span></span><span className="experience-date mono">{job.start} — {job.end}</span><span className="experience-toggle" aria-hidden="true">+</span></summary>
              <div className="experience-body"><p className="mono">{job.start} — {job.end} / {job.location}</p><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><p className="mono">{job.tools.join(' / ')}</p></div>
            </details>)}
          </div>
          <div className="education-note">
            <h3 className="eyebrow">Currently learning at</h3>
            <h4>{data.education.school}</h4>
            <p>{data.education.degree}<br />{data.education.note}</p>
            <p className="mono">{data.education.dates}<br />{data.education.location}</p>
            <span className="education-gpa">{data.education.gpa}<span>GPA</span></span>
          </div>
        </div>
        <div className="toolbox" id="skills"><h3 className="eyebrow">My working toolkit</h3><div className="toolbox-grid">
          {Object.entries(data.skills).map(([group, items]) => <div key={group}><h4>{{languages:'Languages',frameworks:'Frameworks & libraries',cloud:'Cloud & tools',concepts:'Engineering'}[group] || group}</h4><p>{items.join(' / ')}</p></div>)}
        </div></div>
      </div>
    </section>
  )
}

export default function ContactCTA({ data }) {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="site-container">
        <p className="eyebrow">03 / Get in touch</p>
        <div className="contact-heading"><h2 id="contact-title">{data.contactTitle}</h2>{data.email && <a className="contact-arrow" href={`mailto:${data.email}`} aria-label={`Email ${data.name}`}><span>Get in touch</span><span aria-hidden="true">↗</span></a>}</div>
        <div className="contact-bottom"><p>{data.contactText}</p><div className="contact-links">
          {data.email && <a className="contact-email" href={`mailto:${data.email}`}>{data.email}<span aria-hidden="true">↗</span></a>}
          <div>{data.githubUrl && <a href={data.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>}{data.linkedinUrl && <a href={data.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>}{data.resume.available && data.resume.path && <a href={data.resume.path} target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span></a>}</div>
        </div></div>
      </div>
    </section>
  )
}

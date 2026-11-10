export default function Navbar({ data }) {
  return (
    <header className="site-nav">
      <div className="site-container nav-inner">
        <a className="brand" href="#top" aria-label={`${data.siteTitle}, back to top`}>
          <span className="brand-mark" aria-hidden="true">[<span>g</span>]</span>
          <span>{data.siteTitle}<span className="brand-period">.</span></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects"><span className="nav-number">01</span> Work</a>
          <a href="#about"><span className="nav-number">02</span> About</a>
          <a href="#contact"><span className="nav-number">03</span> Contact <span aria-hidden="true">↗</span></a>
        </nav>
        {data.resume.available && data.resume.path && (
          <a className="nav-resume" href={data.resume.path} target="_blank" rel="noreferrer">Résumé ↗</a>
        )}
      </div>
    </header>
  )
}

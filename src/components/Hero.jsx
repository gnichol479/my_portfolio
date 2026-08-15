export default function Hero() {
  return (
    <section id="about" className="section">
      <div className="site-container hero-inner">
        <div>
          <span className="status-pill">Open to Summer 2027 Internship Opportunities</span>
          <h1 className="hero-title">Gibson Nichol</h1>
          <h2 className="hero-headline">Software Developer building mobile apps, intelligent products, and reliable data systems.</h2>
          <p className="hero-para">I’m a Computer Science student at the University of Central Missouri with software development and data engineering experience at Oracle and Crosslists Data. I build Flutter applications, automated data pipelines, and AI-integrated product features.</p>

          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">View My Work</a>
          </div>

          <div className="hero-links">
            <a href="https://github.com/gnichol479">GitHub</a>
            <a href="https://linkedin.com/in/gibson-nichol-a9a490295/">LinkedIn</a>
            <a href="mailto:gibson.nichol@gmail.com">Email Me</a>
          </div>

          <div className="hero-highlights">
            <div className="hero-highlight"><span style={{fontWeight:700}}>2</span>&nbsp;Technical Internships</div>
            <div className="hero-highlight"><span style={{fontWeight:700}}>3</span>&nbsp;Hackathon Placements</div>
            <div className="hero-highlight"><span style={{fontWeight:700}}>4.0</span>&nbsp;College GPA</div>
          </div>
        </div>
      </div>
    </section>
  )
}

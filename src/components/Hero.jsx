import ProjectVisual from './ProjectVisual'

export default function Hero({ data, openingProject, projectCount }) {
  const nameParts = data.name.split(' ')
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="site-container">
        <div className="hero-kicker mono">
          <p>Software / Systems / Experiments</p>
          <p className="availability"><span aria-hidden="true" />{data.availability}</p>
        </div>
        <h1 className="hero-name" id="hero-title" aria-label={data.name}>
          {nameParts.map((word, index) => (
            <span className="name-mask" key={`${word}-${index}`} aria-hidden="true">
              <span className={index === nameParts.length - 1 ? 'name-accent' : ''}>{word}</span>
            </span>
          ))}
          <span className="name-dot" aria-hidden="true">↗</span>
        </h1>
        <div className="hero-content">
          <div className="hero-statement">
            <p className="eyebrow">{data.headline}</p>
            <h2>{data.heroStatement}</h2>
          </div>
          <div className="hero-intro">
            <p>{data.intro}</p>
            <a className="button button-accent" href="#projects">View projects <span aria-hidden="true">↘</span></a>
          </div>
          {openingProject && (
            <a className="hero-preview" href="#projects" aria-label={`Explore ${openingProject.title}`}>
              <div className="hero-preview-frame">
                <ProjectVisual project={openingProject} number={1} priority />
                <span className="hero-preview-arrow" aria-hidden="true">↗</span>
              </div>
              <span className="mono">Featured project <span>001</span></span>
              <span className="hero-preview-title">{openingProject.title}</span>
            </a>
          )}
        </div>
        <div className="hero-bottom mono">
          <span>A collection of things I’ve built</span>
          <a href="#projects">Scroll to explore <span aria-hidden="true">↓</span></a>
          <span>{String(projectCount).padStart(2, '0')} entries & counting</span>
        </div>
      </div>
    </section>
  )
}

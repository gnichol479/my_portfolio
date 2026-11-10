import { useLayoutEffect, useRef } from 'react'
import ProjectVisual from './ProjectVisual'

export default function ProjectModal({ project, number, source, onClose }) {
  const dialogRef = useRef(null)
  const artworkRef = useRef(null)
  const closeRef = useRef(null)
  const closingRef = useRef(false)
  const backdropPressRef = useRef(false)

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    const opener = document.activeElement
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    closeRef.current.focus({ preventScroll: true })
    let animation
    const from = source?.getBoundingClientRect()
    const to = artworkRef.current.getBoundingClientRect()
    if (from?.width && from.bottom > 0 && document.documentElement.dataset.motion !== 'reduce' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // FLIP the actual preview into the detail image. No animation library.
      animation = artworkRef.current.animate([
        { transform: `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height})` },
        { transform: 'translate(0, 0) scale(1)' },
      ], { duration: 420, easing: 'cubic-bezier(.2,.7,.2,1)' })
    }
    return () => {
      animation?.cancel()
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true })
    }
  }, [source])

  async function close() {
    if (closingRef.current) return
    closingRef.current = true
    if (document.documentElement.dataset.motion !== 'reduce' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const animation = dialogRef.current.animate([
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(12px)' },
      ], { duration: 160, easing: 'ease-in', fill: 'forwards' })
      await animation.finished.catch(() => {})
    }
    onClose()
  }

  function isBackdrop(event) {
    if (event.target !== event.currentTarget) return false
    const rect = event.currentTarget.getBoundingClientRect()
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom
  }

  function containFocus(event) {
    if (event.key !== 'Tab') return
    const controls = Array.from(dialogRef.current.querySelectorAll('a[href], button:not([disabled]), video[controls]'))
    const first = controls[0]
    const last = controls[controls.length - 1]
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }

  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="detail-title" onKeyDown={containFocus}
      onCancel={event => { event.preventDefault(); close() }}
      onPointerDown={event => { backdropPressRef.current = isBackdrop(event) }}
      onClick={event => { if (backdropPressRef.current && isBackdrop(event)) close() }}>
      <div className="detail-topbar"><span className="mono">Project notes / Entry {String(number).padStart(2, '0')}</span><button ref={closeRef} className="detail-close" onClick={close} aria-label="Close project details"><span>Close</span><span aria-hidden="true">×</span></button></div>
      <div className="detail-artwork" ref={artworkRef}><ProjectVisual project={project} number={number} priority /></div>
      <div className="detail-content">
        <p className="eyebrow">{project.category}</p>
        <h2 id="detail-title">{project.title}</h2>
        <p className="detail-intro">{project.description}</p>
        {project.awards?.length > 0 && <div className="awards">{project.awards.map(award => <span key={award}>✳ {award}</span>)}</div>}
        <div className="detail-columns">
          <div className="detail-story">
            {project.story?.map(section => <section key={section.heading}><h3>{section.heading}</h3><p>{section.text}</p></section>)}
            {project.caseStudy && Object.entries(project.caseStudy).map(([key, text]) => <section key={key}><h3>{{problem:'The problem',solution:'The solution',myWork:'My work',result:'The result'}[key] || key}</h3><p>{text}</p></section>)}
            {project.ownership && <section><h3>My contribution</h3><p>{project.ownership}</p></section>}
            {project.team && <section><h3>The team</h3><p>{project.team}</p></section>}
            {project.verifiedScale && <section><h3>In practice</h3><p>{project.verifiedScale}</p></section>}
          </div>
          <aside className="detail-stack"><h3>The stack</h3><ul className="tag-list">{project.tags?.map(tag => <li key={tag}>{tag}</li>)}</ul>
            {(project.liveUrl || project.githubUrl) && <div className="detail-links">
              {project.liveUrl && <a className="button button-ink" href={project.liveUrl} target="_blank" rel="noreferrer">Watch the demo <span aria-hidden="true">↗</span></a>}
              {project.githubUrl && <a className="button button-outline" href={project.githubUrl} target="_blank" rel="noreferrer">See the code <span aria-hidden="true">↗</span></a>}
            </div>}
          </aside>
        </div>
        {project.media?.length > 0 && <section className="detail-gallery"><h3>Screenshots and demos</h3>{project.media.map(media => <figure key={media.src}>
          {media.type === 'image' ? <img src={media.src} alt={media.alt || `${project.title} screenshot`} loading="lazy" /> : <video src={media.src} controls playsInline preload="none" aria-label={media.label} />}
          <figcaption className="mono">{media.alt || media.label}</figcaption>
        </figure>)}</section>}
        <button className="text-button" onClick={close}>Back to the log <span aria-hidden="true">↙</span></button>
      </div>
    </dialog>
  )
}

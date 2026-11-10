import { useState } from 'react'

// Reused in the gallery and details. Missing/failed images retain a full cover.
export default function ProjectVisual({ project, number, priority = false }) {
  const [failedImage, setFailedImage] = useState(null)
  const hasImage = project.image && failedImage !== project.image
  return (
    <div className={`project-visual cover-${project.coverStyle || 'ink'}`} data-project-media>
      <div className="type-cover" aria-hidden="true">
        <span className="cover-meta mono">Build log / {String(number).padStart(2, '0')}</span>
        <span className="cover-crosshair">+</span>
        <span className="cover-title">{project.coverLines ? project.coverLines.join('\n') : project.title}</span>
        <span className="cover-footer mono">{project.tags?.slice(0, 3).join(' / ') || project.category}<span>↗</span></span>
      </div>
      {hasImage && (
        <img
          src={project.image}
          alt={project.imageAlt || `${project.title} screenshot`}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          style={{ objectPosition: project.imagePosition || 'center' }}
          onError={() => setFailedImage(project.image)}
        />
      )}
    </div>
  )
}

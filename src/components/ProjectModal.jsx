export default function ProjectModal({
  project,
  onClose
}) {
  if (!project) return null;

  return (
    <div
      className="project-modal-overlay"
      onClick={onClose}
    >
      <div
        className="project-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <div className="project-modal-header">
          <p className="project-modal-category">
            {project.category}
          </p>

          <h2>
            {project.title}
          </h2>

          {project.awards?.length ? (
            <div className="project-modal-awards">
              {project.awards.map(
                (award) => (
                  <span
                    key={award}
                    className="award"
                  >
                    {award}
                  </span>
                )
              )}
            </div>
          ) : null}
        </div>

        <p className="project-modal-description">
          {project.description}
        </p>

        <div className="project-modal-meta">
          {project.ownership && (
            <p>
              <strong>
                My contribution:
              </strong>{" "}
              {project.ownership}
            </p>
          )}

          {project.team && (
            <p>
              <strong>Team:</strong>{" "}
              {project.team}
            </p>
          )}

          {project.verifiedScale && (
            <p>
              <strong>Scale:</strong>{" "}
              {project.verifiedScale}
            </p>
          )}
        </div>

        {project.tags?.length ? (
          <div className="project-modal-tags">
            {project.tags.map(
              (tag) => (
                <span
                  key={tag}
                  className="tag"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        ) : null}

        {project.caseStudy && (
          <div className="project-case-study">
            <h3>Case Study</h3>

            <div>
              <strong>
                The Problem
              </strong>

              <p>
                {
                  project.caseStudy
                    .problem
                }
              </p>
            </div>

            <div>
              <strong>
                The Solution
              </strong>

              <p>
                {
                  project.caseStudy
                    .solution
                }
              </p>
            </div>

            <div>
              <strong>
                My Work
              </strong>

              <p>
                {
                  project.caseStudy
                    .myWork
                }
              </p>
            </div>

            <div>
              <strong>
                Result
              </strong>

              <p>
                {
                  project.caseStudy
                    .result
                }
              </p>
            </div>
          </div>
        )}

        {project.media?.length ? (
          <div className="project-modal-media">
            {project.media.map(
              (media, index) => (
                <div
                  key={index}
                  className="project-media-item"
                >
                  {media.type ===
                  "image" ? (
                    <img
                      src={media.src}
                      alt={`${project.title} screenshot ${index + 1}`}
                    />
                  ) : (
                    <video
                      src={media.src}
                      controls
                    />
                  )}
                </div>
              )
            )}
          </div>
        ) : null}

        <div className="project-modal-actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Live Demo ↗
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              GitHub ↗
            </a>
          )}

          <button
            className="btn-ghost"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
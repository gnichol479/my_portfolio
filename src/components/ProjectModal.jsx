import React from "react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 bg-neutral-900 rounded-2xl p-6 border border-white/10 shadow-lg overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-neutral-400 hover:text-white text-3xl leading-none"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center">
          {project.title}
        </h2>

              {/* Category & Awards */}
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-sm text-neutral-300">{project.category}</span>
                {project.awards?.length ? (
                  <div className="flex gap-2">
                    {project.awards.map((a, i) => (
                      <span key={i} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">{a}</span>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-center mb-6 max-w-2xl mx-auto">
                {project.description}
              </p>

              {/* Ownership / Team */}
              <div className="max-w-2xl mx-auto text-sm text-neutral-300 mb-4">
                {project.ownership && <div><strong>My contribution:</strong> {project.ownership}</div>}
                {project.team && <div className="mt-1"><strong>Team:</strong> {project.team}</div>}
              </div>

              {/* Case study */}
              {project.caseStudy && (
                <div className="max-w-3xl mx-auto text-neutral-300 space-y-3 mb-4">
                  <h3 className="text-lg font-semibold">Case study</h3>
                  <div>
                    <strong>The problem</strong>
                    <p className="mt-1">{project.caseStudy.problem}</p>
                  </div>
                  <div>
                    <strong>The solution</strong>
                    <p className="mt-1">{project.caseStudy.solution}</p>
                  </div>
                  <div>
                    <strong>My work</strong>
                    <p className="mt-1">{project.caseStudy.myWork}</p>
                  </div>
                  <div>
                    <strong>Result</strong>
                    <p className="mt-1">{project.caseStudy.result}</p>
                  </div>
                </div>
              )}

        {/* Media Container */}
        <div className="flex flex-col items-center justify-center gap-6 overflow-y-auto max-h-[70vh] px-2">
          {project.media?.map((m, i) => (
            <div
              key={i}
              className="w-full flex justify-center items-center bg-neutral-800/30 rounded-xl p-2"
            >
              {m.type === "image" ? (
                <img
                  src={m.src}
                  alt={`${project.title}-${i}`}
                  className="max-w-full max-h-[65vh] rounded-lg object-contain"
                />
              ) : (
                <video
                  src={m.src}
                  controls
                  className="max-w-full max-h-[65vh] rounded-lg object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

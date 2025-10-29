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

        {/* Description */}
        <p className="text-neutral-300 text-center mb-6 max-w-2xl mx-auto">
          {project.description}
        </p>

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

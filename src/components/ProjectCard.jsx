export default function ProjectCard({ project }) {
  return (
    <article
      className={
        "h-full rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition flex flex-col items-center text-center"
      }
    >
      {/* Centered thumbnail */}
      <div className="w-full flex justify-center items-center">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-48 w-auto rounded-xl object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>

      {/* Description */}
      <p className="mt-1 text-sm text-neutral-300 line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-md bg-white/10 px-2 py-1 text-xs text-neutral-200"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

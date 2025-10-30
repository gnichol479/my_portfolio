export default function ExperienceItem({ item }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-white">{item.role}</h3>
          <p className="text-sm text-neutral-400">
            {item.company} • {item.location}
          </p>
        </div>
        <p className="text-sm text-neutral-400">
          {item.start} – {item.end}
        </p>
      </div>

      {/* Bullets */}
      <ul className="mt-3 list-disc list-inside space-y-1 text-neutral-300">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {/* Tools */}
      {item.tools?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tools.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/10 px-2 py-1 text-xs text-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

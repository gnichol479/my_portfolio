export default function ExperienceItem({item}) {
    return (
        <div className={"rounded-2xl border border-white/10 bg-white/5 p-5"}>
            <div className={"flex flex0col sm:flex-row sm:items-center sm:justify-between gap-2"}>
                <div>
                    <h3 className={"font-semibold"}>{item.role}</h3>
                    <p className={"text-sm text-neutral-400"}>{item.start}--{item.end}</p>
                </div>
                <ul className={"mt-3 list-disc pl-5 space-y-1 text-neutral-300"}>
                    {item.bullets.map((b, i)=> <li key={i}>{b}</li>)}
                </ul>
                {item.tools?.length?(
                    <div className={"mt-3 flext flex0wrap gap-2"}>
                        {item.tools.map((t)=>(
                            <span key={t} className={"rounded-md bg-white/10 px-2 py-1 text-xs"}>{t}</span>
                        ))}
                    </div>
                ): null}
            </div>
        </div>
    )
}
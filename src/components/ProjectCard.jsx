export default function ProjectCard({project}){
    return(
        <article className={"h-full rounded-2xl border border-white/10 bg-white/5 p-4" +
            "hover:bg-white/10 transition"}>
            <img src={project.image}alt={project.title} className={"h-40 rounded-xl object-cover"}/>
            <h3 className={"mt-3 text-leg font-semibold"}>{project.title}</h3>
            <p className={"mt-1 text-sm text-neutral-300 line-clamp-3"}>{project.description}</p>
            <div className={"mt-3 flex flex-wrap gap-2"}>
                {project.tags.map((t)=>(
                    <span key={t} className={"rounded-md bg-white/10 px-2 py-1 text-xs"}>{t}</span>
                ))}
            </div>
            <div className={"mt-4 flex gap-3"}>
                {project.demo && (
                    <a className={"text-sm underline hover:tetx-white"} href={project.demo} target={"_blank"}
                    rel={"noreferrer"}>
                        Live
                    </a>
    
                )}
                {project.repo && (
                    <a className={"text-sm underline hover:tetx-white"} href={project.demo} target={"_blank"}
                    rel={"noreferrer"}>
                        Live
                    </a>
    
                )}
            </div>
            </article>
    )
}

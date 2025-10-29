export default function Section({id, title, subtitle, children}) {
    return(
        <section id={id} className={"mx-auto max-w-5xl px-4 py-14 md:py-20 text-center"}>
            <h2 className={"text-2xl md:text-3xl font-semibold"}>{title}</h2>
            {subtitle && (
                <p className={"mt-1 text-m text-neutral-400"}>{subtitle}</p>
            )}
            <div className={"mt-8"}>{children}</div>
        </section>
    )
}
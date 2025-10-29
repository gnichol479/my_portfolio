export default function Footer() {
    return(
        <footer className={"mx-20 border-t border-white/10"}>
            <div className={"mex-auto max-w-5xl px-4 py-8 test-sm text-neutral-400 flex-col " + 
                "sm:flex-row gap-2 sm:items-center sm:justify-between"}>
                    <p>{new Date().getFullYear()} Gibson Nichol</p>
                    <div className={"flex gap-4"}>
                        <a
                            href="mailto:gibson.nichol@gmail.com"
                            className="hover:text-white"
                            >
                            Email
                            </a>
                        <a className={"hover:text-white"} href={"https://github.com/gnichol479"}>GitHub</a>
                        <a className={"hover:text-white"} href={"https://www.linkedin.com/in/gibson-nichol-a9a490295/"}>LinkedIn</a>
                    </div>
                </div>
        </footer>
    )
}
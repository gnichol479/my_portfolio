import {useRef} from "react";

export default function Carousel({children}) {
    const trackRef = useRef(null);
    
    const scRollByCar=(dir=1)=>{
        const track = trackRef.current;
        if(!track) return;
        const card = track.querySelector("[data-card]");
        const gap = 16;
        const width = card ? card.getBoundingClientRect().width +gap :320;
        track.scrollBy({left:dir * width, behavior: "smooth"});
    };
    return(
        <div>
            <div className={"flex justify-center gap-2 pb-3"}>
                <button
                    onClick={()=>scRollByCar(-1)}
                    className={"rounded-lg border border-white/15 px-3 py-1.5 hover:bg-white/10"}
                    >
                        ←
                    </button>
                <button
                    onClick={()=>scRollByCar(1)}
                    className={"rounded-lg border border-white/15 px-3 py-1.5 hover:bg-white/10"}
                    >
                        →
                    </button>
            </div>
            <div
                ref={trackRef}
                className={"flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory" + 
                    "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"}
                >
                    {Array.isArray(children)
                    ? children.map((c, i)=>(
                        <div key={i} data-card className={"snap-start shrink-0 w-[280px] sm:w-[340px]"}>
                            {c}
                        </div>
                    ))
                    :children}
            </div>

        </div>
    )
}
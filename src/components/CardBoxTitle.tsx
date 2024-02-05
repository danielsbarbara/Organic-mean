import { Paragraph } from "./Paragraph";

export function CardBoxTitle(){
    return(
        <>
            <div className=" border-[1px] border-white/50 h-5 md:w-full md:h-7">
            <div className="  bg-zinc-300 bg-opacity-20 absolute border-[1px] border-white/50 h-5 w-28 rotate-3 md:w-full md:h-7"/>
                <div className=" absolute -translate-y-3 text-xs w-28 text-center md:text-lg md:w-full md:h-7">
                <Paragraph text="Name" color="black"/>
                </div>
            <div className="absolute border-[1px] border-white/50 h-5 w-28 -rotate-3 md:w-full md:h-7"/>
            </div>
        </>
    )
}
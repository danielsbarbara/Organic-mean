import { Paragraph } from "./Paragraph";


interface infoType {
    namePt:string | undefined,
    nameEng:string | undefined
}

export function CardBoxTitle({namePt, nameEng}: infoType){
    return(
        <>
            <div className=" border-[1px] border-white/50 h-5 md:w-full md:h-7">
            <div className="  bg-zinc-200 bg-opacity-20 absolute border-[1px] border-white/50 h-5 w-28 rotate-3 md:w-full md:h-7"/>
                <div className=" absolute -translate-y-3 text-xs w-28 text-center md:text-lg md:w-full md:h-7">
                <Paragraph text={namePt} color="black"/>
                </div>
            <div className="absolute border-[1px] border-white/50 h-5 w-28 -rotate-3 md:w-full md:h-7"/>
            </div>
        </>
    )
}
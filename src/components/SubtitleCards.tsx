interface SubtitleCardsProps{
    subtitle: string
}

export function SubtitleCards({subtitle}: SubtitleCardsProps){
    return(
        <>
            <h3 className="text-amber-600 font-cinzel text-center">{subtitle}</h3>
        </>
    )
}
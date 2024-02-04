interface ICardPopUpTextProps{
    description: string
}

export function CardPopUpText({description}: ICardPopUpTextProps){


    return(
        <>
            <div>
                <p className="`text-sm text-white font-cinzel text-center md:text-3xl`">{description}</p>
            </div>
        </>
    )
}

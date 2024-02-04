interface DropFilterTextProps{
    description: string
}

export function DropFilterText({description}: DropFilterTextProps){


    return(
        <>
            <div>
                <p className="` m-5 text-xs text-black font-cinzel text-center md:text-sm`">{description}</p>
            </div>
        </>
    )
}



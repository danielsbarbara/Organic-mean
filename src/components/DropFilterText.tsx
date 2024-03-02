interface DropFilterTextProps{
    description: string
}

export function DropFilterText({description}: DropFilterTextProps){


    return(
        <>
            <div>
                <p className="` m-5 text-xs text-amber-50 font-cinzel text-center md:text-base `">{description}</p>
            </div>
        </>
    )
}



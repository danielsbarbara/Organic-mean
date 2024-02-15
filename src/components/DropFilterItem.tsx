interface DropFilterItemProps{
    description: string
}

export function DropFilterItem({description}: DropFilterItemProps){


    return(
        <>
            <div>
    
                <p className="flex gap-2 text-xs md:text-base text-black font-cinzel">{description}</p>
        
            </div>
        </>
    )
}


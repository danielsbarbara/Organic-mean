interface DropFilterItemProps {
    description: string
}

export function DropFilterItem({ description }: DropFilterItemProps) {


    return (
        <>
            <div>
                <p className="flex gap-2 text-[0.7rem] md:text-base text-black font-cinzel">{description}</p>
            </div>
        </>
    )
}


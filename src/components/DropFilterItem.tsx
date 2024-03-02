interface DropFilterItemProps {
    description: string
}

export function DropFilterItem({ description }: DropFilterItemProps) {


    return (
        <>
            <div>
                <p className="flex gap-2 text-[0.7rem] md:text-base text-amber-50 font-cinzel">{description}</p>
            </div>
        </>
    )
}


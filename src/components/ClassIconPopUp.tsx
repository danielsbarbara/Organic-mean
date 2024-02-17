interface ClassIconPopUpType {
    link: string
}

export function ClassIconPopUp({ link }: ClassIconPopUpType) {
    return (
        <>
            <img src={link} className="w-10 opacity-50 absolute translate-y-16 md:translate-y-20" />
        </>
    )
}
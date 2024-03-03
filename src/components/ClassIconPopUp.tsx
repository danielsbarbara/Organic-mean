interface ClassIconPopUpType {
    link: string
}

export function ClassIconPopUp({ link }: ClassIconPopUpType) {
    return (
        <>
            <img src={link} className="w-10 opacity-50 -translate-y-10 md:-translate-y-9" />
        </>
    )
}
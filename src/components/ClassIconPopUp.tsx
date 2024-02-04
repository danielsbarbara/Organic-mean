interface ClassIconPopUpType{
    link: string
}

export function ClassIconPopUp({link}: ClassIconPopUpType){
    return (
        <>
            <img src={link} className="absolute translate-y-20"/>
        </>
    )
}
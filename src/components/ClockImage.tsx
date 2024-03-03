interface ClockImageType {
    link: string
}

export function ClockImage({ link}: ClockImageType) {
    return (
        <>
            <img src={link} className="w-96" />
        </>
    )
}

// Dar um fix no svg a imagem, está pequena, então tive de aumentar a width
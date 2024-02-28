interface propsType {
    imgUrl: string,
    spin: number
}

export function SpinWheel({ imgUrl, spin }: propsType) {
    return (
        <>
            <div style={{ rotate: `${spin}deg` }} className="">
                <img src={imgUrl} className="h-12 md:h-16" />
            </div>
        </>
    )
}
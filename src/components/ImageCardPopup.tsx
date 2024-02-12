
interface productInfo {
    Url:string | undefined
}

export function ImageCardPopup({Url}:productInfo){
    
console.log(Url)

    return(
        <>
            <img className="md:h-[100%] md:w-[100%] h-auto w-auto" src={Url}/>
        </>
    )
}


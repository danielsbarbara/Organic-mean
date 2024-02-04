interface PageTitleProps{
    title: string
}

export function PageTitle({title}: PageTitleProps){
    return(
        <h2 className="mt-6 w-[20rem] md:w-[42rem] bg-darkTransparent text-amber-600 font-cinzel text-center text-5xl relative -translate-x-1 -translate-y-0.5 transform ">{title}</h2>
    )
}
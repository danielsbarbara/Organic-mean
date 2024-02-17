interface PageTitleProps {
    title: string
}

export function PageTitle({ title }: PageTitleProps) {

    return (
        <h2 className={`mt-6 w-[20rem] md:w-[42rem]  text-grey-950 font-cinzel text-center text-5xl relative -translate-x-1 -translate-y-0.5 transform ${title === "About Me" && "text-3xl"}`}>{title}</h2>
    )
}
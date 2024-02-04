interface IFooterMenu {
    title: string
}

export function FooterMenu({title}: IFooterMenu){
    return(
        <div className="relative">
            <div  className={`flex justify-center border-t-[2px] border-l-[2px] border-white w-7 h-7 absolute ${title === "Menu" && "translate-x-2"} ${title === 'Contact Us' && 'md:translate-x-2'}`} />
            <p className="text-white font-cinzel text-center ml-2 mt-1">{title}</p>
        </div>
        
    )
}
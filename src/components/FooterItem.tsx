interface IFooterItem {
    title: string
}

export function FooterItem({title}: IFooterItem){
    return(
        <div>
             <div className=" ">
                <p className="text-white font-cinzel text-xs text-center mr-1 mt-1">{title}</p>
            </div>
        </div>
    )
}
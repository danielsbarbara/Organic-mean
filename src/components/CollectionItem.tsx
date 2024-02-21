import React from 'react';

interface CollectionItemProp{
    description: string
    iconPath: string
    onClick?: () => void
    setFilter: Function
}

export const CollectionItem: React.FC<CollectionItemProp> = ({ description, iconPath, onClick, setFilter }) => {
   
    const handleClick = () => {
        if (onClick) {
            onClick(); 
        }
        if (setFilter && description !== "") {
            setFilter((prev: any) => ({...prev, category: description}));
        }
    }

    return( 
        <>
            <div className="p-1 flex flex-col items-center gap-1 md:text-xl cursor-pointer relative w-fit after:block after:content-[''] after:relative after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" onClick={handleClick} >
                {iconPath != 'null' && <img src={iconPath} className="w-9 md:w-10"/>} <p className="text-white text-xs md:text-base ">{description}</p>
            </div>


            
        </>
    )
}
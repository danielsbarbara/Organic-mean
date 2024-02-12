import { Link } from "react-router-dom"

interface NavItemProps {
    description: string
}

export function NavItem({description}: NavItemProps){
    return(
        <>
        
            <p className="text-white font-cinzel text-[0.6rem] text-center md:text-base md:w-32 relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">{description}</p>
        
        </>
    )
}
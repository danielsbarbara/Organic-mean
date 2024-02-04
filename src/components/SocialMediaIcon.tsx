interface IconLinkType{
    link: string
}

export function SocialMediaIcon({link}: IconLinkType){
    return (
        <div className="w-16 flex justify-center items-center">
            <img src={link}/>
        </div>
    )
}
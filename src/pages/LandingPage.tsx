import { useState } from "react";
import { CarouselHomePage } from "../components/Carousel";
import { PageTitle } from "../components/PageTitle";

export function LandingPage() {
    const [showVideo, setShowVideo] = useState(true)
    setTimeout(()=> setShowVideo(false), 10500)
    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="absolute">
            {!showVideo && <PageTitle title="Teste"/>}
            </div>
             {showVideo ? 
             <div className="h-screen w-full">
             <video 
             className="w-full h-full object-fill"
             src="/video/OrganicMean.mp4" autoPlay muted/>
             </div>
             :
             <CarouselHomePage/>}
        </div>
    )
}
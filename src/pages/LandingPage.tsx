import { useState } from "react";
import { CarouselHomePage } from "../components/Carousel";
import { PageTitle } from "../components/PageTitle";

export function LandingPage() {
    const [showVideo, setShowVideo] = useState(true)
    setTimeout(()=> setShowVideo(false), 10500)
    return (
        <div className="flex flex-col items-center mb-auto md:mb-10">
            <PageTitle title="Joalharia de autor"/>
             {showVideo ? 
             <video src="/video/OrganicMean.mp4" autoPlay muted/>
             :
             <CarouselHomePage/>}
        </div>
    )
}
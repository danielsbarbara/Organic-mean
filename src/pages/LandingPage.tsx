import { useState } from "react";
import { CarouselHomePage } from "../components/Carousel";
import { PageTitle } from "../components/PageTitle";

export function LandingPage() {
    const [showVideo, setShowVideo] = useState(true)
    setTimeout(() => setShowVideo(false), 10500)
    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="z-50 absolute">
                <PageTitle title="Organic Mean" />
            </div>
            <CarouselHomePage />
        </div>
    )
}
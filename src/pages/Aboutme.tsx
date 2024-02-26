import { useRef } from "react";
import { DarkContainer } from "../components/DarkContainer";
import { ScrollBar } from "../components/Scroll";

export default function Aboutme() {
    const mainRef = useRef<HTMLDivElement | null>(null)
    return (
        <div className="mb-10" ref={mainRef}>
            <DarkContainer pageAbout="aboutme" />
            <ScrollBar target={mainRef}/>
        </div>
    )
}
import { useEffect, useState } from "react"
import { toLocalTranslation } from "../i18n/toLocalTranslation"
import { clearInterval } from "timers"

export function LoadingPhrases() {
    const phrases: Array<string> | string = toLocalTranslation("loading_phrases")
    const randomNr = Math.trunc(Math.random() * (phrases.length - 0))
    return (
        <p className="animate-opacityA 
                    text-white 
                    font-cinzel 
                    max-w-[300px] 
                    text-center
                    md:max-w-[600px]"
                    >
            "{phrases[randomNr]}"
        </p>
    )
}
import { useCallback, useEffect, useRef, useState } from "react"

type ScrollType = {
    target: React.RefObject<HTMLDivElement>
}

export function ScrollBar({ target }: ScrollType) {
    const [scroll, setScroll] = useState(50)

    const scrollListener = useCallback(() => {
        if (!target.current) return
        const element = target.current
        const totalHeight = element.clientHeight - element.offsetTop - window.innerHeight
        const widowScrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop

        if (widowScrollTop === 0) setScroll(0)
        if (widowScrollTop > totalHeight) setScroll(100)
        const dynScroll = window.scrollY + 50
        setScroll(dynScroll)
    }, [target])

    useEffect(() => {
        window.addEventListener('scroll', scrollListener)
        return () => window.removeEventListener('scroll', scrollListener)
    }, [scrollListener])

    return (
        <>
            <div className='absolute right-2 top-[30%] flex flex-col items-center'>
                <div className={`h-[20px] w-[2px] bg-white`} style={{ height: `${scroll}px` }} />
                <div className="border-l-[2px] border-b-[2px] border-white h-4 w-4 -rotate-45 -translate-y-3" />
                <div className="border-l-[2px] border-b-[2px] border-white h-4 w-4 -rotate-45 -translate-y-5" />
                <div className="border-l-[2px] border-b-[2px] border-white h-4 w-4 -rotate-45 -translate-y-7" />
            </div>
        </>
    )
}
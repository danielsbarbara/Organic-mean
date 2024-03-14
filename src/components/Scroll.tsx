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
            <div className='absolute right-1 md:right-2 top-[172px] md:top-[182px] flex flex-col items-center'>
                <div className={`w-[20px] md:w-[30px] bg-chain bg-contain bg-repeat-y bg-center`} style={{ height: `${scroll < 108 ? 108 : scroll}px` }} />
                <div className="-translate-y-3 -translate-x-[1px]">
                    <img src="../icons/rodaDentada1.png" className="h-6 md:h-10" style={{ rotate: `${scroll}deg` }} />
                </div>
                {/* <div className="border-l-[2px] border-b-[2px] border-white h-4 w-4 -rotate-45 -translate-y-3 opacity-45" /> */}
                {/* <div className="border-l-[2px] border-b-[2px] border-white h-4 w-4 -rotate-45 -translate-y-5 opacity-60" /> */}
                {/* <div className="border-l-[2px] border-b-[2px] border-white h-4 w-4 -rotate-45 -translate-y-7 opacity-80" /> */}
            </div>
        </>
    )
}
export function ImageCardPopupSmall(){
    const imageArray = [
        <img src=".\Carousel-images\image9.jpg"/>,
        <img src=".\Carousel-images\image8.jpg"/>,
        <img src=".\Carousel-images\image7.jpg"/>,
        <img src=".\Carousel-images\image6.jpg"/>,
    ]
    return(
        <div className="flex gap-4 w-full justify-center">
            {imageArray.map((el, i) => 
            <>
            <div key={i} className="w-16 md:w-32">
            <div key={Math.random()} className="border-t-[1px] border-l-[1px] border-white w-4 h-4 absolute -translate-x-1 -translate-y-1 md:h-7 md:w-7"></div>
                {el}
            <div key={Math.random()} className="border-b-[1px] border-r-[1px] border-white w-4 h-4 absolute translate-x-9 -translate-y-3 md:translate-x-[6.50rem] md:-translate-y-6 md:w-7 md:h-7"></div>
            </div>
            </>
            )}
        </div>
    )
}
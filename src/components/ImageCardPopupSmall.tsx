interface imageType {
  smallImg: Array<string>;
  imageSellection: Function;
}

export function ImageCardPopupSmall({ smallImg, imageSellection }: imageType) {
  const imageArray = [
    <img src=".\Carousel-images\image9.jpg" />,
    <img src=".\Carousel-images\image8.jpg" />,
    <img src=".\Carousel-images\image7.jpg" />,
    <img src=".\Carousel-images\image6.jpg" />,
  ];

  return (
    <div className="flex gap-4 w-full justify-center cursor-pointer -translate-y-[1rem]">
      {smallImg.map((el, i) => (
        <>
          <div
            key={i}
            className="w-16 md:w-32 h-16 transition duration-300 hover:scale-125 "
            onClick={() => imageSellection(el, i)}
          >
            <div
              key={Math.random()}
              className="border-t-[1px] border-l-[1px] border-white w-4 h-4 -translate-x-1 translate-y-3 md:translate-y-6 md:h-7 md:w-7 animate-opacityA "
            ></div>
            <div className="h-16 md:w-14">
              <img src={el} />
            </div>
            <div
              key={Math.random()}
              className="border-b-[1px] border-r-[1px] border-white w-4 h-4 translate-x-[3.2rem] -translate-y-3 md:translate-x-[2rem] md:-translate-y-[2rem] md:w-7 md:h-7 animate-opacityA"
            ></div>
          </div>
        </>
      ))}
    </div>
  );
}

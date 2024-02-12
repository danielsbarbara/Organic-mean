import { useEffect, useState } from "react";
import { ImageCards } from "./ImageCards";
import { CardPopup } from "./CardPopup";

interface hoverType {
  hover: boolean;
  index: number;
}

interface product {
  info: Array<productType> | undefined;
}

interface productType {
  productName: string | undefined;
  productNameEng: string | undefined;
  category: string | undefined;
  collection: string | undefined;
  descriptionPt: string | undefined;
  descriptionEng: string | undefined;
  imgUrl: string | undefined;
}

export function HomePageCards({ info }: product) {
  const [showPopup, setShowPopup] = useState<Boolean>(false);
  const [productPopup, setProductPopup] = useState<object>({});
  const [hoveredCardIndex, setHoveredCardIndex] = useState<hoverType>({
    hover: false,
    index: -1,
  });
  const [singleProduct, setSingleProduct] = useState()

  const handleCardHover = (index: number) => {
    setHoveredCardIndex((prev: hoverType) => ({ ...prev, index: index }));
    setHoveredCardIndex((prev: hoverType) => ({ ...prev, hover: true }));
  };

  function handleClick(product: any) {
    setShowPopup(true);
    setProductPopup(product);
  }

  // const CardsArray = [
  //   <ImageCards
  //     hoveredCardIndex={hoveredCardIndex}
  //     link="#"
  //     image=".\Carousel-images\image9.jpg"
  //     hoverImage=".\Carousel-images\image8.jpg"
  //     value={0}
  //   />,
  //   <ImageCards
  //     hoveredCardIndex={hoveredCardIndex}
  //     link="#"
  //     image=".\Carousel-images\image9.jpg"
  //     hoverImage=".\Carousel-images\image8.jpg"
  //     value={1}
  //   />,
  //   <ImageCards
  //     hoveredCardIndex={hoveredCardIndex}
  //     link="#"
  //     image=".\Carousel-images\image9.jpg"
  //     hoverImage=".\Carousel-images\image8.jpg"
  //     value={2}
  //   />,
  //   <ImageCards
  //     hoveredCardIndex={hoveredCardIndex}
  //     link="#"
  //     image=".\Carousel-images\image9.jpg"
  //     hoverImage=".\Carousel-images\image8.jpg"
  //     value={3}
  //   />,
  //   <ImageCards
  //     hoveredCardIndex={hoveredCardIndex}
  //     link="#"
  //     image=".\Carousel-images\image9.jpg"
  //     hoverImage=".\Carousel-images\image8.jpg"
  //     value={4}
  //   />,
  //   <ImageCards
  //     hoveredCardIndex={hoveredCardIndex}
  //     link="#"
  //     image=".\Carousel-images\image9.jpg"
  //     hoverImage=".\Carousel-images\image8.jpg"
  //     value={5}
  //   />,
  //   <ImageCards
  //     hoveredCardIndex={hoveredCardIndex}
  //     link="#"
  //     image=".\Carousel-images\image9.jpg"
  //     hoverImage=".\Carousel-images\image8.jpg"
  //     value={6}
  //   />,
  //   <ImageCards
  //     hoveredCardIndex={hoveredCardIndex}
  //     link="#"
  //     image=".\Carousel-images\image9.jpg"
  //     hoverImage=".\Carousel-images\image8.jpg"
  //     value={7}
  //   />,
  //   <ImageCards
  //     hoveredCardIndex={hoveredCardIndex}
  //     link="#"
  //     image=".\Carousel-images\image9.jpg"
  //     hoverImage=".\Carousel-images\image8.jpg"
  //     value={8}
  //   />,
  // ];

  return (
    <div
      className={`p-2 flex justify-center flex-wrap gap-6 mb-20`}
      onClick={() => showPopup && setShowPopup(false)}
    >
      {info?.map((el, i) => (
        <div
          className={`${
            showPopup
              ? "transition duration-500 opacity-30"
              : "transition duration-500 opacity-100"
          }`}
          onClick={() => handleClick(el)}
          key={i}
          onMouseOver={() => handleCardHover(i)}
          onMouseLeave={() =>
            setHoveredCardIndex((prev: hoverType) => ({
              ...prev,
              hover: false,
            }))
          }
        >
          <ImageCards info={el} />
        </div>
      ))}
      <div className="absolute">
        {showPopup && (
          <div>
            <CardPopup productPopup={productPopup}/>
          </div>
        )}
      </div>
    </div>
  );
}

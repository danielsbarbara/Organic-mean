import { useState } from "react";
import { ImageCards } from "./ImageCards";
import { CardPopup } from "./CardPopup";

export function HomePageCards() {
  const [showPopup, setShowPopup] = useState<Boolean>(false);
  const [productPopup, setProductPopup] = useState<object>({});
  const [hoveredCardIndex, setHoveredCardIndex] = useState<Boolean>(false);

  const handleCardHover = (index: any) => {
    setHoveredCardIndex(true);
};

  function handleClick(product: any) {
    setShowPopup(true);
    setProductPopup(product);
  }


  const CardsArray = [
    <ImageCards
      link="#"
      image=".\Carousel-images\image9.jpg"
      hoverImage=".\Carousel-images\image8.jpg"
    />,
    <ImageCards
      link="#"
      image=".\Carousel-images\image9.jpg"
      hoverImage=".\Carousel-images\image8.jpg"
    />,
    <ImageCards
      link="#"
      image=".\Carousel-images\image9.jpg"
      hoverImage=".\Carousel-images\image8.jpg"
    />,
    <ImageCards
      link="#"
      image=".\Carousel-images\image9.jpg"
      hoverImage=".\Carousel-images\image8.jpg"
    />,
    <ImageCards
      link="#"
      image=".\Carousel-images\image9.jpg"
      hoverImage=".\Carousel-images\image8.jpg"
    />,
    <ImageCards
      link="#"
      image=".\Carousel-images\image9.jpg"
      hoverImage=".\Carousel-images\image8.jpg"
    />,
    <ImageCards
      link="#"
      image=".\Carousel-images\image9.jpg"
      hoverImage=".\Carousel-images\image8.jpg"
    />,
    <ImageCards
      link="#"
      image=".\Carousel-images\image9.jpg"
      hoverImage=".\Carousel-images\image8.jpg"
    />,
    <ImageCards
      link="#"
      image=".\Carousel-images\image9.jpg"
      hoverImage=".\Carousel-images\image8.jpg"
    />
  ];
  return (
    <div
      className={`p-2 flex justify-center flex-wrap gap-6 mb-20`}
      onClick={() => showPopup && setShowPopup(false)}
    >
      {CardsArray.map((el, i) => (
        <div
          className={`${
            showPopup
              ? "transition duration-500 opacity-30"
              : "transition duration-500 opacity-100"
          }`}
          onClick={() => handleClick(el)}
          key={i}
          onMouseOver={() => handleCardHover(true)}
        >
          {el}
        </div>
      ))}
      <div className="absolute">
        {showPopup && (
          <div>
            <CardPopup />
          </div>
        )}
      </div>
    </div>
  );
}

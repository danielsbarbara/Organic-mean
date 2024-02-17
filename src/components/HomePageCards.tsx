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
  const [te, sette] = useState<number>()

  const handleCardHover = (index: number) => {
    setHoveredCardIndex((prev: hoverType) => ({ ...prev, index: index }));
    setHoveredCardIndex((prev: hoverType) => ({ ...prev, hover: true }));
  };

  function handleClick(product: any, event: any) {
    event.preventDefault()
    setShowPopup(true);
    setProductPopup(product);
  }

  // console.log(window.scroll(0, 200), window.scrollY);
  const position = window.scrollY
  return (
    <div
      className={`p-2 flex justify-center flex-wrap gap-6 mb-20`}
      onClick={() => showPopup && setShowPopup(false)}
    >
      {info?.map((el, i) => (
        <div
          className={`${showPopup
            ? "transition duration-500 opacity-30"
            : "transition duration-500 opacity-100"
            }`}
          onClick={(event) => handleClick(el, event)}
          key={i}
          onMouseOver={() => handleCardHover(i)}
          onMouseLeave={() => setHoveredCardIndex((prev: hoverType) => ({
            ...prev, hover: false,
          }))
          }
        >
          <ImageCards info={el} />
        </div>
      ))}

      <div className={`fixed -translate-y-[250px] z-50 md:-translate-y-[11rem]`}>
        {showPopup && (
          <CardPopup productPopup={productPopup} />
        )}
      </div>
    </div>
  );
}

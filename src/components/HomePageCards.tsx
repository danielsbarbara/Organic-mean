import { useEffect, useRef, useState } from "react";
import { ImageCards } from "./ImageCards";
import { CardPopup } from "./CardPopup";
import { ScrollBar } from "./Scroll";
import { LoadingPhrases } from "./LoadingPhrases";

interface hoverType {
  hover: boolean;
  index: number;
}

interface product {
  info: Array<productType> | undefined;
}

interface productType {
  productName: string
  productNameEng: string
  category: string
  collection: string
  descriptionPt: string
  descriptionEng: string
  imgUrl: string
  smallImgs: Array<string>
}

export function HomePageCards({ info }: product) {
  const [showPopup, setShowPopup] = useState<Boolean>(false);
  const [productPopup, setProductPopup] = useState<productType | any>();
  const [hoveredCardIndex, setHoveredCardIndex] = useState<hoverType>({
    hover: false,
    index: -1,
  });
  const mainRef = useRef<HTMLDivElement | null>(null)

  const handleCardHover = (index: number) => {
    setHoveredCardIndex({ index, hover: true });
  };

  const handleCardLeave = () => {
    setHoveredCardIndex({ index: -1, hover: false });
  };

  const handleClick = (product: productType, e: any) => {
    e.preventDefault()
    setShowPopup(true);
    setProductPopup(product);
  };

  const handleClose = () => {
    setShowPopup(false);
    // Limpar o produto quando o pop-up for fechado
    setProductPopup(undefined);
  };

  return (
    <div className="flex justify-center ml-5 mr-5" ref={mainRef}>
      <div className="p-2 flex justify-center flex-wrap gap-6 mb-20"
        onClick={() => showPopup && setShowPopup(false)}>
        {info?.map((el, i) => (
          <div
            key={i}
            className={`relative ${showPopup ? "opacity-30" : "opacity-100"
              }`}
            onMouseOver={() => handleCardHover(i)}
            onMouseLeave={handleCardLeave}
            onClick={(e) => handleClick(el, e)}
          >
            <ImageCards info={el} isHovered={hoveredCardIndex.hover && hoveredCardIndex.index === i} />
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="fixed z-50 -translate-y-[15rem] md:-translate-y-[11rem] animate-opacityA">
          <CardPopup productPopup={productPopup} setProductPopup={setProductPopup} setShowPopup={setShowPopup} />
        </div>
      )}
      <ScrollBar target={mainRef} />
    </div>
  );
}

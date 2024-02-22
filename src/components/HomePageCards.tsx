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

  return (
    <div className="flex justify-center"
    // className={`p-2 flex justify-center flex-wrap gap-6 mb-20 z-10`}
    >
      <div className={`p-2 flex justify-center flex-wrap gap-6 mb-20`}
        onClick={() => showPopup && setShowPopup(false)}>
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
      </div>
        {showPopup && (
      <div className="fixed z-50 -translate-y-[15rem] md:-translate-y-[11rem] animate-opacityA">
          <CardPopup productPopup={productPopup} setProductPopup={setProductPopup}/>
      </div>
        )}

    </div>
  );
}

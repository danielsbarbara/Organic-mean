import { ClassIconPopUp } from "./ClassIconPopUp";
import { ClockImage } from "./ClockImage";
import { ImageCardPopup } from "./ImageCardPopup";
import { ImageCardPopupSmall } from "./ImageCardPopupSmall";
import { Paragraph } from "./Paragraph";
import { ScrollLine } from "./ScrollLine";
import { SubtitleCards } from "./SubtitleCards";
import { CardPopUpText } from "./CardPopUpText";
import getUserLanguage from "../i18n/getLanguage";
import { toLocalTranslation } from "../i18n/toLocalTranslation";
import CloseButton from "./CloseButton";
import { InfoContainerPopUp } from "./InfoContainerPopUp";
import { ScrollBar } from "./Scroll";
import { useRef } from "react";

interface productInfo {
  productPopup: productType;
  setProductPopup: Function;
  setShowPopup: Function;
}

interface setType {
  setProductPopup: Function;
}

interface productType {
  productName: string;
  productNameEng: string;
  category: string;
  collection: string;
  descriptionPt: string;
  descriptionEng: string;
  imgUrl: string;
  smallImgs: Array<string>;
}

export function CardPopup({
  productPopup,
  setProductPopup,
  setShowPopup,
}: productInfo) {


  const collectionIcons: Record<string, string> = {
    Nature: "/icons/NatureCardLogo.svg",
    Oceanic: "/icons/OceanicCardLogo.svg",
    Geometric: "/icons/GeometricCardLogo.svg",
    Enigmatic: "/icons/EnigmaticCardLogo.svg",
  };

  const collectionIcon =
    productPopup && productPopup.category
      ? collectionIcons[productPopup.category] || ""
      : "";

  function imageSellection(url: string, i: number) {
    setProductPopup((prev: productType) => ({
      ...prev,
      imgUrl: url,
      smallImgs: prev.smallImgs.map((img: string, idx: number) =>
        idx === i ? (img = prev.imgUrl) : img
      ),
    }));
  }
  // para nao ser undefined

  const handleClosePopup = () => {
    //event.preventDefault()
    setProductPopup(null);
    setShowPopup(false);
  };

  // Verifica se productPopup não é nulo antes de renderizar o conteúdo do componente

  if (!productPopup) {
    return null; // Retorna null se productPopup for nulo
  }



  return (
    <>
      <div
        className="
        flex 
        items-center
        md:items-start 
        bg-gradient-to-b
        from-black
        via-card_popup_gray
        to-black
        repeat
        w-80 
        shadow-lg 
        shadow-black 
        rounded-lg
        md:w-[565px]
        md:h-[600px]
        md:-translate-y-30
        md:overflow-y-scroll 
        md:no-scrollbar
        z-50
        "

      >
        <div className="w-auto h-auto flex-wrap flex-col ">
          <div className="z-10 absolute top-0 right-0 p-2">
            <CloseButton onClick={handleClosePopup} />
          </div>
          {/* div das engrenagens titulo e o icon da class */}
          <div className="h-28 flex flex-col items-center self-start justify-center">
            <div className="translate-y-[6.3rem] md:translate-y-[7.4rem]">
              <CardPopUpText
                description={
                  getUserLanguage() === "pt"
                    ? productPopup.productName
                    : productPopup.productNameEng
                }
              />
            </div>
            <ClockImage link="/images/ClockImage.svg" />
            <ClassIconPopUp link={collectionIcon} />
          </div>

          {/* Div da imagem principal e das imagens pequenas */}
          <div className="flex flex-col items-center gap-3 p-2 md:mt-4">
            <div className="w-64 shadow-lg shadow-black md:w-[60%] md:h-[18rem]">
              <ImageCardPopup Url={productPopup.imgUrl} />
            </div>
            <div className="mt-1 w-full md:w-[30%]">
              <ImageCardPopupSmall
                smallImg={productPopup.smallImgs}
                imageSellection={imageSellection}
              />
            </div>
          </div>

          {/* Div das descrições */}
          <div className="mt-2 ml-2 mr-2 text-[0.8rem] text-center md:m-3 items-center md:flex-row md:justify-around">
            <div className="flex flex-col items-center md:min-w-[550px]">
              <SubtitleCards
                subtitle={toLocalTranslation("popup_card_product_name")}
              />
              <Paragraph
                text={
                  getUserLanguage() === "pt"
                    ? productPopup.productName
                    : productPopup.productNameEng
                }
              />
            </div>
            <div className="flex flex-col items-center mt-1 md:max-w-[600px]">
              <SubtitleCards
                subtitle={toLocalTranslation("popup_card_product_description")}
              />
              <Paragraph
                text={
                  getUserLanguage() === "pt"
                    ? productPopup.descriptionPt
                    : productPopup.descriptionEng
                }
              />
            </div>{" "}
            <div className="flex justify-center items-center gap-3 md:flex-row">
              <InfoContainerPopUp />
            </div>
            <div className="flex flex-col items-center"></div>
          </div>
        </div>

        <div className="-translate-y-[5rem] md:-translate-y-0 right-0 md:h-[30rem] h-[16rem] w-5 self-center fixed md:right-1">
          <ScrollLine />
        </div>
      </div>
    </>
  );
}

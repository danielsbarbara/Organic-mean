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

interface productInfo {
  productPopup: productType | any;
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

export function CardPopup({ productPopup }: productInfo) {
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
  // para nao ser undefined
  return (
    <>
      <div
        className={`
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
        md:w-full
        md:h-[750px]
        md:-translate-y-20
        z-50
        `}
      >
        <div className="w-auto h-[640px] flex-wrap flex-col">
          {/* div das engrenagens titulo e o icon da class */}
          <div className="h-28 flex items-center self-start justify-center">
            <ClockImage link="/images/ClockImage.svg" />
            <CardPopUpText description={getUserLanguage() === 'pt' ? productPopup.productName : productPopup.productNameEng} />
            <ClassIconPopUp link={collectionIcon} />
          </div>

          {/* Div da imagem principal e das imagens pequenas */}
          <div className="flex flex-col items-center gap-3 p-2 md:mt-4">
            <div className="w-64 shadow-lg shadow-black md:w-[60%] md:h-[18rem]">
              <ImageCardPopup Url={productPopup.imgUrl} />
            </div>
            <div className="mt-2 w-60 md:w-4/5 md:h-24">
              <ImageCardPopupSmall />
            </div>
          </div>

          {/* Div das descrições */}
          <div className="mt-3 ml-2 mr-2 text-[0.8rem] text-center md:m-10 items-center md:flex-row md:justify-around">
            <div className="flex flex-col items-center">
              <SubtitleCards subtitle={toLocalTranslation("popup_card_product_name")} />
              <Paragraph text={getUserLanguage() === 'pt' ? productPopup.productName : productPopup.productNameEng} />
            </div>
            <div className="flex flex-col items-center mt-2 md:max-w-[600px]">
              <SubtitleCards subtitle={toLocalTranslation("popup_card_product_description")} />
              <Paragraph text={getUserLanguage() === 'pt' ? productPopup.descriptionPt : productPopup.descriptionEng} />
            </div>
            <div className="flex flex-col items-center"></div>
          </div>
        </div>
        <div className="h-[30rem] w-5 self-center">
          <ScrollLine />
        </div>
      </div>
    </>
  );
}

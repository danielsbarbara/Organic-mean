import { ClassIconPopUp } from "./ClassIconPopUp";
import { ClockImage } from "./ClockImage";
import { ImageCardPopup } from "./ImageCardPopup";
import { ImageCardPopupSmall } from "./ImageCardPopupSmall";
import { Paragraph } from "./Paragraph";
import { ScrollLine } from "./ScrollLine";
import { SubtitleCards } from "./SubtitleCards";
import { CardPopUpText } from "./CardPopUpText";

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
    Enigma: "/icons/EnigmaticCardLogo.svg",
  };

  const collectionIcon =
    productPopup && productPopup.collection
      ? collectionIcons[productPopup.collection] || ""
      : "";
  // para nao ser undefined

  return (
    <>
      <div
        className="
        flex 
        items-center 
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
        "
      >
        <div className="w-auto h-auto">
          {/* div das engrenagens titulo e o icon da class */}
          <div className="h-28 flex items-center justify-center">
            <ClockImage link="/images/ClockImage.svg" />
            <CardPopUpText description="Ivy Leaf" />
            <ClassIconPopUp link={collectionIcon} />
          </div>

          {/* Div da imagem principal e das imagens pequenas */}
          <div className="mt-4 flex flex-col items-center gap-3 p-2">
            <div className="w-64 shadow-lg shadow-black md:w-[60%] md:h-[18rem]">
              <ImageCardPopup Url={productPopup.imgUrl} />
            </div>
            <div className="mt-6 w-60 md:w-4/5 md:h-24">
              <ImageCardPopupSmall />
            </div>
          </div>

          {/* Div das descrições */}
          <div className="m-4 md:m-10 items-center md:flex-row md:justify-around">
            <div className="flex flex-col items-center">
              <SubtitleCards subtitle="Name" />
              <Paragraph text={productPopup.productName} />
            </div>
            <div className="flex flex-col items-center">
              <SubtitleCards subtitle="Description" />
              <Paragraph text={productPopup.descriptionPt} />
            </div>
            <div className="flex flex-col items-center"></div>
          </div>
        </div>
        <div className="h-[30rem] w-5">
          <ScrollLine />
        </div>
      </div>
    </>
  );
}

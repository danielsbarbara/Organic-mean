import { ClassIconPopUp } from "./ClassIconPopUp";
import { ClockImage } from "./ClockImage";
import { ImageCardPopup } from "./ImageCardPopup";
import { ImageCardPopupSmall } from "./ImageCardPopupSmall";
import { Paragraph } from "./Paragraph";
import { ScrollLine } from "./ScrollLine";
import { SubtitleCards } from "./SubtitleCards";
import { CardPopUpText } from "./CardPopUpText";

export function CardPopup() {
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
        <div className="w-full h-full">
          {/* div das engrenagens titulo e o icon da class */}
          <div className="h-28 flex items-center justify-center">
            <ClockImage link="/images/ClockImage.svg" />
            <CardPopUpText description="Ivy Leaf" />
            <ClassIconPopUp link="/icons/Geometric_mobile.png" />
          </div>

          {/* Div da imagem principal e das imagens pequenas */}
          <div className="mt-4 flex flex-col items-center gap-3 p-2">
            <div className="w-64 shadow-lg shadow-black md:w-[90%] md:h-[20rem]">
              <ImageCardPopup />
            </div>
            <div className="mt-3 w-60 md:w-4/5 md:h-24">
              <ImageCardPopupSmall />
            </div>
          </div>

          {/* Div das descrições */}
          <div className="mt-3 flex flex-col items-center md:flex-row md:justify-around">
            <div className="flex flex-col items-center">
            <SubtitleCards subtitle="Name" />
            <Paragraph text="text" />
            </div>
            <div className="flex flex-col items-center">
            <SubtitleCards subtitle="Description" />
            <Paragraph text="text" />
            </div>
            <div className="flex flex-col items-center">
            <SubtitleCards subtitle="Maintance Care" />
            <Paragraph text="text" />
            </div>
          </div>
        </div>
        <div className="h-[30rem] w-5">
          <ScrollLine />
        </div>
      </div>
    </>
  );
}

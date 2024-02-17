import getUserLanguage from "../i18n/getLanguage";
import { CardBoxTitle } from "./CardBoxTitle"

interface hoverType {
    index: number
    hover: boolean
}


interface product {
    info: IImageCardsProps | undefined
}


interface IImageCardsProps {
    productName: string | undefined;
    productNameEng: string | undefined;
    category: string | undefined;
    collection: string | undefined;
    descriptionPt: string | undefined;
    descriptionEng: string | undefined;
    imgUrl: string | undefined;
}



export function ImageCards({ info }: product) {
    return (
        <a href={"#"}>
            <div className=" border-t-[2px] border-l-[2px] border-white w-20 h-20 absolute" />
            <div className="border-solid border-2 shadow-2xl w-32 h-32 translate-x-1.5 translate-y-1.5 md:w-60 md:h-60">
                <img src={info?.imgUrl} alt="Product Image" />
            </div>
            {/* <div className="border-solid border-2 shadow-2xl w-32 h-32 translate-x-1.5 translate-y-1.5 md:w-60 md:h-60 hidden group-hover:block">
                <img src={hoverImage} alt="Hover Image" />
            </div> */}
            <div className="border-b-[2px] border-r-[2px] border-white w-20 h-20 absolute translate-x-[3.8rem] -translate-y-[4.2rem] md:translate-x-[10.8rem] md:-translate-y-[4.2rem]" />
            <div className="flex justify-center items-center mt-1 mb-2 w-7 translate-y-4 md:w-52 md:translate-x-5 md:mt-2 md:mb-2">
                <CardBoxTitle name={getUserLanguage() === 'pt' ? info?.productName : info?.productNameEng} />
            </div>
        </a>
    )
}

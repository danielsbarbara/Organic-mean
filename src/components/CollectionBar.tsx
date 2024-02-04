import { useState } from "react";
import { CollectionItem } from "./CollectionItem";
import { DropFilter } from "./DropFilter";
import { toLocalTranslation } from "../i18n/toLocalTranslation";

export const CollectionBar: React.FC = () => {
  const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);

  const CollectionItemArray = [
    <CollectionItem description= {toLocalTranslation("collection_bar_all_item")}iconPath="null" />,
    <CollectionItem description={toLocalTranslation("collection_bar_nature_item")} iconPath="./icons/NatureLogo.svg" />,
    <CollectionItem description={toLocalTranslation("collection_bar_oceanic_item")}  iconPath="./icons/OceanicLogo.svg" />,
    <CollectionItem
      description={toLocalTranslation("collection_bar_geometric_item")}  
      iconPath="./icons/GeometricLogo.svg"
    />,
    <CollectionItem
      description={toLocalTranslation("collection_bar_enigma_item")} 
      iconPath="./icons/EnigmaticLogo.svg"
    />,
    <div className="w-14"></div>,
  ];

  return (
    <div className=" relative bg-black/80 flex flex-col">
      <div className=" flex font-cinzel justify-center md:justify-start items-center gap-2 md:gap-6">
        <div>
          <CollectionItem
            description=""
            iconPath="./icons/FilterLogo.svg"
            onClick={() => setShowFilterOptions(!showFilterOptions)}
          />
        </div>
        {CollectionItemArray.map((el: any, i) => (
          <div key={i}>{el}</div>
        ))}
      </div>

      {showFilterOptions && <DropFilter />}
    </div>
  );
};

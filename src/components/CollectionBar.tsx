import { useState } from "react";
import { CollectionItem } from "./CollectionItem";
import { DropFilter } from "./DropFilter";
import { toLocalTranslation } from "../i18n/toLocalTranslation";

interface PropFilter {
  setFilter: Function;
}

export const CollectionBar = ({ setFilter }: PropFilter) => {
  const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);

  const CollectionItemArray = [
    <CollectionItem
      setFilter={setFilter}
      description={toLocalTranslation("collection_bar_all_item")}
      iconPath="null"
    />,
    <CollectionItem
      setFilter={setFilter}
      description={toLocalTranslation("collection_bar_nature_item")}
      iconPath="./icons/NatureLogo.svg"
    />,
    <CollectionItem
      setFilter={setFilter}
      description={toLocalTranslation("collection_bar_oceanic_item")}
      iconPath="./icons/OceanicLogo.svg"
    />,
    <CollectionItem
      setFilter={setFilter}
      description={toLocalTranslation("collection_bar_geometric_item")}
      iconPath="./icons/GeometricLogo.svg"
    />,
    <CollectionItem
      setFilter={setFilter}
      description={toLocalTranslation("collection_bar_enigma_item")}
      iconPath="./icons/EnigmaticLogo.svg"
    />,
    //<div className="w-14"></div>,
  ];

  return (
    <div className="relative bg-black/80 flex flex-col w-full">
      <div className="flex justify-between font-cinzel items-center md:justify-start md:gap-6">
        <div>
          <CollectionItem
            setFilter={setFilter}
            description=""
            iconPath="./icons/FilterLogo.svg"
            onClick={() => setShowFilterOptions(!showFilterOptions)}
          />
        </div>
        {CollectionItemArray.map((el: any, i) => (
          <div key={i}>{el}</div>
        ))}
      </div>
      <div>{showFilterOptions && <DropFilter setFilter={setFilter} />}</div>
    </div>
  );
};

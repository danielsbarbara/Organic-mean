import { useState, useEffect } from "react";
import { CollectionItem } from "./CollectionItem";
import { DropFilter } from "./DropFilter";
import { toLocalTranslation } from "../i18n/toLocalTranslation";

interface PropFilter {
  setFilter: Function;
}

export const CollectionBar = ({ setFilter }: PropFilter) => {
  const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado de carregamento

  // Simulação de tempo de carregamento (por exemplo, carregamento de ícones)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Ajuste o tempo conforme necessário

    return () => clearTimeout(timer); // Limpar timer se o componente for desmontado
  }, []);

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
  ];

  return (
    <div className="relative bg-black/80 flex flex-col w-full max-w-full">
      <div className="flex justify-between font-cinzel items-center md:justify-start md:gap-6 w-full"> 
        <div>
          <CollectionItem
            setFilter={setFilter}
            description=""
            iconPath={showFilterOptions ? "./icons/CloseLogo.svg" : "./icons/FilterLogo.svg"}
            onClick={() => setShowFilterOptions(!showFilterOptions)}
          />
        </div>
        {!isLoading && CollectionItemArray.map((el: any, i) => (
          <div key={i}>{el}</div>
        ))}
      </div>
      <div className={`${showFilterOptions ? 'transition-all duration-300 opacity-100' : 'opacity-0'} ${showFilterOptions ? 'h-auto' : 'h-0'} overflow-hidden`}>
        {showFilterOptions && <DropFilter setFilter={setFilter} />}
      </div>
    </div>
  );
};

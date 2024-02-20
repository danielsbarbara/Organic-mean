import { BackButtonIcon } from "./BackIcon";
import { DropFilterText } from "./DropFilterText";
import { Paragraph } from "./Paragraph";
import { toLocalTranslation } from "../i18n/toLocalTranslation"
import { DropFilterItem } from "./DropFilterItem";

interface DownFilter {
  setFilter: Function
}



export function DropFilter({setFilter}: DownFilter) {

function handleChange(e:any, value:string) {

if(e){
  setFilter((prev: any) => ({...prev, collection:[...prev.collection, value]}))
} else {
  setFilter((prev:any) => ({...prev, collection: prev.collection.filter((el:string)=> el !== value)}))
}

}

  return (
    <div className="animate-opacityA z-10 border-t-2 border-black border-b-2 items-center bg-white/60 w-full p-1.5 flex md:gap-4">
      <div className="flex border-t-2 border-black border-b-2">
        <DropFilterText description={toLocalTranslation("drop_filter_title")} />
      </div>

      <div className="flex gap-2 md:gap-7 w-full ml-2">
        <div className="flex flex-col-reverse justify-end items-center gap-2 md:flex-row-reverse">
          <input type="checkbox" onChange={(e)=> handleChange(e.target.checked, "Anéis")}/>
          <DropFilterItem description={toLocalTranslation("drop_filter_item_1")} />
        </div>
        <div className="flex flex-col-reverse justify-end gap-2 md:flex-row-reverse items-center">
          <input type="checkbox" onChange={(e)=> handleChange(e.target.checked, "Pulseiras")}/>
          <DropFilterItem description={toLocalTranslation("drop_filter_item_2")} />
        </div>
        <div className="flex flex-col-reverse justify-end gap-2 md:flex-row-reverse items-center">
          <input type="checkbox" onChange={(e)=> handleChange(e.target.checked, "Brincos")}/>
          <DropFilterItem description={toLocalTranslation("drop_filter_item_3")} />
        </div>
        <div className="flex flex-col-reverse justify-end gap-2 md:flex-row-reverse items-center">
          <input type="checkbox" onChange={(e)=> handleChange(e.target.checked, "Pendentes")}/>
          <DropFilterItem description={toLocalTranslation("drop_filter_item_4")} />
        </div>
      </div>


    </div>
  );
}
